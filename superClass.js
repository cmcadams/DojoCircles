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


function NonPlayer(circle, status, type, speed){

this.circle = circle;
this.status = status;
this.type = type;
this.speed = speed;

this.draw = function(){
	circle.draw();
};

this.randomisePos = function(){
	circle.randomisePos();
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
this.bounce = function(edge){

	switch(edge) {
	    case TOP:
			bounceSnd.play();
	    this.bounceRightDown();
	        break;
	    case BOTTOM:
			bounceSnd.play();
			this.bounceLeftUp();
	        break;
	    case RIGHT:
			bounceSnd.play();
			this.bounceLeftDown();
	        break;
			case LEFT:
			bounceSnd.play();
			this.bounceRightUp();
					break;
				}
};

this.bounceRightDown = function(){
	var that = this;

	var moveTimer = setInterval(function(){
			that.circle.centre.x+=that.speed;
			that.circle.centre.y+=that.speed;
			if(checkBoundary(that.circle)[1]){
			clearInterval(moveTimer);
		}
	}, 10);
};

this.bounceLeftDown = function(){
	var that = this;

	var moveTimer = setInterval(function(){
			that.circle.centre.x-=that.speed;
			that.circle.centre.y+=that.speed;
			if(checkBoundary(that.circle)[1]){
			clearInterval(moveTimer);
		}
	}, 10);
};

this.bounceLeftUp = function(){
	var that = this;

	var moveTimer = setInterval(function(){
			that.circle.centre.x-=that.speed;
			that.circle.centre.y-=that.speed;
			if(checkBoundary(that.circle)[1]){
			clearInterval(moveTimer);
		}
	}, 10);
};

this.bounceRightUp = function(){
	var that = this;

	var moveTimer = setInterval(function(){
			that.circle.centre.x+=that.speed;
			that.circle.centre.y-=that.speed;
			if(checkBoundary(that.circle)[1]){
			clearInterval(moveTimer);
		}
	}, 10);
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
