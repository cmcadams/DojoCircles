function populateNPs(){
	npArray.push(heart);
	npArray.push(bomb);
	npArray.push(speedBoost);
	for (i = 0; i < npArray.length; i++) {
	npArray[i].randomisePos();
		}
	}
