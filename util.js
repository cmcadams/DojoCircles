function checkBoundary(player){

var ret = false;
if(player.circle.p.x > CANVASWIDTH-player.circle.r){
ret = RIGHT;
}
if(player.circle.p.x < player.circle.r){
ret = LEFT;
}
if(player.circle.p.y > CANVASHEIGHT-player.circle.r){
ret = BOTTOM;
}
if(player.circle.p.y < player.circle.r){
ret = TOP;
}
return ret;
}

 function checkCollisions(np){

var edge = 0;


edge = checkBoundary(p1);
p1.collidedWithEdge(edge);

for (i = 0; i < npArray.length; i++) {
    	checkPlayerCollisions(p1, npArray[i]);  
}

 }

function checkPlayerCollisions(player, np){

	if(circleCollision(player, np)){
		 np = circleCollision(player, np);
	player.collidedWithNP(np);
}
}

function circleCollision(c1, c2){

var ret = false;
sideA = Math.abs(c1.circle.p.x - c2.circle.p.x);
sideB = Math.abs(c1.circle.p.y - c2.circle.p.y);

sideA = sideA*sideA;
sideB = sideB*sideB;

distance = Math.sqrt(sideA + sideB);

	if(distance < c1.circle.r + c2.circle.r){
	ret = c2;
	}
	return ret;
}

function controller(){
if(event.keyCode == 68){
	p1.direction = RIGHT;
	p1.move(p1.speed);
	}
if(event.keyCode == 65){
	p1.direction = LEFT;
	p1.move(p1.speed);
}
if(event.keyCode == 87){
	p1.direction = UP;
	p1.move(p1.speed);
}
if(event.keyCode == 83){
	p1.direction = DOWN;
	p1.move(p1.speed);
}
}
