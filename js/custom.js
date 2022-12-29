$(document).ready(function () {
  $("#hamburger-1").click(function(){
    $("body").toggleClass("is-active")
  });
  $(".menu-overley").click(function(){
    $("body").removeClass("is-active")
  });
  $(".menu_listing.bottom-menu a").click(function(){
    $(this).parent().siblings().find(".submenu").slideUp();
    $(this).next().slideToggle();
  })
  //Menu Item Active Js
  $(".menu_listing li a").click(function () {
      $(".menu_listing a").removeClass("menu-item_active");
      $(this).addClass("menu-item_active");
  });
});

$(document).ready(function(){
$(".close-btn").click(function(){
  $("body").removeClass("is-active");
});
});

$(document).ready(function(){
$('ul.login-menu li a').click(function(){
  $('ul.login-menu li a').removeClass("active-menu");
  $(this).addClass("active-menu");
});
});

// back to top
// Back to top button
$(".back_to_top").hide();
$(window).scroll(function () {
   if ($(document).scrollTop() > 250) {
       $(".back_to_top").fadeIn(300);
   } else {
       $(".back_to_top").fadeOut(300);
   }
});
$(".back_to_top").click(function () {
   $("html, body").animate({
       scrollTop: 0,
   });
   return false;
});

// Form Icon & input attribute change jQuery
$(document).ready(function(){
$(".lock-icon").click(function() {
 var input = $($(this).prev());
 if (input.attr("type") == "password") {
   input.attr("type", "text");
   $(this).find(".lock-one").toggle();
   $(this).find(".unlock-one").toggle();
 } else {
   input.attr("type", "password");
   $(this).find(".lock-one").toggle();
   $(this).find(".unlock-one").toggle();
 }
});
});

// wow animation
new WOW().init();

var langArray = [];
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})
$('#boxes-set').html(langArray);
//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');
$("#boxes-set li:first").hide();

//change button stuff on click
$('#boxes-set li').click(function(){
  var img = $(this).find('img').attr("src");
  var value = $(this).find('img').attr('value');
  var text = this.innerText;
  var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $("#boxes-set li").not(this).show();
  $(this).hide();
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".btn-box-select").toggle();
  //console.log(value);
});

$(".btn-select").click(function(){
  $(".btn-box-select").toggle();
});


// Dowload Slider
$('.owl-carousel').owlCarousel({
loop:true,
autoplay:true,  
autoplayTimeout: 2000,
margin:20,
autoWidth:true,
nav:true,
responsive:{
    0:{
        items:4,
        margin:10,
    },
    600:{
        items:4,
        margin:15,
    },
    1000:{
        items:8
    }
}
})

