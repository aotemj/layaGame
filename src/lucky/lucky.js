
var LuckyView = (function (_super) {
//    _super.uiView = Luck.filterImgAddVersion(_super.uiView)

   function Lucky(msg) {
        Lucky.super(this);
        // this.productList.vScrollBarSkin = ''
        // this.currentChip = 0
        this.msg = msg
        
        // this.userAndPos = []
        // this.backBtn.on(Laya.Event.CLICK, this, this.backBtnClick)
        // this.warHistoryBtn.on(Laya.Event.CLICK, this, this.warHistoryBtnClick)
        // this.bigRect.on(Laya.Event.CLICK, this, this.bigRectClick)
        // this.richRect.on(Laya.Event.CLICK, this, this.richRectClick)
        // this.smallRect.on(Laya.Event.CLICK, this, this.smallRectClick)
        // this.clearBtn.on(Laya.Event.CLICK,this,this.clearBtnClick);
        // console.log(this.historyList._childs[0].text);
        // this.apeArr= [];//已下注筹码数组
        // this.time = 1000;
        
        this.pieBtn.on(Laya.Event.CLICK,this,this.pieBtnClick);
        this.init()
    }
     Laya.class(Lucky, 'Lucky', _super);
    var _prototype = Lucky.prototype
    // 初始化
     _prototype.init = function () {
         console.log('init');
         console.log(this.pieBtn);
        // var self = this
        // var msg = this.msg
        // self.turnOffChipBoard()
        // this.updateUserInfo()

        // self.initHeadAddMask()      // 头像遮罩
        // self.showRestTime(msg.betRemainSecs)       // 剩余时间
        // self.updateUserList(msg.userList)       // 更新玩家信息
        // self.arr = self.updateHistory(msg.historyList) // 更新历史记录
        // // self.showLandRHirsory(msg)
        // console.log(self.arr);
      
        // self.updateChip(msg.availableBetList)   // 更新筹码列表
        // self.hiddenResult();//隐藏结果列表
        //  if (msg.betRemainSecs > 0) {
        //     self.turnOnChipBoard()
        //     Luck.alertView.show('还有' + msg.betRemainSecs + 'S下注时间！')
        // }
        //  this.registNotis()
     }

    //  扇形1点击：
    _prototype.pieBtnClick = function(){
        console.log('pie1');
    }

     // 返回
    _prototype.backBtnClick = function () {
        var self = this
        // 清除筹码
        this.clearBtnClick();
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
     // 战绩
    _prototype.warHistoryBtnClick = function () {
        Luck.warHistory = new WarHistoryViewer()
        Luck.warHistory.popup()
    }
    // "大"矩形点击
    _prototype.bigRectClick = function(e){
        let index = 1
         let pos ={
             x:e.target.mouseX+150,
             y:e.target.mouseY+120
         }
        let imgUrl = "comp/guess/bet-"+this.currentChip+".png"
        
        this.sendBetChipReq(index);
        this.showBetChipResult("who",pos,imgUrl)
    }
    // "发"矩形点击
    _prototype.richRectClick = function(e){
        // console.log('发巨星点击');
        let index = 0;
        
        let pos ={
             x:e.target.mouseX + 150,
             y:e.target.mouseY + 460
         }
        let imgUrl = "comp/guess/bet-"+this.currentChip+".png"
        // let imgUrl = "comp/guess/Bet.png"
        
        this.sendBetChipReq(index);
        this.showBetChipResult("who",pos,imgUrl)
       
        
        // this.showBetChipResult()
    }
    // "小"矩形点击
    _prototype.smallRectClick = function(e){
        let index = 2;
        // console.log(this.currentChip);
         let pos ={
             x:e.target.mouseX+150,
             y:e.target.mouseY+600
         }
        let imgUrl = "comp/guess/bet-"+this.currentChip+".png"
        this.sendBetChipReq(index);
        this.showBetChipResult("who",pos,imgUrl)
    }
    //点击清除筹码 
    _prototype.clearBtnClick = function(){
        for(var i =this.apeArr.length-1;i>-1;i--){
            this.apeArr[i].destroy();
        }
    }
    // 显示下注数
    _prototype.showBetChipResult = function (who, pos,imgUrl) {
        var self = this;
        var Sprite  = Laya.Sprite;
        var Stage   = Laya.Stage;
        var Texture = Laya.Texture;
        var Browser = Laya.Browser;
        var Handler = Laya.Handler;
        var WebGL   = Laya.WebGL;
        (function(){
            Laya.init(Browser.clientWidth, Browser.clientHeight);
            Laya.stage.alignV = Stage.ALIGN_TOP;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#232628";
            showApe();
        })();
        function showApe(){
            var ape = new Sprite();
            Laya.stage.addChild(ape);
            ape.pos(pos.x,pos.y);
            ape.loadImage(imgUrl);
            self.apeArr.push(ape);
        }

    }
    // 隐藏结果
    _prototype.hiddenResult = function (){
        for(var i = 0;i<this.resultBox._childs.length;i++){
            this.resultBox._childs[i].visible = false;
        }
    }
    // 显示结果列表
    _prototype.showResult = function(result){
        var self = this;
        // console.log();
        //动画函数   
        var luck={
			index:0,	//当前转动到哪个位置，起点位置
			count:0,	//总共有多少个位置
			timer:0,	//setTimeout的ID，用clearTimeout清除
			speed:20,	//初始转动速度
			times:0,	//转动次数
			cycle:50,	//转动基本次数：即至少需要转动多少次再进入抽奖环节
			prize:-1,	//中奖位置
			init:function(){
                //   console.log(self.resultBox._childs.length);
				if (self.resultBox._childs.length>0) {
					$luck =self.resultBox;
					$units =self.resultBox._childs;
					this.obj = $luck;
					this.count = $units.length;
                    for(var i =0;i<this.count;i++){
                        $units[i].visible = false;
                    }
                    $units[this.index].visible = true;
				};
			},
			roll:function(){
				var index = this.index;
				var count = this.count;
				var luck = this.obj;
                for(var i=0;i<self.resultBox._childs.length;i++){
                    self.resultBox._childs[i].visible = false;
                }
				index += 1;
				if (index>count-1) {
					index = 0;
				};
                self.resultBox._childs[index].visible=true;
				this.index=index;
				return false;
			},
			stop:function(index){
				this.prize=index;
				return false;
			}
		};
        function roll(){
			luck.times += 1;
			luck.roll();
			if (luck.times > luck.cycle+10 && luck.prize==luck.index) {
				clearTimeout(luck.timer);
				luck.prize=-1;
				luck.times=0;
				click=false;
			}else{
				if (luck.times<luck.cycle) {
					luck.speed -= 10;
				}else if(luck.times==luck.cycle) {
					// var index = Math.random()*(luck.count)|0;
					luck.prize = result-1;
				}else{
					if (luck.times > luck.cycle+10 && ((luck.prize==0 && luck.index==7) || luck.prize==luck.index+1)) {
						luck.speed += 110;
					}else{
						luck.speed += 20;
					}
				}
				if (luck.speed<40) {
					luck.speed=40;
				};

				luck.timer = setTimeout(roll,luck.speed);
			}
			return false;
		}
        luck.init();
        luck.speed=100;
		roll();
    }
    // 更新下注总和
    _prototype.updateTableAllSum = function (index, number) {
        index -= 1
        this.tableAllSum._childs[index].visible = true
        var lastNumber = this.tableAllSum._childs[index]._childs[0].text || 0
        var newNumbber = parseInt(lastNumber) + parseInt(number)
        this.tableAllSum._childs[index]._childs[0].text = newNumbber
    }
       // 发送筹码请求
    _prototype.sendBetChipReq = function (index) {
        // console.log(index, this.currentChip)
        var message = Pb.GuessBetRequest.create({
            betPos: index,
            betCount: this.currentChip
        });
        Luck.send(packPbMsg2(Pb.Id.GuessBetRequest, Pb.GuessBetRequest.encode(message).finish()));
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
            console.log(msg.betPos);
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
        Luck.addHandle(new Luck.Handler(Pb.Id.GuessBetResponse, function (msg) {
            if (msg.msg) {
                Luck.alertView.show(msg.msg)
            } else {
                self.selfMoney.text = msg.coinCount
                Luck.selfUserInfo.coinCount = msg.coinCount
            }
        }));

        // 游戏结束
        Luck.addHandle(new Luck.Handler(Pb.Id.GuessGameOverBroadcast, (msg)=> {
            Luck.alertView.show('停止下注')
            self.turnOffChipBoard()
            self.showResult(msg.result);//显示结果列表
            // 
           
            // Luck.selfUserInfo.coinCount = msg.coinCount
            // console.log(msg.historyList);
            
            // 重置
            setTimeout(function () {
                self.selfMoney.text = msg.coinCount
                self.showLandRHirsory(msg)
                self.clearBtnClick();
                self.hiddenResult();
                var v = new OverBoardView(msg.userList)
                v.popup()
            }, 6000)

        }));
    }
    // 显示历史信息
    _prototype.showLandRHirsory = function (msg) {

        var self = this;
        // 清除之前所有的记录
        for(var i=0;i<self.historyList._childs.length;i++){
            this.historyList._childs[i].text ="";
        }
        // console.log(this);
        var result = msg.result;
        // console.log(result);
        // console.log(self.historyList._childs[0]);
        //  this.historyList._childs[16].text="123";
        //  this.historyList._childs[16]._style.color="#f40"
        if(result>0&&result<6){
            this.historyList._childs[0].text="小";
            this.historyList._childs[0]._style.color="#f9ce34"
            // this.historyList._childs[0]._style.color="#000"
        }else if(result>6&&result<12){
           this.historyList._childs[0].text="大";
            this.historyList._childs[0]._style.color="#f47c6b"
            //  this.historyList._childs[0]._style.color="#000"
        }else {
             this.historyList._childs[0].text="發";
            this.historyList._childs[0]._style.color="#3bc7c6"
        //    self.historyList._childs[0]._style.color="#000"
        }
        //    console.log(msg.historyList);
       var arr = msg.historyList||[];
       var count = arr.length;
        //    console.log(count);
       for(var i=count-1;i>-1;i--){
           var target = arr[i];
            if(target>0&&target<6){
                 this.historyList._childs[count-1-i].text = "小";
                // this.historyList._childs[count-1-i]._style.color="#000"
                 this.historyList._childs[count-1-i]._style.color="#f9ce34"
            }else if(target>6&&target<12){
                this.historyList._childs[count-1-i].text="大";
                // this.historyList._childs[count-1-i]._style.color="#000"
                 this.historyList._childs[count-1-i]._style.color="#f47c6b"
            }else{
                this.historyList._childs[count-1-i].text="發";
                // this.historyList._childs[count-1-i]._style.color="#000"
                 this.historyList._childs[count-1-i]._style.color="#3bc7c6"
            }
       }
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
        console.log(user);
        var dataArr = this.playerBox._childs
        // console.log(dataArr);
        if (user) {
            if (user.seatStatus == 2) {
                for (var i = 0; i < this.userAndPos.length; i++) {
                    var obj = this.userAndPos[i]
                    if (parseInt(obj.uid) == parseInt(user.uid)) {
                        obj.isSeat = false
                        obj.uid = ''
                        obj.entry._childs[1].text = '用戶名'
                        obj.entry._childs[0].skin = 'comp/round/board/circle1.png'
                        obj.entry._childs[0].scale(1,1)
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
        // console.log(pos, betCount)
        // var i = pos[0]
        // var direction = pos[1]
        // if (i == 1) {
        //     var circle = this.smallCircle
        // } else if (i == 2) {
        //     var circle = this.middleCircle
        // } else {
        //     var circle = this.bigCircle
        // }

        // var box = circle.getChildByName('resultBox')._childs[direction - 1]
        // box._childs[0].visible = true   // 显示金豆

        // this.updateTableAllSum(i, betCount)

        // var someone
        // for (var i = 0; i < this.userAndPos.length; i++) {
        //     var o = this.userAndPos[i]
        //     if (parseInt(o.uid) == who) {
        //         someone = o.entry
        //         break
        //     }
        // }

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
    // 更新历史记录
    _prototype.updateHistory = function (dataArr) {
        console.log(dataArr.length);
        var self = this;
        let historyBox = self.historyList;
        for(var i=dataArr.length-1;i>-1;i--){
            // console.log(dataArr[i]);
            var target = dataArr[i]-0;
            if(target>0&&target<6){
               historyBox._childs[dataArr.length-1-i]._text = "小";
               historyBox._childs[dataArr.length-1-i]._style.color="#f9ce34";
            }else if(target>6&&target<12){
                historyBox._childs[dataArr.length-1-i]._text = "大";
                historyBox._childs[dataArr.length-1-i]._style.color="#f47c6b";
            }else {
                historyBox._childs[dataArr.length-1-i]._text = "發";
                historyBox._childs[dataArr.length-1-i]._style.color="#3bc7c6";
            }
           
        }
        return dataArr
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
        console.log(dataArr)
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
        this.richRect.mouseEnabled = true
        this.smallRect.mouseEnabled = true
    }
    // 关闭下注
    _prototype.turnOffChipBoard = function () {
         this.bigRect.mouseEnabled = false;
        this.richRect.mouseEnabled = false;
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
   
    return Lucky;
})(ui.lucky.luckyUI);
