Luck.buffer2Object = function (msg) {
    var b = new Laya.Byte();
    b.clear();
    b.writeArrayBuffer(msg);//把接收到的二进制数据读进byte数组便于解析。
    b.pos = 0;//设置偏移指针；
    msg_uint8s = b._u8d_;
    id_arr = msg_uint8s.subarray(0,2)
    data_arr = msg_uint8s.subarray(2, msg.length)
    return [Uint8Array2Int(id_arr), data_arr]
};

/**
 * data:要发送的数据,可以是任何数据类型，不需要做JSON.stringfy处理
 * receive:接收到数据后的回调函数
 * err:出错时的回调函数
 * close:连接关闭时的回调函数
 * debug:开启debug，将在控制打印连接每一步骤
 * @example:
 * Luck.connect({
    data:{Hello:{Name:'Luck'}},
    debug:false,
    receive:function(msg){
        console.log(msg)
    }
});
 */
Luck.connect = function (option) {
    var url = Luck.url;
    var interface = Luck.interface;
    var receive = option.receive || interface;
    var err = option.err || interface;
    var close = option.close || interface;
    var open = option.open || interface;
    var data = option.data;
    var debug = option.debug || false;
 
    function __debug() {
        if (debug) {
            for (var i = 0, len = arguments.length; i < len; i++) {
                console.log(arguments[i]);
            }
        }
    }

    var b = this.byte = new Laya.Byte();
    this.byte.endian = Laya.Byte.BIG_ENDIAN;
    var s = this.socket = new Laya.Socket();
    this.socket.endian = Laya.Byte.BIG_ENDIAN;
    //建立连接
    console.log('尝试连接')
    this.socket.connectByUrl(url);
    this.socket.on(Laya.Event.OPEN, this, openHandler);
    this.socket.on(Laya.Event.MESSAGE, this, receiveHandler);
    this.socket.on(Laya.Event.CLOSE, this, closeHandler);
    this.socket.on(Laya.Event.ERROR, this, errorHandler);

    function openHandler(event) {
        // console.log("openHandler");
        // __debug("open:", event.currentTarget);
        // __debug("send:", typeof data);
        open();
        //s.send(data);
    }
    function receiveHandler(msg) {
        ///接收到数据触发函数
        msg_arr = Luck.buffer2Object(msg);
        msg_id = msg_arr[0]
        msg_buf = msg_arr[1]
        if (msg_id != 3) {
            __debug('receive data:', msg_id, Pb.getObjById(msg_id).decode(data_arr));
        }
        
        Luck.handlers.forEach(function (ele) {
            var key = ele.getKey();
            if (msg_id == key) {
                ele.handle(msg_buf);
            }
        });
        receive(msg);
    }
    function closeHandler(e) {
        //关闭事件
        __debug('close:', e);
        close(e);
    }
    function errorHandler(e) {
        //连接出错
        __debug('error:', e);
        err(e);
    }

    return new function () {
        this.send = function (data) {
            s.send(data);
        };
    };
};
