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

	this.direction = Math.floor(Math.random() * 6) + 1;
};
	
this.moveLeft = function(player){
	this.x-=player.speed;
};

this.moveRight = function(player){
	this.x+=player.speed;
};

this.moveUp = function(player){
	this.y-=player.speed;
};

this.moveDown = function(player){
	this.y+=player.speed;
};

this.checkCollision = function(myCircle, player){
	
	if (circleCollision(this, myCircle)){
	switch(myCircle.type) {
    case "heart":
       player.health+=1;
	   console.log(player.health);
        break;
    case "bomb":
        player.health-=1;
		console.log(player.health)
        break;
    case "speedBoost":
        //player.speed*=speedMultiplier;
		console.log("hit speed boost");
        break;
	case "player2":
        p1.circle.randomisePos;
        p2.circle.randomisePos;
        break;
}
	//player.health+=1;
	//heart.randomisePos();
	}
};
}
