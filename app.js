const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");    //소문자 d
canvas.width=800;
canvas.height=800;

ctx.lineWidth = 2;
ctx.moveTo(0, 0);       // 처음위치 지정

// flatuicolors.com 색깔 가져오기
const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e"];

function onClick(event){
    // ctx.moveTo(0, 0);        처음위치 고정
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("click", onClick);

// 다시시작