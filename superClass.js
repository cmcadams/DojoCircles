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

this.checkCollision = function(){
	
	if (circleCollision (this.circle, p2.circle) && this.type == "player1"){
	console.log("Player Collision");		
	//p1.randomisePos();
	//p2.randomisePos();
	}

if (circleCollision(this.circle, heart.circle)){
	console.log("Heart Collision");
	//player.health+=1;
	//heart.randomisePos();
	}

	if (circleCollision(this.circle, bomb.circle)){
	console.log("Bomb Collision");
	//player.health-=1;
	//bomb.randomisePos()
	}

	if (circleCollision(this.circle, speedBoost.circle)){
	console.log("Speed Boost Collision");
	//player.speed *= speedMultiplier
	//setTimeout(speedReset, 5000);
	//speedBoost.randomisePos()
	}
};


this.move = function(){
switch (this.direction) {
    case 1:
        this.moveLeft();
        break;
    case 2:
        this.moveUp();
        break;
    case 3:
        this.moveRight();
        break;
	case 4:
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

function NonPlayer(circle, status, type, speed, direction){

this.circle = circle;
this.status = status;
this.type = type;
this.speed = speed;
this.direction = direction;

this.draw = function(){	
	circle.draw();
};

this.randomisePos = function(){	
	circle.randomisePos();
};
}