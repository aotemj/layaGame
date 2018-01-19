
var RunHourseView = (function (_super) {
    // _super.uiView = Luck.filterImgAddVersion(_super.uiView)
    function RunHourse(params) {
        RunHourse.super(this);
        this.label.text = params.text || '空'
        this.x = params.x
        this.init()
    }
    Laya.class(RunHourse, 'RunHourse', _super);
    var _prototype = RunHourse.prototype

    _prototype.init = function () {
        var self = this
        
    }
   
    return RunHourse;
})(ui.runHourseUI);
