function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}
document.querySelector(".w").addEventListener("click", () => playSound("sounds/tom-1.mp3"));
document.querySelector(".a").addEventListener("click", () => playSound("sounds/tom-2.mp3"));
document.querySelector(".s").addEventListener("click", () => playSound("sounds/tom-3.mp3"));
document.querySelector(".d").addEventListener("click", () => playSound("sounds/tom-4.mp3"));
document.querySelector(".j").addEventListener("click", () => playSound("sounds/snare.mp3"));
document.querySelector(".k").addEventListener("click", () => playSound("sounds/kick-bass.mp3"));
document.querySelector(".l").addEventListener("click", () => playSound("sounds/crash.mp3"));

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      playSound("sounds/tom-1.mp3");
      break;
    case "a":
      playSound("sounds/tom-2.mp3");
      break;
    case "s":
      playSound("sounds/tom-3.mp3");
      break;
    case "d":
      playSound("sounds/tom-4.mp3");
      break;
    case "j":
      playSound("sounds/snare.mp3");
      break;
    case "k":
      playSound("sounds/kick-bass.mp3");
      break;
    case "l":
      playSound("sounds/crash.mp3");
      break;
    default:
      console.log("Invalid key");
  }
});
