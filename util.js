function generateObject(x, y, r, colour){

	ctx.beginPath(); 
	ctx.fillStyle = "#" + colour;
	ctx.arc(x, y, r, 0, 2* Math.PI);
	ctx.fill();
	ctx.stroke();
}

function circleCollision(c1, c2){

//console.log(c1.circle.x);
var ret = false;
sideA = Math.abs(c1.x - c2.x);
sideB = Math.abs(c1.y - c2.y);

sideA = sideA*sideA;
sideB = sideB*sideB;

distance = Math.sqrt(sideA + sideB);

	if(distance < c1.r + c2.r){
	ret = true;
	}
	return ret;
}

function checkBoundary(myCircle){
	
if(myCircle.circle.x > canvasWidth-myCircle.circle.r){
	myCircle.circle.x = canvasWidth - myCircle.circle.r;
}

if(myCircle.circle.x < myCircle.circle.r){
	myCircle.circle.x = myCircle.circle.r;
}

if(myCircle.circle.y > canvasHeight-myCircle.circle.r){
	myCircle.circle.y = canvasHeight - myCircle.circle.r;	
}

if(myCircle.circle.y < myCircle.circle.r){
	myCircle.circle.y = myCircle.circle.r;
}	
	
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