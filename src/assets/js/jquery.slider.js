/*
* @Author: DX
* @Date:   2016-11-03 09:20:32
* @Version: 1.0
* @Last Modified by:   DX
* @Last Modified time: 2016-11-03 20:16:33
*/

'use strict';
(function ($) {
 	/**
 	 * params :
 	 * 		speed {Number} [not null]		
 	 * 		interval {Number} [not null]
 	 * 		type: {String} ['slide' or 'fade', default 'slide']
 	 * 		direction: {String} ['left' or 'right', default 'right']
 	 * 		itemClass: {String} [not null]
 	 * 		tagUl: {String} [id or class]
 	 * 		tagClass: {String}
 	 * 		tagSelectedClass: {String} 
 	 * 		isTurnButton: {boolean} [default false]
 	 * 		leftButton: {String}
 	 * 		rightButton: {String}
 	 */
 	$.prototype.slider = function(params){
		var $slider = $(this);
		var $slides = $slider.find(params.itemClass);
		var $itemsUl = $(params.tagUl);
		$itemsUl.css('z-index', '10');
		//添加项目符号
		for (var i = 0, length = $slides.size(); i < length; i++) {
			var $tag = $(document.createElement("li"));
			$tag.addClass(params.tagClass);
			$itemsUl.append($tag);
		}
		var $tags = $itemsUl.find("li");
		$tags.eq(0).addClass(params.tagSelectedClass);
		var time = 0;
		var t = 0;
		var size = $slides.size()
		//从左向右滑动 slide
		function slideToRight () {
			var next = (time + 1) % size;
			var $current = $slides.eq(time);
			var $next = $slides.eq(next);
			$slides.css('z-index', '0');
			$current.css({
				zIndex: '1',
				left: '0',
			});
			$next.css({
				zIndex: '1',
				left: '100%',
			});
			$tags.removeClass(params.tagSelectedClass);
			$tags.eq(next).addClass(params.tagSelectedClass);
			$current.animate({
				left: '-100%',
			}, params.speed);
			$next.animate({
				left: '0',
			}, params.speed);
			time = next;
		};
		//从右向左滑 slide
		function slideToLeft () {
			var next = time > 0 ? time - 1 : size - 1;
			var $current = $slides.eq(time);
			var $next = $slides.eq(next);
			$slides.css('z-index', '0');
			$current.css({
				left: '0',
				zIndex: '1',
			});
			$next.css({
				left: '-100%',
				zIndex: '1',
			});
			$tags.removeClass(params.tagSelectedClass);
			$tags.eq(next).addClass(params.tagSelectedClass);
			$current.animate({
				left: '100%',
			}, params.speed);
			$next.animate({
				left: '0',
			}, params.speed);
			time = next;
		}
		//右渐变 fade
		function fadeToRight () {
			var next = (time + 1) % size;
			var $next = $slides.eq(next);
			$slides.fadeOut(0);
			$next.fadeIn(params.speed);
			$tags.removeClass(params.tagSelectedClass);
			$tags.eq(next).addClass(params.tagSelectedClass);
			time = next;
		}
		//左渐变 fade
		function fadeToLeft () {
			var next = time > 0 ? time - 1 : size - 1;
			var $next = $slides.eq(next);
			$slides.fadeOut(0);
			$next.fadeIn(params.speed);
			$tags.removeClass(params.tagSelectedClass);
			$tags.eq(next).addClass(params.tagSelectedClass);
			time = next;
		}
		//右切换函数
		var toRight = (function (type) {
			switch (type) {
				case 'slide':
					return slideToRight;
					break;
				case 'fade':
					return fadeToRight;
					break;		
				default:
					return slideToRight;
					break;
			}
		})(params.type);
		//左切换函数
		var toLeft = (function (type) {
			switch (type) {
				case 'slide':
					return slideToLeft;
					break;
				case 'fade':
					return fadeToLeft;
					break;		
				default:
					return slideToLeft;
					break;
			}
		})(params.type);
		//播放函数
		var play = (function (direction, interval) {
			switch (direction) {
				case 'right':
					return function () {
						return setInterval(toRight, interval);
					};
					break;
				case 'left':
					return function () {
						return setInterval(toLeft, interval);
					};
					break;
				default:
					return function () {
						return setInterval(toRight, interval);
					};
					break;
			}
		})(params.direction, params.interval);
		//播放
		t = play();
		//设置左右按钮
		if (params.isTurnButton) {
			var $leftButton = $slider.find(params.leftButton);
			$leftButton.css('z-index', '10');
			var $rightButton = $slider.find(params.rightButton);
			$rightButton.css('z-index', '10');
			$leftButton.click(function(event) {
				clearInterval(t);
				toLeft();
				t = play();
			});
			$rightButton.click(function(event) {
				clearInterval(t);
				toRight();
				t = play();
			});
		};
 	};
 })(jQuery);