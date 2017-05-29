//navbar scroll effect

$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 600 &&  
      $(".navbar-inverse").addClass("opacity","none")){
      // $(".navbar-inverse").fadeIn('6000')
    }

    else if($(window).scrollTop() <= 600 ){
      $(".navbar-inverse").removeClass("opacity", "initial")
    }
  })
})


//Modal
    $(document).ready(function () {
      $(".activate-modal").click(function (e) {
        e.preventDefault();
        $(".modal-wrapper").fadeIn();
      });
      $(".exit").click(function (e) {
        e.preventDefault();
        $(".modal-wrapper").fadeOut();
      });
       $(".exit").click(function (e) {
        e.preventDefault();
        $(".modal-wrapper").fadeOut();
      });
    });


//Typewriter
 document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "   ", "I am Franka", "A Journalist", "From Amsterdam", "Who loves to code"];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 30000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});
      
// CounterUp the states
  $(document).ready(function( $ ) {
    if($("span.count").length > 0){ 
      $('span.count').counterUp({
          delay: 10, // the delay time in ms
      time: 1500 // the speed time in ms
      });
    }
  });

//Carousel

$(document).ready(function () {
    var index = 0;
    var slides = $('.slide');
    var numImages = slides.length;

    $(".slide").hide();
    $("#slideOne").show();

    function carousel() {
        $(slides[index]).hide();
        index = (index + 1) % numImages;
        $(slides[index]).show();
    }

    timer = setInterval(carousel, 5000);
});



  