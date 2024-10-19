import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { LoaderModule } from 'src/app/shared/loader/loader.module';

@NgModule({
	declarations: [
		DashboardComponent,
	],
	imports: [
		CommonModule,
		MenubarModule,
		BadgeModule,
		AvatarModule,
		InputTextModule,
		HeaderModule,
		ButtonModule,
		RippleModule,
		ToastModule,
		TableModule,
		LoaderModule
	],
	exports: [
		DashboardComponent,
	],
	providers: [],
	schemas: []
})
export class DashboardModule { }
