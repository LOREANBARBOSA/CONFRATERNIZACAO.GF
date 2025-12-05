const media = [
  "IMGENS DO LOCAL/foto1.jpeg",
  "IMGENS DO LOCAL/foto2.jpeg",
  "IMGENS DO LOCAL/foto3.jpeg",
  "IMGENS DO LOCAL/foto4.jpeg",
  "IMGENS DO LOCAL/foto5.jpeg",
  "IMGENS DO LOCAL/foto6.jpeg",
  "IMGENS DO LOCAL/foto7.jpeg",
  "IMGENS DO LOCAL/foto8.jpeg",
  "IMGENS DO LOCAL/foto9.jpeg",
  "IMGENS DO LOCAL/foto10.jpeg",
  "IMGENS DO LOCAL/foto11.jpeg",
  "IMGENS DO LOCAL/foto12.jpeg",
  "IMGENS DO LOCAL/foto13.jpeg",
  "IMGENS DO LOCAL/foto14.jpeg",
  "IMGENS DO LOCAL/video1.mp4",
  "IMGENS DO LOCAL/video2.mp4",
  "IMGENS DO LOCAL/video3.mp4"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "block";

  const img = document.getElementById("lightbox-img");
  const video = document.getElementById("lightbox-video");

  if (media[currentIndex].endsWith(".mp4")) {
    img.style.display = "none";
    video.style.display = "block";
    video.src = media[currentIndex];
  } else {
    video.style.display = "none";
    img.style.display = "block";
    img.src = media[currentIndex];
  }
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("lightbox-video").pause();
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = media.length - 1;
  if (currentIndex >= media.length) currentIndex = 0;
  openLightbox(currentIndex);
}
