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
	popSnd.play();
};
this.collidedWithEdge = function(edge){

	switch(edge) {
			case TOPEDGE:
				 this.circle.point.y = this.circle.r;
					break;
			case BOTTOMEDGE:
					this.circle.point.y = CANVASHEIGHT - this.circle.r;
					break;
			case RIGHTEDGE:
					this.circle.point.x = CANVASWIDTH - this.circle.r;
					break;
		case LEFTEDGE:
					this.circle.point.x = this.circle.r;
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
		case 5:
		     this.circle.moveLeft(this.speed/2);
				 this.circle.moveUp(this.speed/2);
		     break;
		case 6:
		     this.circle.moveLeft(this.speed/2);
				 this.circle.moveDown(this.speed/2);
		     break;
		case 7:
		     this.circle.moveRight(this.speed/2);
				 this.circle.moveUp(this.speed/2);
		     break;
		case 8:
		     this.circle.moveDown(this.speed/2);
				 this.circle.moveRight(this.speed/2);
		     break;
}
};
this.collidedWithEdge = function(edge){

	switch(edge) {
			case TOPEDGE:
				 this.direction = DOWN;
				 bounceSnd.play();
					break;
			case BOTTOMEDGE:
				 this.direction = UP;
				 bounceSnd.play();
					break;
			case RIGHTEDGE:
					this.direction = LEFT;
					bounceSnd.play();
					break;
		case LEFTEDGE:
					this.direction = RIGHT;
					bounceSnd.play();
					break;
		}
	};

this.randomiseDirection = function(){
	this.direction = Math.floor(Math.random() * directions.length) + 1;
};

this.collidedWithPlayer = function(){

switch(this.type) {
    case HEART:
     	randomisePos(this);
	   	console.log("collision with player");
        break;
    case BOMB:
			randomisePos(this);
			console.log("collision with player");
        break;
    case SPEEDBOOST:
			randomisePos(this);
			console.log("collision with player");
        break;
			}
	};
}

function Point(x, y){

this.x = x;
this.y = y;
}
