function circleCollision(c1, c2){

var ret = false;

distance = checkDistance(c1, c2);
  if(distance < c1.circle.r + c2.circle.r){
  ret = c2;
  }
  return ret;
}

function checkDistance(c1, c2){

  sideA = Math.abs(c1.circle.centre.x - c2.circle.centre.x);
  sideB = Math.abs(c1.circle.centre.y - c2.circle.centre.y);

  sideA = sideA*sideA;
  sideB = sideB*sideB;

  return Math.sqrt(sideA + sideB);

}
