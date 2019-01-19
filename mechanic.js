function populateNPs(){
	npArray.push(heart);
	npArray.push(bomb);
	//npArray.push(speedBoost);
	for (i = 0; i < npArray.length; i++) {
	randomisePos(npArray[i]);
	npArray[i].randomiseDirection();
}
	}

function initialiseBM(){

bm1 = new BounceMap(TOPEDGE, UP, DOWN);
bm2 = new BounceMap(TOPEDGE, LEFTUP, LEFTDOWN);
bm3 = new BounceMap(TOPEDGE, RIGHTUP, RIGHTDOWN);
bm4 = new BounceMap(BOTTOMEDGE, DOWN, UP);
bm5 = new BounceMap(BOTTOMEDGE, LEFTDOWN, LEFTUP);
bm6 = new BounceMap(BOTTOMEDGE, RIGHTDOWN, RIGHTUP);
bm7 = new BounceMap(LEFTEDGE, LEFT, RIGHT);
bm8 = new BounceMap(LEFTEDGE, LEFTUP, RIGHTUP);
bm9 = new BounceMap(LEFTEDGE, LEFTDOWN, RIGHTDOWN);
bm10 = new BounceMap(RIGHTEDGE, RIGHT, LEFT);
bm11 = new BounceMap(RIGHTEDGE, RIGHTDOWN, LEFTDOWN);
bm12 = new BounceMap(RIGHTEDGE, RIGHTUP, LEFTUP);

bounceMapsArray = [bm1, bm2, bm3, bm4, bm5, bm6, bm7, bm8, bm9, bm10, bm11, bm12];
bounceMaps = new BounceMaps(bounceMapsArray);
}

function BounceMap(edge, initD, newD){

this.edge = edge;
this.initD = initD;
this.newD = newD;

}

  function controller(){
  if(event.keyCode == 68){
  	p1.direction = RIGHT;
  	p1.move();
  	}
  if(event.keyCode == 65){
  	p1.direction = LEFT;
  	p1.move();
  }
  if(event.keyCode == 87){
  	p1.direction = UP;
  	p1.move();
  }
  if(event.keyCode == 83){
  	p1.direction = DOWN;
  	p1.move();
  }
  }

  function checkBoundary(myCircle){

  var ret = NOEDGE;
  if(myCircle.point.x > CANVASWIDTH-myCircle.r){
  ret = RIGHTEDGE;
  }
  if(myCircle.point.x < myCircle.r){
  ret = LEFTEDGE;
  }
  if(myCircle.point.y > CANVASHEIGHT-myCircle.r){
  ret = BOTTOMEDGE;
  }
  if(myCircle.point.y < myCircle.r){
  ret = TOPEDGE;
  }
  return ret;
  }

  function checkPlayerCollisions(circle){

  checkCircleCollisions(circle);
  var edge = 0;
  edge = checkBoundary(circle.circle);
	if(edge == NOEDGE){

	}
	else{
  circle.collidedWithEdge(edge);
}
	}

	function checkNonPlayerCollisions(circle){

	var edge = 0;
	edge = checkBoundary(circle.circle);

	if(edge == NOEDGE){

	}
	else{
  circle.collidedWithEdge(edge);
}
		}
  function checkCircleCollisions(player){

    for (i = 0; i < npArray.length; i++){
      if(circleCollision(player, npArray[i])){
      player.collidedWithNP(npArray[i]);
      npArray[i].collidedWithPlayer();
    }
    }
}
	function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
