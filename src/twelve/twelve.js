
var TwelveView = (function (_super) {

    _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function Twelve(msg) {
        Twelve.super(this);
        // this.productList.vScrollBarSkin = ''
        this.currentChip = 0
        this.msg = msg
        this.userAndPos = []
        this.menuBtn.on(Laya.Event.CLICK, this, this.menuBtnClick)
        this.backBtn.on(Laya.Event.CLICK, this, this.backBtnClick)
        this.bigCircle.on(Laya.Event.CLICK, this, this.bigCircleClick)
        this.middleCircle.on(Laya.Event.CLICK, this, this.middleCircleClick)
        this.smallCircle.on(Laya.Event.CLICK, this, this.smallCircleClick)

        this.animalArr = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
        this.luckArr = ['福', '禄', '寿', '喜', '财']
        this.manArr = ['玉女', '金童']
        this.init()
    }
    Laya.class(Twelve, 'Twelve', _super);
    var _prototype = Twelve.prototype

    // 初始化
    _prototype.init = function () {
        var self = this
        var msg = this.msg
        self.turnOffChipBoard()

        console.log('进入十二生肖房间')
        self.addMask(328, self.bigCircle)
        self.addMask(207.5, self.middleCircle)
        self.addMask(106, self.smallCircle)

        // 大圈
        self.bigPie = new Luck.createPie({
            pie: {
                length: 12,
                color: '#00ffff',
                parent: self.bigCircle.getChildByName('pieBox'),
                centerX: 328,
                centerY: 328,
                radius: 328,
            },
            aniDuration: 7000
        })

        // 中圈
        self.middlePie = new Luck.createPie({
            pie: {
                length: 5,
                color: '#00ffff',
                parent: self.middleCircle.getChildByName('pieBox'),
                centerX: 207.5,
                centerY: 207.5,
                radius: 207.5,
            },
            aniDuration: 4000
        })

        // 小圈
        self.smallPie = new Luck.createPie({
            pie: {
                length: 2,
                color: '#00ffff',
                parent: self.smallCircle.getChildByName('pieBox'),
                centerX: 106,
                centerY: 106,
                radius: 106,
            },
            aniDuration: 1000
        })

        this.updateUserInfo()

        self.initHeadAddMask()      // 头像遮罩
        self.showRestTime(msg.betRemainSecs)       // 剩余时间
        self.updateUserList(msg.userList)       // 更新玩家信息
        var arr = self.updateHistory(msg.historyList) // 更新历史记录
        self.updateChip(msg.availableBetList)   // 更新筹码列表
        console.log(arr)

        if (msg.betRemainSecs > 0) {
            self.turnOnChipBoard()
            Luck.alertView.show('还有' + msg.betRemainSecs + '下注时间！')
        }

        this.showOwnTableChip(this.msg.ownChip)
        this.registNotis()

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
    _prototype.showLandRHirsory = function (msg) {
        var self = this
        var arr = []
        var object = msg.result
        var n = 0
        var bigArr = [self.manArr, self.luckArr, self.animalArr]
        for (var key in object) {
            var element = object[key];
            var smallArr = bigArr[n]
            var index = parseInt(element) - (n * 10) - 1
            if (smallArr.length == 2) index = index == 0 ? 1 : 0
            arr.push(smallArr[index])
            n++
            if (n == 3) break
        }
        for (var i = 0; i < self.rightHistory._childs.length; i++) {
            var label = self.rightHistory._childs[i]
            label.text = arr[i]
        }
        self.leftHistory._childs[0].text = arr[0]
        self.leftHistory._childs[1].text = arr[1]
        return arr[0] + '·' + arr[1] + '·' + arr[2]
    }

    _prototype.userExist = function (user) {
        for (var i = 0; i < this.userAndPos.length; i++) {
            var obj = this.userAndPos[i]
            if (parseInt(obj.uid) == parseInt(user.uid)) {
                return true
            }
        }
        return false
    }
    // 更新用户信息
    _prototype.updateUserInfo = function (user) {
        var dataArr = this.playerBox._childs

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
    // 其他人下注
    _prototype.showOtherChip = function (pos, betCount, who) {
        console.log(pos, betCount)
        var i = pos[0]
        var direction = pos[1]
        if (i == 1) {
            var circle = this.smallCircle
        } else if (i == 2) {
            var circle = this.middleCircle
        } else {
            var circle = this.bigCircle
        }

        var box = circle.getChildByName('resultBox')._childs[direction - 1]
        box._childs[0].visible = true   // 显示金豆

        this.updateTableAllSum(i, betCount)

        var someone
        for (var i = 0; i < this.userAndPos.length; i++) {
            var o = this.userAndPos[i]
            if (parseInt(o.uid) == who) {
                someone = o.entry
                break
            }
        }

        // var x = box._childs[0].x + box._childs[0].parent.x + box._childs[0].parent.parent.x - someone.x
        // var y = someone.y - (box._childs[0].y + box._childs[0].parent.y + box._childs[0].parent.parent.y)
        // console.log(x, y)
        // if (!box._childs[0].isAnimating) {
        //     box._childs[0].isAnimating = true
        //     Laya.Tween.from(box._childs[0], { x: x * -1, y: y * -1 }, 500, Laya.Ease.linearInOut, new Laya.Handler(this, function () {
        //         box._childs[0].isAnimating = false
        //     }))
        // }

    }
    // 显示已下筹码
    _prototype.showOwnTableChip = function (object) {
        var self = this
        var n = 0

        for (var key in object) {

            if (object.hasOwnProperty(key)) {
                var value = object[key]
                var e = key.indexOf('Chip')
                var index = parseInt(key.slice(3, e))
                if (index < 3) {
                    index -= 1
                    box = this.smallCircle
                } else if (index < 16) {
                    index -= 11
                    box = this.middleCircle
                } else {
                    index -= 21
                    box = this.bigCircle
                }
                box = box.getChildByName('resultBox')._childs[index]
                box._childs[0].visible = true
                box._childs[2].visible = true
                box._childs[2]._childs[0].text = value
                console.log(index, value)
                n++
            }
        }
    }
    // 发送筹码请求
    _prototype.sendBetChipReq = function (index) {
        console.log(index, this.currentChip)
        if (index == 33) index = 21
        if (index == 16) index = 11
        var message = Pb.Lucky12BetRequest.create({
            betPos: index,
            betCount: this.currentChip
        });
        Luck.send(packPbMsg2(Pb.Id.Lucky12BetRequest, Pb.Lucky12BetRequest.encode(message).finish()));
    }
    // 显示下注数
    _prototype.showBetChipResult = function (who, pos) {

        var i = pos[0]
        var direction = pos[1]
        if (i == 1) {
            var circle = this.smallCircle
        } else if (i == 2) {
            var circle = this.middleCircle
        } else {
            var circle = this.bigCircle
        }

        var box = circle.getChildByName('resultBox')._childs[direction]

        box._childs[0].visible = true   // 显示金豆
        var p = box._childs[0].globalToLocal(new Laya.Point(this.selfHeadImg.x, this.selfHeadImg.x))
        p = this.bigCircle.globalToLocal(p)
        if (!box._childs[0].isAnimating) {
            box._childs[0].isAnimating = true
            Laya.Tween.from(box._childs[0], { x: p.x + 100, y: (p.y + 900) }, 500, Laya.Ease.linearInOut, new Laya.Handler(this, function () {
                box._childs[0].isAnimating = false
            }))
        }

        var sum = 0
        if (box._childs[2]._childs[0].text && who == 1) {
            sum = parseInt(box._childs[2]._childs[0].text)
        }
        if (box._childs[1]._childs[0].text && who == 2) {
            sum = parseInt(box._childs[1]._childs[0].text)
        }

        sum += parseInt(this.currentChip)

        if (who == 1) {
            box._childs[2].visible = true
            box._childs[2]._childs[0].text = sum
        } else {
            box._childs[1].visible = true
            box._childs[1]._childs[0].text = sum
        }

        this.updateTableAllSum(i, this.currentChip)
    }
    // 更新下注总和
    _prototype.updateTableAllSum = function (index, number) {
        index -= 1
        this.tableAllSum._childs[index].visible = true
        var lastNumber = this.tableAllSum._childs[index]._childs[0].text || 0
        var newNumbber = parseInt(lastNumber) + parseInt(number)
        this.tableAllSum._childs[index]._childs[0].text = newNumbber
    }
    // 外环
    _prototype.bigCircleClick = function (ev) {
        var index = parseInt((this.getAngle(ev.stageX, ev.stageY) + 15) / 30)
        var str = this.animalArr[index] || this.animalArr[0]
        console.log(str, index)
        this.sendBetChipReq(index + 21)
        this.showBetChipResult(1, [3, index == 12 ? 0 : index])
    }
    // 中环
    _prototype.middleCircleClick = function (ev) {
        var index = parseInt((this.getAngle(ev.stageX, ev.stageY) + 36) / 72)
        var str = this.luckArr[index] || this.luckArr[0]
        console.log(str, index)
        this.sendBetChipReq(index + 11)
        this.showBetChipResult(1, [2, index == 5 ? 0 : index])
    }
    // 内环
    _prototype.smallCircleClick = function (ev) {
        var index = parseInt(this.getAngle(ev.stageX, ev.stageY) / 180)
        var str = this.manArr[index] || this.manArr[0]
        console.log(str, index)
        this.sendBetChipReq(index == 0 ? 1 : 2)
        this.showBetChipResult(1, [1, index])
    }
    // 选择筹码
    _prototype.selectChip = function (ev) {
        var box = ev.target
        for (var i = 0; i < this.chipBox._childs.length; i++) {
            this.chipBox._childs[i]._childs[1].visible = true
        }
        box._childs[1].visible = false
        this.currentChip = box._childs[0].text
        console.log(this.currentChip)
    }
    // 更新历史记录
    _prototype.updateHistory = function (dataArr) {
        var arr = []
        for (var i = 0; i < dataArr.length; i++) {
            var object = dataArr[i]
            var temp = ''
            for (var key in object) {
                var value = parseInt(object[key]);
                if (value > 20) {
                    value = this.animalArr[value - 21]
                } else if (value > 10) {
                    value = this.luckArr[value - 11]
                } else {
                    value = this.manArr[value - 1]
                }
                temp += key == 'result2Pos' ? '·' + value + '·' : value
                if (key == 'result3Pos') break
            }
            arr.push(temp)
        }
        return arr
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
    // 重置筹码
    _prototype.resetChipBoard = function (circle) {

        execute(this.bigCircle)
        execute(this.middleCircle)
        execute(this.smallCircle)

        function execute(circle) {
            var box = circle.getChildByName('resultBox')
            for (var i = 0; i < box._childs.length; i++) {
                box._childs[i]._childs[0].visible = false
                box._childs[i]._childs[1].visible = false
                box._childs[i]._childs[2].visible = false
                box._childs[i]._childs[1]._childs[0].text = ''
                box._childs[i]._childs[2]._childs[0].text = ''
            }
        }

        for (var i = 0; i < 3; i++) {
            var box = this.tableAllSum._childs[i]
            box.visible = false
            box._childs[0].text = ''
        }

        this.bigPie.hidePie()
        this.middlePie.hidePie()
        this.smallPie.hidePie()
    }
    // 更新筹码
    _prototype.updateChip = function (dataArr) {

        for (var i = 0; i < dataArr.length; i++) {
            var box = this.chipBox._childs[i]
            var str = dataArr[i]
            var label = box._childs[0]
            label.text = str
            box.on(Laya.Event.CLICK, this, this.selectChip)
        }
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
                self.turnOffChipBoard()
            }
        }, 1000)

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
        this.selfMoney.text = Luck.selfUserInfo.coinCount

    }
    // 打开下注
    _prototype.turnOnChipBoard = function () {
        this.bigCircle.mouseEnabled = true
        this.middleCircle.mouseEnabled = true
        this.smallCircle.mouseEnabled = true
    }
    // 关闭下注
    _prototype.turnOffChipBoard = function () {
        this.bigCircle.mouseEnabled = false
        this.middleCircle.mouseEnabled = false
        this.smallCircle.mouseEnabled = false
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
