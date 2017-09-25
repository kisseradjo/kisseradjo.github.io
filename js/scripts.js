$(document).ready(function() {
  //opening the navigation
  $('#open-nav').click(function(e) {
    e.preventDefault();
    //animating the navigation in 2 seconds
    $('nav').animate({
      bottom: "0"
    }, 2000);
    $('#open-nav').hide("slow");
  });
  //Closing the navigation
  $('#close-nav').click(function(e) {
    e.preventDefault();
    //animating the navigation in 2 seconds
    $('nav').animate({
      bottom: "-400px"
    }, 2000);
    $('#open-nav').show("slow");

  });
});
