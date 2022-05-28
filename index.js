const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

//Eva's solution here

const titleCased = () => {
  return tutorials.map((str) => {
  const words = str.split(' ');
  // console.log("I am here.", words);
  
//  const firstLetter = words.map((words.charAt(0)).toUpperCase())
  const firstLetter = words.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
  
  // console.log("I'm here too.", firstLetter);

  const answer = firstLetter.join(' ');
  // console.log('I am here three!', answer);
  
  // return firstLetter;
  return answer;
});
}