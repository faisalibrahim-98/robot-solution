const input = ["O2", "B1", "B2", "O4"];

function moves(input) {
  const [Ooperations, Boperations] = splitRobots(input);
  let [OoperationsPerformed, BoperationsPerformed] = [0, 0];
  let [OexpectedPotion, BexpectedPotion] = [0, 0];
  let [Oposition, Bposition] = [1, 1];
  let totalSteps = 0;

  while (BexpectedPotion !== null || OexpectedPotion !== null) {
    OexpectedPotion = Ooperations[OoperationsPerformed]?.split("")[1] || null;
    BexpectedPotion = Boperations[BoperationsPerformed]?.split("")[1] || null;

    if (Oposition === +OexpectedPotion) {
      OoperationsPerformed++;
    } else {
      Oposition++;
    }

    if (Bposition === +BexpectedPotion) {
      BoperationsPerformed++;
    } else {
      Bposition++;
    }

    totalSteps++;
  }

  return totalSteps;
}

function splitRobots(input) {
  const OOperations = [];
  const BOperations = [];

  input.forEach((value) => {
    if (value[0] === "O") {
      OOperations.push(value);
    } else {
      BOperations.push(value);
    }
  });

  return [OOperations, BOperations];
}

const answer = moves(input);
console.log(answer);
