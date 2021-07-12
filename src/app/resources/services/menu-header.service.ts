import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from '../enum/Rotas';
import { ItemMenuHeader } from '../internal-models/ItemMenuHeader';

@Injectable()
export class MenuHeaderService {

    constructor(private navigatorService: Router) { }

    public createMenu(): Array<ItemMenuHeader> {
        const listMenus: Array<ItemMenuHeader> = [];
        listMenus.push(new ItemMenuHeader('fas fa-user-tie', 'Usuários', Rotas.USERS));
        listMenus.push(new ItemMenuHeader('fas fa-user', 'Clientes'));
        listMenus.push(new ItemMenuHeader('fas fa-car-side', 'Carros'));
        listMenus.push(new ItemMenuHeader('fas fa-cash-register', 'Vendas'));

        return listMenus;
    }

    public changeRouter(rota: string): void {
        this.navigatorService.navigate([Rotas.HOME + '/' + rota]);
    }

}
