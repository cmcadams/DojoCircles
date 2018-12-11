function Circle(point, r, colour){
	this.centre = point;
	this.r = r;
	this.colour = colour;

	this.draw = function(){

			CTX.beginPath();
			CTX.fillStyle = colour;
			CTX.arc(this.centre.x, this.centre.y, this.r, 0, 2* Math.PI);
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
	this.centre.x-=speed;
};

this.moveRight = function(speed){
	this.centre.x+=speed;
};

this.moveUp = function(speed){
	this.centre.y-=speed;
};

this.moveDown = function(speed){
	this.centre.y+=speed;
};
}
