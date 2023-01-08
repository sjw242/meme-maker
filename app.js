const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");    //소문자 d
canvas.width=800;
canvas.height=800;

ctx.fillRect(210, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);    // 가로세로위치, 너비, 시작지점, 끝지점
ctx.fill();

ctx.beginPath();    // 지점 새로 시작하는건 필수
ctx.arc(260+10, 100, 8, Math.PI, 2 * Math.PI);      // 원 모양 유지하려면 시작지점도 원 수식
ctx.arc(220+10, 100, 8, Math.PI, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
