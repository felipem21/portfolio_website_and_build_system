$(document).ready(function(){
    $('#privacy').on('click', function(){
        alert("Thank you for visiting");
    });

    
    $(".liveOne").on('click', function(){
        $(".showUpOne").fadeIn(3000);        
    });

    $(".liveTwo").on('click', function(){
        $(".showUpTwo").fadeIn(3000);        
    });

    $(".liveThree").on('click', function(){
        $(".showUpThree").fadeIn(3000);        
    });

    /*ADD SMOOTH SCROLLING*/
   
    // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Prevent default anchor click behavior
        event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  });  

  /*form validator*/
  
    
/*ending of document ready*/    
});