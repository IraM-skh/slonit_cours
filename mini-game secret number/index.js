const secretNumberGeneration = () => {
  return Math.floor(1 + Math.random() * 100);
};
const hiddenNumber = secretNumberGeneration();

const guessTest = (number) => {
  if (hiddenNumber < number) {
    return "Меньше.";
  }
  if (hiddenNumber > number) {
    return "Больше.";
  }
  return "Угадал!";
};

const binarySearch = (startNumber, lastNumber) => {
  const currentTestingNumber =
    Math.floor((lastNumber - startNumber) / 2) + startNumber;

  console.log(
    `Компьютер 2: Поиск в диапазоне от ${startNumber} до ${lastNumber}. Пробую число ${currentTestingNumber}.`
  );

  const answer = guessTest(currentTestingNumber);
  console.log(`Компьютер 1: ${answer}`);

  if (answer === "Меньше.") {
    binarySearch(startNumber, currentTestingNumber);
  }
  if (answer === "Больше.") {
    binarySearch(currentTestingNumber, lastNumber);
  }
  return;
};

binarySearch(1, 100);
