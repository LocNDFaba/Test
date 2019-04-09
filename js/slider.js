$(document).ready(function(){
  var $slider = $('.slider');
      $sliderBgs = $(".slide-bg"),
      diff = 0,
      curSlide = 0,
      numSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout = 4000,
      autoSlideDelay = 8000,
      $pagination = $(".slider-iter");

  function createSlideIter(){
    for(var i = 0; i < numSlides + 1 ; i++){
      var $li = $("<li class='slider-iter-elem'></li>");
      $li.addClass("slider-iter-elem-"+i).data("page",i);
      if(!i)
      {
        $li.addClass("active");
      }
      $pagination.append($li);
    }
  };

  createSlideIter();

  //if curSlide is the first then display none left control, if curSlide is the last display none right control
  //class inactive (display : none;)
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numSlides) $(".slider-control.right").addClass("inactive");
  };

  function autoPlay() {
    console.log("autoPlay");
    autoSlideTimeout = setInterval(function() {
      curSlide++;
      if(curSlide > numSlides)
        curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };

  autoPlay();

  function changeSlides(immediate){
    if(!immediate){
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setInterval(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);

    } //end IF

    window.clearInterval(autoSlideTimeout);
    $(".slider-iter-elem").removeClass("active");
    $(".slider-iter-elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $sliderBgs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoPlay();

  };

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearInterval(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;

    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $sliderBgs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });

  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-iter-elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });



  // pause slider if mouseover, autoPlay again if mouseleave
  $slider.on('mouseover',function(){
    clearInterval(autoSlideTimeout);
  }).on('mouseleave',autoPlay);


})

//đô la là lấy từ css hoặc html
/*$(document).ready(function(){
  var $slider = $('.slider');
      $sliderBgs = $(".slide-bg"),
      diff = 0,
      curSlide = 0,
      numSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout = 1000,
      autoSlideDelay = 6000,
      $pagination = $(".slider-iter");

  function createSlideIter(){
    for(var i = 0; i < numSlides + 1 ; i++){
      var $li = $("<li class='slider-iter-elem'></li>");
      $li.addClass("slider-iter-elem-"+i).data("page",i);
      if(!i)
      {
        $li.addClass("active");
      }
      $pagination.append($li);
    }
  };

  createSlideIter();

  //if curSlide is the first then display none left control, if curSlide is the last display none right control
  //class inactive (display : none;)
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numSlides) $(".slider-control.right").addClass("inactive");
  };

  function autoPlay() {
    autoSlideTimeout = setInterval(function() {
      curSlide++;
      if(curSlide > numSlides)
        curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };

  autoPlay();

  function changeSlides(immediate){
    if(!immediate){
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setInterval(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    } //end IF

    window.clearInterval(autoSlideTimeout);
    $(".slider-iter-elem").removeClass("active");
    $(".slider-iter-elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $sliderBgs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoPlay();

  };

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearInterval(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;

    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $sliderBgs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });

  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });

  $(document).on("click", ".slider-iter-elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });



})
*/
