$(function(){"use strict";$(window).on('load',function(event){$('.preloader').delay(100).fadeOut(100);});$(window).on('scroll',function(event){var scroll=$(window).scrollTop();if(scroll<20){$(".header_navbar").removeClass("sticky");$(".header_navbar img").attr("src","assets/images/logo.svg");}else{$(".header_navbar").addClass("sticky");$(".header_navbar img").attr("src","assets/images/logo-2.svg");}});var scrollLink=$('.page-scroll');$(window).scroll(function(){var scrollbarLocation=$(this).scrollTop();scrollLink.each(function(){var sectionOffset=$(this.hash).offset().top-73;if(sectionOffset<=scrollbarLocation){$(this).parent().addClass('active');$(this).parent().siblings().removeClass('active');}});});$(".navbar-nav a").on('click',function(){$(".navbar-collapse").removeClass("show");});$(".navbar-toggler").on('click',function(){$(this).toggleClass("active");});$(".navbar-nav a").on('click',function(){$(".navbar-toggler").removeClass('active');});$('.video-popup').magnificPopup({type:'iframe'});$('.image-popup').magnificPopup({type:'image',gallery:{enabled:true}});$('.screenshot_active').slick({dots:false,infinite:true,speed:300,slidesToShow:3,slidesToScroll:1,arrows:true,pauseOnHover:false,prevArrow:'<span class="prev"><i class="lni lni-arrow-left"></i></span>',nextArrow:'<span class="next"><i class="lni lni-arrow-right"></i></span>',responsive:[{breakpoint:1200,settings:{slidesToShow:2,}},{breakpoint:992,settings:{slidesToShow:3,}},{breakpoint:768,settings:{slidesToShow:2,}},{breakpoint:576,settings:{slidesToShow:1,}}]});$('.testimonial_author_active').slick({slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,fade:true,asNavFor:'.testimonial_content_active',});$('.testimonial_content_active').slick({slidesToShow:1,slidesToScroll:1,asNavFor:'.testimonial_author_active',dots:false,arrows:true,pauseOnHover:false,prevArrow:'<span class="prev"><i class="lni lni-arrow-left"></i></span>',nextArrow:'<span class="next"><i class="lni lni-arrow-right"></i></span>',});$(window).on('scroll',function(event){if($(this).scrollTop()>600){$('.back-to-top').fadeIn(200)}else{$('.back-to-top').fadeOut(200)}});$('.back-to-top').on('click',function(event){event.preventDefault();$('html, body').animate({scrollTop:0,},1500);});var wow=new WOW({boxClass:'wow',mobile:false,})
wow.init();});