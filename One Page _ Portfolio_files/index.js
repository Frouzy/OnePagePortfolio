$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 500 &&  
      $(".navbar-inverse").addClass("opacity","none")){
      // $(".navbar-inverse").fadeIn('6000')
    }

    else if($(window).scrollTop() <= 500 ){
      $(".navbar-inverse").removeClass("opacity", "initial")
    }
  })
})



// $(document).ready(function () {
//     $(".headerOne").hide();
//     $(".headerOne").slideDown(1000);
//     $(".headerOne").hide();
//     $(".headerOne").fadeIn(2000);
    // $(".headerOne h1").hide();
    // $(".headerOne h1").fadeIn(3000);
  
   
// });

