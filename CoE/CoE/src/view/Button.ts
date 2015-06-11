class Button extends egret.DisplayObjectContainer {
    private _txt: egret.TextField;
    private _bg: egret.DisplayObject;
    private _timmer: egret.Timer;

    constructor(txt:string) {
        super();

        this.init(txt);
    }

    private init(txt:string) {
        this._txt = new egret.TextField();
        this._txt.text = txt;
        this._txt.anchorX = this._txt.anchorY = .5;
        this._txt.size = 24;
        this.width = this._txt.width + 40;
        this.height = this._txt.height + 20;
        this.upDate();
        this.addChild(this._txt);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touch, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touch, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touch, this);
       
    }

    /**
     * 注册结束监听器
     * @param time 监听器时间
     */
    setEndListener(time: number)
    {
        this._timmer = new egret.Timer(time, 1);
        this._timmer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.actionOver, this);
    }

    private actionOver(e: egret.TimerEvent) {
        if (!Utils.isEmpty(this.endListener)) {
            this.endListener(this);
        }
    }

    private touch(e: egret.TouchEvent)
    {
        if (!Utils.isEmpty(this.onTouch))
        {
            this.onTouch(e);
        }
    }

    /**
     * 触摸事件
     * @param e 触摸事件返回对象，e.type 有 egret.TouchEvent.TOUCH_BEGIN 、 TOUCH_END等
     */
    onTouch: (e: egret.TouchEvent) => void;

    /**
     * 设置文本颜色 0x000000
     * @param color 颜色
     */
    set txtColor(color: number)
    {
        this._txt.textColor = color;
    }

    /**
     * 设置文本尺寸
     * @param size 尺寸
     */
    set txtSize(size:number) {
        this._txt.size = size;
    }

    /**
     * 设置按钮大小
     * @param w 宽度
     */
    set btnWidth(w: number)
    {
        this.width = w;
        this.upDate();
    }

    /**
     * 设置按钮大小
     * @param h 高度
     */
    set btnHeight(h: number) {
        this.height = h;
        this.upDate();
    }

    /**
     * 设置按钮背景
     * @param obj 背景对象
     */
    set background(obj: egret.DisplayObject) {
        obj.width = this.width;
        obj.height = this.height;
        this._bg = obj;
        this.addChildAt(this._bg, 0);
    }

    private upDate() {
        if (!Utils.isEmpty(this._bg))
        {
            this._bg.width = this.width;
            this._bg.height = this.height;
        }
        
        this._txt.x = this.width / 2;
        this._txt.y = this.height / 2;
    }

    /**
     * 结束监听器
     * @param obj 返回当前对象
     */
    endListener: (obj: any) => void;

    /**
     * 执行默认动画效果
     * @param time 动画持续时间
     */
    play(time:number) {
        this.alpha = 0;
        egret.Tween.get(this).to({ alpha: 1 }, time);
        if (!Utils.isEmpty(this._timmer))
        {
            this._timmer.start();
        }
    }
} 