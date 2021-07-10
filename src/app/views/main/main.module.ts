import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/resources/primeng/primeng.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MenuHeaderService } from 'src/app/resources/services/menu-header.service';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
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
