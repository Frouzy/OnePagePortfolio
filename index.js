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

//text slide in, in jQuery

// $(document).ready(function () {
//     $(".headerOne").hide();
//     $(".headerOne").slideDown(1000);
//     $(".headerOne").hide();
//     $(".headerOne").fadeIn(2000);
    // $(".headerOne h1").hide();
    // $(".headerOne h1").fadeIn(3000);
  
   
// });

 document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "I am Franka", "A Journalist", "From Amsterdam", "Who loves to code"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1500);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 30000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});