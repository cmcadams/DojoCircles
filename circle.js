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
}
