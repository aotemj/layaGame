
var RegistView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function Regist() {
        Login.super(this);

        this.loginBtn.on(Laya.Event.CLICK, this, this.loginBtnClick)
        this.registBtn.on(Laya.Event.CLICK, this, this.registBtnClick)
        this.sendCheckBtn.on(Laya.Event.CLICK, this, this.sendCheckBtnClick)

        this.init()
    }
    Laya.class(Regist, 'Regist', _super);
    var _prototype = Regist.prototype
    // 初始化
    _prototype.init = function () {

    }
    // 发送验证码
    _prototype.sendCheckBtnClick = function(){
        
    }
    // 登陆
    _prototype.loginBtnClick = function () {
        this.removeSelf()

        Luck.loginView = new LoginView()
        Laya.stage.addChild(Luck.loginView)
    }
    // 注册
    _prototype.registBtnClick = function () {
        var username = this.username.text
        var password = this.password.text
        if (username.length == 11 && password.length > 0) {
            console.log(username, password)
        }
    }




    return Regist;
})(ui.login.registUI);
