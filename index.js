function wakeDog(dogName, dogBreed) {
  const action = `Wake ${dogName} the ${dogBreed}`;

  console.log(action);
  return action;
}

function leashDog(dogName, dogBreed) {
  const action = `Leash ${dogName} the ${dogBreed}`;

  console.log(action);
  return action;
}

function walkToPark(dogName, dogBreed) {
  const action = `Walk to the park with ${dogName} the ${dogBreed}`;

  console.log(action);
  return action;
}

function throwFrisbee(dogName, dogBreed) {
  const action = `Throw the frisbee for ${dogName} the ${dogBreed}`;

  console.log(action);
  return action;
}

function walkHome(dogName, dogBreed) {
  const action = `Walk home with ${dogName} the ${dogBreed}`;

  console.log(action);
  return action;
}

function unleashDog(dogName, dogBreed) {
  const action = `Unleash ${dogName} the ${dogBreed}`;

  console.log(action);
  return action;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let personalizedRoutine = [];

  for (let i = 0; i < routine.length; i++) {
    personalizedRoutine.push(routine[i](dogName, dogBreed));
  }

  return personalizedRoutine;
}
