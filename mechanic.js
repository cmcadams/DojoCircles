function populateNPs(){
	npArray.push(heart);
	npArray.push(bomb);
	npArray.push(speedBoost);
	for (i = 0; i < npArray.length; i++) {
	npArray[i].randomisePos();
	npArray[i].bounceLeftUp();
}
	}

  function controller(){
  if(event.keyCode == 68){
  	p1.direction = RIGHT;
  	p1.move(p1.speed);
  	}
  if(event.keyCode == 65){
  	p1.direction = LEFT;
  	p1.move(p1.speed);
  }
  if(event.keyCode == 87){
  	p1.direction = UP;
  	p1.move(p1.speed);
  }
  if(event.keyCode == 83){
  	p1.direction = DOWN;
  	p1.move(p1.speed);
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

  function checkCollisions(){

  checkPlayerCollisions(p1);
  var edge = 0;
  edge = checkBoundary(p1.circle)[0];
  p1.collidedWithEdge(edge);
	checkBounce(heart);

	}

  function checkPlayerCollisions(player){

    for (i = 0; i < npArray.length; i++){
      if(circleCollision(player, npArray[i])){
      player.collidedWithNP(npArray[i]);
      npArray[i].collidedWithPlayer();
    }
    }
}

		function checkBounce(){
		 for (i = 0; i < npArray.length; i++){
			 var collidedWithEdge = checkBoundary(npArray[i].circle)[1];
			 npArray[i].bounce(collidedWithEdge)

		 }
		}
