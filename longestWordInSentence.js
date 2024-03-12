function longestWordInSentence(str) 
{
  var sentence = str.split(' ');
  var longestWord = 0;

  for (var i=0; i<sentence.length; i++) {
    if (sentence[i].length > longestWord) {
        longestWord = sentence[i].length;
        result = sentence[i]
    }
  }
  return result;
}

console.log(longestWordInSentence("Voici le résultat attendu par Louis Pluvinage ;-)"))
