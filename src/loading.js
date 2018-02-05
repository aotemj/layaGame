
var LoadingView = (function (_super) {

    _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function Loading() {
        Loading.super(this);
        this.init()
    }
    Laya.class(Loading, 'Loading', _super);
    var _prototype = Loading.prototype
    // 初始化
    _prototype.init = function () {
        var self = this

        var list = [
            'comp/login/bg.png',
            'comp/login/logo.png',
            'comp/round/alert/弹窗.png',
            'comp/round/alert/bg-拷贝.png',
            'comp/round/alert/金豆-拷贝.png',
            'comp/round/board/bg.png',
            'comp/round/board/back.png',
            'comp/round/board/chongzhi.png',
            'comp/round/board/chouma.png',
            'comp/round/board/chouma-zz.png',
            'comp/round/board/dierceng.png',
            'comp/round/board/disanceng.png',
            'comp/round/board/ewai.png',
            'comp/round/board/headbg.png',
            'comp/round/board/jindoubg.png',
            'comp/round/board/ren.png',
            'comp/round/board/shuxin.png',
            'comp/round/board/shuyingjiu.png',
            'comp/round/board/zhongjian.png',
            'comp/round/board/zuiwai.png',
            'comp/round/board/zuoce.png',
        ]

        for (var i = 0; i < list.length; i++) {
            list[i] = list[i] + '?v=' + Luck.version
            Laya.loader.load(list[i], Laya.Handler.create(this, finished))
        }
        function finished(e) {
            Luck.preLoadCount++
            
            var n = (Luck.preLoadCount * 100 / (list.length * 3))
            n = parseInt(n)
            n = n < 10 ? ('0' + n) : n
            n = n > 30 ? 30 : n
            console.log(n)
            self.img.skin = 'comp/loading/jiazai_000' + n + '.png'
            if (Luck.preLoadCount == list.length) {
                self.removeSelf()
                Luck.alertView.show('完成')
                console.log('完成')
                Luck.loginView = new LoginView()
                Laya.stage.addChild(Luck.loginView)
            }
        }
    }

    return Loading;
})(ui.loading.loadingUI);
