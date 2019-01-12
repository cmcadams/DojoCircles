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
this.move = function(){
switch (this.direction) {
    case LEFT:
        this.circle.moveLeft(this.speed);
        break;
    case 2:
        this.circle.moveUp(this.speed);
        break;
    case 3:
        this.circle.moveRight(this.speed);
        break;
	case 4:
        this.circle.moveDown(this.speed);
        break;
}
};

this.collidedWithNP = function(np){

switch(np.type) {
    case HEART:
		popSnd.play();
       this.health+=1;
	   console.log(this.health);
        break;
				popSnd.play();
    case BOMB:
        this.health-=1;
		console.log(this.health)
        break;
				popSnd.play();
    case SPEEDBOOST:
        //this.speed*=speedMultiplier;
		console.log("hit speed boost");
        break;
	}
};
this.collidedWithEdge = function(edge){

	switch(edge) {
			case TOP:
				 this.circle.centre.y = this.circle.r;
					break;
			case BOTTOM:
					this.circle.centre.y = CANVASHEIGHT - this.circle.r;
					break;
			case RIGHT:
					this.circle.centre.x = CANVASWIDTH - this.circle.r;
					break;
		case LEFT:
					this.circle.centre.x = this.circle.r;
					break;
		}
	};
}


function NonPlayer(circle, status, type, speed, direction){

this.circle = circle;
this.status = status;
this.type = type;
this.speed = speed;
this.direction = direction;

this.draw = function(){
	circle.draw();
};

this.move = function(){
switch (this.direction) {
    case 1:
        this.circle.moveLeft(this.speed);
        break;
    case 2:
        this.circle.moveUp(this.speed);
        break;
    case 3:
        this.circle.moveRight(this.speed);
        break;
	case 4:
        this.circle.moveDown(this.speed);
        break;
}
};
this.collidedWithEdge = function(edge){

	switch(edge) {
			case TOP:
				 this.direction = DOWN;
					break;
			case BOTTOM:
				 this.direction = UP;
					break;
			case RIGHT:
					this.direction = LEFT;
					break;
		case LEFT:
					this.direction = RIGHT;
					break;
		}
	};

this.randomisePos = function(){
	circle.randomisePos();
};

this.randomiseDirection = function(){
	circle.randomiseDirection();
};

this.collidedWithPlayer = function(){

switch(this.type) {
    case HEART:
       this.randomisePos();
	   console.log("collision with player");
        break;
    case BOMB:
		this.randomisePos();
	console.log("collision with player");
        break;
    case SPEEDBOOST:
		this.randomisePos();
	console.log("collision with player");
        break;
			}
	};
}

function Point(x, y){

this.x = x;
this.y = y;

this.randomisePos = function(){
	this.x = Math.floor(Math.random()*(400-10+1)+10);
	this.y = Math.floor(Math.random()*(400-10+1)+10);
	console.log(this.x);
};
}
