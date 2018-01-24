Luck.createPie = (function () {
    function Pie(params) {
        this.pie = params.pie
        this.aniDuration = params.aniDuration

        this.init()
    }
    var _proto = Pie.prototype
    // 初始化
    _proto.init = function () {
        for (var i = 0; i < this.pie.length; i++) {
            var angle = 360 / this.pie.length
            if (this.pie.length == 12) {
                var s = angle * i - (angle * 3 + (angle / 2))
            } else if (this.pie.length == 5) {
                var s = 18 + (i + 3) * angle
            } else {
                var s = 90 + i * angle
            }
            var sprite = new Laya.Sprite();
            sprite.graphics.drawPie(this.pie.centerX, this.pie.centerY, this.pie.radius, s, s + angle, this.pie.color)
            this.pie.parent.addChild(sprite);
        }
        this.hidePie()
    }
    // 开始
    _proto.start = function (end, callback) {

        var obj = {
            0: 2,
            1: 3,
            2: 4,
            3: 0,
            4: 1
        }
        if(this.pie.length == 5){
            end = obj[end]
            
        }

        var self = this

        this.hidePie()
        this.showPie(0)

        var count = 0       //  当前图片
        var interval = 500  //  间隔
        var speed = 30      //  速度  
        var flag = true     //  是否执行
        var speedCount = 0        // 最高速度统计
        var canShowResult = false
        var loopSumCount = 0           // 循环总次数
        var time = 1000     //  执行所用时间

        go(interval)

        self.s = setInterval(function () {
            time += 1000

        }, 1000)

        function go(interval) {
            setTimeout(function () {
                self.hidePie()
                count++
                if (count > self.pie.length - 1) {
                    count = 0
                }

                if (interval < 60 || interval > 500) {

                    speedCount++

                    if (speedCount == 24) {

                        speed = -speed
                        interval = 51
                        canShowResult = true
                    }
                }

                if (interval > 50) {
                    interval -= speed
                }
                loopSumCount++


                if (self.aniDuration <= time && canShowResult && (loopSumCount % 12) == end) {
                    flag = false
                    clearInterval(self.s)
                    callback()
                    // setTimeout(function(){
                    //     self.hidePie()
                    // },5000)
                }

                self.showPie(count)

                if (flag) {
                    go(interval)
                }

            }, interval)
        }

    }
    // 展示
    _proto.showPie = function (n) {
        this.pie.parent._childs[n].alpha = 0.5
    }
    // 隐藏
    _proto.hidePie = function () {
        for (var i = 0; i < this.pie.length; i++) {

            var pie = this.pie.parent._childs[i]
     
            pie.alpha = 0
        }
    }
    return Pie
})()