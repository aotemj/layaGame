
var AlertView = (function (_super) {
    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function MyAlert() {
        MyAlert.super(this);
        this.init()
    }
    Laya.class(MyAlert, 'MyAlert', _super);
    var _prototype = MyAlert.prototype

    _prototype.init = function () {
        var self = this
        self.x = (Laya.stage.width - self.width) / 2
        self.y = (Laya.stage.height - self.height) / 2 + 50
        self.zOrder = 99999
    }
    _prototype.show = function (msg,duration) {
        var duration = duration || 1000
        Luck.clearAlertTimeout()
        var self = this
        Luck.alertView.removeSelf()
        self.label.text = msg
        Laya.stage.addChild(self)
        Laya.Tween.from(this, { x: self.x, y: -100 }, 100, Laya.Ease.linearIn, Laya.Handler.create
            (this, null));
        var s1 = setTimeout(function () {
            Luck.alertView.removeSelf()
        }, duration);
        Luck.alertTimeoutArr.push(s1)
    }
    return MyAlert;
})(ui.alertViewUI);
