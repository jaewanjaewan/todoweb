const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); /*이미지태그 생성*/

bgImage.src = `img/${chosenImage}`;
bgImage.className = "bgImage";

document.body.appendChild(bgImage);