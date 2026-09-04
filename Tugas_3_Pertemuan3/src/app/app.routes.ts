import { Routes } from '@angular/router';
import { Common } from './common/common';
import {Invoice} from './invoice/invoice';

export const routes: Routes = [
  { path: '', component: Common },
  { path: 'invoice', component: Invoice }
];
