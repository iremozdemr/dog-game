const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

const imageWidth = 575;
//ekranın genişliği / sütun sayısı
const imageHeight = 523;
//ekranın yüksekliği / satır sayısı

let frameX = 0;
let frameY = 0;

const playerImage = new Image();
playerImage.src = "dog.png";

const frameRate = 100;

let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let timer6;
let timer7;
let timer8;
let timer9;
let timer10;

//let timers = {timer1,timer2,timer3,timer4,timer5,timer6,timer7,timer8,timer9,timer10};

function animate1(){
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer6);
    clearTimeout(timer7);
    clearTimeout(timer8);
    clearTimeout(timer9);
    clearTimeout(timer10);
    frameY = 0;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 6){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer1 = setTimeout(animate1,frameRate);
    //requestAnimationFrame(animate);
}

function animate2(){
    clearTimeout(timer1);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer6);
    clearTimeout(timer7);
    clearTimeout(timer8);
    clearTimeout(timer9);
    clearTimeout(timer10);
    frameY = 1;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 6){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer2 = setTimeout(animate2,frameRate);
}

function animate3(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer6);
    clearTimeout(timer7);
    clearTimeout(timer8);
    clearTimeout(timer9);
    clearTimeout(timer10);
    frameY = 2;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 6){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer3 = setTimeout(animate3,frameRate);
}

function animate4(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer5);
    clearTimeout(timer6);
    clearTimeout(timer7);
    clearTimeout(timer8);
    clearTimeout(timer9);
    clearTimeout(timer10);
    frameY = 3;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 8){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer4 = setTimeout(animate4,frameRate);
}

function animate5(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer6);
    clearTimeout(timer7);
    clearTimeout(timer8);
    clearTimeout(timer9);
    clearTimeout(timer10);
    frameY = 4;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 10){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer5 = setTimeout(animate5,frameRate);
}

function animate6(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer7);
    clearTimeout(timer8);
    clearTimeout(timer9);
    clearTimeout(timer10);
    frameY = 5;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 4){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer6 = setTimeout(animate6,frameRate);
}

function animate7(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer6);
    clearTimeout(timer8);
    clearTimeout(timer9);
    clearTimeout(timer10);
    frameY = 6;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 6){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer7 = setTimeout(animate7,frameRate);
}

function animate8(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer6);
    clearTimeout(timer7);
    clearTimeout(timer9);
    clearTimeout(timer10);
    frameY = 7;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 6){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer8 = setTimeout(animate8,frameRate);
}

function animate9(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer6);
    clearTimeout(timer7);
    clearTimeout(timer8);
    clearTimeout(timer10);
    frameY = 8;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 11){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer9 = setTimeout(animate9,frameRate);
}

function animate10(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer6);
    clearTimeout(timer7);
    clearTimeout(timer8);
    clearTimeout(timer9);
    frameY = 9;
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,frameX*imageWidth,frameY*imageHeight,imageWidth,imageHeight,0,0,imageWidth,imageHeight);
    if(frameX < 4){
        frameX++;
    }
    else{
        frameX = 0;
    }
    timer10 = setTimeout(animate10,frameRate);
}


const select = document.getElementById("selectanimation");
select.addEventListener("change",function(){
    let selected = selectanimation.value;
    if(selected == 1){
        animate1();
    }
    else if(selected == 2){
        animate2();
    }
    else if(selected == 3){
        animate3();
    }
    else if(selected == 4){
        animate4();
    }
    else if(selected == 5){
        animate5();
    }
    else if(selected == 6){
        animate6();
    }
    else if(selected == 7){
        animate7();
    }
    else if(selected == 8){
        animate8();
    }
    else if(selected == 9){
        animate9();
    }
    else if(selected == 10){
        animate10();
    }
});

//ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
//canvas'ı temizler
//ctx.fillRect(50,50,100,100);
//canvas'ı boyar