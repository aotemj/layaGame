
var  ChangeNickNameView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function ChangeNickName() {
        ChangeNickName.super(this);
        // this.productList.vScrollBarSkin = ''
        // this.indexBtn.on(Laya.Event.CLICK, this, this.indexBtnClick)
        // this.tabBtnArr = [this.indexBtn, this.twelveBtn, this.guessBtn, this.sixBtn, this.userBtn]
        this.init()
    }
    Laya.class(ChangeNickName, 'ChangeNickName', _super);
    var _prototype = ChangeNickName.prototype
    // 初始化
    _prototype.init = function () {
        Laya.stage.bgColor = '#fff'
        var sp = new Laya.Sprite();
        sp.graphics.drawCircle(0, 0, 60, '#fff000', null);
        console.log(this);

        // 获取用户昵称
        this.textarea.prompt="456";
    }


    return ChangeNickName;
})(ui.user.changeNickNameUI);
