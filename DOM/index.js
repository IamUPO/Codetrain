var fullName = document.getElementById("name");
let Passage = document.getElementsByClassName("passage")[0];
// var Tag = document.getElementsByTagName('img')[0]
var Tag = document.querySelector("#image");
let changeNamebtn = document.querySelector("#btn");

fullName.innerHTML = "Abu";
fullName.style.color = "red";
fullName.style.fontSize = "100px";
Passage.innerHTML = "He is a school boy";
Tag.src = "img/codetrain.png";

changeNamebtn.addEventListener('click', () => {
    fullName.innerHTML = "Joe";
    fullName.style.color = 'blue';
}

);
