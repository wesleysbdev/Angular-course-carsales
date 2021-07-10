import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/resources/primeng/primeng.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuHeaderService } from 'src/app/resources/services/menu-header.service';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule
  ],
  providers: [
    MenuHeaderService
  ]
})
export class DashboardModule { }
