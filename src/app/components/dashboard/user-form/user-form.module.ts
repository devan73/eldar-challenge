
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HeaderModule } from '../../header/header.module';
import { ToastModule } from 'primeng/toast';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';

@NgModule({
	declarations: [
		UserFormComponent
	],
	imports: [
		CommonModule,
		InputTextModule,
		HeaderModule,
		ButtonModule,
		ToastModule,
		LoaderModule,
		FormsModule,
		ReactiveFormsModule,
		TooltipModule,
		DividerModule,
		FloatLabelModule,
		PasswordModule
	],
	exports: [
		UserFormComponent
	],
	providers: [],
	schemas: []
})
export class UserFormModule { }
