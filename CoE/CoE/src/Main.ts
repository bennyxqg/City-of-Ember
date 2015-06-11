class Main extends egret.DisplayObjectContainer {
    
    private groupName: string;
    private times: number;
    private url: string;
    private data: {};

    constructor() {
        super();
        this.init();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private init() {
        this.times = 0;
        this.groupName = 'preload';
        this.url = 'resource/'
        this.data = {
            "resources":
            [
                { "name": "red", "type": "image", "url": "assets/red.png" },
                { "name": "blue", "type": "image", "url": "assets/blue.png" },
                { "name": "gray", "type": "image", "url": "assets/gray.png" }
            ],
            "groups":
            [
                { "name": "preload", "keys": "red,blue,gray" }
            ]
        };
    }

    private onAddToStage() {
        RES.parseConfig(this.data, this.url);
        RES.loadGroup(this.groupName);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.success, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error, this);
    }
    
    private success(e: RES.ResourceEvent) {
        if (e.groupName == this.groupName) {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.success, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.error, this);
            this.begin();
        }
    }
    /**
     * 返回Context对象，该对象是唯一的，不能改变其值
     */
    static CONTEXT: Context;
    private begin() {
        var cxt = new MainContext(this);
    }

    private error(e: RES.ResourceEvent) {
        if (this.times++ < 3) {
            RES.loadGroup(this.groupName);
        }
        else {
            console.log(e + ":Error load");
        }
    }
} 