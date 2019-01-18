function circleCollision(c1, c2){

var ret = false;

distance = checkDistance(c1, c2);
  if(distance < c1.circle.r + c2.circle.r){
  ret = c2;
  }
  return ret;
}

function checkDistance(c1, c2){

  sideA = Math.abs(c1.circle.point.x - c2.circle.point.x);
  sideB = Math.abs(c1.circle.point.y - c2.circle.point.y);

  sideA = sideA*sideA;
  sideB = sideB*sideB;

  return Math.sqrt(sideA + sideB);

}

function BounceMap(){

this.getNewD = function(edge, initD){

  for (i = 0; i < bounceMapsArray.length; i++ ){

    if(edge == bounceMapsArray[i].edge && initD == bounceMapsArray[i].initD){
        var newD = bounceMapsArray[i].newD;
        break;
      }
    }
      return newD;
  };
}
