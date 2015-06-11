class Logo extends egret.TextField {
    private _timmer: egret.Timer;

    constructor() {
        super();
        this.onCreate();
    }

    private onCreate() {
        this.text = 'City of Ember';
        this.textColor = 0xffffff;
        this.strokeColor = 0x800040;
        this.stroke = 10;
        this.size = 50;
        this.anchorX = .5;
        
    }

    setEndListener(time:number) {
        this._timmer = new egret.Timer(time, 1);
        this._timmer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.actionOver, this);
    }

    endListener: (obj:any) => void;
   

    private actionOver(e:egret.TimerEvent) {
        if (!Utils.isEmpty(this.endListener))
        {
            this.endListener(this);
        }
    }


    show(obj: egret.DisplayObjectContainer,x,y) {
        this.x = x;
        this.y = y;
        var parent = this.parent

        if (!Utils.isEmpty(parent)) {
            parent.removeChild(this);
        } 
       
        obj.addChild(this);
    }

    play(time:number) {
        this.alpha = 0.5;
        egret.Tween.get(this).to({ y: 100, scaleX: 1.5, scaleY: 1.5, alpha: 1 }, time);
        this._timmer.start();
    }
} 