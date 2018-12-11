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
	
this.moveLeft = function(speed){
	this.x-=speed;
};

this.moveRight = function(speed){
	this.x+=speed;
};

this.moveUp = function(speed){
	this.y-=speed;
};

this.moveDown = function(speed){
	this.y+=speed;
};
}
