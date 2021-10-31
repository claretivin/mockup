$(document).ready(function(){
    //  smooth scrolling 
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        //animate() method to smooth page scroll
        //(900) specifies the number of milliseconds 
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash to URL when done scrolling 
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })