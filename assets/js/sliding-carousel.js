// ============== Web Service Hero Owl Carousel Start ====================== //
var owl = $(".web-service-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  animateIn: "animate__fadeInRight",
  animateOut: "animate__fadeOutLeft",
  dots: false,
  nav: false,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [8000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
// ============== Web Service Hero Owl Carousel End ====================== //

// ============== Web testimonial Owl Carousel Start ====================== //
var owl = $(".testimoanial-carousel");
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 40,
  autoplay: true,
  dots: false,
  nav: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },

    1024: {
      items: 2,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
// ============== Services Owl Carousel End ====================== //

// ============== graphic-sec-two-carousel Owl Carousel Start ====================== //
var owl = $(".graphic-sec-two-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  dots: false,
  nav: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
// ============== Services Owl Carousel End ====================== //
// ============== graphic-sec-three-cont-carousel Owl Carousel Start ====================== //
var owl = $(".graphic-sec-three-cont-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 0,
  autoplay: true,
  dots: false,
  nav: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 4,
      nav: true,
    },
    700: {
      items: 2,
      nav: true,
    },
    1300: {
      items: 4,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
// ============== Services Owl Carousel End ====================== //

// ============== graphic-sec-four-container-row-col-carousel Owl Carousel Start ====================== //
var owl = $(".graphic-sec-four-container-row-col-carousel");
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 0,
  autoplay: true,
  dots: false,
  nav: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
// ============== Services Owl Carousel End ====================== //

// ============== Marketing Carousel Owl Carousel Start ====================== //
var owl = $(".marketing-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  dots: false,
  nav: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
// ============== Services Owl Carousel End ====================== //
