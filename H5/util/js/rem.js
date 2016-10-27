;(function() {
	var dpr, rem, scale;
	var docEl = document.documentElement;
	var fontEl = document.createElement('style');
	var metaEl = document.querySelector('meta[name="viewport"]');
	dpr = window.devicePixelRatio || 1;
	
	// 对于2和3的屏，用2倍的方案，其余的用1倍方案
	if (dpr >= 3 && (!dpr || dpr >= 3)) {
		dpr = 3;
	} else if (dpr >= 2 && (!dpr || dpr >= 2)) {
		dpr = 2;
	} else if (dpr > 1) {
		dpr = 2;
	} else {
		// 其他设备下，仍旧使用1倍的方案
		dpr = 1;
	};
	scale = 1 / dpr;
	
	rem = docEl.clientWidth * dpr / 10;
	// 设置 viewpoer，进行缩放，达到高清
	// content="width=docEl.clientWidth,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no"
	metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no')
	
	//设置data-dpr属性，留作的css hack之用
	docEl.setAttribute('data-dpr', dpr);
	fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
	docEl.firstElementChild.appendChild(fontEl);
	
	window.rem2px = function(v) {
		v = parseFloat(v);
		return v * rem;
	};
	window.px2rem = function(v) {
		v = parseFloat(v);
		return v / rem;
	}
	window.dpr = dpr;
	window.rem = rem;
})();