import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { LoginComponent } from "./login.component";
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    DividerModule,
    ButtonModule,
    MessagesModule,
    RippleModule,
    RouterModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
  schemas: []
})
export class LoginModule { }
