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
this.move = function(player){
switch (this.direction) {
    case 1:
        this.circle.moveLeft(player);
        break;
    case 2:
        this.circle.moveUp(player);
        break;
    case 3:
        this.circle.moveRight(player);
        break;
	case 4:
        this.circle.moveDown(player);
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