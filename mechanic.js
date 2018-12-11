function populateNPs(){
	npArray.push(heart);
	npArray.push(bomb);
	npArray.push(speedBoost);
	for (i = 0; i < npArray.length; i++) {
	npArray[i].randomisePos();
		}
	}

  function circleCollision(c1, c2){

  var ret = false;
  sideA = Math.abs(c1.circle.p.x - c2.circle.p.x);
  sideB = Math.abs(c1.circle.p.y - c2.circle.p.y);

  sideA = sideA*sideA;
  sideB = sideB*sideB;

  distance = Math.sqrt(sideA + sideB);

  	if(distance < c1.circle.r + c2.circle.r){
  	ret = c2;
  	}
  	return ret;
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
