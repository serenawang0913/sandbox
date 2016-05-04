var numMax = 40;
var numAry = [];
function initNumAry() {
	for (var i=0;i < numMax;i++) {
		numAry[i] = i;
	}
}
function go() {
	$(".num").each(function(index, value) {
		$(this).html(getNum());
	})
	initNumAry();
}
function getNum() {
	var indexRandom = getRandom(0, numAry.length - 1);
	var numRandom = numAry.splice(indexRandom, 1);
	return numRandom;
}
function getRandom(minNum, maxNum) {
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}

function reloadHomeAppendTS() {
	var gHomeTS = (String(location.search).split("=")[1])?String(location.search).split("=")[1]:0;
	//console.log(gHomeTS);
	var gCurrTS = $.now();
	var homepage = "home.html";
	if ((gCurrTS - gHomeTS) > 500) {
		top.location = homepage+"?_ts="+gCurrTS;
	}
}