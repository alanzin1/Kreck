import { getSoundTemplate } from "../templates/SoundTemplate.js";

function createCloseButton() {
  let closeButton = document.createElement("div");
  closeButton.className = "container-sound";
  closeButton.id = "container-close";
  closeButton.innerHTML = `<h1><a href="./index.html">X</a></h1>`;
  return closeButton;
}

export function renderSoundsList(sounds) {
  const soundsContainer = document.querySelector(".content");
  soundsContainer.innerHTML = "";

  sounds.forEach((sound) => {
    const soundTemplate = getSoundTemplate(sound);
    soundsContainer.appendChild(soundTemplate);
  });

  const closeButton = createCloseButton();
  soundsContainer.appendChild(closeButton);
}