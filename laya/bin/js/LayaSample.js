// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.prevX = 0;
        this.prevY = 0;
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
        new TxtInput();
        // this.createText();
    }
    // private setup(){
    //     var t1:Laya.Text = this.createText();
    //     //设置不进行任何裁剪
    //     t1.overflow = Laya.Text.VISIBLE;
    //     t1.pos(10,10);
    //     var t2:Laya.Text = this.createText();
    //     //设置不进行任何裁剪
    //     t2.overflow = Laya.Text.SCROLL;
    //     t2.pos(10,110);
    //     var t3:Laya.Text = this.createText();
    //     //设置不进行任何裁剪
    //     t3.overflow = Laya.Text.HIDDEN;
    //     t3.pos(10,210);
    // }
    GameMain.prototype.createText = function () {
        this.txt = new Laya.Text();
        this.txt.overflow = Laya.Text.SCROLL;
        this.txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
        //设置宽高以后的自动裁剪会按照这个区域裁剪
        this.txt.size(200, 100);
        this.txt.x = Laya.stage.width - this.txt.width >> 1;
        this.txt.y = Laya.stage.height - this.txt.height >> 1;
        this.txt.borderColor = "#ffff00";
        this.txt.fontSize = 20;
        this.txt.color = "#ffffff";
        Laya.stage.addChild(this.txt);
        this.txt.on(Laya.Event.MOUSE_DOWN, this, this.startScrollText);
    };
    GameMain.prototype.startScrollText = function () {
        this.prevX = this.txt.mouseX;
        this.prevY = this.txt.mouseY;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.scrollText);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.finishScrollText);
    };
    GameMain.prototype.scrollText = function () {
        var nowX = this.txt.mouseX;
        var nowY = this.txt.mouseY;
        this.txt.scrollX += this.prevX - nowX;
        this.txt.scrollY += this.prevY - nowY;
        this.prevX = nowX;
        this.prevY = nowY;
    };
    GameMain.prototype.finishScrollText = function () {
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.scrollText);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.finishScrollText);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map