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
var twelveUI=(function(_super){
		function twelveUI(){
			

			twelveUI.__super.call(this);
		}

		CLASS$(twelveUI,'ui.twelve.twelveUI',_super);
		var __proto__=twelveUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(twelveUI.uiView);

		}

		twelveUI.uiView={"type":"View","props":{"width":720,"height":1180},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/round/board/bg.png","height":1180}},{"type":"Image","props":{"y":49,"x":210,"width":277,"skin":"comp/round/board/ren.png","height":210}},{"type":"Image","props":{"y":237,"x":7,"skin":"comp/round/board/zuiwai.png"}},{"type":"Image","props":{"y":261,"x":32,"skin":"comp/round/board/dierceng.png"}},{"type":"Image","props":{"y":382,"x":150,"skin":"comp/round/board/disanceng.png"}},{"type":"Image","props":{"y":24,"x":2,"skin":"comp/round/board/ewai.png"}},{"type":"Image","props":{"y":484,"x":254,"skin":"comp/round/board/zhongjian.png"}},{"type":"Image","props":{"y":256,"x":572,"skin":"comp/round/board/youce.png"}},{"type":"Image","props":{"y":256,"x":0,"skin":"comp/round/board/zuoce.png"}},{"type":"Label","props":{"y":185,"x":67,"width":139,"text":"玉女·福·羊","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#c89290"},"child":[{"type":"Image","props":{"y":12,"x":129,"skin":"comp/round/board/icon.png"}}]},{"type":"Label","props":{"y":188,"x":597,"width":50,"text":"20S","height":35,"fontSize":28,"font":"Microsoft YaHei","color":"#c89290","bold":true}},{"type":"Image","props":{"y":1120,"x":31,"skin":"comp/round/board/jindoubg.png"},"child":[{"type":"Image","props":{"y":-7,"x":167,"skin":"comp/round/board/chongzhi.png"}}]},{"type":"Image","props":{"y":486,"x":311,"skin":"comp/round/board/inner.png"},"child":[{"type":"Label","props":{"y":-5,"x":15,"width":72,"valign":"middle","text":"x1.8","height":36,"fontSize":22,"font":"Microsoft YaHei","color":"#feaead","align":"center"}}]},{"type":"Image","props":{"y":382,"x":309,"skin":"comp/round/board/middle.png"},"child":[{"type":"Label","props":{"y":-4,"x":15,"width":72,"valign":"middle","text":"x1.8","height":36,"fontSize":22,"font":"Microsoft YaHei","color":"#feaead","align":"center"}}]},{"type":"Image","props":{"y":236,"x":310,"skin":"comp/round/board/outter.png"},"child":[{"type":"Label","props":{"y":-9,"x":14,"width":72,"valign":"middle","text":"x1.8","height":36,"fontSize":22,"font":"Microsoft YaHei","color":"#feaead","align":"center"}}]},{"type":"Image","props":{"y":1073,"x":622,"skin":"comp/round/board/qingchu.png"}},{"type":"Image","props":{"y":239,"x":103,"skin":"comp/round/board/shuxin.png"}},{"type":"Image","props":{"y":239,"x":558,"skin":"comp/round/board/shuxin.png"}},{"type":"Image","props":{"y":12,"x":639,"skin":"comp/round/board/shuyingjiu.png"}},{"type":"Image","props":{"y":297,"x":27,"skin":"comp/round/board/you.png"}},{"type":"Image","props":{"y":351,"x":6,"skin":"comp/round/board/you.png"}},{"type":"Image","props":{"y":297,"x":671,"skin":"comp/round/board/you.png"}},{"type":"Image","props":{"y":351,"x":693,"skin":"comp/round/board/you.png"}},{"type":"Label","props":{"y":28,"x":11,"width":139,"text":"本局额外加奖","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#c89290"}},{"type":"Label","props":{"y":1075,"x":35,"width":139,"text":"我的金豆","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#c89290","align":"center"}},{"type":"Image","props":{"y":1070,"x":269,"skin":"comp/round/board/chouma.png"},"child":[{"type":"Label","props":{"y":61,"x":4,"width":87,"valign":"middle","text":"100","height":32,"fontSize":22,"font":"Microsoft YaHei","color":"#663620","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"skin":"comp/round/board/chouma-zz.png"}}]},{"type":"Image","props":{"y":1070,"x":385,"skin":"comp/round/board/chouma.png"},"child":[{"type":"Label","props":{"y":61,"x":4,"width":87,"valign":"middle","text":"1000","height":32,"fontSize":22,"font":"Microsoft YaHei","color":"#663620","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"skin":"comp/round/board/chouma-zz.png"}}]},{"type":"Image","props":{"y":1070,"x":498,"skin":"comp/round/board/chouma.png"},"child":[{"type":"Label","props":{"y":61,"x":4,"width":87,"valign":"middle","text":"10000","height":32,"fontSize":22,"font":"Microsoft YaHei","color":"#663620","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"skin":"comp/round/board/chouma-zz.png"}}]},{"type":"Label","props":{"y":1123,"x":39,"width":159,"text":"100","height":39,"fontSize":26,"font":"Microsoft YaHei","color":"#f0d2d4"}},{"type":"Image","props":{"y":774,"x":11,"skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-10,"width":110,"text":"用户名","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]},{"type":"Image","props":{"y":876,"x":133,"skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-10,"width":110,"text":"用户名","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]},{"type":"Image","props":{"y":924,"x":315,"skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-10,"width":110,"text":"我","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]},{"type":"Image","props":{"y":876,"x":491,"skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-10,"width":110,"text":"用户名","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]},{"type":"Image","props":{"y":774,"x":620,"skin":"comp/round/board/headbg.png"},"child":[{"type":"Image","props":{"y":-3,"x":-2,"skin":"comp/round/board/circle1.png"}},{"type":"Label","props":{"y":90,"x":-10,"width":110,"text":"用户名","overflow":"hidden","height":31,"fontSize":24,"font":"Microsoft YaHei","color":"#8c756d","align":"center"}}]}]};
		return twelveUI;
	})(View);
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