
var OverBoardView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function OverBoard(dataArr) {
        OverBoard.super(this);
        this.dataArr = dataArr
        this.list.vScrollBarSkin = ''
        this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnClick)
        this.init()
    }
    Laya.class(OverBoard, 'OverBoard', _super);
    var _prototype = OverBoard.prototype
    // 初始化
    _prototype.init = function () {
        var self = this
        var arr = []
        for (var i = 0; i < this.dataArr.length; i++) {
            var user = this.dataArr[i]
            arr.push({
                img: { skin: 'comp/headImg/' + user.avatarId + '.png' },
                name: { text: user.nickname },
                money: { text: user.roundScore ? user.roundScore : 0, color: parseInt(user.roundScore) > 0 ? 'yellow' : '#fff' }
            })
        }
        this.list.dataSource = arr
        this.timeout = setTimeout(function() {
            self.close()
        }, 3000);
    }
    _prototype.closeBtnClick = function () {
        this.close()
        if(this.timeout){
            clearTimeout(this.timeout)
        }
    }


    return OverBoard;
})(ui.twelve.overBoardUI);
