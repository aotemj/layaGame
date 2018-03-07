var Pb = (function () {
    let unique
    function getInstance() {
        if (unique === undefined) {
            unique = new Construct()
        }
        return unique
    }
    function Construct() {
        this.Hello
        this.CheckinRequest
        this.CheckinResponse
        this.HeartBeatRequest
        this.HeartBeatResponse
        this.PingRequest
        this.PingResponse
        this.GameRollNoticeBroadcast
        this.CommonInfoRequest
        this.CommonInfoResponse
        this.AuthMessageRequest
        this.AuthMessageResponse
        this.AuthMessageReadRequest
        this.AuthMessageReadResponse
        this.AuthMessageNotification
        this.RegisterRequest
        this.RegisterResponse
        this.ModifyPasswdRequest
        this.ModifyPasswdResponse
        this.ModifyNicknameRequest
        this.ModifyNicknameResponse
        this.ModifyAvatarRequest
        this.ModifyAvatarResponse
        this.TelephoneCodeRequest
        this.TelephoneCodeResponse
        this.FindPasswordRequest
        this.FindPasswordResponse
        this.NicknameCheckRequest
        this.NicknameCheckResponse
        this.LoginRequest
        this.LoginResponse
        this.UserKickOutMessage
        this.RoomUserInfoBroadcast
        this.RoomChatRequest
        this.RoomChatResponse
        this.RoomChatBroadcast
        this.RoomLeaveRequest
        this.RoomLeaveResponse
        this.SignRewardRequest
        this.SignRewardResponse
        this.GetReliefMoneyRequest
        this.GetReliefMoneyResponse
        this.AgentTranferRequest
        this.AgentTranferResponse
        this.MallItemListRequest
        this.MallItemListResponse
        this.MallOrderRequest
        this.MallOrderResponse
        this.MallOrderListRequest
        this.MallOrderListResponse
        this.GameBeginNotification
        this.GameCleanBetRequest
        this.GameCleanBetResponse
        this.GameResultListRequest
        this.GameresultListResponse
        this.Lucky12EnterRoomRequest
        this.Lucky12EnterRoomResponse
        this.Lucky12BetRequest
        this.Lucky12BetResponse
        this.Lucky12BetBroadcast
        this.Lucky12GameOverBroadcast
        this.GuessEnterRoomRequest
        this.GuessEnterRoomResponse
        this.GuessBetRequest
        this.GuessBetResponse
        this.GuessBetBroadcast
        this.GuessGameOverBroadcast
        this.New666EnterRoomRequest
        this.New666EnterRoomResponse
        this.New666BetRequest
        this.New666BetResponse
        this.New666BetBroadcast
        this.New666GameOverBroadcast
        this.LlzEnterRoomRequest
        this.LlzEnterRoomResponse
        this.LlzBetRequest
        this.LlzBetResponse
        this.LlzBeginRequest
        this.LlzBeginResponse
        this.AddressListRequest
        this.AddressListResponse
        this.AddressUpdateRequest
        this.AddressUpdateResponse
        this.AddressDefaultRequest
        this.AddressDefaultResponse
        this.AddressDeleteRequest
        this.AddressDeleteResponse
        
        this.Id = (function () {
            let u2
            function getInstance() {
                if (u2 === undefined) {
                    u2 = new Construct()
                }
                return u2
            }
            function Construct() {
                this.Hello = 0
                this.CheckinRequest = 1
                this.CheckinResponse = 2
                this.HeartBeatRequest = 3
                this.HeartBeatResponse = 4
                this.PingRequest = 5
                this.PingResponse = 6
                this.GameRollNoticeBroadcast = 7
                this.CommonInfoRequest = 8
                this.CommonInfoResponse = 9
                this.AuthMessageRequest = 10
                this.AuthMessageResponse = 11
                this.AuthMessageReadRequest = 12
                this.AuthMessageReadResponse = 13
                this.AuthMessageNotification = 14
                this.RegisterRequest = 15
                this.RegisterResponse = 16
                this.ModifyPasswdRequest = 17
                this.ModifyPasswdResponse = 18
                this.ModifyNicknameRequest = 19
                this.ModifyNicknameResponse = 20
                this.ModifyAvatarRequest = 21
                this.ModifyAvatarResponse = 22
                this.TelephoneCodeRequest = 23
                this.TelephoneCodeResponse = 24
                this.FindPasswordRequest = 25
                this.FindPasswordResponse = 26
                this.NicknameCheckRequest = 27
                this.NicknameCheckResponse = 28
                this.LoginRequest = 29
                this.LoginResponse = 30
                this.UserKickOutMessage = 31
                this.RoomUserInfoBroadcast = 32
                this.RoomChatRequest = 33
                this.RoomChatResponse = 34
                this.RoomChatBroadcast = 35
                this.RoomLeaveRequest = 36
                this.RoomLeaveResponse = 37
                this.SignRewardRequest = 38
                this.SignRewardResponse = 39
                this.GetReliefMoneyRequest = 40
                this.GetReliefMoneyResponse = 41
                this.AgentTranferRequest = 42
                this.AgentTranferResponse = 43
                this.MallItemListRequest = 44
                this.MallItemListResponse = 45
                this.MallOrderRequest = 46
                this.MallOrderResponse = 47
                this.MallOrderListRequest = 48
                this.MallOrderListResponse = 49
                this.GameBeginNotification = 50
                this.GameCleanBetRequest = 51
                this.GameCleanBetResponse = 52
                this.GameResultListRequest = 53
                this.GameresultListResponse = 54
                this.Lucky12EnterRoomRequest = 55
                this.Lucky12EnterRoomResponse = 56
                this.Lucky12BetRequest = 57
                this.Lucky12BetResponse = 58
                this.Lucky12BetBroadcast = 59
                this.Lucky12GameOverBroadcast = 60
                this.GuessEnterRoomRequest = 61
                this.GuessEnterRoomResponse = 62
                this.GuessBetRequest = 63
                this.GuessBetResponse = 64
                this.GuessBetBroadcast = 65
                this.GuessGameOverBroadcast = 66
                this.New666EnterRoomRequest = 67
                this.New666EnterRoomResponse = 68
                this.New666BetRequest = 69
                this.New666BetResponse = 70
                this.New666BetBroadcast = 71
                this.New666GameOverBroadcast = 72
                this.LlzEnterRoomRequest = 73
                this.LlzEnterRoomResponse = 74
                this.LlzBetRequest = 75
                this.LlzBetResponse = 76
                this.LlzBeginRequest = 77
                this.LlzBeginResponse = 78
                this.AddressListRequest = 79
                this.AddressListResponse = 80
                this.AddressUpdateRequest = 81
                this.AddressUpdateResponse = 82
                this.AddressDefaultRequest = 83
                this.AddressDefaultResponse = 84
                this.AddressDeleteRequest = 85
                this.AddressDeleteResponse = 86
                
            }
            return getInstance()
        })();
    }
    Construct.prototype.init = function(root) {
        this.Hello  = root.lookup("proto_msg.Hello")
        this.CheckinRequest  = root.lookup("proto_msg.CheckinRequest")
        this.CheckinResponse  = root.lookup("proto_msg.CheckinResponse")
        this.HeartBeatRequest  = root.lookup("proto_msg.HeartBeatRequest")
        this.HeartBeatResponse  = root.lookup("proto_msg.HeartBeatResponse")
        this.PingRequest  = root.lookup("proto_msg.PingRequest")
        this.PingResponse  = root.lookup("proto_msg.PingResponse")
        this.GameRollNoticeBroadcast  = root.lookup("proto_msg.GameRollNoticeBroadcast")
        this.CommonInfoRequest  = root.lookup("proto_msg.CommonInfoRequest")
        this.CommonInfoResponse  = root.lookup("proto_msg.CommonInfoResponse")
        this.AuthMessageRequest  = root.lookup("proto_msg.AuthMessageRequest")
        this.AuthMessageResponse  = root.lookup("proto_msg.AuthMessageResponse")
        this.AuthMessageReadRequest  = root.lookup("proto_msg.AuthMessageReadRequest")
        this.AuthMessageReadResponse  = root.lookup("proto_msg.AuthMessageReadResponse")
        this.AuthMessageNotification  = root.lookup("proto_msg.AuthMessageNotification")
        this.RegisterRequest  = root.lookup("proto_msg.RegisterRequest")
        this.RegisterResponse  = root.lookup("proto_msg.RegisterResponse")
        this.ModifyPasswdRequest  = root.lookup("proto_msg.ModifyPasswdRequest")
        this.ModifyPasswdResponse  = root.lookup("proto_msg.ModifyPasswdResponse")
        this.ModifyNicknameRequest  = root.lookup("proto_msg.ModifyNicknameRequest")
        this.ModifyNicknameResponse  = root.lookup("proto_msg.ModifyNicknameResponse")
        this.ModifyAvatarRequest  = root.lookup("proto_msg.ModifyAvatarRequest")
        this.ModifyAvatarResponse  = root.lookup("proto_msg.ModifyAvatarResponse")
        this.TelephoneCodeRequest  = root.lookup("proto_msg.TelephoneCodeRequest")
        this.TelephoneCodeResponse  = root.lookup("proto_msg.TelephoneCodeResponse")
        this.FindPasswordRequest  = root.lookup("proto_msg.FindPasswordRequest")
        this.FindPasswordResponse  = root.lookup("proto_msg.FindPasswordResponse")
        this.NicknameCheckRequest  = root.lookup("proto_msg.NicknameCheckRequest")
        this.NicknameCheckResponse  = root.lookup("proto_msg.NicknameCheckResponse")
        this.LoginRequest  = root.lookup("proto_msg.LoginRequest")
        this.LoginResponse  = root.lookup("proto_msg.LoginResponse")
        this.UserKickOutMessage  = root.lookup("proto_msg.UserKickOutMessage")
        this.RoomUserInfoBroadcast  = root.lookup("proto_msg.RoomUserInfoBroadcast")
        this.RoomChatRequest  = root.lookup("proto_msg.RoomChatRequest")
        this.RoomChatResponse  = root.lookup("proto_msg.RoomChatResponse")
        this.RoomChatBroadcast  = root.lookup("proto_msg.RoomChatBroadcast")
        this.RoomLeaveRequest  = root.lookup("proto_msg.RoomLeaveRequest")
        this.RoomLeaveResponse  = root.lookup("proto_msg.RoomLeaveResponse")
        this.SignRewardRequest  = root.lookup("proto_msg.SignRewardRequest")
        this.SignRewardResponse  = root.lookup("proto_msg.SignRewardResponse")
        this.GetReliefMoneyRequest  = root.lookup("proto_msg.GetReliefMoneyRequest")
        this.GetReliefMoneyResponse  = root.lookup("proto_msg.GetReliefMoneyResponse")
        this.AgentTranferRequest  = root.lookup("proto_msg.AgentTranferRequest")
        this.AgentTranferResponse  = root.lookup("proto_msg.AgentTranferResponse")
        this.MallItemListRequest  = root.lookup("proto_msg.MallItemListRequest")
        this.MallItemListResponse  = root.lookup("proto_msg.MallItemListResponse")
        this.MallOrderRequest  = root.lookup("proto_msg.MallOrderRequest")
        this.MallOrderResponse  = root.lookup("proto_msg.MallOrderResponse")
        this.MallOrderListRequest  = root.lookup("proto_msg.MallOrderListRequest")
        this.MallOrderListResponse  = root.lookup("proto_msg.MallOrderListResponse")
        this.GameBeginNotification  = root.lookup("proto_msg.GameBeginNotification")
        this.GameCleanBetRequest  = root.lookup("proto_msg.GameCleanBetRequest")
        this.GameCleanBetResponse  = root.lookup("proto_msg.GameCleanBetResponse")
        this.GameResultListRequest  = root.lookup("proto_msg.GameResultListRequest")
        this.GameresultListResponse  = root.lookup("proto_msg.GameresultListResponse")
        this.Lucky12EnterRoomRequest  = root.lookup("proto_msg.Lucky12EnterRoomRequest")
        this.Lucky12EnterRoomResponse  = root.lookup("proto_msg.Lucky12EnterRoomResponse")
        this.Lucky12BetRequest  = root.lookup("proto_msg.Lucky12BetRequest")
        this.Lucky12BetResponse  = root.lookup("proto_msg.Lucky12BetResponse")
        this.Lucky12BetBroadcast  = root.lookup("proto_msg.Lucky12BetBroadcast")
        this.Lucky12GameOverBroadcast  = root.lookup("proto_msg.Lucky12GameOverBroadcast")
        this.GuessEnterRoomRequest  = root.lookup("proto_msg.GuessEnterRoomRequest")
        this.GuessEnterRoomResponse  = root.lookup("proto_msg.GuessEnterRoomResponse")
        this.GuessBetRequest  = root.lookup("proto_msg.GuessBetRequest")
        this.GuessBetResponse  = root.lookup("proto_msg.GuessBetResponse")
        this.GuessBetBroadcast  = root.lookup("proto_msg.GuessBetBroadcast")
        this.GuessGameOverBroadcast  = root.lookup("proto_msg.GuessGameOverBroadcast")
        this.New666EnterRoomRequest  = root.lookup("proto_msg.New666EnterRoomRequest")
        this.New666EnterRoomResponse  = root.lookup("proto_msg.New666EnterRoomResponse")
        this.New666BetRequest  = root.lookup("proto_msg.New666BetRequest")
        this.New666BetResponse  = root.lookup("proto_msg.New666BetResponse")
        this.New666BetBroadcast  = root.lookup("proto_msg.New666BetBroadcast")
        this.New666GameOverBroadcast  = root.lookup("proto_msg.New666GameOverBroadcast")
        this.LlzEnterRoomRequest  = root.lookup("proto_msg.LlzEnterRoomRequest")
        this.LlzEnterRoomResponse  = root.lookup("proto_msg.LlzEnterRoomResponse")
        this.LlzBetRequest  = root.lookup("proto_msg.LlzBetRequest")
        this.LlzBetResponse  = root.lookup("proto_msg.LlzBetResponse")
        this.LlzBeginRequest  = root.lookup("proto_msg.LlzBeginRequest")
        this.LlzBeginResponse  = root.lookup("proto_msg.LlzBeginResponse")
        this.AddressListRequest  = root.lookup("proto_msg.AddressListRequest")
        this.AddressListResponse  = root.lookup("proto_msg.AddressListResponse")
        this.AddressUpdateRequest  = root.lookup("proto_msg.AddressUpdateRequest")
        this.AddressUpdateResponse  = root.lookup("proto_msg.AddressUpdateResponse")
        this.AddressDefaultRequest  = root.lookup("proto_msg.AddressDefaultRequest")
        this.AddressDefaultResponse  = root.lookup("proto_msg.AddressDefaultResponse")
        this.AddressDeleteRequest  = root.lookup("proto_msg.AddressDeleteRequest")
        this.AddressDeleteResponse  = root.lookup("proto_msg.AddressDeleteResponse")
        
    }

    Construct.prototype.getObjById = function(msg_id) {
        if (msg_id == this.Id.Hello) { return this.Hello }
        if (msg_id == this.Id.CheckinRequest) { return this.CheckinRequest }
        if (msg_id == this.Id.CheckinResponse) { return this.CheckinResponse }
        if (msg_id == this.Id.HeartBeatRequest) { return this.HeartBeatRequest }
        if (msg_id == this.Id.HeartBeatResponse) { return this.HeartBeatResponse }
        if (msg_id == this.Id.PingRequest) { return this.PingRequest }
        if (msg_id == this.Id.PingResponse) { return this.PingResponse }
        if (msg_id == this.Id.GameRollNoticeBroadcast) { return this.GameRollNoticeBroadcast }
        if (msg_id == this.Id.CommonInfoRequest) { return this.CommonInfoRequest }
        if (msg_id == this.Id.CommonInfoResponse) { return this.CommonInfoResponse }
        if (msg_id == this.Id.AuthMessageRequest) { return this.AuthMessageRequest }
        if (msg_id == this.Id.AuthMessageResponse) { return this.AuthMessageResponse }
        if (msg_id == this.Id.AuthMessageReadRequest) { return this.AuthMessageReadRequest }
        if (msg_id == this.Id.AuthMessageReadResponse) { return this.AuthMessageReadResponse }
        if (msg_id == this.Id.AuthMessageNotification) { return this.AuthMessageNotification }
        if (msg_id == this.Id.RegisterRequest) { return this.RegisterRequest }
        if (msg_id == this.Id.RegisterResponse) { return this.RegisterResponse }
        if (msg_id == this.Id.ModifyPasswdRequest) { return this.ModifyPasswdRequest }
        if (msg_id == this.Id.ModifyPasswdResponse) { return this.ModifyPasswdResponse }
        if (msg_id == this.Id.ModifyNicknameRequest) { return this.ModifyNicknameRequest }
        if (msg_id == this.Id.ModifyNicknameResponse) { return this.ModifyNicknameResponse }
        if (msg_id == this.Id.ModifyAvatarRequest) { return this.ModifyAvatarRequest }
        if (msg_id == this.Id.ModifyAvatarResponse) { return this.ModifyAvatarResponse }
        if (msg_id == this.Id.TelephoneCodeRequest) { return this.TelephoneCodeRequest }
        if (msg_id == this.Id.TelephoneCodeResponse) { return this.TelephoneCodeResponse }
        if (msg_id == this.Id.FindPasswordRequest) { return this.FindPasswordRequest }
        if (msg_id == this.Id.FindPasswordResponse) { return this.FindPasswordResponse }
        if (msg_id == this.Id.NicknameCheckRequest) { return this.NicknameCheckRequest }
        if (msg_id == this.Id.NicknameCheckResponse) { return this.NicknameCheckResponse }
        if (msg_id == this.Id.LoginRequest) { return this.LoginRequest }
        if (msg_id == this.Id.LoginResponse) { return this.LoginResponse }
        if (msg_id == this.Id.UserKickOutMessage) { return this.UserKickOutMessage }
        if (msg_id == this.Id.RoomUserInfoBroadcast) { return this.RoomUserInfoBroadcast }
        if (msg_id == this.Id.RoomChatRequest) { return this.RoomChatRequest }
        if (msg_id == this.Id.RoomChatResponse) { return this.RoomChatResponse }
        if (msg_id == this.Id.RoomChatBroadcast) { return this.RoomChatBroadcast }
        if (msg_id == this.Id.RoomLeaveRequest) { return this.RoomLeaveRequest }
        if (msg_id == this.Id.RoomLeaveResponse) { return this.RoomLeaveResponse }
        if (msg_id == this.Id.SignRewardRequest) { return this.SignRewardRequest }
        if (msg_id == this.Id.SignRewardResponse) { return this.SignRewardResponse }
        if (msg_id == this.Id.GetReliefMoneyRequest) { return this.GetReliefMoneyRequest }
        if (msg_id == this.Id.GetReliefMoneyResponse) { return this.GetReliefMoneyResponse }
        if (msg_id == this.Id.AgentTranferRequest) { return this.AgentTranferRequest }
        if (msg_id == this.Id.AgentTranferResponse) { return this.AgentTranferResponse }
        if (msg_id == this.Id.MallItemListRequest) { return this.MallItemListRequest }
        if (msg_id == this.Id.MallItemListResponse) { return this.MallItemListResponse }
        if (msg_id == this.Id.MallOrderRequest) { return this.MallOrderRequest }
        if (msg_id == this.Id.MallOrderResponse) { return this.MallOrderResponse }
        if (msg_id == this.Id.MallOrderListRequest) { return this.MallOrderListRequest }
        if (msg_id == this.Id.MallOrderListResponse) { return this.MallOrderListResponse }
        if (msg_id == this.Id.GameBeginNotification) { return this.GameBeginNotification }
        if (msg_id == this.Id.GameCleanBetRequest) { return this.GameCleanBetRequest }
        if (msg_id == this.Id.GameCleanBetResponse) { return this.GameCleanBetResponse }
        if (msg_id == this.Id.GameResultListRequest) { return this.GameResultListRequest }
        if (msg_id == this.Id.GameresultListResponse) { return this.GameresultListResponse }
        if (msg_id == this.Id.Lucky12EnterRoomRequest) { return this.Lucky12EnterRoomRequest }
        if (msg_id == this.Id.Lucky12EnterRoomResponse) { return this.Lucky12EnterRoomResponse }
        if (msg_id == this.Id.Lucky12BetRequest) { return this.Lucky12BetRequest }
        if (msg_id == this.Id.Lucky12BetResponse) { return this.Lucky12BetResponse }
        if (msg_id == this.Id.Lucky12BetBroadcast) { return this.Lucky12BetBroadcast }
        if (msg_id == this.Id.Lucky12GameOverBroadcast) { return this.Lucky12GameOverBroadcast }
        if (msg_id == this.Id.GuessEnterRoomRequest) { return this.GuessEnterRoomRequest }
        if (msg_id == this.Id.GuessEnterRoomResponse) { return this.GuessEnterRoomResponse }
        if (msg_id == this.Id.GuessBetRequest) { return this.GuessBetRequest }
        if (msg_id == this.Id.GuessBetResponse) { return this.GuessBetResponse }
        if (msg_id == this.Id.GuessBetBroadcast) { return this.GuessBetBroadcast }
        if (msg_id == this.Id.GuessGameOverBroadcast) { return this.GuessGameOverBroadcast }
        if (msg_id == this.Id.New666EnterRoomRequest) { return this.New666EnterRoomRequest }
        if (msg_id == this.Id.New666EnterRoomResponse) { return this.New666EnterRoomResponse }
        if (msg_id == this.Id.New666BetRequest) { return this.New666BetRequest }
        if (msg_id == this.Id.New666BetResponse) { return this.New666BetResponse }
        if (msg_id == this.Id.New666BetBroadcast) { return this.New666BetBroadcast }
        if (msg_id == this.Id.New666GameOverBroadcast) { return this.New666GameOverBroadcast }
        if (msg_id == this.Id.LlzEnterRoomRequest) { return this.LlzEnterRoomRequest }
        if (msg_id == this.Id.LlzEnterRoomResponse) { return this.LlzEnterRoomResponse }
        if (msg_id == this.Id.LlzBetRequest) { return this.LlzBetRequest }
        if (msg_id == this.Id.LlzBetResponse) { return this.LlzBetResponse }
        if (msg_id == this.Id.LlzBeginRequest) { return this.LlzBeginRequest }
        if (msg_id == this.Id.LlzBeginResponse) { return this.LlzBeginResponse }
        if (msg_id == this.Id.AddressListRequest) { return this.AddressListRequest }
        if (msg_id == this.Id.AddressListResponse) { return this.AddressListResponse }
        if (msg_id == this.Id.AddressUpdateRequest) { return this.AddressUpdateRequest }
        if (msg_id == this.Id.AddressUpdateResponse) { return this.AddressUpdateResponse }
        if (msg_id == this.Id.AddressDefaultRequest) { return this.AddressDefaultRequest }
        if (msg_id == this.Id.AddressDefaultResponse) { return this.AddressDefaultResponse }
        if (msg_id == this.Id.AddressDeleteRequest) { return this.AddressDeleteRequest }
        if (msg_id == this.Id.AddressDeleteResponse) { return this.AddressDeleteResponse }
        
    }

    return getInstance()
})();
