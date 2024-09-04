const input = ["O2", "B1", "B2", "O4"];

function moves(input) {
  const [Ooperations, Boperations] = splitRobots(input);
  let totalOperationsPerformed = 0;
  let OoperationsPerformed = 0;
  let BoperationsPerformed = 0;
  let Oposition = 1;
  let Bposition = 1;
  let totalSteps = 1;

  while (input.length !== totalOperationsPerformed) {
    const OexpectedPotion =
      Ooperations[OoperationsPerformed]?.split("")[1] || null;
    const BexpectedPotion =
      Boperations[BoperationsPerformed]?.split("")[1] || null;

    if (Oposition === +OexpectedPotion) {
      OoperationsPerformed = OoperationsPerformed + 1;
      totalOperationsPerformed = totalOperationsPerformed + 1;
    } else {
      Oposition = Oposition + 1;
    }

    if (Bposition === +BexpectedPotion) {
      BoperationsPerformed = BoperationsPerformed + 1;
      totalOperationsPerformed = totalOperationsPerformed + 1;
    } else {
      Bposition = Bposition + 1;
    }

    totalSteps = totalSteps + 1;
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
