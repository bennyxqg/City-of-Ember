class Utils {
   /**
    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
    */
    static createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
   /**
    * 判断是否为空，如果为空返回true
    */
    static isEmpty(obj: any):boolean
    {
        if (obj == 0) {
            return false;
        } else {
            if (!obj) {
                return true;
            } else {
                return false;
            }
        }
    }
}