$('#dinner, #drinks').hide();

$(document).scroll(function() {
var scroll = $(this).scrollTop();
if (scroll >= 300) {
  $("#nav_bar").addClass("black");
}

if (scroll < 300){
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
