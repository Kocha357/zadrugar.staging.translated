let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}
window.onload = function () {
  const loader = document.querySelector("#loader");
  loader.style.display = "none";
};
const videos = document.querySelectorAll("video");
videos.forEach((video) => {
  video.addEventListener(
    "volumechange",
    () => {
      if (!video.muted && video.volume > 0) {
        video.muted = true;
        video.volume = 0;
      }
    },
    { passive: true }
  );
});
