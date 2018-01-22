Luck.Handler = (function () {
    function Handler(key, handleFunc) {
        this.key = key;
        this.handleFunc = handleFunc ? handleFunc : function () { };
    }

    __proto = Handler.prototype;

    __proto.handle = function (msg) {
        this.handleFunc(msg);
    };

    __proto.getKey = function () {
        return this.key;
    };

    return Handler;
})();


// var h = new Luck.Handler(Pb.Id.CheckinResponse, function (msg) {
//     Luck.connectSuccess = 1
// <<<<<<< HEAD
//     var message = Pb.getObjById(Pb.Id.CheckinResponse).decode(data_arr);
//     console.log("网络延迟", parseInt(new Date().getTime()/1000) - message.timestamp)
// =======
//     console.log("网络延迟", parseInt(new Date().getTime()/1000) - msg.timestamp)
// >>>>>>> 1479b316d84948c30e49a423223fc982b6b21b4e
// })
// Luck.addHandle(h);

//心跳
Luck.addHandle(new Luck.Handler(Pb.Id.HeartBeatRequest, function (msg) {

    var message = Pb.getObjById(Pb.Id.HeartBeatRequest).decode(data_arr);
    var resp = Pb.HeartBeatResponse.create({ heartBeatId: message.heartBeatId });

    var resp = Pb.HeartBeatResponse.create({ heartBeatId: msg.heartBeatId });

    Luck.send(packPbMsg2(Pb.Id.HeartBeatResponse, Pb.HeartBeatResponse.encode(resp).finish()));
}));
