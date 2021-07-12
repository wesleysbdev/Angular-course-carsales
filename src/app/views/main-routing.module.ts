import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rotas } from 'src/app/resources/enum/Rotas';
import { AuthGuardService } from 'src/app/resources/services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: Rotas.USERS,
    canActivate: [AuthGuardService],
    component: UsersComponent,
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
