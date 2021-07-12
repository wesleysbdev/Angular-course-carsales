import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/resources/primeng/primeng.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MenuHeaderService } from 'src/app/resources/services/menu-header.service';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule
  ],
  providers: [
    MenuHeaderService
  ]
})
export class MainModule { }
