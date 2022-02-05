// JavaScript Document

$(function() {
	var winW;
	var winH;
	var doraH = $(".ukidora").height();
	var doraW = 116;
	var doraY;
	var doraX;
	var scrollContentsArray = [];
	var current = -1;
	var aftercurrent = -1
	var isMove = false;
	var galleryW = 0;
	var interval;
	var thumW = 210;
	var thumAnimeW = 160;
	var goodsimgArray = [];
	var galleryimgArray = [];
	var eventArray = [];
	var galleryID;
	var itemflg = true;
	var eventflg = true;
	var eventCount = 0;
	var goodsCount = 0;
	var eventLength;
	var goodsLength;
	var scrolltopDora = true;
	var scrollFukidashi = true;
	var modalFlg = false;
	var scrollFlg = true;
	var viewed_items;
	var galleryXArray = [];
	var topID;
	var topFlg = false;
	var topBgY;
	var updateArray = [];
	var firstflg = true;
	var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
	var userAgent = window.navigator.userAgent.toLowerCase();
    var appVersion = window.navigator.appVersion.toLowerCase();
	$(document).on("contextmenu",function(){
		return false;
	  });
	var loadingCount = 0;
	var topHtml = [
		['<div class="topBg--bg"></div><div class="topBg--bg--contents"></div><ul class="topBg--item"><li class="bg--1"><div><img src="assets/img/top/bg--1.gif" width="1876" height="78" alt=""/></div></li>  	<li class="bg--2"><div><img src="assets/img/top/bg--2.gif" width="1876" height="78" alt=""/></div></li>  	<li class="bg--3"><div><img src="assets/img/top/bg--3.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--4"><div><img src="assets/img/top/bg--4.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--5"><div><img src="assets/img/top/bg--5.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--6"><div><img src="assets/img/top/bg--6.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--7"><div><img src="assets/img/top/bg--7.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--8"><div><img src="assets/img/top/bg--8.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--9"><div><img src="assets/img/top/bg--9.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--10"><div><img src="assets/img/top/bg--10.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--11"><div><img src="assets/img/top/bg--11.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--12"><div><img src="assets/img/top/bg--12.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--13"><div><img src="assets/img/top/bg--13.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--14"><div><img src="assets/img/top/bg--14.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--15"><div><img src="assets/img/top/bg--15.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--16"><div><img src="assets/img/top/bg--16.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--17"><div><img src="assets/img/top/bg--17.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--18"><div><img src="assets/img/top/bg--18.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--19"><div><img src="assets/img/top/bg--19.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--20"><div><img src="assets/img/top/bg--20.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--21"><div><img src="assets/img/top/bg--21.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--22"><div><img src="assets/img/top/bg--22.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--23"><div><img src="assets/img/top/bg--23.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--24"><div><img src="assets/img/top/bg--24.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--25"><div><img src="assets/img/top/bg--25.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--26"><div><img src="assets/img/top/bg--26.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--27"><div><img src="assets/img/top/bg--5.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--28"><div><img src="assets/img/top/bg--6.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--29"><div><img src="assets/img/top/bg--7.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--30"><div><img src="assets/img/top/bg--5.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--31"><div><img src="assets/img/top/bg--6.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--32"><div><img src="assets/img/top/bg--7.gif" width="1876" height="78" alt=""/></div></li>	</ul>	<div class="mainContainer"> <div class="mainSection__top--main"><img src="assets/img/top/dora.png" width="634" height="861" alt="ドラえもん"/></div>'],
		['<div class="topBg"><span></span></div>   	<div class="mainContainer">		  <div class="mainSection__top--main">		 	<div class="mainSection__top--zero"></div>		  	<ul>		  		<li><img src="assets/img/top/nobita/text1.png" width="1080" height="116" alt=""/></li>		  		<li class="mainSection__top--visual"><img src="assets/img/top/nobita/nobita.png" width="1080" height="116" alt=""/></li>		  		<li class="mainSection__top--text"><img src="assets/img/top/nobita/text2.png" width="1080" height="116" alt=""/></li>		  	</ul></div>'],
		['<div class="topBg"><span></span></div>   	<div class="mainContainer">		  <div class="mainSection__top--main"><img src="assets/img/top/dorami/dorami.png" width="634" height="861" alt="ドラミ"/></div>		  <ul class="mainSection__top--item">		  	<li class="item1"><img src="assets/img/top/dorami/item1.png" width="1108" height="379" alt="Im Dorami"/></li>		  	<li class="item2"><img src="assets/img/top/dorami/item2.png" width="1108" height="379" alt="Im Dorami"/></li>		  	<li class="item3"><img src="assets/img/top/dorami/item3.png" width="1108" height="379" alt="Im Dorami"/></li>		  	<li class="item4"><img src="assets/img/top/dorami/item4.png" width="1108" height="379" alt="Im Dorami"/></li>		  </ul>']
		];
	var topHtmlSp = ['<div class="topBg--bg"></div><div class="topBg--bg--contents"></div><ul class="topBg--item">  <li class="bg--1"><img src="assets/img/top/sp/bg--1.gif" width="1876" height="78" alt=""/></li>  	  <li class="bg--2"><img src="assets/img/top/sp/bg--2.gif" width="1876" height="78" alt=""/></li>  	  <li class="bg--3"><div><img src="assets/img/top/sp/bg--3.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--4"><img src="assets/img/top/sp/bg--4.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--5"><div><img src="assets/img/top/sp/bg--5.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--6"><img src="assets/img/top/sp/bg--6.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--7"><div><img src="assets/img/top/sp/bg--7.png" width="1876" height="78" alt=""/></div></li>	    <li class="bg--8"><div><img src="assets/img/top/sp/bg--8.png" width="1876" height="78" alt=""/></div></li>	    <li class="bg--9"><div><img src="assets/img/top/sp/bg--9.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--10"><div><img src="assets/img/top/sp/bg--10.png" width="1876" height="78" alt=""/></div></li>	    <li class="bg--11"><img src="assets/img/top/sp/bg--11.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--12"><img src="assets/img/top/sp/bg--12.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--13"><img src="assets/img/top/sp/bg--13.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--14"><div><img src="assets/img/top/sp/bg--14.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--15"><div><img src="assets/img/top/sp/bg--15.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--16"><div><img src="assets/img/top/sp/bg--16.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--17"><img src="assets/img/top/sp/bg--17.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--18"><img src="assets/img/top/sp/bg--18.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--19"><img src="assets/img/top/sp/bg--19.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--20"><img src="assets/img/top/sp/bg--20.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--21"><img src="assets/img/top/sp/bg--21.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--22"><img src="assets/img/top/sp/bg--22.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--23"><img src="assets/img/top/sp/bg--23.gif" width="1876" height="78" alt=""/></div></li>	  	  <li class="bg--24"><div><img src="assets/img/top/sp/bg--24.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--25"><img src="assets/img/top/sp/bg--25.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--26"><div><img src="assets/img/top/sp/bg--26.png" width="1876" height="78" alt=""/></div></li>	  	  <li class="bg--27"><img src="assets/img/top/sp/bg--27.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--28"><div><img src="assets/img/top/sp/bg--28.gif" width="1876" height="78" alt=""/></div></li>	  	  <li class="bg--29"><img src="assets/img/top/sp/bg--29.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--30"><img src="assets/img/top/sp/bg--30.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--31"><img src="assets/img/top/sp/bg--31.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--32"><div><img src="assets/img/top/sp/bg--10.png" width="1876" height="78" alt=""/></div></li>	    <li class="bg--33"><img src="assets/img/top/sp/bg--11.gif" width="1876" height="78" alt=""/></li>	  	  </ul>	<div class="mainContainer"> <div class="mainSection__top--main"><img src="assets/img/top/dora.png" width="634" height="861" alt="ドラえもん"/></div>']
	
	//初期表示 scroll OFF
	$(document).on(scroll_event,function(e){e.preventDefault();});
	$('.container .scroll').css({ y: 200 });
	$(".ukidora").css({"top": winH - doraH});
	$('.ukidora .fukidashi__bg .fukidashi__image li').eq(0).show();
	$('body,html').scrollTop(0);
	$('html,body').animate({ scrollTop: 0 }, '1');
	//goods読み込み 
	var goodsimgArray1 = [];
	var goodsimgArray2 = [];
	$.getJSON("//www.sanrio.co.jp/api/friends/get_news/?promotion_category=doraemon&v=" + Math.random(), getFunc);
	//$.getJSON("test2.json", getFunc);
	function getFunc(myData){
		var leng = myData.data.length;
		console.log(leng);
		for(var i = 0; i < leng; i++) {
			var comment = myData.data[i].title;
			var thumbnail = myData.data[i].thumbnail;
			var url = myData.data[i].url;
			goodsimgArray1[i] = new Array();
			goodsimgArray1[i][0] = thumbnail;
			goodsimgArray1[i][1] = comment;
			goodsimgArray1[i][2] = url;
			goodsimgArray1[i][3] = myData.data[i].new_icon;
			goodsimgArray1[i][4] = Date.parse(myData.data[i].public_date);
			goodsimgArray1[i][5] = myData.data[i].public_date;
			var public_date = myData.data[i].public_date;
    		if(i === 0) updateArray[0] = public_date;
		}
		$.getJSON("//www.sanrio.co.jp/api/friends/get_goodsinfo/?promotion_category=doraemon&v=" + Math.random(), getFunc2);
	}
	function getFunc2(myData){
		var leng = myData.data.length;
		for(var i = 0; i < leng; i++) {
			var comment = myData.data[i].title;
			var thumbnail = myData.data[i].thumbnail;
			var url = myData.data[i].url;
			goodsimgArray2[i] = new Array();
			goodsimgArray2[i][0] = thumbnail;
			goodsimgArray2[i][1] = comment;
			goodsimgArray2[i][2] = url;
			goodsimgArray2[i][3] = myData.data[i].new_icon;
			goodsimgArray2[i][4] = Date.parse(myData.data[i].release_date);
			goodsimgArray2[i][5] = myData.data[i].release_date;
			var public_date = myData.data[i].release_date;
    		//if(i === 0) updateArray[0] = public_date;
		}
		getFunc3();
		
	}
	var params = [[6,2], [3,9], [1,7], [4,0], [8,5]];
var result = params.sort(function(a,b){return(a[1] - b[1]);});
console.log(result);
	function getFunc3(){
		goodsimgArray = goodsimgArray1.concat(goodsimgArray2);
		goodsimgArray = goodsimgArray.sort(function(a,b){
			return(b[4] - a[4]);
		})
		console.log(goodsimgArray,goodsimgArray.length);
		goodsLength = goodsimgArray.length;
		updateArray[0] = goodsimgArray[0][5];
		getGoodsSet();
		loadingCount++;
		loadingInit();
	}
	var goodsCount2 = 0;
	function getGoodsSet(){
		
		$('.container .mainSection__goods .btn__more').addClass("loading");
			if(goodsLength > 8) {
				
				var goodsInnerLength = goodsLength - goodsCount*8 ;
				if(goodsInnerLength > 8) {
					goodsInnerLength = 8;
				}else{
					$('.container .mainSection__goods .btn__more').remove();
				}
				
			}else{
				goodsInnerLength = goodsLength;
				$('.container .mainSection__goods .btn__more').remove();
			}
		$(".mainSection__goods .mainContainer .mainContainer__container").append('<ul class="goods__list clearfix"></ul>');
		console.log(goodsCount);
		for(var i = goodsCount2 * 8; i < goodsInnerLength + goodsCount2 * 8; i++) {
			var colorID = Math.floor(Math.random()*4)+1;
			var randID = Math.floor(Math.random()*4)+1;
			var iconClass = "";
			if(goodsimgArray[i][3]) iconClass = "new";
			$(".goods__list").eq(goodsCount).append('<li class="icon"><span class="icon'+randID+'"></span><dl><dt class="flame'+colorID+' '+iconClass+'"><a href="'+goodsimgArray[i][2]+'"><img src="'+goodsimgArray[i][0]+'" width="130" height="130" alt="'+goodsimgArray[i][1]+'"/></a></dt><dd>'+goodsimgArray[i][1]+'</dd></dl></li>');
		}
		goodsCount2++;
		$('.goods__list li').matchHeight();
		
		if(goodsCount != 0) {
		$(".goods__list").eq(goodsCount).imagesLoaded(function(){
			resizeTop.top();
			$('.container .mainSection__goods ul.goods__list:eq('+goodsCount+') li').each(function (i) {
					$('.container .mainSection__goods ul.goods__list:eq('+goodsCount+') li:eq('+i+') dt').css({scale:0}).delay(100*i).animate({ opacity:1 ,scale:1},500,'easeOutBack',function(i){
							return function() {
							};
						
					}(i));
				$('.container .mainSection__goods ul.goods__list:eq('+goodsCount+') li:eq('+i+') dd').addClass("goods--active");
				$('.container .mainSection__goods ul.goods__list:eq('+goodsCount+') li:eq('+i+') span').transition({ scale:1},500,'easeOutBack');
			});
			goodsCount++;
			setTimeout(function(){
			$('.container .mainSection__goods ul.goods__list:eq('+(goodsCount-1)+') li dt').addClass("active");	
			},600*goodsInnerLength);
		});
		}else{
			goodsCount++;
			
		}
		$('.container .mainSection__goods .btn__more').removeClass("loading");
	}
		//event
		$.getJSON("json/event.json", getEventFunc);
		function getEventFunc(myData){
			eventLength = myData.eventList.length;
			for(var i = 0; i < eventLength; i++) {
				var date = myData.eventList[i].date;
				var title = myData.eventList[i].title;
				var thumbnail = myData.eventList[i].thumnail;
				var url = myData.eventList[i].url;
				eventArray[i] = new Array();
				eventArray[i][0] = thumbnail;
				eventArray[i][1] = title;
				eventArray[i][2] = date;
				eventArray[i][3] = url;
				eventArray[i][4] = myData.eventList[i].update;
				if(i === 0) updateArray[1] = date;
			}
			
			getEventSet();
			loadingCount++;
			loadingInit();
		}
		function getEventSet(){
			$('.container .mainSection__event .btn__more').addClass("loading");
			if(eventLength > 4) {
				var eventInnerLength = eventLength - eventCount*4 ;
				if(eventInnerLength > 4) {
					eventInnerLength = 4;
				}else{
					$('.container .mainSection__event .btn__more').remove();
				}
				
			}else{
				eventInnerLength = eventArray.length;
				$('.container .mainSection__event .btn__more').remove();
				
			}
			$(".mainSection__event .mainContainer .mainContainer__container").append('<ul class="event__list"></ul>');
			if(eventInnerLength <= 2) $(".event__list").eq(eventCount).css({'height':400});
			for(var i = 0; i < eventInnerLength; i++) {
				var iconClass = "";
				var iconClass2 = "";
				if(eventArray[i][4] === "new") iconClass2 = "new";
				if(i===1 | i===2) iconClass = "right";
				$(".event__list").eq(eventCount).append('<li class="event__list--'+(i+1)+' '+iconClass+' '+iconClass2+'"><dl class="'+iconClass+'"><dt><div class="event__image"><a href="'+eventArray[i][3]+'"><img src="'+eventArray[i][0]+'" width="305" height="254" alt="'+eventArray[i][1]+'"/></a></div></dt><dd class="date">'+eventArray[i][2]+'</dd><dd>'+eventArray[i][1]+'</dd></dl></li>');
			}
			$("ul.banner li").matchHeight();
			$("ul.banner li").click(function(){
				window.open($(this).find("a").attr("href"), '_blank');
				return false;
			});
			$(".event__list").eq(eventCount).imagesLoaded(function(){
				resizeTop.top();
			});
			if(eventCount > 0) {
				$('html,body').stop().animate({ scrollTop: $(".event__list").eq(eventCount).offset().top - 200 },500,'easeInOutQuart');
					
					$('.container .mainSection__event ul.event__list:eq('+eventCount+') li').addClass("event__active");
					
					$('.container .mainSection__event ul.event__list:eq('+eventCount+') li').each(function (i) {
						$('.container .mainSection__event ul.event__list:eq('+eventCount+') li:eq('+i+') dt').css({scale:0}).delay(700+150*i).transition({scale: 1},400,'easeOutBack',function(i){
							return function() {
								$('.container .mainSection__event ul.event__list:eq('+eventCount+') li').eq(i).addClass("event__active--text");
								if(i === $('.container .mainSection__event ul.event__list:eq('+eventCount+') li').length-1) {
									eventCount++;
									$('.container .mainSection__event .btn__more').removeClass("loading");
								}
							};
						
						}(i));
					});
			}else{
				eventCount++;
				$('.container .mainSection__event .btn__more').removeClass("loading");
			}
		}
		//menu.container .mainSection__event ul.banner li
		$('#header .gnav .gnav__bell').on({
			'click':function(){
				$('body').addClass("active");
				return false;
				}
		});
		$('.menu .btn__close').on({
			'click':function(){
				$('body').removeClass("active");
				return false;
				}
		});
		$('.menu .menu__container .nav li.btn').on({
			'click':function(){
				var index = $('.active .menu .menu__container .nav li').index(this);
				var scrollMoveY = scrollContentsArray[index];
				scrollFlg = true;
				if(index === 0) scrollMoveY = 0;
				if(index === 3) {
					if($(window).width() >=768) {
						scrollMoveY = scrollMoveY + $(window).width()/2;
					}else{
						scrollMoveY = scrollMoveY + $(window).height()/2;
					}
				}
				$('body').removeClass("active");
				$('html,body').stop().delay(300).animate({ scrollTop: scrollMoveY },1500,'easeInOutQuart',function() {
					scrollFlg = false;
					$(document).off(scroll_event);
				});
				return false;
				}
		});
		$(document).on('click', '.container .mainSection__top .mainContainer .mainSection__top--new', function () {
		 		var index = $('.container .mainSection__top .mainContainer .mainSection__top--new').index(this);
				var scrollMoveY = scrollContentsArray[index+1];
				if(index === 2) {
					scrollMoveY = scrollContentsArray[index+1] + winH/2;
				}
				scrollFlg = true;
				$('body').removeClass("active");
				$('html,body').stop().delay(300).animate({ scrollTop: scrollMoveY },1500,'easeInOutQuart',function() {
					scrollFlg = false;
					$(document).off(scroll_event);
				});
		});
		$(document).on('click', '.container .mainSection__goods ul.goods__list li,.container .mainSection__event ul.event__list li', function () {
		 	window.open($(this).find("a").attr("href"), '_blank');
			return false;
		});
		//modal
		$('.container .mainSection__event .btn__more').on({
			'click':function(){
				getEventSet();
				return false;
				}
		});
		$('.container .mainSection__goods .btn__more').on({
			'click':function(){
				getGoodsSet();
				return false;
				}
		});
		//sns
		function fullScreen(theURL) {
			window.open(theURL,"newWin1",'width=600,height=600,scrollbars=yes');
		}
		$(".sns li").on({
		'click':function(){
			var snsID = $(".sns li").index(this);
			if(snsID===1) {
				fullScreen('http://www.facebook.com/sharer.php?u='+location.href);
			}else if(snsID===0) {
				fullScreen('http://twitter.com/share?url='+location.href);
			}else if(snsID===2) {
				fullScreen('http://line.me/R/msg/text/?'+location.href);
			}
			return false;
		}
		});
		//gallery
		$.getJSON("json/gallery.json", getGalleryFunc);
		function getGalleryFunc(myData){
			var length = myData.galleryList.length;
			for(var i = 0; i < length; i++) {
				var title = myData.galleryList[i].title;
				var thumbnail = myData.galleryList[i].thumnail;
				var main = myData.galleryList[i].main;
				galleryimgArray[i] = new Array();
				galleryimgArray[i][0] = thumbnail;
				galleryimgArray[i][1] = main;
				var update = myData.galleryList[i].update;
				
				var iconClass = "";
				var iconClass2 = "";
				if(i === 0) iconClass = "new";
				if(update === "new") iconClass2 = "new--small";
				$(".graphic__list").append('<li class="'+iconClass+' '+iconClass2+' gbtn"><dl><dt><div class="graphic__container"><p><img src="'+thumbnail+'" width="816" height="681" alt="graphic gallery"/></p><span class="icon__modal"></span></div></dt></dl></li>');
				if(i === 0) updateArray[2] = myData.galleryList[i].date;
			}
			$(".graphic__list").imagesLoaded(function(){
				for(var i = 0; i < length; i++) {
					var gW = $('.container .mainSection__graphic ul.graphic__list li:eq('+i+') dt .graphic__container img').width();
					$('.container .mainSection__graphic ul.graphic__list li:eq('+i+') dt').css({width: gW});
				}
				resizeTop.top();
			});
			$(".graphic__list").append('<li class="page__top"><div class="page_top--door"></div><div class="page_top--dora"></div></li>');
			//mordal
			$('.container .mainSection__graphic ul.graphic__list li.gbtn').on({
			'click':function(){
				galleryID = $('.container .mainSection__graphic ul.graphic__list li').index(this);
				modalInit(galleryID);
				return false;
				}
			});
			//page top btn 
			$('.container .mainSection__graphic .page__top').on({
				'click':function(){
					pageTop();
					return false;
					}
			});
			function pageTop(){
				$('.container .mainSection__graphic .page__top').addClass("active");
				$('.ukidora').transition({y: winH/2},700,'easeInBack',function() {
					setTimeout(function(){
						$('.container .mainSection__graphic .page__top').addClass("active--click--dora");
					},1000);
					setTimeout(function(){
						$('.container .mainSection__graphic .page__top').addClass("active--click");
					},1700);
					setTimeout(function(){
						$('body').append('<div class="loader"><ul class="loader--main"><li></li><li class="doraemon"></li></ul></div>');
						$('.loader--main').css({ opacity: 0});
						$('.loader').css({ opacity: 0}).transition({ opacity: 1 },1500,'easeInOutQuart',function() {
							$('.loader--main').delay(400).transition({ opacity: 1 },1000,function() {
								$('body,html').scrollTop(0);
								$('.loader').delay(800).transition({ opacity: 0,perspective: '800px', rotateY: '0deg' },1500,'easeInOutQuart',function() {
									$('.loader').remove();
									$('.container .mainSection__graphic .page__top').removeClass("active--click");
									$('.container .mainSection__graphic .page__top').removeClass("active--click--dora");
									$('.container .mainSection__graphic .page__top').removeClass("active");
									$('.container .mainSection__graphic .mainContainer').scrollLeft(0);
								});
							});
							
						});
						
					},2200);
					//1 loader表示
					//2 loader一定時間表示（その時に$('body,html').scrollTop(0);）
					//3 loader remove
					//<div class="loader"><ul class="loader--main">		<li></li><li class="doraemon"></li></ul></div>
					/*$('html,body').stop().delay(1800).animate({ scrollTop: 0 },3200,'easeInOutQuart',function() {
						
						$('.ukidora').transition({y: 0},700,'easeOutQuart');
					});*/
				});
			}
    		loadingCount++;
			loadingInit();
		}
		
		
		$('.goods__list li').on({
    	'click':function(){
			window.open($(this).find("a").attr("href"), '_blank');
			return false;
			}
		});
	
	
	//modal
	function modalInit(num){
		if(!modalFlg) $('.modal').show().css({ opacity : 0 }).transition({opacity: 1},700,'easeInOutQuart');
		modalFlg = true;
		$(document).on(scroll_event,function(e){e.preventDefault();});
		console.log(galleryimgArray[num][1]);
		if(galleryID <= 0) {
			$('.modal .modal__container .btn__arrow li.btn__arrow--prev').hide();
			$('.modal .modal__container .btn__arrow li.btn__arrow--next').show();
		}else if(galleryID >= galleryimgArray.length-1) {
			$('.modal .modal__container .btn__arrow li.btn__arrow--prev').show();
			$('.modal .modal__container .btn__arrow li.btn__arrow--next').hide();
		}else{
			$('.modal .modal__container .btn__arrow li.btn__arrow--prev').show();
			$('.modal .modal__container .btn__arrow li.btn__arrow--next').show();
		}
		$('.modal .modal__container dt img').remove();
		$('.modal .modal__container dt').append('<img src="'+galleryimgArray[num][1]+'" width="816" height="681" alt=""/>');
		resizeModal.top();
		//$('.modal .modal__container dd').transition({perspective: '800px', rotateX: '-90deg'},400,'easeInBack',function() {
			//$('.modal .modal__container dd').html(galleryimgArray[num][1]);
			
			$('.modal .modal__container').imagesLoaded(function(){
				setTimeout(function(){
					$('.modal .modal__container img').transition({opacity: 1},400,'easeInOutQuart');
					//$('.modal .modal__container dd').css({rotateX: '-90deg'}).transition({perspective: '800px', rotateX: '0deg'},400,'easeOutBack');
					resizeModal.top();
				},500);
				resizeModal.top();
			});
		//});
	}
	//modal close 
	$('.modal .modal__container .btn__close').on({
    	'click':function(){
			modalFlg = false;
			$('.modal').transition({opacity: 0},700,'easeInOutQuart',function() {
				$('.modal').hide();
				$('.modal .modal__container dt img').remove();
				$(document).off(scroll_event);
			});
			return false;
			}
	});
	//modal btn 
	$('.modal .modal__container .btn__arrow li.btn__arrow--prev').on({
    	'click':function(){
			galleryID--;
			modalInit(galleryID);
			return false;
			}
	});
	$('.modal .modal__container .btn__arrow li.btn__arrow--next').on({
    	'click':function(){
			galleryID++;
			modalInit(galleryID);
			return false;
			}
	});
	//scroll
	$('.container .scroll').on({
    	'click':function(){
			$('html,body').stop().animate({ scrollTop: scrollContentsArray[1] },1500,'easeInOutQuart');
			return false;
			}
		});
	
	//gallery btn
	var galleryCount = 0;
	$('.gallery__btn--next').on({
    	'click':function(){
			var gsc = winW/4;
			var $elm = $('html,body');
			var $sclem = $(window).scrollTop();
			if(winW <= 768) {
				gsc = winW;
				$elm = $('.container .mainSection__graphic .mainContainer');
				$sclem = $('.container .mainSection__graphic .mainContainer').scrollLeft();
				$elm.stop().animate({ scrollLeft: $sclem +  gsc },300,'easeInOutQuart');
			}else{
				$elm.stop().animate({ scrollTop: $sclem +  gsc },300,'easeInOutQuart');
			}
			
			return false;
			}
		});
	$('.gallery__btn--prev').on({
    	'click':function(){
			var gsc = winW/4;
			var $elm = $('html,body');
			var $sclem = $(window).scrollTop();
			if(winW <= 768) {
				gsc = winW;
				$elm = $('.container .mainSection__graphic .mainContainer');
				$sclem = $('.container .mainSection__graphic .mainContainer').scrollLeft();
				$elm.stop().animate({ scrollLeft: $sclem - gsc },300,'easeInOutQuart');
			}else{
				$elm.stop().animate({ scrollTop: $sclem -  gsc },300,'easeInOutQuart');
			}
			return false;
			}
		});
	
	$(window).scroll(function () {
		var scrollY = $(this).scrollTop();
		
		for (var i = scrollContentsArray.length-1; i>=0; i--) {
				if (scrollY >= scrollContentsArray[i] ) {
					scrollGallery(i, scrollY);
					break;
				}
		}
		if(scrollY > winH) {
			$('.container .scroll').fadeOut();
			$('h1').fadeIn();
		}else{
			$('.container .scroll').fadeIn();
			$('h1').fadeOut();
		}
		if(scrollY >= topBgY) {
			$('.topBg--bg--contents').addClass("fixed");
		}else{
			$('.topBg--bg--contents').removeClass("fixed");
		}
		if(winW <= 768) {
			if(scrollY >= $('#footer').offset().top - winH) {
				$('.sns').addClass("fixed");
			}else{
				$('.sns').removeClass("fixed");
			}
		}
    });
	function scrollDora(scrollY){
		if(scrollY >= winH/2 - doraH/2){
			$(".ukidora").addClass("fixed");
			if(scrollFukidashi) {
				$('.ukidora .fukidashi__bg .fukidashi__image ul').stop().transition({ scale: 0 },500,'easeInBack');
				$('.ukidora .fukidashi__bg .fukidashi__image--bg').stop().animate({ scale: 0 },500,'easeInBack');
			}
			scrollFukidashi = false;
			$(".ukidora").css({"top": winH/2 - doraH/2});
			if(winW <= 768) {
				$(".ukidora .ukidora__bg,.ukidora .fukidashi__bg").css({"right": 0});
			}else{
				$(".ukidora .ukidora__bg,.ukidora .fukidashi__bg").css({"right": doraX});
			}
			
		}else {
			$(".ukidora").removeClass("fixed").css({'top':doraY});
			$(".ukidora .ukidora__bg,.ukidora .fukidashi__bg").css({"right": 0});
			if(!scrollFukidashi) {
			$('.ukidora .fukidashi__bg .fukidashi__image li').hide();
			$('.ukidora .fukidashi__bg .fukidashi__image li').eq(0).show();
			$('.ukidora .fukidashi__bg .fukidashi__image ul').stop().transition({ scale: 1 },500,'easeOutBack');
			}
			scrollFukidashi = true;
			
			
		}
	}
	function scrollGallery(num, scrollY){
		if(num != current) {
			current = num;
			
			var doraemonX = 0;
			var doraemonY = 0;
			var drotate = 90;
			if (userAgent.indexOf('safari') != -1 ) {
				drotate = 0;
			}
			if(userAgent.indexOf('msie') == -1 && userAgent.indexOf('trident') == 29) {
				drotate = 0;
			}
			if (userAgent.indexOf('safari') == 121 | userAgent.indexOf('safari') == 107 | userAgent.indexOf('safari') == 88 ) {
				drotate = 90;
			}
			if (userAgent.indexOf('chrome') != -1 ) {
				drotate = 90;
			}
			//console.log(userAgent.indexOf('chrome'),userAgent.indexOf('trident'),drotate);
			if(winW <= 768) {
				drotate = 0;
			}
			if(num === 3) {
				//$(".ukidora .ukidora__bg,.ukidora .fukidashi__bg").css({"bottom": -winH/4}).addClass("uki_dora--stop");
				
				$(".ukidora").transition({perspective: '800px', rotateX: drotate+'deg'},800,'easeInQuart',function() {
					$(".ukidora__image").addClass("ukidora__image--fixed");
					$(".ukidora .ukidora__bg,.ukidora .fukidashi__bg").addClass("uki_dora--stop");
					
					if(winW <= 768) {
						doraemonX = winW/2 - 50;
						doraemonY = -100;
					}
					$(".ukidora").css({rotateX: -drotate+'deg'}).transition({perspective: '800px', rotateX: '0deg',x : -doraemonX, y :doraemonY},800,'easeOutQuart');
				});
				
				$(".ukidora .fukidashi__bg").css({"bottom": -winH/4 +210});
				$(".ukidora .ukidora__bg").css({"bottom": -winH/4});
				$(".gallery__btn").show().css({"bottom": winH/4});
			}else{
				//$(".ukidora .ukidora__bg,.ukidora .fukidashi__bg").css({"bottom": 0}).removeClass("uki_dora--stop");
				if(aftercurrent === 3) {
					$(".ukidora").css({'transform-origin': -(doraX-60) + "px 50%"});
					$(".ukidora").transition({perspective: '800px', rotateY: drotate+'deg'},800,'easeInQuart',function() {
						$(".ukidora .ukidora__bg,.ukidora .fukidashi__bg").removeClass("uki_dora--stop");
						$(".ukidora__image").removeClass("ukidora__image--fixed");
						$(".ukidora").css({rotateY: -drotate+'deg'}).transition({perspective: '800px', rotateY: '0deg',x : 0,y : doraemonY },800,'easeOutQuart');
					});
				}
				if(winW <= 768) {
					$(".ukidora .fukidashi__bg").css({"bottom": 70});
				}else{
					$(".ukidora .fukidashi__bg").css({"bottom": 210});
				}
				
				$(".ukidora .ukidora__bg").css({"bottom": 0});
				$(".gallery__btn").hide();
			}
			if(num === 2) {
				if(eventflg) {
					setTimeout(function(){
						$('.container .mainSection__event ul.event__list li').addClass("event__active");
						eventflg = false;
					},500);
					$('.container .mainSection__event ul.event__list li').each(function (i) {
						$('.container .mainSection__event ul.event__list li:eq('+i+') dt').css({scale:0}).delay(700+150*i).transition({scale: 1},400,'easeOutBack',function(i){
							return function() {
								$('.container .mainSection__event ul.event__list li').eq(i).addClass("event__active--text");
							};
						
						}(i));
					});
				}
				
			}
			aftercurrent = current;
			if(num === 1) {
				if(itemflg && !scrollFlg) {
						goodAnime();
					}
				
				if(itemflg) {
				$(document).on(scroll_event,function(e){e.preventDefault();});
				}
			}
			$('.ukidora .fukidashi__bg .fukidashi__image ul').delay(2000).stop().transition({ scale: 0 },500,'easeInBack',function() {
				if(current != 0) {
				$('.ukidora .fukidashi__bg .fukidashi__image li').hide();
				$('.ukidora .fukidashi__bg .fukidashi__image li').eq(num).show();
				$('.ukidora .fukidashi__bg .fukidashi__image ul').transition({ scale: 1 },500,'easeOutBack');
				}
			});
			if(current != 0) {
				$('.ukidora .fukidashi__bg .fukidashi__image--bg').delay(2000).stop().animate({ scale: 0 },500,'easeInBack').animate({ scale: 1 },500,'easeOutBack');
			}else{
				$('.ukidora .fukidashi__bg .fukidashi__image--bg').delay(2000).stop().animate({ scale: 0 },500,'easeInBack');
			}
			
		}
		if(num === 0) {
			scrollDora(scrollY);
			scrolltopDora = true;
		}else{
			scrolltopDora = false;
		}
			if(num === 3) {
				$(".graphic__list").addClass("fixed");
				$(".graphic__list").css({"transform": "translate("+-(scrollY-scrollContentsArray[3]-winW)+"px, 0px)"});
			}else{
				$(".graphic__list").removeClass("fixed");
				$(".graphic__list").css({"transform": "translate(0,0)"});
			}
		}
	//good animation
	
	function goodAnime() {
		setTimeout(function(){		
		$('.animationLayer li').remove();
		var leng = $('.container .mainSection__goods ul.goods__list li').length;
		var startLeft = winW/2-120;
		var startTop = winH/2-20;
		if(winW <= 768) {
			startLeft = winW-130;
			startTop = winH-110;
		}
		
		$('.container .mainSection__goods ul.goods__list li').each(function (n) {
			$(this).css({opacity:0});
			setTimeout(function(){
			var tX = $('.container .mainSection__goods ul.goods__list li').eq(n).offset().left + thumW/2 - thumAnimeW/2;
			var tY = $('.container .mainSection__goods ul.goods__list li').eq(n).offset().top - $(window).scrollTop() + thumW/2 - thumAnimeW/2 ;
			var rand = Math.random();
			$('.animationLayer ul.goods').append('<li><span><img src="'+goodsimgArray[n][0]+'" width="130" height="130" alt="グッズ"/></span></li>');
			$('.animationLayer ul.goods li').eq(n).
			css({'top': startTop,'left':startLeft,scale:.2}).
			show().
			transition({ left: tX,top: tY,scale:1},1000,'easeInBack',function(n){
						return function() {
							$('.animationLayer ul.goods li:eq('+n+') span').animate({ scale:0},500,'easeInBack');
							$('.container .mainSection__goods ul.goods__list li:eq('+n+')').css({opacity:1});
							$('.container .mainSection__goods ul.goods__list li:eq('+n+') dt').css({scale:0}).delay(600).animate({ opacity:1 ,scale:1},500,'easeOutBack',function() {
								$('.container .mainSection__goods ul.goods__list li:eq('+n+') dd').addClass("goods--active");
								$('.container .mainSection__goods ul.goods__list li:eq('+n+') span').transition({ scale:1},500,'easeOutBack');
							});
							
							if(n === leng-1) {
								$('.animationLayer').remove();
								setTimeout(function(){
									$('.container .mainSection__goods ul.goods__list:eq(0) li dt').addClass("active");	
								},1200);
								
								//clearInterval(interval);
								$(document).off(scroll_event);
							}
						};
						
			}(n));
			var randID = Math.floor(Math.random()*4)+1;
			$('.animationLayer ul.item').append('<li class = "icon'+randID+'"></li>');
			$('.animationLayer ul.item li').eq(n).
			css({'top': winH/2+10,'left':winW/2-30,scale:.3,opacity:0}).
			delay(800+200*n).
			transition({ left: tX,top: tY,scale:1,opacity:1 },1600,'easeInBack',function(n){
						return function() {
							$('.animationLayer ul.item li:eq('+n+')').animate({ scale:0},500,'easeInBack');
						};
				
			}(n));
			},200*n);	
		});
		itemflg = false;
		//clearInterval(interval);
		//interval = setInterval("thumPosition2()",30);
		},1300);
		
	}
	
	
	
	//top resize
	$(window).resize(function() {
		resizeTop.top();
		resizeModal.top();
	});
	function setTopSize() {}
	setTopSize.prototype.top = function() {
		winW = $(window).width();
		winH = $(window).height();
		//listW = 148
		var scrollYsc = $(window).scrollTop();
		//iPhone5対応
		var scaleW = winW/365;
		var listMargin = -40;
		var innerGoodsHeight = 220 + 22;
		var innerGoodsLeng = Math.ceil($('.container .mainSection__goods ul.goods__list li').length / 2);
		if(winW < 365){
			$(".container .mainSection__goods .mainContainer__container, ul.banner").css({scale : scaleW, 'margin-right':listMargin/scaleW, 'margin-left':listMargin/scaleW ,'height':innerGoodsHeight*innerGoodsLeng*scaleW ,'transform-origin': "50% 0" });
			//$(".container .mainSection__event .mainContainer__container").css({scale:scaleW});
		}else{
			$(".container .mainSection__goods .mainContainer__container, ul.banner").css({scale : 1, 'margin-right':-10, 'margin-left':-10 ,'height':'auto' });
		}
		
		
		
		//画像縦横判別
		$('.container .mainSection__event ul.event__list li').each(function(i) {
			var thumW = $(".container .mainSection__event ul.event__list li:eq("+i+") dl dt .event__image").width();
			var thumH = $(".container .mainSection__event ul.event__list li:eq("+i+") dl dt .event__image").height();
			var whMain = thumH/thumW;
			var w = $(".container .mainSection__event ul.event__list li:eq("+i+") dl dt .event__image img").width();
			var h = $(".container .mainSection__event ul.event__list li:eq("+i+") dl dt .event__image img").height();
			var whImg = h/w;
			if(whMain>whImg){
				$(".container .mainSection__event ul.event__list li:eq("+i+") dl dt .event__image img").css({'height':'100%','width':'auto','margin-left':(thumW-thumH*(w/h))/2});
			}else{
				$(".container .mainSection__event ul.event__list li:eq("+i+") dl dt .event__image img").css({'height':'auto','width':'100%','margin-top':(thumH-thumW*(h/w))/2});
			}
			
		});
		$('.top--update').each(function(i) {
			var thumW = $(".top--update:eq("+i+") dt span").width();
			var thumH = thumW;
			var whMain = thumH/thumW;
			var w = $(".top--update:eq("+i+") dt span img").width();
			var h = $(".top--update:eq("+i+") dt span img").height();
			var whImg = h/w;
			if(whMain>whImg){
				$(".top--update:eq("+i+") dt span img").css({'height':'100%','width':'auto','margin-left':(thumW-thumH*(w/h))/2,'margin-top':0});
			}else{
				$(".top--update:eq("+i+") dt span img").css({'height':'auto','width':'100%','margin-top':(thumH-thumW*(h/w))/2,'margin-left':0});
			}
			
		});
		
		var footH = $('#footer').outerHeight();
		var galleryThumMargin = 36;
		$('.mainSection').css({'min-height':winH});
		$('.mainSection__top').css({'height':winH});
		scrollContentsArray = [];
		$('.mainSection').each(function (i) {
			var scY = winH/2;
			
			if(i === 1) {
				scY = winH/2 - 150;
				if(winW <= 768) {
					scY = 50;
				}
			}
			
			scrollContentsArray[i] = Math.floor($(this).offset().top - scY);
		});
		doraY = winH - doraH;
		doraX = winW/2 - doraW - 20;
		if(!scrolltopDora){
			$(".ukidora").css({"top": winH/2 - doraH/2});
		}else{
			$(".ukidora").css({'top':doraY});
		}
		
		galleryW = 4 + 406;
		galleryXArray = [];
		$('.container .mainSection__graphic ul.graphic__list li').each(function (i) {
			var gW = $(this).width() + galleryThumMargin;
			galleryXArray[i] = gW;
			galleryW += gW;
		});
		if(winW <= 768) {
			galleryW = galleryW - (396 - winW)/2;
		}
		$('.container .mainSection__graphic ul.graphic__list').css({'width': galleryW});
		var $elm = $('.container .mainSection__graphic ul.graphic__list li');
		var galleryLast = $elm.eq($elm.length-1).width()/2+galleryThumMargin;
		if(winW <= 768) {
			$('.container .mainSection__graphic').css({'height': winH});
		}else{
			$('.container .mainSection__graphic').css({'height': galleryW+winH/2-galleryLast-footH+winW/2 - 140});
		}
		
		
		//topリサイズ変更
		if(topID === 0 && topFlg && !firstflg) {
			$('.mainSection__top .topBg--item').remove();
			if(winW <= 768) {
			$('.mainSection__top').append('<ul class="topBg--item">  <li class="bg--1"><img src="assets/img/top/sp/bg--1.gif" width="1876" height="78" alt=""/></li>  	  <li class="bg--2"><img src="assets/img/top/sp/bg--2.gif" width="1876" height="78" alt=""/></li>  	  <li class="bg--3"><div><img src="assets/img/top/sp/bg--3.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--4"><img src="assets/img/top/sp/bg--4.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--5"><div><img src="assets/img/top/sp/bg--5.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--6"><img src="assets/img/top/sp/bg--6.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--7"><div><img src="assets/img/top/sp/bg--7.png" width="1876" height="78" alt=""/></div></li>	    <li class="bg--8"><div><img src="assets/img/top/sp/bg--8.png" width="1876" height="78" alt=""/></div></li>	    <li class="bg--9"><div><img src="assets/img/top/sp/bg--9.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--10"><div><img src="assets/img/top/sp/bg--10.png" width="1876" height="78" alt=""/></div></li>	    <li class="bg--11"><img src="assets/img/top/sp/bg--11.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--12"><img src="assets/img/top/sp/bg--12.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--13"><img src="assets/img/top/sp/bg--13.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--14"><div><img src="assets/img/top/sp/bg--14.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--15"><div><img src="assets/img/top/sp/bg--15.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--16"><div><img src="assets/img/top/sp/bg--16.gif" width="1876" height="78" alt=""/></div></li>	    <li class="bg--17"><img src="assets/img/top/sp/bg--17.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--18"><img src="assets/img/top/sp/bg--18.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--19"><img src="assets/img/top/sp/bg--19.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--20"><img src="assets/img/top/sp/bg--20.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--21"><img src="assets/img/top/sp/bg--21.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--22"><img src="assets/img/top/sp/bg--22.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--23"><img src="assets/img/top/sp/bg--23.gif" width="1876" height="78" alt=""/></div></li>	  	  <li class="bg--24"><div><img src="assets/img/top/sp/bg--24.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--25"><img src="assets/img/top/sp/bg--25.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--26"><div><img src="assets/img/top/sp/bg--26.png" width="1876" height="78" alt=""/></div></li>	  	  <li class="bg--27"><img src="assets/img/top/sp/bg--27.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--28"><div><img src="assets/img/top/sp/bg--28.gif" width="1876" height="78" alt=""/></div></li>	  	  <li class="bg--29"><img src="assets/img/top/sp/bg--29.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--30"><img src="assets/img/top/sp/bg--30.gif" width="1876" height="78" alt=""/></li>	  	  <li class="bg--31"><img src="assets/img/top/sp/bg--31.gif" width="1876" height="78" alt=""/></li>	    <li class="bg--32"><div><img src="assets/img/top/sp/bg--10.png" width="1876" height="78" alt=""/></div></li>	    <li class="bg--33"><img src="assets/img/top/sp/bg--11.gif" width="1876" height="78" alt=""/></li>	  	  </ul>');
			}else{
$('.mainSection__top').append('<ul class="topBg--item"><li class="bg--1"><div><img src="assets/img/top/bg--1.gif" width="1876" height="78" alt=""/></div></li>  	<li class="bg--2"><div><img src="assets/img/top/bg--2.gif" width="1876" height="78" alt=""/></div></li>  	<li class="bg--3"><div><img src="assets/img/top/bg--3.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--4"><div><img src="assets/img/top/bg--4.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--5"><div><img src="assets/img/top/bg--5.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--6"><div><img src="assets/img/top/bg--6.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--7"><div><img src="assets/img/top/bg--7.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--8"><div><img src="assets/img/top/bg--8.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--9"><div><img src="assets/img/top/bg--9.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--10"><div><img src="assets/img/top/bg--10.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--11"><div><img src="assets/img/top/bg--11.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--12"><div><img src="assets/img/top/bg--12.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--13"><div><img src="assets/img/top/bg--13.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--14"><div><img src="assets/img/top/bg--14.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--15"><div><img src="assets/img/top/bg--15.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--16"><div><img src="assets/img/top/bg--16.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--17"><div><img src="assets/img/top/bg--17.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--18"><div><img src="assets/img/top/bg--18.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--19"><div><img src="assets/img/top/bg--19.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--20"><div><img src="assets/img/top/bg--20.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--21"><div><img src="assets/img/top/bg--21.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--22"><div><img src="assets/img/top/bg--22.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--23"><div><img src="assets/img/top/bg--23.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--24"><div><img src="assets/img/top/bg--24.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--25"><div><img src="assets/img/top/bg--25.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--26"><div><img src="assets/img/top/bg--26.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--27"><div><img src="assets/img/top/bg--5.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--28"><div><img src="assets/img/top/bg--6.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--29"><div><img src="assets/img/top/bg--7.gif" width="1876" height="78" alt=""/></div></li>	  <li class="bg--30"><div><img src="assets/img/top/bg--5.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--31"><div><img src="assets/img/top/bg--6.png" width="1876" height="78" alt=""/></div></li>	  <li class="bg--32"><div><img src="assets/img/top/bg--7.gif" width="1876" height="78" alt=""/></div></li>	</ul>');
			}
		}
		$('.container .mainSection__top').css({ 'margin-bottom': winH/2});
		
		if(topID === 0) {
			topBgY = $('.topBg--bg--contents').offset().top;
			
			if(winH >= 977 && scrollYsc <= topBgY) {
				$('.topBg--bg--contents').css({'top': winH });
			} 
		}
		scrollDora($(window).scrollTop());
		
	}
	var resizeTop = new setTopSize();
	
	
	function setModalSize() {}
	setModalSize.prototype.top = function() {
		winW = $(window).width();
		winH = $(window).height();
		var textH = $('.modal .modal__container .modal__container--inner dd').height();
		var marginH = 50*2;
		var marginW = 140*2;
		if(winW <= 768) {
			marginH = 30*2;
			marginW = 40*2;	
		}
		var innerW = winW -  marginW;
		var innerH = winH -  marginH;
		var whInner = innerH/innerW;
		var $elm = $('.modal .modal__container .modal__container--inner img');
		var imgW = $elm.width();
		var imgH = $elm.height();
		var whImg = imgH/imgW;
		
		var modalH = $('.modal .modal__container dt img').height();
		
		$('.modal .modal__container .modal__container--inner').css({'width':innerW, 'height':innerH - textH});
		
		if(whInner > whImg){
			$elm.css({'width':'100%','height':'auto'});
			$('.modal .modal__container .modal__container--inner dt').css({'height': 'auto'});
		}else{
			$elm.css({'height':'100%','width':'auto'});
			$('.modal .modal__container .modal__container--inner dt').css({'height': innerH - textH});
		}
		
		
		$('.modal .modal__container .modal__container--inner dd').css({'width': $elm.width()});
	}
	var resizeModal = new setModalSize();
	
	//json loading complete
	function loadingInit(){
		if(loadingCount === 3) {
			var topUpdate = ['<div class="mainSection__top--new goods top--update"><dl><dt><span><img src="'+goodsimgArray[0][0]+'" width="130" height="130" alt="'+goodsimgArray[0][1]+'"/></span></dt><dd>'+goodsimgArray[0][1]+'</dd></dl></div><div class="mainSection__top--new event top--update"><dl><dt><span><img src="'+eventArray[0][0]+'" width="305" height="254" alt="'+eventArray[0][1]+'"/></span></dt><dd>'+eventArray[0][1]+'</dd></dl></div><div class="mainSection__top--new graphic top--update"><dl><dt><span><img src="'+galleryimgArray[0][0]+'" width="816" height="681" alt="'+galleryimgArray[0][1]+'"/></span></dt></dl></div>'];
			
			$('.top--update').imagesLoaded(function(){
				$('.top--update').each(function(i) {
				var thumW = $(".top--update:eq("+i+") dt span").width();
				var thumH = $(".top--update:eq("+i+") dt span").height();
				var whMain = thumH/thumW;
				var w = $(".top--update:eq("+i+") dt span img").width();
				var h = $(".top--update:eq("+i+") dt span img").height();
				
				var whImg = h/w;
				if(whMain>whImg){
					$(".top--update:eq("+i+") dt span img").css({'height':'100%','width':'auto','margin-left':(thumW-thumH*(w/h))/2});
				}else{
					$(".top--update:eq("+i+") dt span img").css({'height':'auto','width':'100%','margin-top':(thumH-thumW*(h/w))/2});
				}

				});
			});
			
			$('.menu .menu__container .nav__fukidashi li').each(function (i) {
				$('.menu .menu__container .nav__fukidashi li:eq('+i+') dt').html(updateArray[i].substring(5, 10).replace( /\u002f/g , "." ));
			});
			topID = Math.floor(Math.random()*3);
			
			var topClass = "";
			
			if(!$.cookie("doraemon4")){
				topID = 0;
				$.cookie("doraemon4", "send",{ expires: 90, path: '/'});
			}
			//topID = 0;
			var bgClass = "bg";
			if(topID === 1) {
				topClass = "nobita";
				var rand = Math.floor(Math.random()*3);
				var bgClass = "bg"+String(rand);
			}else if(topID === 2) {
				topClass = "dorami";
				var rand = Math.floor(Math.random()*3);
				//rand = 2;
				var bgClass = "bg"+String(rand);
			}
			if(topID === 0 && $(window).width() <= 768) {
				$('.mainSection__top').append(topHtmlSp[topID]).addClass(topClass);
				$('.container .mainSection__goods').addClass("top--dora");
			}else{
				$('.mainSection__top').append(topHtml[topID]).addClass(topClass);
			}
			$('.mainSection__top .topBg').addClass(bgClass);
			$('.mainSection__top .mainContainer').append(topUpdate);
			resizeTop.top();
			
			
			$('.container .mainSection__top ul.topBg--item li, .top--update').css({scale:0});
			$('.ukidora').css({ y:doraY });
			$('.mainSection__top').imagesLoaded(function(){
				resizeTop.top();
				$('.container .mainSection__top ul.topBg--item li, .top--update').css({scale:0});
			$('.loader').delay(1000).transition({opacity: 0},900,'easeOutQuart',function() {
				$('.loader').remove();
				topFlg = true;
				if(topID === 0) {
				var leng = $('.container .mainSection__top ul.topBg--item li').length;
				$('.container .mainSection__top ul.topBg--item li').each(function (i) {
							$('.container .mainSection__top ul.topBg--item li:eq('+i+')').delay(300+120*i).transition({scale: 1},400,'easeOutBack',function(i){
								return function() {
									if(i === leng - 1) {
										$('.container .mainSection__top .topBg--bg').transition({opacity: 1},900,'easeInOutQuart',function() {
											$('.ukidora').css({ y:doraY }).delay(600).transition({ y:0},1200,'easeOutBack');
											thumInit();
											firstflg = false;
										});
									}
								};

							}(i));
				});
				} else {
					$('.ukidora').css({ y:doraY }).delay(600).transition({ y:0},1200,'easeOutBack');
					thumInit();
				}
			});
			});
		}
	}
	function thumInit(){
		$(document).off(scroll_event);
		$('.container .scroll').transition({y: 0 },700,'easeOutQuart');
		$('.top--update').each(function (i) {
			var rand = Math.floor(Math.random()*60-30);
			$(this).delay(500*i).css({ rotate : rand+'deg' }).transition({ scale : 1,rotate : '0deg'},500,'easeOutBack');
		});
	}
	$(window).load(function(){
		$('html,body').animate({ scrollTop: 0 }, '1',function() {
			scrollFlg = false;
		});
		
	});
});
function thumPosition2() {
		$('.animationLayer li').each(function (n) {
			$("span",this).css({ y: $('.container .mainSection__goods ul.goods__list').offset().top - $(window).scrollTop() - 300 });
		});
}

