/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoChoice = who[Math.floor(Math.random() * who.length)];
  let actionChoice = action[Math.floor(Math.random() * action.length)];
  let whatChoice = what[Math.floor(Math.random() * what.length)];
  let whenChoice = when[Math.floor(Math.random() * when.length)];

  let excuse =
    whoChoice + " " + actionChoice + " " + whatChoice + " " + whenChoice;
  document.querySelector("#excuse").innerHTML = excuse;

  var img = document.createElement("img");

  if (whoChoice == who[0]) {
    img.src =
      "https://w7.pngwing.com/pngs/625/213/png-transparent-cute-dalmatians-lovely-dalmatians-dog-thumbnail.png";
  } else if (whoChoice == who[1]) {
    img.src =
      "https://www.clipartmax.com/png/middle/14-144820_wheres-my-transparent-background-grandma-transparent.png";
  } else if (whoChoice == who[2]) {
    img.src =
      "https://png.pngtree.com/png-clipart/20201024/ourmid/pngtree-hand-drawn-cartoon-tortoise-clipart-png-image_2375744.jpg";
  } else {
    img.src =
      "https://png.pngtree.com/png-clipart/20201020/ourmid/pngtree-cartoon-hand-drawn-bird-clipart-illustration-png-image_2361870.jpg";
  }

  var src = document.getElementById("pic");
  src.appendChild(img);
};
