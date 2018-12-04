function Circle(x, y, r, colour){
	this.x = x;
	this.y = y;
	this.r = r;
	this.colour = colour;
	
	this.draw = function(){
	generateObject(this.x, this.y, this.r, this.colour);
};

this.randomisePos = function(){

	this.x = Math.floor(Math.random()*(canvasHeight-this.r-this.r+1)+this.r);
	this.y = Math.floor(Math.random()*(canvasHeight-this.r-this.r+1)+this.r);
};
this.randomiseDirection = function(){

	this.direction = Math.floor(Math.random() * 4) + 1;
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
}
