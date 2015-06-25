var stage=new createjs.Stage('gameView');
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick',stage);


var gameView=new createjs.Container();
stage.addChild(gameView);

var n=2;

function addRect(){
	var c1=Math.floor(Math.random()*255);
	var c2=Math.floor(Math.random()*255);
	var c3=Math.floor(Math.random()*255);
	if(255-c3<10){//如果颜色快到顶了
		var c4=c3-20-Math.floor(Math.random()*20);
	}else{
		var c4=c3+50+Math.floor(Math.random()*20);
		c4=c4>255?255:c4;
	}
	c4=c1-2>0?c1-2:c1+2;
	var color='#'+hex(c1)+hex(c2)+hex(c3);
	var clickColor='#'+hex(c4)+hex(c2)+hex(c4);
	console.log(color+':'+clickColor)
	var x=Math.floor(Math.random()*n);
	var y=Math.floor(Math.random()*n);
	for(var indexX=0;indexX<n;indexX++){
		for(var indexY=0;indexY<n;indexY++){
			var r=new Rect(n,color,clickColor);
			gameView.addChild(r);
			r.x = indexX;
            r.y = indexY;
            if (r.x == x && r.y == y) {
                r.setRectType(2);
            }
            r.x = indexX * (400/ n);
            r.y = indexY * (400 / n);

			if(r.getRectType()==2){
				r.addEventListener('click',function(){
					if(n<50){
						++n;
						gameView.removeAllChildren();
						addRect();
					}
				})
			}
		}
	}
}

function hex(num){
	var num=num.toString(16);
	if(num.length<=1){
		num='0'+num;
	}
	return num;
}

addRect();