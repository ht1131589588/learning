var TxtInput = /** @class */ (function () {
    function TxtInput() {
        //初始化引擎，不支持WebGL时自动切换到Canvas
        Laya.init(640, 800, Laya.WebGL);
        //设置画布的背景颜色
        Laya.stage.bgColor = "#efefef";
        this.Text_InputSingleline();
        this.Text_InputMultiline();
    }
    TxtInput.prototype.Text_InputSingleline = function () {
        var textInput = new Laya.TextInput("单行输入"); //创建一个 TextInput 类的实例对象 textInput 。
        textInput.wordWrap = true; //设置 textInput 的文本自动换行。
        textInput.fontSize = 30; //设置 textInput 的字体大小。
        textInput.x = 0; //设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        textInput.y = 0; //设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        textInput.width = 300; //设置 textInput 的宽度。
        textInput.height = 200; //设置 textInput 的高度。
        textInput.bgColor = "#c30c30";
        textInput.stroke = 5;
        textInput.strokeColor = "#ffffff";
        textInput.borderColor = "#ffffff";
        Laya.stage.addChild(textInput); //将 textInput 添加到显示列表。
    };
    TxtInput.prototype.Text_InputMultiline = function () {
        var textInput = new Laya.TextInput("多行输入"); //创建一个 TextInput 类的实例对象 textInput 。
        textInput.fontSize = 30; //设置 textInput 的字体大小。
        textInput.wordWrap = true; //设置 textInput 的文本自动换行。
        textInput.multiline = true; //设置textInput的多行输入
        textInput.x = 0; //设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        textInput.y = 300; //设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        textInput.width = 300; //设置 textInput 的宽度。
        textInput.height = 200; //设置 textInput 的高度。
        textInput.bgColor = "#c30c30";
        textInput.stroke = 5;
        textInput.strokeColor = "#ffffff";
        Laya.stage.addChild(textInput); //将 textInput 添加到显示列表。
    };
    return TxtInput;
}());
//# sourceMappingURL=txtInput.js.map