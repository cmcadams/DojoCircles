function Circle(point, r, colour){
	this.p = point;
	this.r = r;
	this.colour = colour;

	this.draw = function(){

			CTX.beginPath();
			CTX.fillStyle = colour;
			CTX.arc(this.p.x, this.p.y, this.r, 0, 2* Math.PI);
			CTX.fill();
			CTX.stroke();
};

this.randomisePos = function(){

	point.randomisePos();
};
this.randomiseDirection = function(){

	this.direction = Math.floor(Math.random() * 4) + 1;
};

this.moveLeft = function(speed){
	this.p.x-=speed;
};

this.moveRight = function(speed){
	this.p.x+=speed;
};

this.moveUp = function(speed){
	this.p.y-=speed;
};

this.moveDown = function(speed){
	this.p.y+=speed;
};
}
