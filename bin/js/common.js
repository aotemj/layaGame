function Int2Uint8Array(val) {
    var uint8s = new Uint8Array(2)
    if (val > 255) {
        uint8s[0] = val>>8
        uint8s[1] = val - (uint8s[0]<<8)
    } else {
        uint8s[1] = val
    }
    return uint8s
}
function Uint8Array2Int(uint8s) {
    return (uint8s[0]<<8) + uint8s[1]
}

function concatUint8Array(uint8s1, uint8s2) {
    var uint8s = new Uint8Array(uint8s1.length + uint8s2.length)
    let index = 0
    for(let i=0; i<uint8s1.length; i++) {
        uint8s[index] = uint8s1[i]
        index++
    }
    for(let i=0; i<uint8s2.length; i++) {
        uint8s[index] = uint8s2[i]
        index++
    }
    return uint8s
}
function packPbMsg2(msg_id, uint8_arr) {
    let id_arr = Int2Uint8Array(msg_id)
    return concatUint8Array(id_arr, uint8_arr)
}
function packPbMsg(msg_id, uint8_arr) {
    let msg_len = uint8_arr.length + 2
    let id_arr = Int2Uint8Array(msg_id)
    let len_arr = Int2Uint8Array(msg_len)
    head_arr = concatUint8Array(len_arr, id_arr)
    return concatUint8Array(head_arr, uint8_arr)
}

function Byte2Uint8Array(msg) {
    id_arr = msg.subarray(0,2)
    data_arr = msg.subarray(2, msg.length)
    //pb_obj = Pb.getObjById(Uint8Array2Int(id_arr))
    //var message = pb_obj.decode(data_arr);
    //console.log("message", message)
    return Uint8Array2Int(id_arr)
}

