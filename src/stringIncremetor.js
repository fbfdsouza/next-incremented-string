import { localVocabulary } from "./data";

export const incrementString = (
  stringToIncrement = "",
  stringVocabulary = []
) => {
  if (!stringToIncrement) {
    return stringToIncrement;
  }

  const isLastPossibleChar = (char, vocabularyArray) => {
    return char === vocabularyArray[vocabularyArray.length - 1];
  };

  const isLastCharMaxValue = isLastPossibleChar(
    stringToIncrement[stringToIncrement.length - 1],
    localVocabulary
  );

  const retrieveNextChar = (char) => {
    const nextIndex =
      localVocabulary.findIndex((thisChar) => thisChar === char) + 1;

    return localVocabulary[nextIndex];
  };

  if (isLastCharMaxValue) {
    const newIncrementedStringArray = stringToIncrement.split("");

    for (let i = stringToIncrement.length - 1; i >= 0; i--) {
      if (isLastPossibleChar(stringToIncrement[i], localVocabulary)) {
        newIncrementedStringArray[i] = localVocabulary[0];

        if (i === 0) {
          newIncrementedStringArray.unshift(localVocabulary[0]);
          return newIncrementedStringArray.join("");
        }
      } else {
        newIncrementedStringArray[i] = retrieveNextChar(stringToIncrement[i]);
        return newIncrementedStringArray.join("");
      }
    }
  } else {
    const newIncrementedStringArray = stringToIncrement.split("");
    newIncrementedStringArray[stringToIncrement.length - 1] = retrieveNextChar(
      stringToIncrement[stringToIncrement.length - 1]
    );

    return newIncrementedStringArray.join("");
  }
};
