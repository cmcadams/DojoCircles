function generateObject(x, y, r, colour){

	ctx.beginPath(); 
	ctx.fillStyle = "#" + colour;
	ctx.arc(x, y, r, 0, 2* Math.PI);
	ctx.fill();
	ctx.stroke();
}

function checkCollisions(player){

if(player.superCircle.circle.x > canvasWidth-player.superCircle.circle.r){
	player.superCircle.circle.x = canvasWidth - player.superCircle.circle.r;

}
if(player.superCircle.circle.x < player.superCircle.circle.r){
	player.superCircle.circle.x = player.superCircle.circle.r;

}
if(player.superCircle.circle.y > canvasHeight-player.superCircle.circle.r){
	player.superCircle.circle.y = canvasHeight - player.superCircle.circle.r;

}
if(player.superCircle.circle.y < player.superCircle.circle.r){
	player.superCircle.circle.y = player.superCircle.circle.r;

}
if (circleCollision(player, p2) && player.type == "player1"){
	console.log("Player Collision");		
	//p1.superCircle.randomisePos();
	//p2.superCircle.randomisePos();
	}

if (circleCollision(player, heart)){
	console.log("Heart Collision");
	//player.health+=1;
	//heart.superCircle.randomisePos();
	}

	if (circleCollision(player, bomb)){
	console.log("Bomb Collision");
	//player.health-=1;
	//bomb.superCircle.randomisePos()
	}

	if (circleCollision(player, speedBoost)){
	console.log("Speed Boost Collision");
	//player.speed *= speedMultiplier
	//setTimeout(speedReset, 5000);
	//speedBoost.superCircle.randomisePos()
	}	
}

function circleCollision(c1, c2){

//console.log(c1.superCircle.circle.x);
var ret = false;
sideA = Math.abs(c1.superCircle.circle.x - c2.superCircle.circle.x);
sideB = Math.abs(c1.superCircle.circle.y - c2.superCircle.circle.y);

sideA = sideA*sideA;
sideB = sideB*sideB;

distance = Math.sqrt(sideA + sideB);

	if(distance < c1.superCircle.circle.r + c2.superCircle.circle.r){
	ret = true;
	}
	return ret;
}

function controller(){
if(event.keyCode == 68){
	p1SuperCircle.direction = 3;
	p1SuperCircle.move();
}
if(event.keyCode == 65){
	p1SuperCircle.direction = 1;
	p1SuperCircle.move();
}
if(event.keyCode == 87){
	p1SuperCircle.direction = 2;
	p1SuperCircle.move();
}
if(event.keyCode == 83){
	p1SuperCircle.direction = 4;
	p1SuperCircle.move();
}
if(event.keyCode == 39){
	p2SuperCircle.direction = 3;
	p2SuperCircle.move();
}
if(event.keyCode == 37){
	p2SuperCircle.direction = 1;
	p2SuperCircle.move();
}
if(event.keyCode == 38){
	p2SuperCircle.direction = 2;
	p2SuperCircle.move();
}
if(event.keyCode == 40){
	p2SuperCircle.direction = 4;
	p2SuperCircle.move();
}
}