function moves(operations) {
  const totalOperations = operations.length;
  let currentOperation = 0;
  let totalSteps = 1;
  let OPosition = 1;
  let BPosition = 1;
  let buttonpressed = false;

  while (currentOperation != totalOperations) {
    let [robot, button] = operations[currentOperation].split("");

    console.log(
      "Position of O = ",
      OPosition,
      " Position of B = ",
      BPosition,
      totalSteps,
      operations[currentOperation]
    );

    if (robot === "O") {
      if (OPosition === +button) {
        currentOperation = currentOperation + 1;
      } else {
        OPosition = OPosition + 1;
      }
      totalSteps = totalSteps + 1;
    }

    if (robot === "B") {
      if (BPosition === +button) {
        currentOperation = currentOperation + 1;
      } else {
        BPosition = BPosition + 1;
      }
      totalSteps = totalSteps + 1;
    }
  }

  return totalSteps;
}
