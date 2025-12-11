(function ($) {
  "use strict";

  $(document).ready(function () {
    //>> Mobile Menu Js Start <<//
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Body Overlay Js Start <<//
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    //>> Sticky Header Js Start <<//

    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });

    //>> Counterup Start <<//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    //>> Wow Animation Start <<//
    new WOW().init();

    //>> Nice Select Start <<//
    if ($(".single-select").length) {
      $(".single-select").niceSelect();
    }

    //>> Hero-1 Slider Start <<//
    const sliderActive2 = ".hero-slider";
    const sliderInit2 = new Swiper(sliderActive2, {
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      speed: 3000,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot2",
        clickable: true,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });
    function animated_swiper(selector, init) {
      const animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");
          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one("animationend", function () {
              $(this).removeClass(anim + " animated");
            });
        });
      };
      animated();
      init.on("slideChange", function () {
        $(sliderActive2 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }
    animated_swiper(sliderActive2, sliderInit2);
    //>> Banner Animation <<//

    //>> Project Slider Slider Start <<//
    if ($(".project-slider").length > 0) {
      const projectSlider = new Swiper(".project-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1399: {
            slidesPerView: 5,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    const projectSlider3 = new Swiper(".project-slider-3", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot1",
        clickable: true,
      },
      breakpoints: {
        1199: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        650: {
          slidesPerView: 2,
        },

        575: {
          slidesPerView: 1,
        },

        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Marquee Slider Slider Start <<//
    if ($(".marque-slider").length > 0) {
      const marqueSlider = new Swiper(".marque-slider", {
        slidesPerView: "auto",
        spaceBetween: 40,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
      });
    }

    //>> Brand Slider Slider Start <<//
    if ($(".brand-slider").length > 0) {
      const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 50,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1199: {
            slidesPerView: 6,
          },
          991: {
            slidesPerView: 5,
          },
          767: {
            slidesPerView: 4,
          },
          575: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".brand-slider-2").length > 0) {
      const brandSlider2 = new Swiper(".brand-slider-2", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".brand-slider-3").length > 0) {
      const brandSlider3 = new Swiper(".brand-slider-3", {
        spaceBetween: 50,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1199: {
            slidesPerView: 6,
          },
          991: {
            slidesPerView: 5,
          },
          767: {
            slidesPerView: 4,
          },
          575: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Testimonial Slider Slider Start <<//
    if ($(".testimonial-slider-2").length > 0) {
      const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".testimonial-slider-22").length > 0) {
      const testimonialSlider22 = new Swiper(".testimonial-slider-22", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".testimonial-slider-3").length > 0) {
      const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
      });
    }

    //>> Team Hover Image Show Slider Start <<//
    const teamLineBox = document.querySelectorAll(".team-line-box");

    function followImageCursor(event, teamLineBox) {
      const contentBox = teamLineBox.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      teamLineBox.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
    }

    teamLineBox.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, item), 1000);
      });
    });

    //>> Quantity Js Start <<//
    $(".quantity").on("click", ".plus", function (e) {
      let $input = $(this).prev("input.qty");
      let val = parseInt($input.val(), 10); // Specify base 10
      $input.val(val + 1).change();
    });

    $(".quantity").on("click", ".minus", function (e) {
      let $input = $(this).next("input.qty");
      let val = parseInt($input.val(), 10); // Specify base 10
      if (val > 0) {
        $input.val(val - 1).change();
      }
    });

    //>> Quantity Cart Js Start <<//
    let quantity = 0;
    let price = 0;
    $(".cart-item-quantity-amount, .product-quant").html(quantity);
    $(".total-price, .product-pri").html(price.toFixed(2));
    $(".cart-increment, .cart-incre").on("click", function () {
      if (quantity <= 4) {
        quantity++;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        let basePrice = $(".base-price, .base-pri").text();
        $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
      }
    });

    $(".cart-decrement, .cart-decre").on("click", function () {
      if (quantity >= 1) {
        quantity--;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        let basePrice = $(".base-price, .base-pri").text();
        $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
      }
    });

    $(".cart-item-remove>a").on("click", function () {
      $(this).closest(".cart-item").hide(300);
    });

    // range sliger
    function getVals() {
      let parent = this.parentNode;
      let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat(slides[0].value);
      let slide2 = parseFloat(slides[1].value);
      if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
      }

      let displayElement = parent.getElementsByClassName("rangeValues")[0];
      displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    }

    window.onload = function () {
      let sliderSections = document.getElementsByClassName("range-slider");
      for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
          if (sliders[y].type === "range") {
            sliders[y].oninput = getVals;
            sliders[y].oninput();
          }
        }
      }
    };

    progressBar: () => {
      const pline = document.querySelectorAll(".progressbar.line");
      const pcircle = document.querySelectorAll(".progressbar.semi-circle");
      pline.forEach((e) => {
        const line = new ProgressBar.Line(e, {
          strokeWidth: 6,
          trailWidth: 6,
          duration: 3000,
          easing: "easeInOut",
          text: {
            style: {
              color: "inherit",
              position: "absolute",
              right: "0",
              top: "-30px",
              padding: 0,
              margin: 0,
              transform: null,
            },
            autoStyleContainer: false,
          },
          step: (state, line) => {
            line.setText(Math.round(line.value() * 100) + " %");
          },
        });
        let value = e.getAttribute("data-value") / 100;
        new Waypoint({
          element: e,
          handler: function () {
            line.animate(value);
          },
          offset: "bottom-in-view",
        });
      });
      pcircle.forEach((e) => {
        const circle = new ProgressBar.SemiCircle(e, {
          strokeWidth: 6,
          trailWidth: 6,
          duration: 2000,
          easing: "easeInOut",
          step: (state, circle) => {
            circle.setText(Math.round(circle.value() * 100));
          },
        });
        let value = e.getAttribute("data-value") / 100;
        new Waypoint({
          element: e,
          handler: function () {
            circle.animate(value);
          },
          offset: "bottom-in-view",
        });
      });
    };

    const rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            rangeInput[0].value = minPrice;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right =
              100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });

    //>> PaymentMethod Js Start <<//
    const paymentMethod = $("input[name='pay-method']:checked").val();
    $(".payment").html(paymentMethod);
    $(".checkout-radio-single").on("click", function () {
      let paymentMethod = $("input[name='pay-method']:checked").val();
      $(".payment").html(paymentMethod);
    });

    //>> Search Popup Start <<//
    const $searchWrap = $(".search-wrap");
    const $navSearch = $(".nav-search");
    const $searchClose = $("#search-close");

    $(".search-trigger").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).addClass("open");
    });

    $(".search-close").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
      $searchWrap.fadeOut(200);
      $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on("click", function (e) {
      closeSearch();
    });

    $(".search-trigger, .main-search-input").on("click", function (e) {
      e.stopPropagation();
    });

    //>> Mouse Cursor Start <<//
    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
    $(function () {
      mousecursor();
    });

    //>> Back To Top Slider Start <<//
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });

    $(document).on("click", "#back-top", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
    // Christmas Popup
    if (!localStorage.getItem("christmasPopupShown")) {
      setTimeout(function () {
        $("body").append(`
          <div id="christmas-popup" class="christmas-popup-overlay">
            <div class="christmas-popup">
              <button class="close-popup">&times;</button>
              <img src="assets/img/icon/popup-img.jpg" alt="Christmas Discount" class="popup-image">
              <h2>30% Off for Christmas!</h2>
              <p>Enjoy 30% discount on all our services this Christmas season. Contact us now to get your discount code.</p>
              <a href="contact.html" class="contact-btn">Contact for Discount</a>
            </div>
          </div>
        `);
        $("#christmas-popup").fadeIn();
        $(".close-popup").on("click", function () {
          $("#christmas-popup").fadeOut();
        });
        $(".contact-btn").on("click", function () {
          localStorage.setItem("christmasPopupShown", "true");
        });
      }, 10000);
    }
  }); // End Document Ready Function

  // Close Preloader Btn
  document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const closeBtn = document.getElementById("close-preloader");

    // When user clicks the close button
    closeBtn.addEventListener("click", function () {
      preloader.style.transition = "opacity 0.6s ease, visibility 0.6s ease";
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";

      // Optional: completely remove it after animation
      setTimeout(() => {
        preloader.style.display = "none";
      }, 600);
    });
  });

  //>> Prealoader Start <<//
  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();
})(jQuery); // End jQuery
