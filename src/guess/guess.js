
var GuessView = (function (_super) {
   _super.uiView = Luck.filterImgAddVersion(_super.uiView)

   function Guess(msg) {
        Guess.super(this);
        // this.productList.vScrollBarSkin = ''
        // this.currentChip = 0
        this.msg = msg
        this.userAndPos = []
        this.backBtn.on(Laya.Event.CLICK, this, this.backBtnClick)
        // this.menuBtn.on(Laya.Event.CLICK, this, this.menuBtnClick)
        // this.bigCircle.on(Laya.Event.CLICK, this, this.bigCircleClick)
        // this.middleCircle.on(Laya.Event.CLICK, this, this.middleCircleClick)
        // this.smallCircle.on(Laya.Event.CLICK, this, this.smallCircleClick)
        this.init()
    }
     Laya.class(Guess, 'Guess', _super);
    var _prototype = Guess.prototype
    // 初始化
     _prototype.init = function () {
        var self = this
        var msg = this.msg
        
     }
     
    return Guess;
})(ui.guess.guessUI);
