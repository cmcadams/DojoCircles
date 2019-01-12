function populateNPs(){
	npArray.push(heart);
	npArray.push(bomb);
	npArray.push(speedBoost);
	for (i = 0; i < npArray.length; i++) {
	npArray[i].randomisePos();
	npArray[i].randomiseDirection();
}
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

  var ret = [];
  if(myCircle.centre.x > CANVASWIDTH-myCircle.r){
  ret = [RIGHT, true];
  }
  if(myCircle.centre.x < myCircle.r){
  ret = [LEFT, true];
  }
  if(myCircle.centre.y > CANVASHEIGHT-myCircle.r){
  ret = [BOTTOM, true];
  }
  if(myCircle.centre.y < myCircle.r){
  ret = [TOP, true];
  }
  return ret;
  }

  function checkPlayerCollisions(circle){

  checkPlayerCollisions(circle);
  var edge = 0;
  edge = checkBoundary(circle.circle)[0];
  circle.collidedWithEdge(edge);

	}

	function checkNonPlayerCollisions(circle){

	var edge = 0;
	edge = checkBoundary(circle.circle)[0];
	circle.collidedWithEdge(edge);

		}
  function checkPlayerCollisions(player){

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
