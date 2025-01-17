const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"; 
let candidateAnswer = ""; 
//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");


}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);


  for (let i = 0; i < questions.length; i++) {
    // let replies = input.question(questions[i]);
    // candidateAnswers.push(replies);
    candidateAnswers.push(input.question(questions[i]));
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  // if (candidateAnswer === correctAnswer) {
  //   console.log(`${candidateAnswer} is the correct answer! `);
  // } else {
  //   console.log("Sorry, that is incorrect.");
  // }

  
  // for (let i = 0; i < questions.length; i++) {
  //   console.log(`Your answer was -> ${candidateAnswers[i]}. The correct answer is ${correctAnswers[i]}`); 
  // }
  


  //TODO 3.2 use this variable to calculate the candidates score.
  let passingGrade = 80;
  let correctCount = 0;
  

  for (let i = 0; i < questions.length; i++) {
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
          console.log(`Question: ${questions[i]} -> Your answer was ${candidateAnswers[i]}. That is correct!`);
          //correctCount = correctCount + 1;
          correctCount += 1;
          

      } else {
    console.log(`Question: ${questions[i]} -> Your answer was ${candidateAnswers[i]}. Sorry the correct answer is ${correctAnswers[i]}`);
    
  }
      
  }

  let grade = (correctCount / questions.length) * 100;
  if (grade >= passingGrade){ 
      console.log(`Congratulations! You passed with ${grade}%`);
      } else {
      console.log(`Sorry you did not pass. your grade is ${grade}%`);
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
console.log(`Hello, ${candidateName}!`);
askQuestion();
  gradeQuiz(this.candidateAnswers);
}
 
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};