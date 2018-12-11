function Player(circle, status, health, speed, direction, score, type){

this.circle = circle;
this.status = status;
this.health = health;
this.speed = speed;
this.direction = direction;
this.score = score;
this.type = type;

this.draw = function(){
	circle.draw();
};
this.move = function(speed){
switch (this.direction) {
    case 1:
        this.circle.moveLeft(speed);
        break;
    case 2:
        this.circle.moveUp(speed);
        break;
    case 3:
        this.circle.moveRight(speed);
        break;
	case 4:
        this.circle.moveDown(speed);
        break;
}
};

this.collidedWithNP = function(np){

switch(np.type) {
    case HEART:
       this.health+=1;
	   console.log(this.health);
        break;
    case BOMB:
        this.health-=1;
		console.log(this.health)
        break;
    case SPEEDBOOST:
        //this.speed*=speedMultiplier;
		console.log("hit speed boost");
        break;
	}
};
this.collidedWithEdge = function(edge){

	switch(edge) {
			case TOP:
				 this.circle.p.y = this.circle.r;
					break;
			case BOTTOM:
					this.circle.p.y = CANVASHEIGHT - this.circle.r;
					break;
			case RIGHT:
					this.circle.p.x = CANVASWIDTH - this.circle.r;
					break;
		case LEFT:
					this.circle.p.x = this.circle.r;
					break;
		}
	}
};

function NonPlayer(circle, status, type){

this.circle = circle;
this.status = status;
this.type = type;

this.draw = function(){
	circle.draw();
};

this.randomisePos = function(){
	circle.randomisePos();
};
}

function Point(x, y){

this.x = x;
this.y = y;

this.randomisePos = function(){
	this.x = Math.floor(Math.random() * CANVASWIDTH) +1;
	this.y = Math.floor(Math.random() * CANVASHEIGHT) +1;
};
}
