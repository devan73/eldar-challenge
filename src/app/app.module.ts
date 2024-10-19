import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routes';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(APP_ROUTES),
		BrowserAnimationsModule,
		HttpClientModule
	],
	exports: [],
	providers: [MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
