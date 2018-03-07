
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
        var self = this
        var message = Pb.GameResultListRequest.create({
            gameTypeId: 1,
        });
        Luck.send(packPbMsg2(Pb.Id.GameResultListRequest, Pb.GameResultListRequest.encode(message).finish()));

        Luck.addHandle(new Luck.Handler(Pb.Id.GameresultListResponse, function (msg) {
            var dataArr = msg.resultList
            var arr = []
            for (var i = 0; i < dataArr.length; i++) {
                var game = dataArr[i]
                arr.push({
                    img:{skin:'comp/headImg/'+Luck.selfUserInfo.avatarId+'.png'},
                    time: { text:  game.gameTime },
                    money: { text: game.gameScore }
                })
            }
            self.list.dataSource = arr
        }));
    }
    _prototype.closeBtnClick = function () {
        this.close()
    }



    return WarHistory;
})(ui.guess.warHistoryUI);
