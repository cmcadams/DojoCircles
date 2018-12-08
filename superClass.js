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

this.collidedWith = function(player, myCircle){
	
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
	console.log("test");
        p1.circle.randomisePos;
        p2.circle.randomisePos;
        break;
	}
};

}
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