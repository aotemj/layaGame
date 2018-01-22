
var WarHistoryView = (function (_super) {

    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function WarHistory() {
        WarHistory.super(this);

        this.list.vScrollBarSkin = ''
        this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnClick)
        this.init()
    }
    Laya.class(WarHistory, 'WarHistory', _super);
    var _prototype = WarHistory.prototype
    // 初始化
    _prototype.init = function () {
        var arr = []
        for (var i = 0; i < 15; i++) {
            arr.push({
                // img:{skin:''}
                time: { text: new Date() },
                money: { text: 10000 + i }
            })
        }
        this.list.dataSource = arr
    }
    _prototype.closeBtnClick = function () {
        this.close()
    }

 

    return WarHistory;
})(ui.twelve.warHistoryUI);
