const images = ["0.jpg","1.jpg","2.jpg"] //폴더안 파일 읽기로 만들어 보기

const number = Math.floor(Math.random()*images.length);

const chosenImage = images[number];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);