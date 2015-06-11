class BackGround extends egret.Shape {
    private _stageW: number;

    private _stageH: number;
    constructor(stageW:number,stageH:number) {
        super();
        this._stageW = stageW;
        this._stageH = stageH;
        this.onCreate();
    }

    private onCreate() {
        var bgg = this.graphics;
        bgg.beginFill(0xffffff);
        bgg.drawCircle(0, 0, this._stageW / 2);
        bgg.endFill();
    }

    show(obj: egret.DisplayObjectContainer, x, y) {
        this.x = x;
        this.y = y;
        var parent = this.parent

        if (!Utils.isEmpty(parent)) {
            parent.removeChild(this);
        }

        obj.addChild(this);
    }

    play(time: number) {
        var tw = egret.Tween.get(this);
        tw.to({ y: 200 }, time);
    }
} 