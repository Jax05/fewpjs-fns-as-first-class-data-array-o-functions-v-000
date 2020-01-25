function wakeDog(dogName, dogBreed) {
  return function() {
    console.log(`Wake ${dogName} the ${dogBreed}`);
  }
}

function leashDog(dogName, dogBreed) {
  return function() {
    console.log(`Leash ${dogName} the ${dogBreed}`);
  }
}

function walkToPark(dogName, dogBreed) {
  return function() {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  }
}

function throwFrisbee(dogName, dogBreed) {
  return function() {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  }
}

function walkHome(dogName, dogBreed) {
  return function() {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
  }
}

function unleashDog(dogName, dogBreed) {
  return function() {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
  }
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  personalizedRoutine = [];

  for (i = 0; i < routine.length; i++) {
    personalizedRoutine.push(routine[i](dogName, dogBreed));
  }

  return personalizedRoutine;
}
