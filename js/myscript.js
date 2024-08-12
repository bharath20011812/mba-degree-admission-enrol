$(document).ready(function () {
  /*** Newsfeed ***/
  $('.recruit-main').owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    nav: false,
    autoplay: true,
    center: false,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 2
        // margin: 85,
      },
      768: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  });
});



function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 5 seconds
      duration: 5000,
      easing: 'linear',
      step: function () {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function () {
        element.html(this.countNum + html);
      }
    });
  }

}

//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are 
    //visible in the viewport
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  })
});


$(document).ready(function () {
  // Generate captcha on page load
  generateCaptcha();
  // Handle captcha refresh button click
  $("#refresh-captcha").click(function () {
    generateCaptcha();
    $("#captcha-input").val("");
  });
  // Handle form submit
  $("#captcha-form").submit(function (event) {
    event.preventDefault();

    // Validate captcha
    var captchaInput = $("#captcha-input").val();
    var captchaCode = sessionStorage.getItem("captchaCode");
    if (captchaInput != captchaCode) {
      alert("Invalid captcha code. Please try again.");
      generateCaptcha();
      $("#captcha-input").val("");
      return;
    }
    // Form validation successful, submit form
    alert("Form submitted successfully.");
    $("#captcha-form").trigger("reset");
    generateCaptcha();
  });

  // Define the function generateCaptcha()
  function generateCaptcha() {
    // Get the canvas element with ID captcha and create an instance of its canvas rendering context
    var a = $("#captcha")[0],
        b = a.getContext("2d");
      // Clear the canvas
      b.clearRect(0, 0, a.width, a.height);
      // Define the string of characters that can be included in the captcha
      var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          e = "",
          g = -45,
          h = 45,
          i = h - g,
          j = 20,
          k = 30,
          l = k - j;
      // Generate each character of the captcha
      for (var m = 0; m < 6; m++) {
        // Select random letter from the pool to be part of the captcha
        var n = f.charAt(Math.floor(Math.random() * f.length));
        e += n;
        
        // Set up the text formatting
        b.font = j + Math.random() * l + "px Arial";
        b.textAlign = "center";
        b.textBaseline = "middle";
        
        // Set the color of the text
        b.fillStyle = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    
        // Add the character to the canvas
        var o = g + Math.random() * i;
        b.translate(20 + m * 30, a.height / 2);
        b.rotate(o * Math.PI / 180);
        b.fillText(n, 0, 0);
        b.rotate(-1 * o * Math.PI / 180);
        b.translate(-(20 + m * 30), -1 * a.height / 2);
      }
      // Set the captcha code in session storage
      sessionStorage.setItem("captchaCode", e);
  }
})


// popoup form


$(document).ready(function () {
  // Generate captcha on page load
  generateCaptcha();
  // Handle captcha refresh button click
  $("#refresh-captcha-new").click(function () {
    generateCaptcha();
    $("#captcha-input-new").val("");
  });
  // Handle form submit
  $("#captcha-form-new").submit(function (event) {
    event.preventDefault();

    // Validate captcha
    var captchaInput = $("#captcha-input-new").val();
    var captchaCode = sessionStorage.getItem("captchaCode-new");
    if (captchaInput != captchaCode) {
      alert("Invalid captcha code. Please try again.");
      generateCaptcha();
      $("#captcha-input-new").val("");
      return;
    }
    // Form validation successful, submit form
    alert("Form submitted successfully.");
    $("#captcha-form-new").trigger("reset");
    generateCaptcha();
  });

  // Define the function generateCaptcha()
  function generateCaptcha() {
    // Get the canvas element with ID captcha and create an instance of its canvas rendering context
    var a = $("#captcha-new")[0],
        b = a.getContext("2d");
      // Clear the canvas
      b.clearRect(0, 0, a.width, a.height);
      // Define the string of characters that can be included in the captcha
      var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          e = "",
          g = -45,
          h = 45,
          i = h - g,
          j = 20,
          k = 30,
          l = k - j;
      // Generate each character of the captcha
      for (var m = 0; m < 6; m++) {
        // Select random letter from the pool to be part of the captcha
        var n = f.charAt(Math.floor(Math.random() * f.length));
        e += n;
        
        // Set up the text formatting
        b.font = j + Math.random() * l + "px Arial";
        b.textAlign = "center";
        b.textBaseline = "middle";
        
        // Set the color of the text
        b.fillStyle = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    
        // Add the character to the canvas
        var o = g + Math.random() * i;
        b.translate(20 + m * 30, a.height / 2);
        b.rotate(o * Math.PI / 180);
        b.fillText(n, 0, 0);
        b.rotate(-1 * o * Math.PI / 180);
        b.translate(-(20 + m * 30), -1 * a.height / 2);
      }
      // Set the captcha code in session storage
      sessionStorage.setItem("captchaCode-new", e);
  }
})
