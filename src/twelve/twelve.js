
var TwelveView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function Twelve() {
        Twelve.super(this);
        // this.productList.vScrollBarSkin = ''
        this.cleanChipBtn.on(Laya.Event.CLICK, this, this.cleanChipBtnClick)
        this.menuBtn.on(Laya.Event.CLICK, this, this.menuBtnClick)
        this.backBtn.on(Laya.Event.CLICK, this, this.backBtnClick)
        this.bigCircle.on(Laya.Event.CLICK, this, this.bigCircleClick)
        this.middleCircle.on(Laya.Event.CLICK, this, this.middleCircleClick)
        this.smallCircle.on(Laya.Event.CLICK, this, this.smallCircleClick)

        this.animalArr = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
        this.luckArr = ['福', '禄', '寿', '喜', '财']
        this.manArr = ['玉女', '金童']

        // var Loader = Laya.Loader;
        // var Browser = Laya.Browser;
        // var Handler = Laya.Handler;

        // var ProtoBuf = Browser.window.protobuf;

        // ProtoBuf.load("res/data/Lucky12.proto", function (err, root) {

        //     Pb.init(root)
        // });

        this.init()
    }
    Laya.class(Twelve, 'Twelve', _super);
    var _prototype = Twelve.prototype

    // 初始化
    _prototype.init = function () {



        // var message = Pb.Lucky12EnterRoomRequest.create({});
        // console.log(Pb.Lucky12EnterRoomRequest)
        // Luck.send(packPbMsg2(Pb.Id.Lucky12EnterRoomRequest, Pb.Lucky12EnterRoomRequest.encode(message).finish()));

        Luck.addHandle(new Luck.Handler(Pb.Id.Lucky12EnterRoomResponse, function (msg) {

        }));

        // STATUS  status  = 1;
        // string  msg = 2;
        // int32   seat_id = 3;
        // repeated    GameUserInfo    user_list = 4;
        // Lucky12ChipInfo   table_chip = 5;
        // Lucky12ChipInfo   own_chip = 6;
        // int32   bet_remain_secs = 7;
        // repeated Lucky12Result  history_list = 8;

        this.addMask(328, this.bigCircle)
        this.addMask(207.5, this.middleCircle)
        this.addMask(106, this.smallCircle)

        var chipArr = [10, 100, 1000]
        for (var i = 0; i < this.chipBox._childs.length; i++) {
            var box = this.chipBox._childs[i]
            box._childs[0].text = chipArr[i]
            box.tag = chipArr[i]
            box.on(Laya.Event.CLICK, this, this.selectChip)
        }

        // 大圈
        var pie = new Luck.createPie({
            pie: {
                length: 12,
                color: '#00ffff',
                parent: this.bigCircle,
                centerX: 328,
                centerY: 328,
                radius: 328,
            },
            aniDuration: 8000
        })
        pie.start(6, function () {

        })
        // 中圈
        var pie2 = new Luck.createPie({
            pie: {
                length: 5,
                color: '#00ffff',
                parent: this.middleCircle,
                centerX: 207.5,
                centerY: 207.5,
                radius: 207.5,
            },
            aniDuration: 8000
        })

        pie2.start(1, function () {

        })
        // 小圈
        var pie3 = new Luck.createPie({
            pie: {
                length: 2,
                color: '#00ffff',
                parent: this.smallCircle,
                centerX: 106,
                centerY: 106,
                radius: 106,
            },
            aniDuration: 2000
        })
        pie3.start(6, function () {

        })



        this.initHeadAddMask()

    }

    // 外环
    _prototype.bigCircleClick = function (ev) {
        var index = parseInt((this.getAngle(ev.stageX, ev.stageY) + 15) / 30)
        var str = this.animalArr[index] || this.animalArr[0]

        console.log(str)
    }
    // 中环
    _prototype.middleCircleClick = function (ev) {
        var index = parseInt((this.getAngle(ev.stageX, ev.stageY) + 36) / 72)
        var str = this.luckArr[index] || this.luckArr[0]
        console.log(str)

    }
    // 内环
    _prototype.smallCircleClick = function (ev) {
        var index = parseInt(this.getAngle(ev.stageX, ev.stageY) / 180)
        var str = this.manArr[index] || this.manArr[0]
        console.log(str)
    }
    // 选择筹码
    _prototype.selectChip = function (ev) {

        var box = ev.target
        for (var i = 0; i < this.chipBox._childs.length; i++) {
            this.chipBox._childs[i]._childs[1].visible = true
        }
        box._childs[1].visible = false

    }
    // 清除筹码
    _prototype.cleanChipBtnClick = function () {
        console.log('清除')
    }
    // 菜单
    _prototype.menuBtnClick = function () {
        Luck.warHistory = new WarHistoryView()
        Luck.warHistory.popup()
    }
    // 获取角度
    _prototype.getAngle = function (mx, my) {//获得人物中心和鼠标坐标连线，与y轴正半轴之间的夹角
        var x = Math.abs(360 - mx);
        var y = Math.abs(590 - my);
        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var cos = y / z;
        var radina = Math.acos(cos);//用反三角函数求弧度
        var angle = Math.floor(180 / (Math.PI / radina));//将弧度转换成角度

        if (mx > 360 && my > 590) {//鼠标在第四象限
            angle = 180 - angle;
        }

        if (mx == 360 && my > 590) {//鼠标在y轴负方向上
            angle = 180;
        }

        if (mx > 360 && my == 590) {//鼠标在x轴正方向上
            angle = 90;
        }

        if (mx < 360 && my > 590) {//鼠标在第三象限
            angle = 180 + angle;
        }

        if (mx < 360 && my == 590) {//鼠标在x轴负方向
            angle = 270;
        }

        if (mx < 360 && my < 590) {//鼠标在第二象限
            angle = 360 - angle;
        }
        return angle;
    }
    // 返回
    _prototype.backBtnClick = function () {
        this.removeSelf()
        Luck.indexView = new IndexView()
        Laya.stage.addChild(Luck.indexView)
    }
    // 头像遮罩
    _prototype.initHeadAddMask = function () {
        for (var i = 0; i < this.playerBox._childs.length; i++) {
            var player = this.playerBox._childs[i]
            var img = player._childs[0]
            var sprite = new Laya.Sprite();
            sprite.graphics.drawCircle(94, 94, 94, '#00ffff')
            img.mask = sprite
        }
        var sp = new Laya.Sprite()
        sp.graphics.drawCircle(94, 94, 94, '#00ffff')
        this.selfHeadImg._childs[0].mask = sp

        var box = this.selfHeadImg._childs[0]
        box.skin = 'comp/headimg/' + Luck.selfUserInfo.avatarId + '.png'
        box.scale(0.5, 0.5)
    }

    // 圆环添加点击遮罩
    _prototype.addMask = function (r, view) {
        var sprite = new Laya.Sprite();
        sprite.graphics.drawCircle(r, r, r, '#00ffff')
        view.mask = sprite

        var graphics = new Laya.Graphics();
        graphics.drawCircle(r, r, r, '#00ffff')
        var hitarea = new Laya.HitArea();
        hitarea.hit = graphics;
        view.hitArea = hitarea;
    }

    return Twelve;
})(ui.twelve.twelveUI);
