const mySentence = "hello my name is kasey";

const capitalizeWords = (sentence) =>
  sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(capitalizeWords(mySentence));
