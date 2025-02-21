$(document).ready(function () {
  $(".hero-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
  });
});

// Stats counter animation
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const target = parseInt(counter.innerText);
  let count = 0;
  const duration = 2000;
  const increment = target / (duration / 16);

  const updateCount = () => {
    count += increment;
    if (count < target) {
      counter.innerText =
        Math.ceil(count) + (counter.innerText.includes("%") ? "%" : "+");
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText =
        target + (counter.innerText.includes("%") ? "%" : "+");
    }
  };

  updateCount();
});
