function generateObject(x, y, r, colour){

	ctx.beginPath(); 
	ctx.fillStyle = "#" + colour;
	ctx.arc(x, y, r, 0, 2* Math.PI);
	ctx.fill();
	ctx.stroke();
}

function checkCollisions(player){

if(player.circle.x > canvasWidth-player.circle.r){
	player.circle.x = canvasWidth - player.circle.r;

}
if(player.circle.x < player.circle.r){
	player.circle.x = player.circle.r;

}
if(player.circle.y > canvasHeight-player.circle.r){
	player.circle.y = canvasHeight - player.circle.r;

}
if(player.circle.y < player.circle.r){
	player.circle.y = player.circle.r;

}
if (circleCollision(player, p2) && player.type == "player1"){
	console.log("Player Collision");		
	//p1.randomisePos();
	//p2.randomisePos();
	}

if (circleCollision(player, heart)){
	console.log("Heart Collision");
	//player.health+=1;
	//heart.randomisePos();
	}

	if (circleCollision(player, bomb)){
	console.log("Bomb Collision");
	//player.health-=1;
	//bomb.randomisePos()
	}

	if (circleCollision(player, speedBoost)){
	console.log("Speed Boost Collision");
	//player.speed *= speedMultiplier
	//setTimeout(speedReset, 5000);
	//speedBoost.randomisePos()
	}	
}

function circleCollision(c1, c2){

//console.log(c1.circle.x);
var ret = false;
sideA = Math.abs(c1.circle.x - c2.circle.x);
sideB = Math.abs(c1.circle.y - c2.circle.y);

sideA = sideA*sideA;
sideB = sideB*sideB;

distance = Math.sqrt(sideA + sideB);

	if(distance < c1.circle.r + c2.circle.r){
	ret = true;
	}
	return ret;
}

function controller(){
if(event.keyCode == 68){
	p1.direction = 3;
	p1.move();
	}
if(event.keyCode == 65){
	p1.direction = LEFT;
	p1.move();
}
if(event.keyCode == 87){
	p1.direction = UP;
	p1.move();
}
if(event.keyCode == 83){
	p1.direction = DOWN;
	p1.move();
}
if(event.keyCode == 39){
	p2.direction = RIGHT;
	p2.move();
}
if(event.keyCode == 37){
	p2.direction = LEFT;
	p2.move();
}
if(event.keyCode == 38){
	p2.direction = UP;
	p2.move();
}
if(event.keyCode == 40){
	p2.direction = DOWN;
	p2.move();
}
}