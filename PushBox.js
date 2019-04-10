/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-04-07 21:07:07
 * @version $Id$
 */
//首页
var div = document.getElementById('pushbox');
div.innerHTML = "<div><span class='font1'>推箱子</span><br/><br/><br/></div><div><input class='startinput' type='button' value='开始游戏' onclick='start()'/></div>";
function start() {
	div.innerHTML = "";
	div.style.flexDirection = "row";
	div.style.justifyContent = "flex-start";
	div.style.alignItems = "flex-start";
	div.style.flexWrap = "wrap";
	for(i=1;i<levelarr.length+1;i++){
		div.innerHTML += "<div class='level' onclick='level("+i+")'>"+i+"</div>";
	}
	for(i;i<57;i++){
		div.innerHTML += "<div class='level' ><img src='lock.png'></div>";
	}
}

var arr = [];//关卡地图状态
var levelarr = [1];//关卡图标状态
var x = 0;//人的位置
var flag = 0;//已经到达目的地的箱子个数
var a = 8;//地图行数
var b = 9;//地图列数
var m = 0;//box个数
var l = 0;//当前关卡
//绘制页面
function paint(arr) {
	var str = "";
	str += '<table>';
    for(var i=0;i<a;i++){
    	str += '<tr>';
    for(j=0;j<b;j++){
    	str += '<td></td>';
  	}
  		str += '</tr>';
  }
  str += '</table>';
	div.innerHTML = str;
    var td = document.getElementsByTagName('td');
    for(i=0;i<arr.length;i=i+2){
    	//console.log(td[i]);
	    td[i].style.backgroundColor = 'rgba(0,150,0,0.3)';
    }
    for(j=0;j<arr.length;j++){
   		//alert("j:"+j);
    	if(arr[j] == "wall"){
    		td[j].innerHTML="<img src='wall.png' >";
    	}else if(arr[j] == "box"){
    		td[j].innerHTML="<img src='box.png' >";
    	}else if(arr[j] == "des"){
    		td[j].style.backgroundColor = 'rgba(100,0,0,0.3)';
    	}else if(arr[j] == "person"){
    		td[j].innerHTML="<img src='person3d.png' >";
    	}

    }
    str="<table class='control'>"+
		"<tr><td>**</td><td><input type='button' value='↑↑' onclick='move(0)' /></td><td>**</td><td><input type='button' value='重玩' onclick='level(l)' /></td></tr>"+
		"<tr><td><input type='button' value='←←' onclick='move(3) '/></td><td>**</td><td><input type='button' value='→→' onclick='move(1)' /></td><td><input type='button' value='选关' onclick='start()'></td></tr>"+
		"<tr><td>**</td><td><input type='button' value='↓↓' onclick='move(2)' /></td><td>**</td><td><input type='button' value='上一关' onclick='level(l-1)'></td></tr></table>";
	div.innerHTML += str;
	div.style.flexDirection = "column";
	div.style.background ="rgba(0,0,100,0.1)";
	onkeydown(event);
}
//键盘事件
var onkeydown = function(event) {
	var e = event || window.event;
	if(e && e.keyCode == 38){
		move(0);
	}else if(e && e.keyCode == 39){
		move(1);
	}else if(e && e.keyCode == 40){
		move(2);
	}else if(e && e.keyCode == 37){
		move(3);
	}

}

//关卡
function level(n) {
	flag = 0;
	switch(n){
		case 0:
			window.alert("没有上一关了，兄弟！");
			break;
		case 1:
			arr = ["","wall","wall","wall","wall","wall","wall","wall","",
					"","wall","","person","","","","wall","","","wall","","","","","","wall","wall",
					"wall","wall","","box","","","","","wall",
					"wall","","","","","","","des","wall",
					"wall","","","","","","","","wall",
					"wall","","","","wall","wall","wall","wall","wall",
					"wall","wall","wall","wall","wall","","","",""
					];
			l = n;
			m = 1;
			x = 12;
			paint(arr);
			break;
		case 2:
			arr = ["","wall","wall","wall","wall","wall","wall","wall","",
					"","wall","","person","","","","wall","",
					"","wall","","","","","","wall","wall",
					"wall","wall","","box","","","","des","wall",
					"wall","","box","","","box","des","des","wall",
					"wall","","","","","","","","wall",
					"wall","","","","wall","wall","wall","wall","wall",
					"wall","wall","wall","wall","wall","","","",""
					];
			l = n;
			m = 3;
			x = 12;
			paint(arr);
			break;

		case 3:
			arr = ["","wall","wall","wall","wall","wall","wall","wall","wall",
					"","wall","","person","","","","","wall",
					"","wall","","","","","","","wall",
					"","wall","","box","","","","des","wall",
					"wall","","box","","wall","box","des","des","wall",
					"wall","","","","wall","","","","wall",
					"wall","","","","wall","","","","wall",
					"wall","wall","wall","wall","wall","wall","wall","wall","wall"
					];
			l = n;
			m = 3;
			x = 12;
			paint(arr);
			break;
			case 4:
				arr = ["","wall","wall","wall","wall","wall","wall","wall","",
						"","wall","","person","des","des","des","wall","",
						"","wall","","","","wall","wall","wall","wall",
						"wall","wall","wall","box","","","","","wall",
						"wall","","","","wall","box","wall","","wall",
						"wall","","box","","wall","","","","wall",
						"wall","","","","wall","wall","wall","wall","wall",
						"wall","wall","wall","wall","wall","","","",""
						];
				l = n;
				m = 3;
				x = 12;
				paint(arr);
				break;
			default:
				alert("小可爱已经通关了呢，看看别的游戏吧~~");
	}
}
//通关界面
function win() {
	div.innerHTML = "<div><span class='font2'>你好棒!</span><br/><br/><br/></div>"+
					"<div ><input class='win' type='button' value='重玩' onclick='level(1)'/></div>"+
					"<div ><input class='win' type='button' value='选关' onclick='start()'/></div>"+
					"<div><input class='win' type='button' value='下一关' onclick='level(l+1)'/></div>";
	div.style.justifyContent ="center";
	div.style.alignItems = "center";

	//start();
}
//移动
function move(n) {
	td = document.getElementsByTagName('td');
	switch(n){
		case 0:
			if(arr[x-b] == "box+des"  ){
				if(arr[x-2*b] == ""){
				arr[x-2*b] = "box";
				arr[x-b] = "des";
				arr[x] = (arr[x] == "des")?"des":"";
				td[x-2*b].innerHTML = td[x-b].innerHTML;
				td[x-b].innerHTML = td[x].innerHTML;
				td[x].innerHTML = null;
				x -= b;
				flag--;	
				}else if(arr[x-2*b] == "des" ){
				arr[x-2*b] = "box";
				arr[x-b] = "des";
				arr[x] = (arr[x] == "des")?"des":"";
				td[x-2*b].innerHTML = td[x-b].innerHTML;
				td[x-b].innerHTML = td[x].innerHTML;
				td[x].innerHTML = null;
				x -= b; 
				}
			}else if(arr[x-b] == "box"){
				if(arr[x-2*b] == ""){
					arr[x-2*b] = "box";
					arr[x-b] = (arr[x-b]=="box+des")?"des":"person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x-2*b].innerHTML = td[x-b].innerHTML;
					td[x-b].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x -= b;
				}else if(arr[x-2*b] == "des"){
					arr[x-2*b] = "box+des";
					arr[x-b] = (arr[x-b]=="box+des")?"des":"person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x-2*b].innerHTML = td[x-b].innerHTML;
					td[x-b].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x -= b;
					flag++;
					if(flag == m){
						levelarr[l] = 1;
						setTimeout(()=>{win()},1000);
					}
				}
			}else if(arr[x-b] == "" ){
					arr[x-b] = "person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x-b].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x -= b;
				}else if(arr[x-b] == "des"){
					arr[x] = (arr[x] == "des")?"des" : "";
					td[x-b].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x -= b;
				}
			break;
		case 1:
			if(arr[x+1] == "box+des"  ){
				if(arr[x+2] == ""){
				arr[x+2] = "box";
				arr[x+1] = "des";
				arr[x] = (arr[x] == "des")?"des":"";
				td[x+2].innerHTML = td[x+1].innerHTML;
				td[x+1].innerHTML = td[x].innerHTML;
				td[x].innerHTML = null;
				x ++;
				flag--;	
				}else if(arr[x+2] == "des" ){
				arr[x+2] = "box+des";
				arr[x+1] = "des";
				arr[x] = (arr[x] == "des")?"des":"";
				td[x+2].innerHTML = td[x+1].innerHTML;
				td[x+1].innerHTML = td[x].innerHTML;
				td[x].innerHTML = null;
				x ++; 
				}
			}else if(arr[x+1] == "box"){
				if(arr[x+2] == ""){
					arr[x+2] = "box";
					arr[x+1] = (arr[x+1]=="box+des")?"des":"person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x+2].innerHTML = td[x+1].innerHTML;
					td[x+1].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x++;
				}else if(arr[x+2] == "des"){
					arr[x+2] = "box+des";
					arr[x+1] = (arr[x+1]=="box+des")?"des":"person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x+2].innerHTML = td[x+1].innerHTML;
					td[x+1].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x++;
					flag++;
					if(flag == m){
						levelarr[l] = 1;

						setTimeout(()=>{win()},1000);
					}
				}
			}else if(arr[x+1] == "" ){
					arr[x+1] = "person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x+1].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x++;
				}else if(arr[x+1] == "des"){
					arr[x] = (arr[x] == "des")?"des" : "";
					td[x+1].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x++;
				}
			break;
		case 2:	
			if(arr[x+b] == "box+des"  ){
				if(arr[x+2*b] == ""){
				arr[x+2*b] = "box";
				arr[x+b] = "des";
				arr[x] = (arr[x] == "des")?"des":"";
				td[x+2*b].innerHTML = td[x+b].innerHTML;
				td[x+b].innerHTML = td[x].innerHTML;
				td[x].innerHTML = null;
				x += b;
				flag--;	
				}else if(arr[x+2*b] == "des" ){
				arr[x+2*b] = "box";
				arr[x+b] = "des";
				arr[x] = (arr[x] == "des")?"des":"";
				td[x+2*b].innerHTML = td[x+b].innerHTML;
				td[x+b].innerHTML = td[x].innerHTML;
				td[x].innerHTML = null;
				x += b; 
				}
			}else if(arr[x+b] == "box"){
				if(arr[x+2*b] == ""){
					arr[x+2*b] = "box";
					arr[x+b] = (arr[x+b]=="box+des")?"des":"person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x+2*b].innerHTML = td[x+b].innerHTML;
					td[x+b].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x += b;
				}else if(arr[x+2*b] == "des"){
					arr[x+2*b] = "box+des";
					arr[x+b] = (arr[x+b]=="box+des")?"des":"person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x+2*b].innerHTML = td[x+b].innerHTML;
					td[x+b].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x += b;
					flag++
					if(flag == m){
						levelarr[l] = 1;
						setTimeout(()=>{win()},1000);
					}
				}
			} else if(arr[x+b] == "" ){
					arr[x+b] = "person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x+b].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x += b;
				}else if(arr[x+b] == "des"){
					arr[x] = (arr[x] == "des")?"des" : "";
					td[x+b].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x += b;
				}
			break;
		case 3:
			if(arr[x-1] == "box+des"  ){
				if(arr[x-2] == ""){
				arr[x-2] = "box";
				arr[x-1] = "des";
				arr[x] = (arr[x] == "des")?"des":"";
				td[x-2].innerHTML = td[x-1].innerHTML;
				td[x-1].innerHTML = td[x].innerHTML;
				td[x].innerHTML = null;
				x --;
				flag--;	
				}else if(arr[x-2] == "des" ){
				arr[x-2] = "box";
				arr[x-1] = "des";
				arr[x] = (arr[x] == "des")?"des":"";
				td[x-2].innerHTML = td[x-1].innerHTML;
				td[x-1].innerHTML = td[x].innerHTML;
				td[x].innerHTML = null;
				x --; 
				}
			}else if(arr[x-1] == "box"){
				if(arr[x-2] == ""){
					arr[x-2] = "box";
					arr[x-1] = (arr[x-1]=="box+des")?"des":"person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x-2].innerHTML = td[x-1].innerHTML;
					td[x-1].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x--;
				}else if(arr[x-2] == "des"){
					arr[x-2] = "box+dex";
					arr[x-1] = (arr[x-1]=="box+des")?"des":"person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x-2].innerHTML = td[x-1].innerHTML;
					td[x-1].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x--;
					flag++;
					if(flag == m){
						levelarr[l] = 1;
						setTimeout(()=>{win()},1000);
					}
				}
			}else if(arr[x-1] == "" ){
					arr[x-1] = "person";
					arr[x] = (arr[x] == "des")?"des":"";
					td[x-1].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x--;
				}else if(arr[x-1] == "des"){
					arr[x] = (arr[x] == "des")?"des" : "";
					td[x-1].innerHTML = td[x].innerHTML;
					td[x].innerHTML = null;
					x--;
				}
			break;
	}
}