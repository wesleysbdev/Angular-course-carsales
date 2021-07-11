import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';
import { MenuHeaderService } from 'src/app/resources/services/menu-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public menuHeader: MenuHeaderService, public loginService: LoginService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
  }

  public doLogout(): void {
    this.alertService.confirm('Deseja encerrar a sessão?', 'Sair', () => {
      this.loginService.doLogout();
      this.router.navigate(['']);
    });
  }
}
