
var UserView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function User() {
        User.super(this);
        // this.productList.vScrollBarSkin = ''
        // this.indexBtn.on(Laya.Event.CLICK, this, this.indexBtnClick)
        //  this.richRect.on(Laya.Event.CLICK, this, this.richRectClick)
        console.log(this);
        this.changeNickNameBtn.on(Laya.Event.CLICK,this,this.changeNickNameBtnClick)
        this.tabBtnArr = [this.indexBtn, this.twelveBtn, this.guessBtn, this.sixBtn, this.userBtn];
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
        var message = Pb.Lucky12EnterRoomRequest.create({});
        // console.log(userInfo);
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
                var message = Pb.Lucky12EnterRoomRequest.create({});
                Luck.send(packPbMsg2(Pb.Id.Lucky12EnterRoomRequest, Pb.Lucky12EnterRoomRequest.encode(message).finish()));
                Luck.addHandle(new Luck.Handler(Pb.Id.Lucky12EnterRoomResponse, function (msg) {
					console.log(msg)
                    Luck.twelveView = new TwelveView(msg)
                    Laya.stage.addChild(Luck.twelveView)
                }));
            }
            // 猜大小
            if (tab.tag == 3) {
                var message = Pb.GuessEnterRoomRequest.create({});
                Luck.send(packPbMsg2(Pb.Id.GuessEnterRoomRequest, Pb.GuessEnterRoomRequest.encode(message).finish()));
                Luck.addHandle(new Luck.Handler(Pb.Id.GuessEnterRoomResponse, function (msg) {
					console.log(msg)
                    Luck.guessView = new GuessView(msg)
                    Laya.stage.addChild(Luck.guessView)
                }));
            }
            // 666
            if (tab.tag == 4) {

            }
        }
    }
    _prototype.changeNickNameBtnClick = function(){
        //移除当前视图 
        Luck.userView.removeSelf()
        Luck.userView = null
        // 添加新视图
        Luck.changeNickNameView = new ChangeNickNameView()
        Laya.stage.addChild(Luck.changeNickNameView)
    }

    return User;
})(ui.user.userUI);
