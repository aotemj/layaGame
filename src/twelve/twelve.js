
var TwelveView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function Twelve() {
        Twelve.super(this);
        // this.productList.vScrollBarSkin = ''
        // this.indexBtn.on(Laya.Event.CLICK, this, this.indexBtnClick)
        this.init()
    }
    Laya.class(Twelve, 'Twelve', _super);
    var _prototype = Twelve.prototype
    // 初始化
    _prototype.init = function () {
        
    }



    return Twelve;
})(ui.twelve.twelveUI);
