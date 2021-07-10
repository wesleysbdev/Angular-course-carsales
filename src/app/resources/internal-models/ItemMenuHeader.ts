export class ItemMenuHeader {

    constructor(private icon: string, private title: string, private rota?: string, private description?: string) { }

    public getIcon(): string {
        return this.icon;
    }

    public getTitle(): string {
        return this.title;
    }

    public getRota(): string {
        return this.rota;
    }

    public getDescription(): string {
        return this.description;
    }

}
