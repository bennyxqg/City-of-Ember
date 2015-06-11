class Context {
    private _doc: egret.DisplayObjectContainer;
    get doc(): egret.DisplayObjectContainer {
        return this._doc;
    }

    get stage(): egret.Stage {
        return this._doc.stage;
    }

    get width(): number {
        return this._doc.stage.stageWidth;
    }

    get height(): number {
        return this._doc.stage.stageHeight;
    }

    addChild(obj:egret.DisplayObject) {
        this._doc.addChild(obj);
    }

    constructor(doc: egret.DisplayObjectContainer) {
        this._doc = doc;
    }

} 