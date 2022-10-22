
function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    // Draw the edge circle with gradient
    // TODO: (Optional) add a gradient circle
    borderColor = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    borderColor.addColorStop(0, '#333');
    borderColor.addColorStop(0.5, 'white');
    borderColor.addColorStop(1, '#333');
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();

    // Center circle
    // TODO: make the central black circle
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();

    
}

function drawNumbers(ctx, radius) {
    //TODO: Make sure you show all the numbers
    var ang;
    var hourNum;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.fillStyle = '#333';
    ctx.textAlign="center";
    for(hourNum = 0; hourNum < 12; hourNum++){
        ang = hourNum * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(hourNum.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius){
    // TODO: Calculate the angles of every hand depending on the time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
