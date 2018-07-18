$(document).ready(function(){
  // Set max width for viewport at 1600px
  if (window.innerWidth > 1600) {
    var mvp = document.getElementById('myViewport');
    mvp.setAttribute('content','width=1600');
  } else {return}

  // Smooth Scrolling; source: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //Refresh AOS animations after window load
  window.addEventListener('load', AOS.refresh);
});
