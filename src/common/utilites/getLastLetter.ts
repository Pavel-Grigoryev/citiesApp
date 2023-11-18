export const getLastLetter = (word: string): string => {
  if (word[word.length - 1] === 'ъ' || word[word.length - 1] === 'ь') {
    return word[word.length - 2];
  }
  return word[word.length - 1];
};
