

(function($) { 



$.fn.CarouselO = function() {

	var $source = $('.myCreator');
	var $this;
	
	function parser(str){
		str = str.replace(/\s/g, '');
		var res = str.split(';');
		while (!res[res.length-1]) res.pop();
		return res;
	}
	for (var i=0; i < $source.length; i++) {
		$this = $source.eq(i);
		var options = parser($this.find('.myCreator__type').html());
		if(options[0] == 'carousel') carousel(options);
		else alert('why is not work?');
	}
	
	function carousel(options) {
	var img = parser($this.find('.myCreator__img').html());
	var txt = parser($this.find('.myCreator__text').html());
	var type = +options[1] || 1;
	var numOfElem = +options[2] || 1;
	var itemWidth = +options[3] || 400;
	var itemHeight = +options[4] || itemWidth * 0.75;
	var speed = +options[5] || 2000;
	var $img, $button;
	$this.html('')
		 .removeClass()
		 .addClass('myCarousel')
		 .css({height:itemHeight + 'px',
			    width:itemWidth * numOfElem +'px'});
	for (var i=0; i< img.length; i++)
		$this.append('<img src="'+img[i]+' "alt="'+txt[i]+'">');
	$img = $this.find('img')
				.addClass('myCarousel__item')  
				.css({width:itemWidth + 'px',
						height:itemHeight + 'px'});
	$this.append('<div>').append('<div>');  
		$button = $this.find('div')
						.addClass('myCarousel__button')
						.css({height:itemHeight + 'px'});
		$button.eq(1).css({right:0});
		
	if(type == 1) carousel1();
		
	function carousel1() {
		var currItem = 0;
		for(var i=0; i < $img.length; i++)
			$img.eq(i).css({left:itemWidth * i + 'px'});
		function itemChange(direction) {
			var num = $img.length - numOfElem + 1;
			currItem = (currItem + direction + num) % num;
			for(var i = 0; i < img.length; i++)
				$img.eq(i).animate({left:(i-currItem)*itemWidth+'px'},speed)	
		}
		
		$button.eq(0).on('click',function() {
			if($img.eq(currItem).queue().length == 0) itemChange(-1);
		});
		$button.eq(1).on('click',function() {
			if($img.eq(currItem).queue().length == 0) itemChange(1);
		});
		}
	}	
	return this;
	};

}) (jQuery);
