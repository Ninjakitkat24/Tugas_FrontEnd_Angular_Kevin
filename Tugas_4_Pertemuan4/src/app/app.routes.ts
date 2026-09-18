import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DynamicForm } from './dynamic-form/dynamic-form';
import { CrossValidator } from './cross-validator/cross-validator';
import { ValidationCode } from './validation-code/validation-code';
import { Registration } from './registration/registration';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'validation-code', component: ValidationCode },
	{ path: 'dynamic-form', component: DynamicForm },
	{ path: 'cross-validator', component: CrossValidator },
	{ path: 'registration', component: Registration },
];
