import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const verificationPassword = control.get('verificationPassword')?.value;

  return password === verificationPassword ? null : { passwordMismatch: true };
};

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  readonly registrationForm = new FormGroup(
    {
      firstName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      lastName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      address: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      rt: new FormControl<number | null>(null, {
        validators: [Validators.required, Validators.min(1), Validators.max(999)],
      }),
      rw: new FormControl<number | null>(null, {
        validators: [Validators.required, Validators.min(1), Validators.max(999)],
      }),
      kelurahan: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      kecamatan: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      gender: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8)],
      }),
      verificationPassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      reason: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(10)],
      }),
    },
    { validators: passwordMatchValidator },
  );

  submittedData: Record<string, string | number | null> | null = null;
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.invalid) {
      this.submittedData = null;
      return;
    }

    const formValue = this.registrationForm.getRawValue();
    this.submittedData = {
      ...formValue,
      password: '********',
      verificationPassword: '********',
    };
  }

  onReset(): void {
    this.registrationForm.reset();
    this.submitted = false;
    this.submittedData = null;
  }

  isInvalid(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    return control !== null && control.touched && control.invalid;
  }

  get hasPasswordMismatch(): boolean {
    return (
      this.registrationForm.hasError('passwordMismatch') &&
      (this.submitted ||
        (this.registrationForm.controls.password.touched &&
          this.registrationForm.controls.verificationPassword.touched))
    );
  }
}
