var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var alertViewUI=(function(_super){
		function alertViewUI(){
			
		    this.label=null;

			alertViewUI.__super.call(this);
		}

		CLASS$(alertViewUI,'ui.alertViewUI',_super);
		var __proto__=alertViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(alertViewUI.uiView);

		}

		alertViewUI.uiView={"type":"View","props":{"width":209,"height":65},"child":[{"type":"Label","props":{"wordWrap":true,"width":209,"var":"label","valign":"middle","text":"label","height":65,"fontSize":26,"color":"#fff","bold":true,"align":"center"}}]};
		return alertViewUI;
	})(View);
var indexUI=(function(_super){
		function indexUI(){
			
		    this.indexBtn=null;
		    this.twelveBtn=null;
		    this.guessBtn=null;
		    this.sixBtn=null;
		    this.userBtn=null;
		    this.productList=null;
		    this.panel1=null;
		    this.panel2=null;

			indexUI.__super.call(this);
		}

		CLASS$(indexUI,'ui.index.indexUI',_super);
		var __proto__=indexUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(indexUI.uiView);

		}

		indexUI.uiView={"type":"View","props":{"width":720,"height":1180},"child":[{"type":"Image","props":{"y":84,"x":0,"skin":"comp/index/Advertising position--BG.png"}},{"type":"Image","props":{"y":18,"x":120,"skin":"comp/index/Recharge--button.png"}},{"type":"Image","props":{"y":14,"x":359,"skin":"comp/index/Segmenting line.png"}},{"type":"Image","props":{"y":19,"x":472,"skin":"comp/index/Shopping Mall--button.png"}},{"type":"Label","props":{"y":384,"x":-1,"width":720,"height":100,"bgColor":"#0a0a0b"}},{"type":"Image","props":{"y":395,"x":30,"skin":"comp/index/Sign--icons.png"}},{"type":"Image","props":{"y":408,"x":584,"skin":"comp/index/Sign--button.png"}},{"type":"Label","props":{"y":401,"x":136,"width":208,"text":"每日签到，领奖励：","height":35,"fontSize":22,"font":"Microsoft YaHei","color":"#fff"}},{"type":"Label","props":{"y":401,"x":340,"width":82,"text":"20金豆","height":35,"fontSize":22,"font":"Microsoft YaHei","color":"#fcd127","bold":true}},{"type":"Label","props":{"y":498,"x":30,"width":82,"text":"热门","height":35,"fontSize":26,"font":"Microsoft YaHei","color":"#0a0a0b","bold":true}},{"type":"Label","props":{"y":545,"x":0,"width":720,"height":526,"bgColor":"#f2f2f2"}},{"type":"Box","props":{"y":1071,"x":0,"width":144,"var":"indexBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":51,"width":42,"skin":"comp/index/1.png","height":42}},{"type":"Label","props":{"y":60,"x":32,"width":79,"text":"首页","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#f92948","align":"center"}}]},{"type":"Box","props":{"y":1071,"x":144,"width":144,"var":"twelveBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":52,"width":42,"skin":"comp/index/-2.png","height":42}},{"type":"Label","props":{"y":60,"x":18,"width":110,"text":"十二生肖","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#a8a8a8","align":"center"}}]},{"type":"Box","props":{"y":1071,"x":288,"width":144,"var":"guessBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":51,"width":42,"skin":"comp/index/-3.png","height":42}},{"type":"Label","props":{"y":60,"x":32,"width":79,"text":"猜大小","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#a8a8a8","align":"center"}}]},{"type":"Box","props":{"y":1071,"x":432,"width":144,"var":"sixBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":51,"width":42,"skin":"comp/index/-4.png","height":42}},{"type":"Label","props":{"y":60,"x":32,"width":79,"text":"六六六","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#a8a8a8","align":"center"}}]},{"type":"Box","props":{"y":1071,"x":576,"width":144,"var":"userBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":51,"width":42,"skin":"comp/index/-5.png","height":42}},{"type":"Label","props":{"y":60,"x":32,"width":79,"text":"我的","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#a8a8a8","align":"center"}}]},{"type":"List","props":{"y":567,"x":30,"width":662,"var":"productList","spaceY":20,"spaceX":20,"height":501},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"skin":"comp/index/photo.png","name":"img"}},{"type":"Label","props":{"y":153,"width":150,"text":"猜大小","name":"label","height":32,"fontSize":22,"font":"Microsoft YaHei","color":"#111","align":"center"}}]}]},{"type":"Panel","props":{"y":139,"x":0,"width":720,"var":"panel1","height":65}},{"type":"Panel","props":{"y":258,"x":200,"width":720,"var":"panel2","height":65}}]};
		return indexUI;
	})(View);
var loginUI=(function(_super){
		function loginUI(){
			
		    this.autoLoginBtn=null;
		    this.loginBtn=null;
		    this.rememberPwdBtn=null;
		    this.username=null;
		    this.password=null;
		    this.registBtn=null;

			loginUI.__super.call(this);
		}

		CLASS$(loginUI,'ui.login.loginUI',_super);
		var __proto__=loginUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loginUI.uiView);

		}

		loginUI.uiView={"type":"View","props":{"width":720,"height":1180},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/login/bg.png","height":1180}},{"type":"Image","props":{"y":100,"x":238,"skin":"comp/login/logo.png"}},{"type":"Image","props":{"y":310,"x":99,"skin":"comp/login/Mobile-icon.png"},"child":[{"type":"Image","props":{"y":58,"x":-16,"skin":"comp/login/Segmenting line.png"}}]},{"type":"Image","props":{"y":701,"x":90,"var":"autoLoginBtn","skin":"comp/login/Selection box.png"},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"comp/login/checked.png"}}]},{"type":"Image","props":{"y":397,"x":99,"skin":"comp/login/Cipher--icons.png"},"child":[{"type":"Image","props":{"y":58,"x":-16,"skin":"comp/login/Segmenting line.png"}}]},{"type":"Label","props":{"y":526,"x":83,"width":554,"var":"loginBtn","valign":"middle","height":98,"fontSize":40,"font":"Microsoft YaHei","color":"#fff","bgColor":"#f82848","align":"center"},"child":[{"type":"Label","props":{"y":5,"x":0,"width":554,"valign":"middle","text":"登  陆","height":79,"fontSize":35,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Label","props":{"y":698,"x":130,"width":142,"text":"自动登陆","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#fff"}},{"type":"Image","props":{"y":701,"x":497,"var":"rememberPwdBtn","skin":"comp/login/Selection box.png"},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"comp/login/checked.png"}}]},{"type":"Label","props":{"y":698,"x":537,"width":142,"text":"记住密码","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#fff"}},{"type":"TextInput","props":{"y":302,"x":154,"width":443,"var":"username","text":"15038927731","promptColor":"#5f6062","prompt":"请输入账号","maxChars":11,"height":59,"fontSize":24,"color":"#fff"}},{"type":"TextInput","props":{"y":388,"x":154,"width":443,"var":"password","type":"password","text":"123123","promptColor":"#5f6062","prompt":"请输入密码","height":61,"fontSize":24,"color":"#fff"}},{"type":"Label","props":{"y":1040,"x":257,"width":206,"var":"registBtn","valign":"middle","text":"注册账号","height":80,"fontSize":30,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]};
		return loginUI;
	})(View);
var registUI=(function(_super){
		function registUI(){
			
		    this.registBtn=null;
		    this.username=null;
		    this.checkValue=null;
		    this.loginBtn=null;
		    this.password=null;
		    this.sendCheckBtn=null;

			registUI.__super.call(this);
		}

		CLASS$(registUI,'ui.login.registUI',_super);
		var __proto__=registUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(registUI.uiView);

		}

		registUI.uiView={"type":"View","props":{"width":720,"height":1180},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/login/bg.png","height":1180}},{"type":"Image","props":{"y":100,"x":238,"skin":"comp/login/logo.png"}},{"type":"Image","props":{"y":310,"x":94,"skin":"comp/login/Mobile-icon.png"},"child":[{"type":"Image","props":{"y":58,"x":-16,"skin":"comp/login/Segmenting line.png"}}]},{"type":"Image","props":{"y":400,"x":94,"skin":"comp/login/Verification-Code--icons.png"},"child":[{"type":"Image","props":{"y":0,"x":340,"width":50,"skin":"comp/login/Segmenting line.png","rotation":90,"height":2}}]},{"type":"Image","props":{"y":480,"x":97,"skin":"comp/login/Cipher--icons.png"},"child":[{"type":"Image","props":{"y":58,"x":-16,"skin":"comp/login/Segmenting line.png"}}]},{"type":"Label","props":{"y":675,"x":83,"width":554,"var":"registBtn","valign":"middle","height":98,"fontSize":40,"font":"Microsoft YaHei","color":"#fff","bgColor":"#f82848","align":"center"},"child":[{"type":"Label","props":{"y":5,"x":0,"width":554,"valign":"middle","text":"注  册","height":79,"fontSize":35,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"TextInput","props":{"y":302,"x":142,"width":443,"var":"username","promptColor":"#5f6062","prompt":"请输入手机号","maxChars":11,"height":59,"fontSize":24,"color":"#fff"}},{"type":"TextInput","props":{"y":388,"x":142,"width":262,"var":"checkValue","promptColor":"#5f6062","prompt":"请输入验证码","height":61,"fontSize":24,"color":"#fff"}},{"type":"Label","props":{"y":1052,"x":382,"width":206,"var":"loginBtn","valign":"middle","text":"立即登陆","height":80,"fontSize":30,"font":"Microsoft YaHei","color":"#fff"}},{"type":"TextInput","props":{"y":471,"x":145,"width":461,"var":"password","type":"password","promptColor":"#5f6062","prompt":"请输入密码","height":61,"fontSize":24,"color":"#fff"}},{"type":"Label","props":{"y":379,"x":457,"width":158,"var":"sendCheckBtn","valign":"middle","text":"发送验证码","height":79,"fontSize":28,"font":"Microsoft YaHei","color":"#fff","align":"center"}},{"type":"Label","props":{"y":1052,"x":232,"width":128,"valign":"middle","text":"已有账号？","height":80,"fontSize":28,"font":"Microsoft YaHei","color":"#81818b"}}]};
		return registUI;
	})(View);
var runHourseUI=(function(_super){
		function runHourseUI(){
			
		    this.img=null;
		    this.label=null;

			runHourseUI.__super.call(this);
		}

		CLASS$(runHourseUI,'ui.runHourseUI',_super);
		var __proto__=runHourseUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(runHourseUI.uiView);

		}

		runHourseUI.uiView={"type":"View","props":{"width":300,"height":38},"child":[{"type":"Image","props":{"y":0,"x":0,"width":300,"var":"img","skin":"comp/index/Check-in bar.png","height":38}},{"type":"Label","props":{"y":-6,"x":0,"width":300,"var":"label","valign":"middle","text":"label","height":38,"fontSize":22,"font":"Microsoft YaHei","color":"#111","align":"center"}}]};
		return runHourseUI;
	})(View);
var overBoardUI=(function(_super){
		function overBoardUI(){
			
		    this.closeBtn=null;
		    this.list=null;

			overBoardUI.__super.call(this);
		}

		CLASS$(overBoardUI,'ui.twelve.overBoardUI',_super);
		var __proto__=overBoardUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(overBoardUI.uiView);

		}

		overBoardUI.uiView={"type":"Dialog","props":{"width":720,"height":1180},"child":[{"type":"Image","props":{"y":105,"x":105,"skin":"comp/round/alert/弹窗.png"}},{"type":"Image","props":{"y":114,"x":552,"var":"closeBtn","skin":"comp/round/alert/x.png"}},{"type":"Label","props":{"y":144,"x":268,"width":166,"valign":"middle","text":"结 算","height":76,"fontSize":38,"font":"Microsoft YaHei","color":"#f6d144","align":"center"}},{"type":"List","props":{"y":278,"x":148,"width":430,"var":"list","spaceY":30,"height":771},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"skin":"comp/round/alert/bg-拷贝.png"}},{"type":"Image","props":{"y":15,"x":30,"width":60,"skin":"comp/round/alert/金豆-拷贝.png","name":"img","height":60}},{"type":"Label","props":{"y":27,"x":103,"width":145,"text":"张三","overflow":"hidden","name":"name","height":37,"fontSize":22,"font":"Microsoft YaHei","color":"#ed7e6b","align":"center"}},{"type":"Label","props":{"y":21,"x":297,"width":104,"text":"+10000","name":"money","height":30,"fontSize":30,"font":"Microsoft YaHei","color":"yellow"}},{"type":"Image","props":{"y":30,"x":259,"skin":"comp/round/board/gold.png"}}]}]},{"type":"Label","props":{"y":233,"x":330,"width":254,"valign":"middle","text":"2018年1月24日18:35:59","height":33,"fontSize":22,"font":"Microsoft YaHei","color":"#cdc8b3","align":"center"}}]};
		return overBoardUI;
	})(Dialog);
var twelveUI=(function(_super){
		function twelveUI(){
			
		    this.bigCircle=null;
		    this.middleCircle=null;
		    this.smallCircle=null;
		    this.restTime=null;
		    this.menuBtn=null;
		    this.selfMoney=null;
		    this.selfHeadImg=null;
		    this.chipBox=null;
		    this.backBtn=null;
		    this.playerBox=null;
		    this.tableAllSum=null;

			twelveUI.__super.call(this);
		}

		CLASS$(twelveUI,'ui.twelve.twelveUI',_super);
		var __proto__=twelveUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(twelveUI.uiView);

		}

		twelveUI.uiView={"type":"View","props":{"width":720,"height":1180},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/round/board/bg.png","height":1180}},{"type":"Image","props":{"y":49,"x":210,"width":277,"skin":"comp/round/board/ren.png","height":210}},{"type":"Image","props":{"y":237,"x":7,"skin":"comp/round/board/zuiwai.png"}},{"type":"Image","props":{"y":589,"x":360,"var":"bigCircle","skin":"comp/round/board/dierceng.png","pivotY":328.5,"pivotX":328},"child":[{"type":"Box","props":{"y":0,"x":0,"width":656,"name":"pieBox","height":656}},{"type":"Box","props":{"y":31,"x":24,"name":"resultBox"},"child":[{"type":"Box","props":{"x":266},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":44,"x":403},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":136,"x":507},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":269,"x":538},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":392,"x":507},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":501,"x":403},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":529,"x":266},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":501,"x":135},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":392,"x":35},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":269},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":136,"x":35},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":44,"x":135},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]}]}]},{"type":"Image","props":{"y":382,"x":152,"var":"middleCircle","skin":"comp/round/board/disanceng.png"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":415,"name":"pieBox","height":415}},{"type":"Box","props":{"y":0,"x":0,"width":415,"name":"resultBox","height":415},"child":[{"type":"Box","props":{"y":47,"x":167},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":82,"x":293},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":254,"x":303},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":254,"x":34},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":82,"x":34},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]}]}]},{"type":"Image","props":{"y":484,"x":254,"var":"smallCircle","skin":"comp/round/board/zhongjian.png"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":212,"name":"pieBox","height":212}},{"type":"Box","props":{"y":0,"x":0,"width":212,"name":"resultBox","height":212},"child":[{"type":"Box","props":{"y":80,"x":112},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]},{"type":"Box","props":{"y":80,"x":22},"child":[{"type":"Image","props":{"y":15,"x":20,"visible":false,"skin":"comp/round/board/gold.png"}},{"type":"Image","props":{"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":39,"width":80,"visible":false,"skin":"comp/round/board/chipbg.png","height":17},"child":[{"type":"Label","props":{"y":-2,"x":1,"width":78,"height":17,"fontSize":16,"font":"Microsoft YaHei","color":"#ffe000","align":"center"}}]}]}]}]},{"type":"Image","props":{"y":98,"x":2,"skin":"comp/round/board/ewai.png"}},{"type":"Image","props":{"y":256,"x":572,"skin":"comp/round/board/youce.png"}},{"type":"Image","props":{"y":256,"x":0,"skin":"comp/round/board/zuoce.png"}},{"type":"Label","props":{"y":185,"x":67,"width":139,"text":"玉女·福·羊","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#c89290"},"child":[{"type":"Image","props":{"y":12,"x":129,"skin":"comp/round/board/icon.png"}}]},{"type":"Label","props":{"y":185,"x":597,"width":71,"var":"restTime","text":"20S","height":35,"fontSize":28,"font":"Microsoft YaHei","color":"#c89290","bold":true}},{"type":"Image","props":{"y":1120,"x":31,"skin":"comp/round/board/jindoubg.png"},"child":[{"type":"Image","props":{"y":-7,"x":167,"skin":"comp/round/board/chongzhi.png"}}]},{"type":"Image","props":{"y":486,"x":311,"skin":"comp/round/board/inner.png"},"child":[{"type":"Label","props":{"y":-5,"x":15,"width":72,"valign":"middle","text":"x1.8","height":36,"fontSize":22,"font":"Microsoft YaHei","color":"#feaead","align":"center"}}]},{"type":"Image","props":{"y":382,"x":309,"skin":"comp/round/board/middle.png"},"child":[{"type":"Label","props":{"y":-4,"x":15,"width":72,"valign":"middle","text":"x4.5","height":36,"fontSize":22,"font":"Microsoft YaHei","color":"#feaead","align":"center"}}]},{"type":"Image","props":{"y":236,"x":310,"skin":"comp/round/board/outter.png"},"child":[{"type":"Label","props":{"y":-9,"x":14,"width":72,"valign":"middle","text":"x10","height":36,"fontSize":22,"font":"Microsoft YaHei","color":"#feaead","align":"center"}}]},{"type":"Image","props":{"y":239,"x":103,"skin":"comp/round/board/shuxin.png"}},{"type":"Image","props":{"y":239,"x":558,"skin":"comp/round/board/shuxin.png"}},{"type":"Image","props":{"y":12,"x":639,"var":"menuBtn","skin":"comp/round/board/shuyingjiu.png"}},{"type":"Image","props":{"y":297,"x":27,"skin":"comp/round/board/you.png"}},{"type":"Image","props":{"y":351,"x":6,"skin":"comp/round/board/you.png"}},{"type":"Image","props":{"y":297,"x":671,"skin":"comp/round/board/you.png"}},{"type":"Image","props":{"y":351,"x":693,"skin":"comp/round/board/you.png"}},{"type":"Label","props":{"y":107,"x":11,"width":139,"text":"本局额外加奖","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#c89290"}},{"type":"Label","props":{"y":1075,"x":35,"width":139,"text":"我的金豆","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#c89290","align":"center"}},{"type":"Label","props":{"y":1123,"x":39,"width":159,"var":"selfMoney","text":"100","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#f0d2d4"}},{"type":"Image","props":{"y":924,"x":315,"var":"selfHeadImg","skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-10,"width":110,"text":"我","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]},{"type":"Box","props":{"y":1070,"x":269,"width":431,"var":"chipBox","height":94},"child":[{"type":"Image","props":{"y":2,"x":14,"skin":"comp/round/board/chouma.png"},"child":[{"type":"Label","props":{"y":61,"x":4,"width":87,"valign":"middle","text":"100","height":32,"fontSize":22,"font":"Microsoft YaHei","color":"#663620","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"skin":"comp/round/board/chouma-zz.png"}}]},{"type":"Image","props":{"y":2,"x":164,"skin":"comp/round/board/chouma.png"},"child":[{"type":"Label","props":{"y":61,"x":4,"width":87,"valign":"middle","text":"1000","height":32,"fontSize":22,"font":"Microsoft YaHei","color":"#663620","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"skin":"comp/round/board/chouma-zz.png"}}]},{"type":"Image","props":{"y":2,"x":312,"skin":"comp/round/board/chouma.png"},"child":[{"type":"Label","props":{"y":61,"x":4,"width":87,"valign":"middle","text":"10000","height":32,"fontSize":22,"font":"Microsoft YaHei","color":"#663620","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"skin":"comp/round/board/chouma-zz.png"}}]}]},{"type":"Image","props":{"y":12,"x":10,"var":"backBtn","skin":"comp/round/board/back.png"}},{"type":"Box","props":{"y":771,"x":1,"var":"playerBox"},"child":[{"type":"Image","props":{"y":3,"x":10,"skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-10,"width":110,"text":"用户名","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]},{"type":"Image","props":{"y":105,"x":132,"skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-25,"width":139,"text":"用户名","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]},{"type":"Image","props":{"y":105,"x":490,"skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-10,"width":110,"text":"用户名","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]},{"type":"Image","props":{"y":3,"x":619,"skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-10,"width":110,"text":"用户名","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]}]},{"type":"Box","props":{"y":269,"x":316,"var":"tableAllSum"},"child":[{"type":"Image","props":{"y":256,"x":0,"width":91,"visible":false,"skin":"comp/round/board/chipbg.png","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"width":90,"height":23,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"y":154,"x":0,"width":91,"visible":false,"skin":"comp/round/board/chipbg.png","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"width":90,"height":23,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]},{"type":"Image","props":{"width":91,"visible":false,"skin":"comp/round/board/chipbg.png","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"width":90,"height":23,"fontSize":16,"font":"Microsoft YaHei","color":"#fff","align":"center"}}]}]}]};
		return twelveUI;
	})(View);
var warHistoryUI=(function(_super){
		function warHistoryUI(){
			
		    this.closeBtn=null;
		    this.list=null;

			warHistoryUI.__super.call(this);
		}

		CLASS$(warHistoryUI,'ui.twelve.warHistoryUI',_super);
		var __proto__=warHistoryUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(warHistoryUI.uiView);

		}

		warHistoryUI.uiView={"type":"Dialog","props":{"width":720,"height":1180},"child":[{"type":"Image","props":{"y":105,"x":105,"skin":"comp/round/alert/弹窗.png"}},{"type":"Image","props":{"y":114,"x":552,"var":"closeBtn","skin":"comp/round/alert/x.png"}},{"type":"Label","props":{"y":144,"x":268,"width":166,"valign":"middle","text":"战 绩","height":76,"fontSize":38,"font":"Microsoft YaHei","color":"#f6d144","align":"center"}},{"type":"List","props":{"y":267,"x":145,"width":430,"var":"list","spaceY":30,"height":771},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"skin":"comp/round/alert/bg-拷贝.png"}},{"type":"Image","props":{"y":14,"x":30,"width":60,"skin":"comp/round/alert/金豆-拷贝.png","name":"img","height":60}},{"type":"Label","props":{"y":10,"x":166,"width":220,"text":"2018年1月22日15:56:31","name":"time","height":25,"fontSize":22,"font":"Microsoft YaHei","color":"#ed7e6b"}},{"type":"Label","props":{"y":42,"x":298,"width":96,"text":"+10000","name":"money","height":25,"fontSize":22,"font":"Microsoft YaHei","color":"#fff"}},{"type":"Image","props":{"y":37,"x":256,"skin":"comp/round/alert/金豆-拷贝.png"}}]}]}]};
		return warHistoryUI;
	})(Dialog);
var userUI=(function(_super){
		function userUI(){
			
		    this.indexBtn=null;
		    this.twelveBtn=null;
		    this.guessBtn=null;
		    this.sixBtn=null;
		    this.userBtn=null;
		    this.headImg=null;

			userUI.__super.call(this);
		}

		CLASS$(userUI,'ui.user.userUI',_super);
		var __proto__=userUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(userUI.uiView);

		}

		userUI.uiView={"type":"View","props":{"width":720,"height":1180},"child":[{"type":"Label","props":{"y":1071,"x":0,"width":720,"height":109,"bgColor":"#fff"}},{"type":"Box","props":{"y":1071,"x":0,"width":144,"var":"indexBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":51,"width":42,"skin":"comp/index/-1.png","height":42}},{"type":"Label","props":{"y":60,"x":32,"width":79,"text":"首页","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#a8a8a8","align":"center"}}]},{"type":"Box","props":{"y":1071,"x":144,"width":144,"var":"twelveBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":52,"width":42,"skin":"comp/index/-2.png","height":42}},{"type":"Label","props":{"y":60,"x":18,"width":110,"text":"十二生肖","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#a8a8a8","align":"center"}}]},{"type":"Box","props":{"y":1071,"x":288,"width":144,"var":"guessBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":51,"width":42,"skin":"comp/index/-3.png","height":42}},{"type":"Label","props":{"y":60,"x":32,"width":79,"text":"猜大小","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#a8a8a8","align":"center"}}]},{"type":"Box","props":{"y":1071,"x":432,"width":144,"var":"sixBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":51,"width":42,"skin":"comp/index/-4.png","height":42}},{"type":"Label","props":{"y":60,"x":32,"width":79,"text":"六六六","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#a8a8a8","align":"center"}}]},{"type":"Box","props":{"y":1071,"x":576,"width":144,"var":"userBtn","height":109},"child":[{"type":"Image","props":{"y":16,"x":51,"width":42,"skin":"comp/index/5.png","height":42}},{"type":"Label","props":{"y":60,"x":32,"width":79,"text":"我的","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#f92948","align":"center"}}]},{"type":"Label","props":{"width":720,"height":200,"bgColor":"#f82848"}},{"type":"Image","props":{"y":117,"x":207,"skin":"comp/user/Imazamox.png"}},{"type":"Image","props":{"y":108,"x":585,"skin":"comp/user/Recharge.png"}},{"type":"Label","props":{"y":51,"x":207,"width":303,"text":"15038920000","height":32,"fontSize":28,"font":"Microsoft YaHei","color":"#fff"}},{"type":"Label","props":{"y":113,"x":252,"width":133,"text":"20","height":32,"fontSize":36,"font":"Microsoft YaHei","color":"#ffc200"}},{"type":"Label","props":{"y":220,"x":0,"width":720,"height":80,"bgColor":"#fff"},"child":[{"type":"Image","props":{"y":20,"x":30,"skin":"comp/user/user.png"}},{"type":"Label","props":{"y":23,"x":90,"width":211,"valign":"middle","text":"修改昵称","height":34,"fontSize":28,"font":"Microsoft YaHei","color":"#111"}},{"type":"Image","props":{"y":20,"x":650,"skin":"comp/user/fanhui.png"}}]},{"type":"Label","props":{"y":320,"x":0,"width":720,"height":80,"bgColor":"#fff"},"child":[{"type":"Image","props":{"y":20,"x":30,"skin":"comp/user/key.png"}},{"type":"Label","props":{"y":23,"x":90,"width":211,"valign":"middle","text":"修改密码","height":34,"fontSize":28,"font":"Microsoft YaHei","color":"#111"}},{"type":"Image","props":{"y":20,"x":650,"skin":"comp/user/fanhui.png"}}]},{"type":"Label","props":{"y":420,"x":0,"width":720,"height":80,"bgColor":"#fff"},"child":[{"type":"Image","props":{"y":20,"x":30,"skin":"comp/user/dress.png"}},{"type":"Label","props":{"y":23,"x":90,"width":211,"valign":"middle","text":"修改地址","height":34,"fontSize":28,"font":"Microsoft YaHei","color":"#111"}},{"type":"Image","props":{"y":20,"x":650,"skin":"comp/user/fanhui.png"}}]},{"type":"Label","props":{"y":520,"x":0,"width":720,"height":80,"bgColor":"#fff"},"child":[{"type":"Image","props":{"y":20,"x":30,"skin":"comp/user/exchange.png"}},{"type":"Label","props":{"y":23,"x":90,"width":211,"valign":"middle","text":"兑换","height":34,"fontSize":28,"font":"Microsoft YaHei","color":"#111"}},{"type":"Image","props":{"y":20,"x":650,"skin":"comp/user/fanhui.png"}}]},{"type":"Image","props":{"y":40,"x":30,"width":130,"var":"headImg","skin":"comp/user/head.png","height":130}}]};
		return userUI;
	})(View);