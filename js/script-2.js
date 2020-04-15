$(document).ready(function() {
	$('.burger').click(function(event) {

		$('.nav-links').toggleClass('nav-active');//animation menu-mobile
		
		$('.burger').toggleClass('toggle');//animation burger
		
		$('.nav-links li').each(function(index, links) {
			
			if(links.style.animation){
				links.style.animation = ''; /*Nếu đã tồn tại animation do đã click menu 1 lần thì xóa bỏ*/
			}else {
				links.style.animation = `navLinkFadeIn 0.5s ease-in-out forwards ${index/7+0.1}s`;
				// nếu chưa tồn tại animation hoặc đã xóa bỏ thì thêm animation menu vào.
			}
		});

	});


	var width = $(window).width();
	if(width <=768){ //với các thiết bị nhỏ hơn tablet 768px mới thực hiện hàm này
		
		$('.main-body').click(function(event) {
			$('.nav-links li').each(function(index, links) {
				
				if(links.style.animation){
					links.style.animation = '';} /*Nếu đã tồn tại animation do đã click menu 1 lần thì xóa bỏ*/
				// }else{
					
				// 	// links.style.animation = `navLinkFadeOut 0.5s ease-in-out forwards ${index/1+0.2}s`;
				// 	// nếu chưa tồn tại animation hoặc đã xóa bỏ thì thêm animation menu vào.
				// }
			});
			if($('.nav-links').hasClass('nav-active')){ /*Nếu menu đang được kích hoạt thì hàm này mới hoạt động*/
				$('.nav-links').removeClass('nav-active');
				$('.burger').removeClass('toggle'); //xóa bỏ animation hình chữ X
				$('body').removeClass('bodyFade'); //xóa bỏ lớp phủ mờ màn hình
			}

		});
	}

	if((width<=942)&&(width>768)){
		$(".social").css("display","none");
		$(".nav-links a").css("padding","0.5em");
	}

	$('nav input').click(function(event) {
		alert("Tính năng đang trong quá trình phát triển. Hiển thị ra cho vui thôi!");
	});


	if(width<=425){
		$('nav input').css("display","none");
		$('body').css("font-size","14px");
		$("button i").css("color","white").css("font-size","20px");
		$("button").css("background-color","#2f96d4").css("margin","0");
		$('.back-to-top').css("line-height","20px").css("opacity","1");
		$('.back-to-top i').css("font-size","20px");
	}
	
	$('form button').click(function(event) {
		alert("Tính năng đang được phát triển. Để đấy cho đẹp thôi! ");
	});
	/*TOÀN BỘ PHẦN TRÊN LÀ XỬ LÝ SỰ KIỆN VỚI THANH MENU DỌC Ở MOBILE*/ 

	$(".lo-go").click(function(event) {
		/* Act on the event */
	});

	$(window).scroll(function () {
	    var y = $(window).scrollTop();
	    if (y > 100){
	    	// $('nav').css('position','fixed').css("z-index","100");
	    	$('nav').css("box-shadow","0 10px 20px -10px #607d8b");
	    } 
	    else{
	    	$('nav').css('position','relative ').css('box-shadow',"");
	    }
	});


	$(window).scroll(function(event) {
		var scroll=$('html,body').scrollTop();
			console.log(scroll);
		if(scroll>500&&(($('.nav-links').hasClass('nav-active'))==false)) { //điều kiện thanh cuộn phải lớn hơn 500 và k mở menu mobile
			$('.back-to-top').addClass('show-up');
		}
		else {
			$('.back-to-top').removeClass('show-up');
		}

		if($('.back-to-top').hasClass('show-up')){
			$('.burger').click(function(event) {
				$('.back-to-top').removeClass('show-up');
			});
		}

	});
		
	var scroll=$('html,body').scrollTop();
	var pos_footer=$('footer').offset().top;
		if(scroll=(pos_footer-500)){
			
			$('footer').addClass('animateOpacity animated');
		}else {
			$('footer').removeClass('animateOpacity');
		}


	$('.back-to-top').click(function(event) {
		$('html,body').animate({scrollTop:0},600);
	});

});	