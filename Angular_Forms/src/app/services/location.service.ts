import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

export interface Province {
  id_provinsi: number;
  nama_provinsi: string;
}

export interface City {
  id_kabupaten: number;
  nama_kabupaten: string;
}

export interface District {
  id_kecamatan: number;
  id_kabupaten: number;
  nama_kecamatan: string;
}

@Injectable({ providedIn: 'root' })
export class LocationService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5096/api/Wilayah';

  getProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(`${this.apiUrl}/provinsi`);
  }

  getCities(provinceId: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/kabupaten/${provinceId}`);
  }

  getDistricts(cityId: number): Observable<District[]> {
    return this.http.get<District[]>(`${this.apiUrl}/kecamatan/${cityId}`);
  }

  getAllDistricts(provinces: Province[]): Observable<District[]> {
    return forkJoin(provinces.map((province) => this.getCities(province.id_provinsi))).pipe(
      map((cityGroups) => cityGroups.flat()),
      switchMap((cities) => forkJoin(cities.map((city) => this.getDistricts(city.id_kabupaten)))),
      map((districtGroups) => districtGroups.flat()),
    );
  }

  deleteDistrict(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/kecamatan/${id}`);
  }
}
