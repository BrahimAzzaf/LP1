// const toggle = document.getElementById('menu-toggle');
// const mobileMenu = document.getElementById('mobile-menu');

// toggle.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });

const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = slider.children.length;

function updateSlider(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('bg-gray-800'));
  dots[index].classList.add('bg-gray-800');
}

// Auto slide every 3s
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider(currentIndex);
}, 3000);

// Dots click functionality
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentIndex = idx;
    updateSlider(currentIndex);
  });
});

// Init
updateSlider(currentIndex);
// /////////////////

// const screen = document.querySelector("#screen");
// window.addEventListener('DOMContentLoaded', () => {

//     for (let i = 1; i <= 6; i++) {
//         const thumb = document.querySelector(`#thumb${i}`);
//         thumb.addEventListener('click', () => {
//             screen.setAttribute('src', thumb.getAttribute('src'));
//         });
//     }
// });

// /////////////////
const screen = document.querySelector("#screen");

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 6; i++) {
    const thumb = document.querySelector(`#thumb${i}`);

    thumb.addEventListener('click', () => {
      // Disparition + zoom-out
      screen.classList.remove("opacity-100", "scale-100");
      screen.classList.add("opacity-0", "scale-95");

      setTimeout(() => {
        screen.setAttribute("src", thumb.getAttribute("src"));

        // Réapparition + zoom-in
        screen.classList.remove("opacity-0", "scale-95");
        screen.classList.add("opacity-100", "scale-100");
      }, 200);
    });
  }
});





const questions = document.querySelectorAll(".question");
const questionDivs = document.querySelectorAll(".item");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      questions.forEach((q) => q.parentNode.classList.remove("active"));
      question.parentNode.classList.add("active");
    }

    questionDivs.forEach((questionDiv) => {
      const answer = questionDiv.querySelector(".answer");
      const arrow = questionDiv.querySelector(".arrow");

      if (questionDiv.classList.contains("active")) {
        answer.classList.remove("hidden");
        arrow.classList.add("rotate-180"); // Rotates the arrow
      } else {
        answer.classList.add("hidden");
        arrow.classList.remove("rotate-180");
      }
    });
  });
});
