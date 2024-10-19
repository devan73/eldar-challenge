import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header.component';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    SpeedDialModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
  schemas: []
})
export class HeaderModule { }
