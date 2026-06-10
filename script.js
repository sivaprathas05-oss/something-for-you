let currentImage = 1;

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("active");
}

function startExperience() {
  show("dialogue");
  document.getElementById("bgm1").play();
}

function startImages() {
  show("gallery");
}

document.getElementById("gallery").addEventListener("click", () => {
  currentImage++;

  if (currentImage <= 10) {
    document.getElementById("mainImage").src = `image${currentImage}.jpg`;
  } else {
    show("afterGallery");
  }
});

function pickup() {
  show("pickup");
}

function moodShift() {
  show("shift");

  setTimeout(() => {
    show("envelope");
  }, 2000);
}

function openLetter() {
  show("letter");
  document.getElementById("bgm1").pause();
  document.getElementById("bgm2").play();
}

function blessing() {
  show("blessing");

  document.getElementById("bgm2").volume = 0.2;

  setTimeout(() => {
    document.getElementById("bgm2").pause();
  }, 6000);
}