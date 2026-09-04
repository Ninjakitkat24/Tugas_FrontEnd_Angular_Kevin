import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [NgClass,NgStyle,FormsModule],
  selector: 'app-common',
  styleUrls: ['./common.css'],
  templateUrl: './common.html',
})
export class Common implements OnInit {
  canSave = true;
  isUnchanged = false;
  isSpecial = true;
  biru = { 'color': '#0000ff' };
  namaUser: string = '';
  isAktif: boolean = true;

  currentClasses: Record<string, boolean> = {};

  ngOnInit() {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }
}