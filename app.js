const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");    //소문자 d
canvas.width=800;
canvas.height=800;

ctx.moveTo(50, 50);   // 브러쉬 위치 이동
ctx.lineTo(150, 50);    // 직전 브러쉬 위치부터 해당 위치까지 선긋기
ctx.lineTo(150, 150);   
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.stroke();       // 선 칠하기
