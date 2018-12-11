function populateNPs(){
	npArray.push(heart);
	npArray.push(bomb);
	npArray.push(speedBoost);
	for (i = 0; i < npArray.length; i++) {
	npArray[i].randomisePos();
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

  function checkBoundary(player){

  var ret = false;
  if(player.circle.centre.x > CANVASWIDTH-player.circle.r){
  ret = RIGHT;
  }
  if(player.circle.centre.x < player.circle.r){
  ret = LEFT;
  }
  if(player.circle.centre.y > CANVASHEIGHT-player.circle.r){
  ret = BOTTOM;
  }
  if(player.circle.centre.y < player.circle.r){
  ret = TOP;
  }
  return ret;
  }

   function checkCollisions(np){

  var edge = 0;

  edge = checkBoundary(p1);
  p1.collidedWithEdge(edge);
  checkPlayerCollisions(p1);
   }

  function checkPlayerCollisions(player, np){

    for (i = 0; i < npArray.length; i++) {
      if(circleCollision(player, npArray[i])){
         np = circleCollision(player, npArray[i]);
      player.collidedWithNP(npArray[i]);
    }
    }
  }
