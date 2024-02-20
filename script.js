const text = "aki.github.io";
const speed = 100;
const delay = 1000;
const textElement = document.getElementById('text');

function type(index = 0) {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    setTimeout(() => type(index + 1), speed);
  } else {
    setTimeout(backspace, delay);
  }
}

function backspace(index = text.length - 1) {
  if (index >= 0) {
    textElement.textContent = textElement.textContent.substring(0, textElement.textContent.length - 1);
    setTimeout(() => backspace(index - 1), speed);
  } else {
    setTimeout(type, delay);
  }
}

type();

document.getElementById('image').addEventListener('click', function() {
  const audio = new Audio('sounds/scream.mp3');
  audio.play();
});

// Play the welcome music when the page loads
window.onload = function() {
  const welcomeMusic = document.getElementById('welcomeMusic');
  const mainMusic = document.getElementById('mainMusic');
  
  welcomeMusic.play();
  
  // After welcome music finishes, play the main music
  welcomeMusic.onended = function() {
    mainMusic.loop = true; // Set main music to loop
    mainMusic.play();
  };
};
