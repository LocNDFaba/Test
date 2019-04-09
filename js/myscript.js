
//page loader
  //console.log("page loaded");
  $(window).on('load',function(){
    setTimeout(function(){
      $("#overlay-loader").fadeOut(300);
    },3000);
    $("#overlay-loader").fadeOut(300);

  });

$(document).ready(function(){

	//Menu toggle
	$('.menu-toggle').click(function(){
        $('nav').toggleClass('active');
    })

    $('ul li').click(function(){
        if($( window ).width() < 922)
        {
            $(this).siblings().removeClass('active');
            $(this).toggleClass('active');
        }
    })

    
    $('ul li').mouseover(function(){
      if($( window ).width() > 922)
      {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $('ul li').mouseleave(function(){
            $(this).removeClass('active');
        })
      }
    });
    
    $('#menu-x').click(function(){
      $('nav').removeClass('active');
    });

   	$("#shopping-cart-view").click(function(){
   		$('.offcanvas-container').addClass('in-view');
   		$('.offcanvas-close').click(function(){
   			$('.offcanvas-container').removeClass('in-view');
   		});
   	});

})

//sticky menu javascript
  window.onscroll = function() {stickyMenu()};

  var navbar = document.querySelector(".wrap-menu");
  var sticky = navbar.offsetTop;

  function stickyMenu() {
    //console.log("sticky");
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        
        $('#return-to-top').fadeIn(250);    
    } else {
        $('#return-to-top').fadeOut(250);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                      
    }, 400);
});