import { ItemMenuHeader } from '../internal-models/ItemMenuHeader';

export class MenuHeaderService {

    constructor() { }

    public createMenu(): Array<ItemMenuHeader> {
        const listMenus: Array<ItemMenuHeader> = [];
        listMenus.push(new ItemMenuHeader('fas fa-user-tie', 'Usuários'));
        listMenus.push(new ItemMenuHeader('fas fa-user', 'Clientes'));
        listMenus.push(new ItemMenuHeader('fas fa-car-side', 'Carros'));
        listMenus.push(new ItemMenuHeader('fas fa-cash-register', 'Vendas'));

        return listMenus;
    }
}
