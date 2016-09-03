window.onload=function(){
	waterfall("main","box");
}

function waterfall(parent,box){
	//将main下的所有class为box的元素取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	// console.log(oBoxs.length);
	var oBoxW=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	//设置main的宽
	oParent.style.cssText="width:"+oBoxW*cols+"px;margin:0 auto";
	var hArr=[];
	for (var i = 0; i < oBoxs.length; i++) {
		if (i<cols) {
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			// console.log(minH);
			var index=getMinhIndex(hArr,minH);
			oBoxs[i].style.position="absolute";
			oBoxs[i].style.top=minH+"px";
			oBoxs[i].style.left=oBoxs[index].offsetLeft+"px";
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
	console.log(hArr);
}

//根据class获取元素
function getByClass(parent,clsName){
	//用来获取存储获取到的所有class为box的元素
	var boxArr=new Array(),
		oElements=parent.getElementsByTagName("*");
	for (var i = 0; i < oElements.length; i++) {
		if (oElements[i].className==clsName) {
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}

function getMinhIndex(arr,val){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==val) {
			return i;
		}
	}
}