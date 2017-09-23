$("#dinner, #drinks, #modal").hide();
$("#carousel img:not(:first-child)").hide();

$(document).scroll(function() {
var scroll = $(this).scrollTop();
if (scroll >= 25) {
  $("#nav_bar").addClass("black");
}

if (scroll < 25){
  $("#nav_bar").removeClass("black");
}
});


$("#brunch_anchor").on("click", function(event){
    event.preventDefault();
    $("#three_menus section").hide();
    $("#brunch").fadeIn(300);
    // $("#three_menus section").removeClass("show");
    // $("#three_menus section").addClass("dont_show");
    // $("#brunch").removeClass("dont_show");
    // $("#brunch").addClass("show");
  $("ul a").removeClass("underline");
  $("#brunch_anchor").addClass("underline");

});
$("#dinner_anchor").on("click", function(event){
  event.preventDefault();
  $("#three_menus section").hide();
  $("#dinner").fadeIn(300);
  $("ul a").removeClass("underline");
  $("#dinner_anchor").addClass("underline");

});
$("#drinks_anchor").on("click", function(event){
  event.preventDefault();
  $("#three_menus section").hide();
  $("#drinks").fadeIn(300);
  $("ul a").removeClass("underline");
  $("#drinks_anchor").addClass("underline");

});

$("form i").on("click", function(){
  $("#modal").hide();

});

$("#reserve_button_div button").on("click", function(){
  $("#modal").show();
});

var image_count_number = 0;

$(".right_arrow").on("click", function(){
  event.preventDefault();
  if(image_count_number >= 3){
    image_count_number = 0;
  }
  else{
    image_count_number += 1;
  }

  $("#carousel img").hide();
  $("#carousel img").eq(image_count_number).fadeIn(200);

});
$(".left_arrow").on("click", function(){
  event.preventDefault();
  if(image_count_number <=0){
    image_count_number = 3;
  }
  else{
    image_count_number -= 1;
  }

  $("#carousel img").hide();
  $("#carousel img").eq(image_count_number).fadeIn(200);

});

$(".hamburger").on("click", function(){

  $("header nav").toggleClass("active");
});

$(".close, header nav a").on("click", function(){
  $("header nav").removeClass("active");


});

$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  console.log(thisTarget);

  if(thisTarget != "#"){
  // get that section's top offset

  var targetOffset = $(thisTarget).offset().top-70;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
   }
});
