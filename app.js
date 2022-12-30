const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");    //소문자 d
canvas.width=800;
canvas.height=800;

ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.fill();     // fill 위까지 묶여있음

ctx.rect(250, 250, 100, 100);
ctx.fillStyle = "red";
setTimeout(() => {ctx.fill()}, 5000);   // 5초후에 fill 적용


