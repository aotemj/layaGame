
var IndexView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function Index() {
        Index.super(this);
        this.productList.vScrollBarSkin = ''
        this.indexBtn.on(Laya.Event.CLICK, this, this.indexBtnClick)
        this.twelveBtn.on(Laya.Event.CLICK, this, this.twelveBtnClick)
        this.guessBtn.on(Laya.Event.CLICK, this, this.guessBtnClick)
        this.sixBtn.on(Laya.Event.CLICK, this, this.sixBtnClick)
        this.userBtn.on(Laya.Event.CLICK, this, this.userBtnClick)
        this.tabBtnArr = [this.indexBtn, this.twelveBtn, this.guessBtn, this.sixBtn, this.userBtn]
        this.init()

    }
    Laya.class(Index, 'Index', _super);
    var _prototype = Index.prototype
    // 初始化
    _prototype.init = function () {
        Laya.stage.bgColor = '#fff'
        for (var i = 0; i < this.tabBtnArr.length; i++) {
            var tab = this.tabBtnArr[i]
            tab.tag = i + 1
            tab.on(Laya.Event.CLICK, this, this.tabBtnClick, [tab])
        }
        var arr = []
        for (var i = 0; i < 20; i++) {
            arr.push({
                // img: { skin: 'comp/index/' + + '.png?v=' + Luck.version },
                label: { text: '猜大小：' + (i + 1) }
            })
        }
        this.productList.dataSource = arr
        this.productList.renderHandler = new Handler(this, this.productListRender)

        var tempArr = [
            '1',
            '2',
            '3',
            '4',
            '1',
            '2',
        ]
        this.hourseGo({
            dataArr: tempArr,
            parent: this.panel1
        })
        this.hourseGo({
            dataArr: tempArr,
            parent: this.panel2
        })

    }
    _prototype.aa = function () {
        console.log(1)
    }
    // 跑马灯go
    _prototype.hourseGo = function (params) {
        var self = this
        var dataArr = params.dataArr || []
        var parent = params.parent || this

        for (var i = 0; i < dataArr.length; i++) {
            var hourse = new RunHourseView({
                text: dataArr[i],
                x: i * 300 + 70 * i
            })
            parent.addChild(hourse)
        }
        parent.width = parent._childs[0]._childs[dataArr.length - 1].x + 300

        var s = setInterval(function () {
            parent.scrollTo(parent.x -= 1, parent.y)
            var c = parent._childs[0]._childs[dataArr.length - 3]
            if (Math.abs(parent.x) == c.x + 370) {
                parent.x = 0
                parent.scrollTo(parent.x, parent.y)
            }
        }, 10)
        Luck.timerArr.push(s)

    }
    _prototype.productListRender = function (item) {
        item.on(Laya.Event.CLICK, this, this.productClick)
    }
    // 点击商品
    _prototype.productClick = function (ev) {
        var target = ev.target
        console.log(target._childs[1].text)
    }
    // 首页
    _prototype.tabBtnClick = function (tab) {
        // 移除当前视图
		console.log(tab.tag, tab.tag)
        if (tab.tag > 1) {

            Luck.clearTimer()
            Luck.indexView.removeSelf()
            // Luck.indexView.destroy()
            // Luck.indexView = null

            // 十二生肖
            if (tab.tag == 2) {
                // 进入房间
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

            }
            // 666
            if (tab.tag == 4) {

            }

            // 我的
            if (tab.tag == 5) {
                Luck.userView = new UserView()
                Laya.stage.addChild(Luck.userView)
            }
        }
    }


    return Index;
})(ui.index.indexUI);
