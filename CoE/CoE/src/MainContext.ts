class MainContext extends Context {
    private _menu: Menu;
    constructor(doc:egret.DisplayObjectContainer) {
        super(doc);
        this.onCreate();
    }
    
    private onCreate() {
        this.createMenu();
        this._menu.showMenu(this.doc);
    }

    private createMenu() {
        this._menu = new Menu(this.width,this.height);
    }

} 