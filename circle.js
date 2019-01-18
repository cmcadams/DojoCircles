function Circle(point, r, colour){
	this.point = point;
	this.r = r;
	this.colour = colour;

	this.draw = function(){

			CTX.beginPath();
			CTX.fillStyle = colour;
			CTX.arc(this.point.x, this.point.y, this.r, 0, 2* Math.PI);
			CTX.fill();
			CTX.stroke();
};

this.randomiseDirection = function(){


};

this.moveLeft = function(speed){
	this.point.x-=speed;
};

this.moveRight = function(speed){
	this.point.x+=speed;
};

this.moveUp = function(speed){
	this.point.y-=speed;
};

this.moveDown = function(speed){
	this.point.y+=speed;
};
}
