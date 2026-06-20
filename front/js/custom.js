/*wow animation*/
$(document).ready(function () {
  new WOW().init();
});
/*wow animation end*/


/* headar start -----------------------------------------
---------------------------------------------------------*/
$(function () {
  var header = $(".navbarscroll");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
      header.removeClass("scrollHeader").addClass("fixedHeader");
    } else {
      header.removeClass("fixedHeader").addClass("scrollHeader");
    }
  });
});
