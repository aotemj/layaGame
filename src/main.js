var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;



Laya.init(720, 1180);
Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);


function onAssetLoaded() {
    //设置适配模式
    // ["noscale", "exactfit", "showall", "noborder", "full", "fixedwidth", "fixedheight"];
    Laya.stage.scaleMode = "fixedwidth";
    //设置水平对齐
    Laya.stage.alignH = "center";
    //设置垂直对齐
    Laya.stage.alignV = "middle";
    Laya.stage.bgColor = '#fff'

    Luck.alertView = new AlertView()

    Luck.indexView = new IndexView()
    Laya.stage.addChild(Luck.indexView)

    // var path = '../bin/res/loading/img.json'
    // Laya.loader.load(path, Laya.Handler.create(this, animationFinish, null), null, Laya.Loader.ATLAS);
    // var ani = new Laya.Animation();
    // ani.loadAtlas(path); // 加载图集动画
    // ani.interval = 50;			// 设置播放间隔（单位：毫秒）
    // ani.index = 0; 				// 当前播放索引
    // ani.play();
    // ani.pos((Laya.stage.width - 360) / 2, (Laya.stage.height-340) / 2);
    // Laya.stage.addChild(ani);

}
function animationFinish() {
    console.log(1)
}
var list = [

]

for (var i = 0; i < list.length; i++) {
    list[i] = list[i] + '?v=' + Luck.version
    Laya.loader.load(list[i], Laya.Handler.create(this, finished))
}
function finished(e) {
    Luck.preLoadCount++
    if (Luck.preLoadCount == list.length) {
        Luck.alertView.show('完成')
        console.log('完成')
        // Luck.loginView = new LoginView()
        // Laya.stage.addChild(Luck.loginView)
    }
}









