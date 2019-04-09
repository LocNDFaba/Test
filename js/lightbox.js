$(document).ready(function(){
 

  // Lightbox
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
  var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
  var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

  // Add overlay
  $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
  $("#gallery").append($overlay);

  // Hide overlay
  $overlay.hide();

  $(".img-overlay").click(function(e) {
    e.preventDefault();
    var imgPath = $(this).prev().attr("href");
    $image.attr("src", imgPath);
    //show overlay
    $overlay.fadeIn("slow");
  });

  // overlay clicked
  $overlay.click(function() {
    $(this).fadeOut("slow");
  });

  // Next
  $nextButton.click(function(e) {
    // Hide current image
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    // All of the images in the gallery
    var $images = $("#image-gallery img");
    if ($nextImg.length > 0) { 
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(200);
    } else {
      $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(200);
    }
    // Prevents overlay from being hidden
    e.stopPropagation();
  });

  //previous button
  $prevButton.click(function(e) {
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // the next image
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    // show the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(200);
    // Prevents overlay from being hidden
    e.stopPropagation();
  });

  // Exit clicked
  $exitButton.click(function() {
    // Fade out the overlay
    $("#overlay").fadeOut("slow");
  });
})