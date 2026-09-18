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

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
};

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-cross-validator',
  styleUrl: './cross-validator.css',
  templateUrl: './cross-validator.html',
})
export class CrossValidator {
  readonly passwordForm = new FormGroup(
    {
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      confirmPassword: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    },
    { validators: passwordMatchValidator },
  );

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    this.passwordForm.markAllAsTouched();
  }

  get passwordsDoNotMatch(): boolean {
    return (
      this.passwordForm.hasError('passwordMismatch') &&
      (this.submitted ||
        (this.passwordForm.controls.password.touched &&
          this.passwordForm.controls.confirmPassword.touched))
    );
  }
}
