/* preloader fuction start */
var preloader = document.getElementById("preloader");
var navbar = document.getElementById("navbar")

function Preloader() {
  preloader.style.display="none"
  navbar.style.position="sticky"
  navbar.style.top="0"
  navbar.style.zIndex="22"
}
/* preloader fuction end */


/* theme change function start */ 

let icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="assets/theme/moon.png";
    }
    else{
        icon.src="assets/theme/sun.png";
        icon.style.marginTop="5px";
    }
}
/* theme change function end */ 

/* typing element start */ 

// Array of strings to be typed
const texts = ["Full Stack Developer", "Web Designer", "Freelancer","Computer Science Engineer"];

const typingSpeed = 100;
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-element");

// Function to type text
function typeText() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

// Function to erase text
function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, typingSpeed / 2);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, typingSpeed);
  }
}

// Start typing the first text
setTimeout(typeText, 1000);

/* typing Element end */ 




/* password showing */
function showhide() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}