function rollDice(sides) {
  if (sides < 1) {
    throw new Error("The number of sides must be at least 1.");
  }
  return Math.floor(Math.random() * sides) + 1;
}
console.log(rollDice(6));
console.log(rollDice(6));
