$(() => {


    // RGB Circles
      // Add the css class 'bg-red' to the circle with the id #make-me-red
      // Now do the same for green and blue...
    $('#make-me-red').addClass('bg-red');
    $('#make-me-green').addClass('bg-green');
    $('#make-me-blue').addClass('bg-blue');
  
  
    // CMYK
      // Do the same as above for CMYK circles
      // Note that the K in CYMK means black. Check the CSS file for the appropate background classes
    $('#make-me-cyan').addClass('bg-cyan');
    $('#make-me-magenta').addClass('bg-magenta');
    $('#make-me-yellow').addClass('bg-yellow');
    $('#make-me-black').addClass('bg-black');
  
      // $('.circle').fadeOut(5000);
      //   $('.circle').fadeIn(5000);
  
  
  
    // Circle hover features
    $('.circle').hover(
      function(){
        $(this).css('opacity', '.3');
      },
      function(){
        $(this).css('opacity', '1');
      }
    );
  
  
  
  
      // for (let circle of $('.circle')) {
      //   let color = $(circle).attr('id').slice(8);
      //   console.log(color);
      //   $(circle).addClass('bg-${color}');
      // }
  
  
  
  });