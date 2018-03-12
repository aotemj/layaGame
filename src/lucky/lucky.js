
var LuckyView = (function (_super) {
//    _super.uiView = Luck.filterImgAddVersion(_super.uiView)

   function Lucky() {
        Lucky.super(this);
        // this.productList.vScrollBarSkin = ''
        // this.currentChip = 0
        // this.msg = msg
        
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
        
        // this.pieaArr.on(Laya.Event.CLICK,this,this.pieBtnClick);
        // this.startBtn.on(Laya.Event.CLICK,this,this.startBtnClick);//开始游戏
        this.init()
    }
     Laya.class(Lucky, 'Lucky', _super);
    var _prototype = Lucky.prototype
    // 初始化
     _prototype.init = function () {
         var self = this;
         console.log('init');
        //  console.log(this.maskBox._childs[0]);
        //  this.maskBox._childs[0].visible = false;
        //  隐藏结果
        // this.resultBox._childs.forEach((item,index)=>{
        //     item.visible = false;
        // });
        //  this.hiddenMask(1);
        //  console.dir(this.pieArr);

        // var self = this
        // var msg = this.msg
        // self.turnOffChipBoard()
        
     }

    //  遮罩点击：
    _prototype.maskClick = function(){
        // console.log(this.maskBox._childs[index])
        console.log('123');
    }
    // 开始游戏
    _prototype.startBtnClick=function(){
        console.log("开始游戏");
        var self = this;
       
        var bigIndex =0,middleIndex=0,smallIndex=0;
        // this.bigCircle.visible = false;
        console.log(this.bigCircle);
        
        // 旋转
        // 大圆
        // var　bigCircleTime = setInterval(()=>{
        //     bigIndex +=10;
        //     this.bigCircle.rotation = bigIndex;
        // },15)
        // 中圆
        // var middleCircleTime = setInterval(()=>{
        //     middleIndex +=2;
        //     this.middleCircle.rotation = middleIndex;
        // })
        // 小圆
        // var smallCircleTime = setInterval(()=>{
        //     smallIndex +=1;
        //     this.smallCircle.rotation = smallIndex;
        // })
    }
    // 隐藏结果
    // _prototype.hiddenMask = function(index){
    //     this.resultBox._childs[index].visible = false;
    // }
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
   
   
    return Lucky;
})(ui.lucky.luckyUI);
