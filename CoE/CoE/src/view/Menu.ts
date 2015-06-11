class Menu extends egret.DisplayObjectContainer {
    constructor(w:number,h:number) {
        super();
        this.width = w;
        this.height = h;
        this.init();

    }

    private _bg: BackGround;
    private _start: Button;
    private _restore: Button;
    private _logo: Logo;

    private init() {
        this.width
        var start = new Button('START');
        start.txtSize = 48;
        start.txtColor = 0xffffff;
        start.background = new egret.Bitmap(RES.getRes('red'));
        start.anchorX = .5;
        start.x = this.width / 2;
        start.y = this.height / 2 + start.height;
        start.btnWidth = 300;
        start.btnHeight = 80;
        start.setEndListener(300);
        start.onTouch = (e: egret.TouchEvent) => {
            switch (e.type)
            {
                case egret.TouchEvent.TOUCH_BEGIN:
                    start.alpha = .8;
                    break;
                case egret.TouchEvent.TOUCH_END:
                    this.showMenu(this.parent);
                default:
                    start.alpha = 1;
                    break;
            }
        }
        start.touchEnabled = true;
        this._start = start;
        

        var restore = new Button('RESTORE');
        restore.txtSize = 48;
        restore.txtColor = 0xffffff;
        restore.background = new egret.Bitmap(RES.getRes('blue'));
        restore.anchorX = .5;
        restore.x = this.width / 2;
        restore.y = this.height / 2 + start.height + 100;
        restore.btnWidth = 300;
        restore.btnHeight = 80;
        this._restore = restore;

        var bg = new BackGround(this.width, this.height);
        this._bg = bg;

        var logo = new Logo();
        logo.setEndListener(3000);
        this._logo = logo;

        logo.endListener = (obj: any) => {
            //动画结束显示按钮
            this.addChild(start);
            start.play(1000);
        }
        start.endListener = (obj: any) => {
            this.addChild(restore);
            restore.play(1000);
        }


      
    }
    
    /**
     * 显示菜单
     * @param doc 需要显示菜单的对象
     */
    showMenu(doc: egret.DisplayObjectContainer) {
        if (!Utils.isEmpty(this.parent))
        {
            this.removeChildren();
            this.parent.removeChild(this);
        }

        doc.addChild(this);
        this._bg.show(this, this.width / 2, this.height / 2);
        this._bg.play(2500);
        this._logo.show(this, this.width / 2, this.height / 2 - this._logo.height / 2);
        this._logo.play(3000);
    }
} 