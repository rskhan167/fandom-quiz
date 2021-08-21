var readlineSync = require("readline-sync");

var name = readlineSync.question("What's your name? ");
console.log(`Welcome ${name}`);

var score = 0;

function playQuiz(question, answer) {
  var userAnswer = readlineSync.questionInt(question);

  if (userAnswer === answer) {
    score++;
  } else {
    score--;
  }
}

var levelOne = [
  {
    question:
      "\n1. How many clubs participate in English Premier League every season?\n 1) 22 Clubs \n 2) 20 Clubs\n 3) 18 Clubs\n ",
    answer: 2,
  },
  {
    question:
      "\n2. Which club won the English Premier League last season?\n 1) Manchester United \n 2) Chelsea\n 3) Manchester City\n 4) Liverpool\n ",
    answer: 3,
  },
  {
    question:
      "\n3. Which club won the English Premier League most times?\n 1) Manchester United \n 2) Chelsea\n 3) Manchester City\n 4) Liverpool\n ",
    answer: 1,
  },
  {
    question:
      "\n4. Which club's stadium name is Emirates Stadium?\n 1) Manchester United \n 2) Arsenal\n 3) Manchester City\n 4) Liverpool\n ",
    answer: 2,
  },
  {
    question:
      "\n5. Which club has won the most number of Champions League?\n 1) Manchester United \n 2) Chelsea\n 3) Manchester City\n 4) Liverpool\n ",
    answer: 4,
  },
];

var levelTwo = [
  {
    question:
      "\n6. Who has scored most number of goals in the premier league?\n 1) Thierry Henry \n 2) Drogba\n 3) Wayne Rooney\n 4) Alan Shearer\n ",
    answer: 4,
  },
  {
    question:
      "\n7. Which club went a whole season unbeaten?\n 1) Arsenal \n 2) Chelsea\n 3) Manchester City\n 4) Liverpool\n ",
    answer: 1,
  },
  {
    question:
      "\n8. Which club has the nickname 'The Toffes'?\n 1) Manchester United \n 2) Chelsea\n 3) Everton\n 4) Liverpool\n ",
    answer: 3,
  },
  {
    question:
      "\n9. Which club is known as 'The Red Devils'?\n 1) Manchester United \n 2) Arsenal\n 3) Manchester City\n 4) Liverpool\n ",
    answer: 1,
  },
  {
    question:
      "\n10. Which club wears blue jersey?\n 1) Manchester United \n 2) Arsenal\n 3) Manchester City\n 4) Liverpool\n ",
    answer: 3,
  },
];

for (var i = 0; i < levelOne.length; i++) {
  playQuiz(levelOne[i].question, levelOne[i].answer);

  if (score > 4) {
    console.log("\n\nCongrats you have reached level 2!\n\n");

    for (var j = 0; j < levelTwo.length; j++) {
      playQuiz(levelTwo[j].question, levelTwo[j].answer);
    }
  }
}

console.log("Quiz ends here! Thank you for taking your time out!\n\n");
console.log(`Your score is ${score}`);
