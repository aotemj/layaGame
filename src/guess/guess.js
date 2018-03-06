
var GuessView = (function (_super) {
   _super.uiView = Luck.filterImgAddVersion(_super.uiView)

   function Guess(msg) {
        Guess.super(this);
        // this.productList.vScrollBarSkin = ''
        // this.currentChip = 0
        this.msg = msg
        this.userAndPos = []
        this.backBtn.on(Laya.Event.CLICK, this, this.backBtnClick)
        this.warHistoryBtn.on(Laya.Event.CLICK, this, this.warHistoryBtnClick)
        this.bigRect.on(Laya.Event.CLICK, this, this.bigRectClick)
        this.faRect.on(Laya.Event.CLICK, this, this.faRectClick)
        this.smallRect.on(Laya.Event.CLICK, this, this.smallRectClick)
        this.init()
    }
     Laya.class(Guess, 'Guess', _super);
    var _prototype = Guess.prototype
    // 初始化
     _prototype.init = function () {
        var self = this
        var msg = this.msg
        self.turnOffChipBoard()
         var sp = new Laya.Sprite();
         //画矩形
        sp.graphics.drawRect(0, 00, 100, 100, "#f40");

        Laya.stage.addChild(sp);
        
        console.log('进入猜大小房间');
        // self.addMask(328, self.bigCircle)
        // self.addMask(207.5, self.middleCircle)
        // self.addMask(106, self.smallCircle)

        this.updateUserInfo()

        self.initHeadAddMask()      // 头像遮罩
        self.showRestTime(msg.betRemainSecs)       // 剩余时间
        self.updateUserList(msg.userList)       // 更新玩家信息
        self.updateChip(msg.availableBetList)   // 更新筹码列表

         if (msg.betRemainSecs > 0) {
            self.turnOnChipBoard()
            Luck.alertView.show('还有' + msg.betRemainSecs + '下注时间！')
        }
     }
     // 返回
    _prototype.backBtnClick = function () {
        var self = this

        var message = Pb.RoomLeaveRequest.create({});
        Luck.send(packPbMsg2(Pb.Id.RoomLeaveRequest, Pb.RoomLeaveRequest.encode(message).finish()));

        Luck.addHandle(new Luck.Handler(Pb.Id.RoomLeaveResponse, function (msg) {
            if (msg.status == 1) {
                self.removeSelf()
                // Luck.loginView = new LoginView()
                // Laya.stage.addChild(Luck.loginView)
                Luck.indexView = new IndexView()
                Laya.stage.addChild(Luck.indexView)
            } else {
                Luck.alertView.show(msg.msg)
            }
        }));

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
     // 战绩
    _prototype.warHistoryBtnClick = function () {
        Luck.warHistory = new WarHistoryView()
        Luck.warHistory.popup()
    }
    // "大"矩形点击
    _prototype.bigRectClick = function(ev){
        console.log('大巨星点击');
         var index = parseInt((this.getAngle(ev.stageX, ev.stageY) + 15) / 30)
        var str = this.animalArr[index] || this.animalArr[0]
        console.log(str, index) 
        this.sendBetChipReq(index + 21)
        this.showBetChipResult(1, [3, index == 12 ? 0 : index])
    }
    // "发"矩形点击
    _prototype.faRectClick = function(e){
        console.log('发巨星点击');
        console.log(e.target);
    }
    // "小"矩形点击
    _prototype.smallRectClick = function(){
        console.log('小巨星点击');
    }
      // 通知回调
    _prototype.registNotis = function () {
        var self = this
        // 有人进入
        Luck.addHandle(new Luck.Handler(Pb.Id.RoomUserInfoBroadcast, function (msg) {
            if (msg.userInfo.uid && msg.userInfo.uid != Luck.selfUserInfo.uid) {
                self.updateUserInfo(msg.userInfo)
            }
        }));

        // 开始下注
        Luck.addHandle(new Luck.Handler(Pb.Id.GameBeginNotification, function (msg) {
            Luck.alertView.show('开始下注')
            self.showRestTime(msg.betRemainSecs)
            self.turnOnChipBoard()
        }));
        // 有人下注
        Luck.addHandle(new Luck.Handler(Pb.Id.Lucky12BetBroadcast, function (msg) {
            // Luck.alertView.show('有人下注')
            if (msg.userId != Luck.selfUserInfo.uid) {
                var pos = []

                if (msg.betPos < 3) {
                    pos.push(1)
                    pos.push(msg.betPos)
                } else if (msg.betPos < 16) {
                    pos.push(2)
                    pos.push(msg.betPos - 10)
                } else {
                    pos.push(3)
                    pos.push(msg.betPos - 20)
                }

                self.showOtherChip(pos, msg.betCount, msg.userId)
            }
        }));
        // 下注回调
        Luck.addHandle(new Luck.Handler(Pb.Id.Lucky12BetResponse, function (msg) {
            if (msg.msg) {
                Luck.alertView.show(msg.msg)
            } else {
                self.selfMoney.text = msg.coinCount
                Luck.selfUserInfo.coinCount = msg.coinCount
            }
        }));

        // 游戏结束
        Luck.addHandle(new Luck.Handler(Pb.Id.Lucky12GameOverBroadcast, function (msg) {
            Luck.alertView.show('停止下注')
            self.turnOffChipBoard()
            self.bigPie.start(msg.result.result3Pos - 21, function () { })
            self.middlePie.start(msg.result.result2Pos - 11, function () { })
            self.smallPie.start(msg.result.result1Pos - 1, function () { })

            setTimeout(function () {
                var str = self.showLandRHirsory(msg)
                self.historyList.text = str
            }, 10000);
            // 重置
            setTimeout(function () {
                self.resetChipBoard()
                var v = new OverBoardView(msg.userList)
                v.popup()
            }, 10000)

        }));
    }
    // 更新用户信息
    _prototype.updateUserInfo = function (user) {
        var dataArr = this.playerBox._childs
        console.log(dataArr);
        if (user) {
            if (user.seatStatus == 2) {
                for (var i = 0; i < this.userAndPos.length; i++) {
                    var obj = this.userAndPos[i]
                    if (parseInt(obj.uid) == parseInt(user.uid)) {
                        obj.isSeat = false
                        obj.uid = ''
                        obj.entry._childs[1].text = '用戶名'
                        obj.entry._childs[0].skin = 'comp/round/board/circle1.png'
                        obj.entry._childs[0].scale(1, 1)
                    }
                }
            } else if (user.seatStatus == 3) {
                for (var i = 0; i < this.userAndPos.length; i++) {
                    var obj = this.userAndPos[i]
                    if (!obj.isSeat && !this.userExist(user)) {
                        obj.entry._childs[1].text = user.nickname
                        obj.entry._childs[0].skin = 'comp/headImg/' + user.avatarId + '.png'
                        obj.entry._childs[0].scale(0.5, 0.5)
                        obj.isSeat = true
                        obj.uid = user.uid
                        break
                    }
                }
            }
        } else {
            for (var i = 0; i < dataArr.length; i++) {
                var obj = {}
                obj['isSeat'] = false
                obj['entry'] = dataArr[i]
                this.userAndPos.push(obj)
            }
        }
    }
      // 发送筹码请求
    _prototype.sendBetChipReq = function (index) {
        // console.log(index, this.currentChip)
        if (index == 33) index = 21
        if (index == 16) index = 11
        var message = Pb.Lucky12BetRequest.create({
            betPos: index,
            betCount: this.currentChip
        });
        Luck.send(packPbMsg2(Pb.Id.Lucky12BetRequest, Pb.Lucky12BetRequest.encode(message).finish()));
    }
     // 更新玩家列表
    _prototype.updateUserList = function (userList) {
        var self = this
        userList.filter(function (ele, i) {
            if (ele.uid != Luck.selfUserInfo.uid) {
                self.updateUserInfo(ele)
            }
        })

    }
       // 更新筹码
    _prototype.updateChip = function (dataArr) {
        // console.log(dataArr)
        for (var i = 0; i < dataArr.length; i++) {
            var box = this.chipBox._childs[i]
            var str = dataArr[i]
            var label = box._childs[0]
            label.text = str
            box._childs[1].visible = false
            box.on(Laya.Event.CLICK, this, this.selectChip)
        }
        this.chipBox._childs[0]._childs[1].visible=true;
        this.currentChip = dataArr[0]
    }
    // 剩余时间
    _prototype.showRestTime = function (time) {
        if (time < 0) return
        var self = this
        self.restTime.text = time + 'S'
        this.countDtimer = setInterval(function () {
            time -= 1
            self.restTime.text = time + 'S'
            if (time <= 0) {
                clearInterval(self.countDtimer)
                self.restTime.text = "准备开奖"
                self.turnOffChipBoard()
            }
        }, 1000)

    }

     // 猜大
    _prototype.bigRectangleClick = function (ev) {
        // var index = parseInt((this.getAngle(ev.stageX, ev.stageY) + 15) / 30)
        // var str = this.animalArr[index] || this.animalArr[0]
        // console.log(str, index)
        // this.sendBetChipReq(index + 21)
        // this.showBetChipResult(1, [3, index == 12 ? 0 : index])
    }
    // 猜发
    _prototype.faRectangleClick = function (ev) {
        // var index = parseInt((this.getAngle(ev.stageX, ev.stageY) + 36) / 72)
        // var str = this.luckArr[index] || this.luckArr[0]
        // console.log(str, index)
        // this.sendBetChipReq(index + 11)
        // this.showBetChipResult(1, [2, index == 5 ? 0 : index])
    }
    // 猜小
    _prototype.smallRectangleClick = function (ev) {
        // var index = parseInt(this.getAngle(ev.stageX, ev.stageY) / 180)
        // var str = this.manArr[index] || this.manArr[0]
        // console.log(str, index)
        // this.sendBetChipReq(index == 0 ? 1 : 2)
        // this.showBetChipResult(1, [1, index])
    }
      // 选择筹码
    _prototype.selectChip = function (ev) {
        // console.log(this.chipBox._childs.length);
        var box = ev.target
        for (var i = 0; i < this.chipBox._childs.length; i++) {
            console.log();
            this.chipBox._childs[i]._childs[1].visible = false
        }
        box._childs[1].visible = true
        this.currentChip = box._childs[0].text
        console.log(this.currentChip)
    }
      // 头像遮罩
    _prototype.initHeadAddMask = function () {
        // console.log(this.playerBox._childs);
        for (var i = 0; i < this.playerBox._childs.length; i++) {
            var player = this.playerBox._childs[i]
            // console.log(player);
            var img = player._childs[0]
            // console.log(img);
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
        this.selfMoney.text = Luck.selfUserInfo.coinCount

    }
     // 打开下注
    _prototype.turnOnChipBoard = function () {
        this.bigRect.mouseEnabled = true
        this.faRect.mouseEnabled = true
        this.smallRect.mouseEnabled = true
    }
    // 关闭下注
    _prototype.turnOffChipBoard = function () {
         this.bigRect.mouseEnabled = false;
        this.faRect.mouseEnabled = false;
        this.smallRect.mouseEnabled = false;
    }
      // 矩形添加点击遮罩
    _prototype.addMask = function (r, view) {
        var sprite = new Laya.Sprite();
        sprite.graphics.drawCircle(r, r, r, '#f40')
        view.mask = sprite

        var graphics = new Laya.Graphics();
        graphics.drawCircle(r, r, r, '#00ffff')
        var hitarea = new Laya.HitArea();
        hitarea.hit = graphics;
        view.hitArea = hitarea;
    }
   
    return Guess;
})(ui.guess.guessUI);
