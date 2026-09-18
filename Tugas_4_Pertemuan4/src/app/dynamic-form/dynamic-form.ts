import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface DynamicQuestion {
  key: string;
  label: string;
  controlType: 'textbox' | 'dropdown';
  type?: string;
  options?: { key: string; value: string }[];
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
  imports: [ReactiveFormsModule],
})
export class DynamicForm {
  readonly questions: DynamicQuestion[] = [
    {
      key: 'name',
      label: 'Nama lengkap',
      controlType: 'textbox',
      type: 'text',
    },
    {
      key: 'email',
      label: 'Email',
      controlType: 'textbox',
      type: 'email',
    },
    
    {
      key: 'role',
      label: 'Role',
      controlType: 'dropdown',
      options: [
        { key: '', value: 'Pilih role' },
        { key: 'student', value: 'Student' },
        { key: 'developer', value: 'Developer' },
        { key: 'designer', value: 'Designer' },
      ],
    },
  ];

  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    role: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  submittedValue: Record<string, string> | null = null;

  isInvalid(key: string): boolean {
    const control = this.form.get(key);
    return control !== null && control.touched && control.invalid;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.submittedValue = null;
      return;
    }

    this.submittedValue = this.form.getRawValue();
  }
}