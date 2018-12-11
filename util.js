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
