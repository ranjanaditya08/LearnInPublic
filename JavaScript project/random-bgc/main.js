const randomColors = "0123456789ABCDEF";

function colorGenerator() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += randomColors[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;
function startChangingColor() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }

  function changeColor() {
    document.querySelector("body").style.backgroundColor = colorGenerator();
  }
}

function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
