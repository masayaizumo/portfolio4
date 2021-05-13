


$(function(){
  var imgHeight = $('.kv-img').outerHeight();
  var bgHeight = $('.kv-wrapper').outerHeight(); 
  

  $(".header-menu").on('click',function(){
    if( $(window).scrollTop() < imgHeight -50){
     
      $('.hum-wrapper').toggleClass('close'); 
      $('.close-wrapper').toggleClass('open'); 
      $('.burger-msk').fadeToggle(300); 
      $('body').toggleClass('noscroll'); 
    }else{
      //ハンバーガーボタンがfvより下にあるとき
      $(this).toggleClass('black'); 
      $('.hum-wrapper').toggleClass('close');
      $('.close-wrapper').toggleClass('open');
      $('.burger-msk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });


// スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){

    if ($(window).scrollTop() < imgHeight -50) {
     
      $('.header-logo').removeClass('black');
    }else {
     
      $('.header-logo').addClass('black');
    }
    
     if ($(window).scrollTop() < bgHeight -50) {
       $('.header-menu').removeClass('black');
     }else {
       $('.header-menu').addClass('black');
     }
  });
});
