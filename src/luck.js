String.prototype.startWith = function (str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
}
String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}
var Luck = {
    // url:"ws://www.jskjjsql.cn:4565",
    // url:'ws://127.0.0.1:3653',
    // url: 'ws://192.168.1.108:3573',
    url:'ws://192.168.1.150:3573',
    baseUrl: '192.168.1.138/upload/',
    alertTimeoutArr: [],
    currentPage: -1,
    interface: function () { },
    version: 4,
    timerArr: [],
    clearTimer: function () {
        for (var i = 0; i < this.timerArr.length; i++) {
            clearInterval(this.timerArr[i])
        }
    },
    filterImgAddVersion: function (obj) {
        var viewArr = obj.child
        for (var i = 0; i < viewArr.length; i++) {
            var v = viewArr[i]
            if (v.type == 'Image' && v.props.skin) {
                var str = v.props.skin
                if (str.endWith('.png')) {
                    v.props.skin = str + '?v=' + Luck.version
                } else if (str.indexOf('?v=') > 0) {
                    var end = str.indexOf('?v=')
                    v.props.skin = str.slice(0, end)
                }
            }
        }
        return obj
    },
    preLoadCount: 0,
    sender: null,
    clearAlertTimeout: function () {
        for (var i = 0; i < Luck.alertTimeoutArr.length; i++) {
            clearTimeout(Luck.alertTimeoutArr[i])
        }
        Luck.alertView.x = (Laya.stage.width - Luck.alertView.width) / 2
        Luck.alertView.y = (Laya.stage.height - Luck.alertView.height) / 4 + 50
    },
    send: function (data) {
        Luck.sender.send(data);
    },
    handlers: [],
    addHandle: function (handler) {
        if (handler instanceof Luck.Handler) {
            //过滤相同的key，不能重复添加
            for (var i = 0, len = Luck.handlers.length; i < len; i++) {

                if (Luck.handlers[i] != undefined) {
                    if (Luck.handlers[i].key == handler.key) {
                        Luck.handlers.splice(i, 1)
                        // console.log(Luck.handlers[i].key)
                        // console.log(Luck.handlers)
                    }
                }
            }
            Luck.handlers.push(handler)
            return Luck.handlers;
        } else {
            throw 'Argument hander must be instance of Luck.Handler !';
        }
    },
    //兼容开发者的书写错误
    addHandler: function (handler) {
        Luck.addHandle(handler);
    },
     
}