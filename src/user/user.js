
var UserView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function User() {
        User.super(this);
        // this.productList.vScrollBarSkin = ''
        // this.indexBtn.on(Laya.Event.CLICK, this, this.indexBtnClick)
        this.tabBtnArr = [this.indexBtn, this.twelveBtn, this.guessBtn, this.sixBtn, this.userBtn]
        this.init()
    }
    Laya.class(User, 'User', _super);
    var _prototype = User.prototype
    // 初始化
    _prototype.init = function () {
        Laya.stage.bgColor = '#e5e5e5'
        var sp = new Laya.Sprite();
        sp.graphics.drawCircle(0, 0, 60, '#fff000', null)
        sp.pos(60, 60)
        this.headImg.mask = sp
        for (var i = 0; i < this.tabBtnArr.length; i++) {
            var tab = this.tabBtnArr[i]
            tab.tag = i + 1
            tab.on(Laya.Event.CLICK, this, this.tabBtnClick, [tab])
        }
    }

    // tabBar
    _prototype.tabBtnClick = function (tab) {
        // 移除当前视图
        if (tab.tag < 5) {

            Luck.userView.removeSelf()
            Luck.userView = null
            // 首页
            if (tab.tag == 1) {
                Luck.indexView = new IndexView()
                Laya.stage.addChild(Luck.indexView)
            }
            // 十二生肖
            if (tab.tag == 2) {
                Luck.twelveView = new TwelveView()
                Laya.stage.addChild(Luck.twelveView)
            }
            // 猜大小
            if (tab.tag == 3) {

            }
            // 666
            if (tab.tag == 4) {

            }
        }
    }


    return User;
})(ui.user.userUI);
