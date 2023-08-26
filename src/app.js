/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

window.onload = function() {
  //write your code here
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const whoNum = Math.floor(Math.random() * who.length);
  const actionNum = Math.floor(Math.random() * who.length);
  const whatNum = Math.floor(Math.random() * what.length);
  const whenNum = Math.floor(Math.random() * when.length);

  const excuse = `${who[whoNum]} ${action[actionNum]} ${what[whatNum]} ${when[whenNum]}`;
  document.querySelector("#excuse").innerHTML = excuse;

  //this creates the <img> element in the HTML:
  const img = document.createElement("img");

  const whoPics = [
    "https://w7.pngwing.com/pngs/625/213/png-transparent-cute-dalmatians-lovely-dalmatians-dog-thumbnail.png",
    "https://www.clipartmax.com/png/middle/14-144820_wheres-my-transparent-background-grandma-transparent.png",
    "https://png.pngtree.com/png-clipart/20201024/ourmid/pngtree-hand-drawn-cartoon-tortoise-clipart-png-image_2375744.jpg",
    "https://png.pngtree.com/png-clipart/20201020/ourmid/pngtree-cartoon-hand-drawn-bird-clipart-illustration-png-image_2361870.jpg"
  ];

  //this gives the <img> element an "src" attritube:
  img.src = whoPics[whoNum];

  //creates variable in js that is "assigned" to dic of class "pic": <-- I'm assuming this so I'm not sure
  const imgContainer = document.getElementById("pic");

  //this appends the variable img (which is the element <img> w src attribute) to the imgContainer:
  imgContainer.appendChild(img);
};
