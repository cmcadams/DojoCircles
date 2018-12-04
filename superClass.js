function SuperCircle(circle, colour, speed, direction){

this.circle = circle;
this.colour = colour;
this.speed = speed;
this.direction = direction;

this.draw = function(){
	generateObject(this.circle.x, this.circle.y, this.circle.r, this.colour);
};

this.randomisePos = function(){

	this.circle.x = Math.floor(Math.random()*(canvasHeight-this.circle.r-this.circle.r+1)+this.circle.r);
	this.circle.y = Math.floor(Math.random()*(canvasHeight-this.circle.r-this.circle.r+1)+this.circle.r);
};
this.randomiseDirection = function(){

	this.direction = Math.floor(Math.random() * 6) + 1;
};

this.move = function(){
switch (this.direction) {
    case LEFT:
        this.moveLeft();
        break;
    case UP:
        this.moveUp();
        break;
    case RIGHT:
        this.moveRight();
        break;
	case DOWN:
        this.moveDown();
        break;
}
};
	
this.moveLeft = function(){
	this.circle.x-=this.speed;
};

this.moveRight = function(){
	this.circle.x+=this.speed;
};

this.moveUp = function(){
	this.circle.y-=this.speed;
};

this.moveDown = function(){
	this.circle.y+=this.speed;
};
}

function Player(superCircle, status, health, score, type){

this.superCircle = superCircle;
this.status = status;
this.health = health;
this.score = score;
this.type = type;

this.draw = function(){	
	superCircle.draw();
};
}

function NonPlayer(superCircle, status, type){

this.superCircle = superCircle;
this.status = status;
this.type = type;

this.draw = function(){	
	superCircle.draw();
};
}