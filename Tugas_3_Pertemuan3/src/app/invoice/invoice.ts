import { Component } from '@angular/core';
import {
  CurrencyPipe, DatePipe, JsonPipe,
  TitleCasePipe, registerLocaleData
} from '@angular/common';
import localeId from '@angular/common/locales/id';

registerLocaleData(localeId);

@Component({
  standalone: true,
  selector: 'app-invoice',
  imports: [CurrencyPipe, DatePipe,
    JsonPipe, TitleCasePipe],
  templateUrl: './invoice.html',
})
export class Invoice {
  customer = 'pt mega jaya';
  total = 1_250_000;
  issuedAt = new Date();
  invoice = { nomor: 'INV-001', status: 'Lunas' };
}
