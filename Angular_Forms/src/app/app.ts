import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { City, District, LocationService, Province } from './services/location.service';

type ViewName = 'dashboard' | 'cascade' | 'checkbox';

interface CheckboxItem {
  id: number;
  name: string;
  category: string;
  selected: boolean;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly locationService = inject(LocationService);
  protected readonly activeView = signal<ViewName>('dashboard');
  protected readonly province = signal<Province | null>(null);
  protected readonly city = signal<City | null>(null);
  protected readonly district = signal<District | null>(null);
  protected readonly provinceQuery = signal('');
  protected readonly cityQuery = signal('');
  protected readonly districtQuery = signal('');
  protected readonly provinceOpen = signal(false);
  protected readonly cityOpen = signal(false);
  protected readonly districtOpen = signal(false);
  protected readonly searchTerm = this.districtQuery;
  protected readonly currentPage = signal(1);
  protected readonly pageSize = 6;
  protected readonly provinces = signal<Province[]>([]);
  protected readonly cities = signal<City[]>([]);
  protected readonly districts = signal<District[]>([]);
  protected readonly apiError = signal('');
  protected readonly checkboxLoading = signal(false);
  protected readonly deleting = signal(false);

  protected readonly checkboxItems = signal<CheckboxItem[]>([]);

  protected readonly selectedCount = computed(() => this.checkboxItems().filter((item) => item.selected).length);
  protected readonly totalPages = computed(() => Math.ceil(this.checkboxItems().length / this.pageSize));
  protected readonly pageEnd = computed(() => Math.min(this.currentPage() * this.pageSize, this.checkboxItems().length));
  protected readonly pagedItems = computed(() => this.checkboxItems().slice((this.currentPage() - 1) * this.pageSize, this.currentPage() * this.pageSize));
  protected readonly pageNumbers = computed(() => Array.from({ length: this.totalPages() }, (_, index) => index + 1));
  protected readonly allSelected = computed(() => {
    const items = this.checkboxItems();
    return items.length > 0 && items.every((item) => item.selected);
  });
  protected readonly selectedItems = computed(() => this.checkboxItems().filter((item) => item.selected));
  protected readonly provinceSuggestions = computed(() => this.closestMatches(
    this.provinces(), this.provinceQuery(), (item) => item.nama_provinsi,
  ));
  protected readonly citySuggestions = computed(() => this.closestMatches(
    this.cities(), this.cityQuery(), (item) => item.nama_kabupaten,
  ));
  protected readonly districtSuggestions = computed(() => this.closestMatches(
    this.districts(), this.districtQuery(), (item) => item.nama_kecamatan,
  ));
  protected readonly suggestions = this.districtSuggestions;

  ngOnInit(): void {
    this.locationService.getProvinces().subscribe({
      next: (locations) => {
        this.provinces.set(locations);
        this.loadCheckboxItems(locations);
      },
      error: () => this.apiError.set('Data lokasi tidak dapat dimuat. Pastikan backend ASP.NET sedang berjalan.'),
    });
  }

  private loadCheckboxItems(provinces: Province[]): void {
    this.checkboxLoading.set(true);
    this.locationService.getAllDistricts(provinces).subscribe({
      next: (districts) => {
        this.checkboxItems.set(districts.map((district) => ({
          id: district.id_kecamatan,
          name: district.nama_kecamatan,
          category: `Kabupaten ID: ${district.id_kabupaten}`,
          selected: false,
        })));
        this.checkboxLoading.set(false);
      },
      error: () => {
        this.apiError.set('Data checkbox dari database tidak dapat dimuat.');
        this.checkboxLoading.set(false);
      },
    });
  }

  protected setView(view: ViewName): void { this.activeView.set(view); }

  protected typeProvince(value: string): void {
    this.provinceQuery.set(value);
    this.province.set(null);
    this.city.set(null);
    this.district.set(null);
    this.cityQuery.set('');
    this.districtQuery.set('');
    this.cities.set([]);
    this.districts.set([]);
  }

  protected selectProvince(id: string): void {
    const selected = this.provinces().find((item) => item.id_provinsi === Number(id)) ?? null;
    this.province.set(selected);
    this.provinceQuery.set(selected?.nama_provinsi ?? '');
    this.city.set(null);
    this.district.set(null);
    this.cityQuery.set('');
    this.districtQuery.set('');
    this.cities.set([]);
    this.districts.set([]);
    if (selected) {
      this.locationService.getCities(selected.id_provinsi).subscribe({
        next: (cities) => this.cities.set(cities),
        error: () => this.apiError.set('Kabupaten tidak dapat dimuat dari API.'),
      });
    }
  }

  protected typeCity(value: string): void {
    this.cityQuery.set(value);
    this.city.set(null);
    this.district.set(null);
    this.districts.set([]);
  }

  protected selectCity(id: string): void {
    const selected = this.cities().find((item) => item.id_kabupaten === Number(id)) ?? null;
    this.city.set(selected);
    this.cityQuery.set(selected?.nama_kabupaten ?? '');
    this.district.set(null);
    this.districts.set([]);
    if (selected) {
      this.locationService.getDistricts(selected.id_kabupaten).subscribe({
        next: (districts) => this.districts.set(districts),
        error: () => this.apiError.set('Kecamatan tidak dapat dimuat dari API.'),
      });
    }
  }

  protected selectDistrict(id: string): void {
    const selected = this.districts().find((item) => item.id_kecamatan === Number(id)) ?? null;
    this.district.set(selected);
    this.districtQuery.set(selected?.nama_kecamatan ?? '');
  }

  protected chooseProvince(suggestion: Province): void {
    this.selectProvince(String(suggestion.id_provinsi));
    this.provinceOpen.set(false);
  }

  protected chooseCity(suggestion: City): void {
    this.selectCity(String(suggestion.id_kabupaten));
    this.cityOpen.set(false);
  }

  protected chooseDistrict(suggestion: District): void {
    this.district.set(suggestion);
    this.districtQuery.set(suggestion.nama_kecamatan);
    this.districtOpen.set(false);
  }

  protected chooseSuggestion(suggestion: District): void {
    this.chooseDistrict(suggestion);
  }

  protected openProvinceOptions(): void { this.provinceOpen.set(true); }
  protected openCityOptions(): void { this.cityOpen.set(true); }
  protected openDistrictOptions(): void { this.districtOpen.set(true); }

  private closestMatches<T>(items: T[], query: string, label: (item: T) => string): T[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items.slice(0, 5);
    return items
      .map((item) => ({ item, text: label(item).toLowerCase() }))
      .filter(({ text }) => text.includes(normalized) || this.editDistance(text, normalized) <= Math.max(2, normalized.length / 2))
      .sort((a, b) => this.matchScore(a.text, normalized) - this.matchScore(b.text, normalized))
      .slice(0, 5)
      .map(({ item }) => item);
  }

  private matchScore(text: string, query: string): number {
    return text.startsWith(query) ? 0 : text.indexOf(query) >= 0 ? 1 : this.editDistance(text, query);
  }

  private editDistance(source: string, target: string): number {
    const row = Array.from({ length: target.length + 1 }, (_, index) => index);
    for (let i = 1; i <= source.length; i += 1) {
      let previous = row[0];
      row[0] = i;
      for (let j = 1; j <= target.length; j += 1) {
        const current = row[j];
        row[j] = source[i - 1] === target[j - 1]
          ? previous
          : 1 + Math.min(previous, row[j - 1], current);
        previous = current;
      }
    }
    return row[target.length];
  }

  protected toggleCheckbox(id: number): void {
    this.checkboxItems.update((items) => items.map((item) => item.id === id ? { ...item, selected: !item.selected } : item));
  }

  protected toggleSelectAll(): void {
    const shouldSelect = !this.allSelected();
    this.checkboxItems.update((items) => items.map((item) => ({ ...item, selected: shouldSelect })));
  }

  protected deleteSelected(): void {
    const selected = this.selectedItems();
    if (!selected.length || this.deleting()) return;

    this.deleting.set(true);
    forkJoin(selected.map((item) => this.locationService.deleteDistrict(item.id))).subscribe({
      next: () => {
        const deletedIds = new Set(selected.map((item) => item.id));
        this.checkboxItems.update((items) => items.filter((item) => !deletedIds.has(item.id)));
        if (this.currentPage() > this.totalPages() && this.totalPages() > 0) {
          this.currentPage.set(this.totalPages());
        }
        this.deleting.set(false);
      },
      error: () => {
        this.apiError.set('Sebagian atau seluruh data gagal dihapus.');
        this.deleting.set(false);
      },
    });
  }

  protected changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) this.currentPage.set(page);
  }

  protected trackById(_: number, item: CheckboxItem): number { return item.id; }
}
