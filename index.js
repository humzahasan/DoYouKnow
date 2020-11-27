//importing modules
var readline = require('readline-sync');

//Initialization of global variable
var score=0;

//Initialization of set of questions
const questionSet = [
  {
  question : 'Where do i hail from ? ',
  answer : 'Kolkata'
},
{
  question : 'Where do i work (shortform accepted)? ',
  answer : 'TCS'
},
{
  question : 'I am born in which month? ',
  answer : 'January'
},
{
  question : 'My goto fast food (Kolkata special you know :D)? ',
  answer : 'Roll'
},
{
  question : 'What do i prefer car or bike? ',
  answer : 'car'
}]

//leaderBoard Initialization
const leaderBoard = [{
  name : 'Alpha',
  score : '4'
},
{
  name : 'Beta ',
  score : '4'
},
{
  name : 'Gamma',
  score : '3'
}];

//Function declaration to check answers and update score
function letsPlay(question,correctAns) {
  var input = readline.question(question);
  if(input.toLowerCase() == correctAns.toLowerCase()){
    console.log("That's correct!");
    score++;
  } else {
    console.log(`Oops! The correct answer is: ${correctAns}`);
  }
  console.log("Your current score is: "+score);
}

//Game starts
console.log("Welcome to 'DO YOU KNOW HUMZA?'")

var username = readline.question("What should i call you ? ");

console.log(`Hey ${username}, let's get started!`);
console.log("=================================");
console.log("          GAME STARTS");
console.log("=================================");

for(var i=0;i<questionSet.length;i++){
  letsPlay(questionSet[i].question,questionSet[i].answer);
}
console.log("=================================");
console.log("          GAME OVER");
console.log("================================= \n");
console.log("Your Final Score is "+score);


console.log('=======LEADERBOARD=======');
console.log(`Name      Score`);
for(var i = 0; i < leaderBoard.length; i++) {
  console.log(`${leaderBoard[i].name}     ${leaderBoard[i].score}`);
}
console.log('=========================');
if (leaderBoard[leaderBoard.length-1].score < score) {
  console.log("Send me a screenshot of your score so that i can update your name in the leaderboard!");
} else {
  console.log('Try harder to enter the leaderboard');
}
