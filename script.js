const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 90);
});

let menu = document.querySelector("#menu-icon");
let menulist = document.querySelector(".menulist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  menulist.classList.toggle("open");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  menulist.classList.remove("open");
};

var typed = new Typed(".input", {
  strings: ["Sowftware Engineer", "WebDev", "MERN Stack Developer"],
  typeSpeed: 120,
  backSpeed: 70,
  loop: true,
});

function downloadFile(event) {
  event.preventDefault();
  const link = event.currentTarget;
  const url = link.href;

  const tempLink = document.createElement("a");
  tempLink.href = url;
  tempLink.download = "ishwar_sahani.pdf"; // Ensure proper file naming
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink); // Clean up
}


// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbxB4ZMwTDbV57T52YiM3pSw2-r4JwMCV6D0zygY8nyGQVj7vFWEDRIvnfrUY1seY1_c/exec";
// let form = document.forms["google-sheet"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) =>
//       alert("Thanks for Contacting us..! I Will Contact You Soon...")
//     )
//     .catch((error) => console.error("Error!", error.message));
//   form.reset();
// });

const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawNoise() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const color = Math.random() * 255;
    data[i] = color;
    data[i + 1] = color;
    data[i + 2] = color;
    data[i + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(drawNoise);
}

drawNoise();

// Add class to animate
setTimeout(() => {
  canvas.classList.add("noise-animate");
}, 0);

const toggleButtons = document.querySelectorAll(".toggleViewButton");

toggleButtons.forEach((button) => {
  button.addEventListener("change", function () {
    const singleProject = button.closest(".single-project");
    const laptopView = singleProject.querySelector(".laptopView");
    const mobileView = singleProject.querySelector(".mobile-view");

    if (button.checked) {
      // Switch to mobile view
      laptopView.style.display = "none";
      mobileView.style.display = "block";
      mobileView.classList.add("animate__fadeIn");
      laptopView.classList.remove("animate__fadeIn", "animate__fadeOut");
      mobileView.classList.remove("animate__fadeOut");
    } else {
      // Switch to laptop view
      mobileView.style.display = "none";
      laptopView.style.display = "block";
      laptopView.classList.add("animate__fadeIn");
      mobileView.classList.remove("animate__fadeIn", "animate__fadeOut");
      laptopView.classList.remove("animate__fadeOut");
    }
  });
});











// ---------------------Animations project --------------------------------

// document.addEventListener('scroll', function() {
//   const project = document.querySelector('.single-project');
//   const rect = project.getBoundingClientRect();

//   if (rect.top < window.innerHeight && rect.bottom >= 0) {
//     project.classList.add('visible'); // Add visible class when in view
//   }
// });

// email message/form handle


