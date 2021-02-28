  
      $(document).ready(function($) {
        $('section').css({ 'height': $(window).height() });
        $(window).on('resize', function() {
        
             $('section').css({ 'height': $(window).height() });
             $('body').css({ 'width': $(window).width() })
        });
        });