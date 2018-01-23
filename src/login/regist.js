
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
        Luck.addHandle(new Luck.Handler(Pb.Id.TelephoneCodeResponse, function (msg) {
            console.log(msg)
        }));
    }
    // 发送验证码
    _prototype.sendCheckBtnClick = function () {
        var message = Pb.TelephoneCodeRequest.create(
            {
                telephone: '15038927731',
                codeType: 2
            });
        Luck.send(packPbMsg2(Pb.Id.TelephoneCodeRequest, Pb.TelephoneCodeRequest.encode(message).finish()));
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
        var checkValue = this.checkValue.text
        var nickname = new Date().toString()
        // console.log(username, password, checkValue, nickname)

        // string username    = 1;     //电话号码
        // string passwd      = 2;
        // string nickname    = 3;     //用户呢称
        // int32   valid_code = 4;     //短信验证码

        //   string telephone = 1;
        //     TelephoneCodeType   code_type = 2;



    }




    return Regist;
})(ui.login.registUI);
