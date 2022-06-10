function addEvent(event, elem, fxn) {
  if (elem.addEventListener) {
    elem.addEventListener(event, fxn, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + event, fxn);
  } else {
    elem["on" + event] = fxn;
  }
}

function drawRectangle() {
  let canvas = document.getElementById("demo1");
  let context = canvas.getContext("2d");
  context.strokeStyle = "red";
  context.fillStyle = "rgba(0, 0, 255, 0.50)";
  context.fillRect(10, 10, 100, 100);
  context.strokeRect(10, 10, 100, 100);
}

function drawPattern() {
  let canvas = document.getElementById("demo2");
  let context = canvas.getContext("2d");
  context.strokeStyle = "red";

  let img = new Image();
  img.src = "bg-bike.png";
  img.onload = function () {
    let pattern = context.createPattern(img, "repeat");
    context.fillStyle = pattern;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
  };
}

function drawGradient() {
  let canvas = document.getElementById("demo3");
  let context = canvas.getContext("2d");
  context.strokeStyle = "red";

  let gradient = context.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, "blue");
  gradient.addColorStop(1, "white");
  context.fillStyle = gradient;
  context.fillRect(10, 10, 100, 100);
  context.strokeRect(10, 10, 100, 100);
}

function drawCircle(canvas) {
  let context = canvas.getContext("2d");

  context.beginPath();
  context.arc(50, 50, 30, 0, Math.PI * 2, true);
  context.closePath();
  context.strokeStyle = "red";
  context.fillStyle = "blue";
  context.lineWidth = 3;
  context.fill();
  context.stroke();
}

function saveDrawing() {
  const canvas5 = document.getElementById("demo5");
  window.open(canvas5.toDataURL("image/png"));
}

function drawImageToCanvas() {
  let canvas = document.getElementById("demo6");
  let context = canvas.getContext("2d");
  let image = document.getElementById("myImageElem");
  context.drawImage(image, 68, 68);
}

function manipulateImage() {
  let canvas = document.getElementById("demo7");
  let context = canvas.getContext("2d");
  let image = document.getElementById("secondImage");
  context.drawImage(image, 68, 68);

  let imageData = context.getImageData(0, 0, 200, 200);
  let pixelData = imageData.data;
  console.log(pixelData.length);

  let red, green, blue, greyscale;
  for (let i = 0; i < imageData.data.length; i += 4) {
    red = imageData.data[i];
    green = imageData.data[i + 1];
    blue = imageData.data[i + 2];

    greyscale = red * 0.3 + green * 0.59 + blue * 0.11;

    imageData.data[i] = greyscale;
    imageData.data[i + 1] = greyscale;
    imageData.data[i + 2] = greyscale;
  }
  context.putImageData(imageData, 0, 0);
}

const button = document.getElementById("saveButton");
addEvent("click", button, saveDrawing, false);

drawRectangle();
drawPattern();
drawGradient();

let canvas4 = document.getElementById("demo4");

drawCircle(canvas4);

let canvas5 = document.getElementById("demo5");
drawCircle(canvas5);

addEvent("load", window, drawImageToCanvas);
addEvent("load", window, manipulateImage);
