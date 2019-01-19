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

function randomisePos(circle){

  circle.circle.point.x = Math.floor(Math.random() * ((CANVASWIDTH - 20) - 20)) + 20;
  circle.circle.point.y = Math.floor(Math.random() * ((CANVASHEIGHT - 20) - 20)) + 20;

}

function BounceMaps(bmArray){

this.bmArray = bmArray;

this.getNewD = function(edge, initD){

  for (i = 0; i < bmArray.length; i++ ){

    if(edge == bmArray[i].edge && initD == bmArray[i].initD){
        var newD = bmArray[i].newD;
        break;
      }
    }
      return newD;
  };
}
