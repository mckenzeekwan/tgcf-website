// PROGRAM TITLE

document.getElementById("submit").addEventListener("click", btnClicked);

function btnClicked() {
  // let q2 = document.getElementById("q2-in").value.toLowerCase();
  // let q3 = document.getElementById("q3-in").value.toLowerCase();
  // let q4 = document.getElementById("q4-in").value.toLowerCase();
  // let q5 = document.getElementById("q5-in").value.toLowerCase();

  let score = 0;
  score += markQuestion("q1-in", "q1-out", "mo xiang tong xiu")
  score += markQuestion("q2-in", "q2-out", "xianle")
  score += markQuestion("q3-in", "q3-out", "hua cheng")
  score += markQuestion("q4-in", "q4-out", "qingxuan")
  score += markQuestion("q5-in", "q5-out", "qi rong")

  document.getElementById("score").innerHTML = "" + score;
  let percent = (score / 5) * 100;
  document.getElementById("percent").innerHTML = Math.round(percent);
}

function markQuestion(inputID, outputID, correctAnswer) {
  //QUESTION 1
  let userAnswer = document.getElementById(inputID).value.toLowerCase();
  if (userAnswer === correctAnswer) {
    document.getElementById(outputID).innerHTML = "Correct"
    document.getElementById(inputID).className = "correct";
    return 1
  } else {
    document.getElementById(outputID).innerHTML = "Incorrect"
    document.getElementById(inputID).className = "wrong";
    return 0
  }
}






//   if (answer1 === "mo xiang tong xiu") {
//     document.getElementById("answer1-in").className = "correct";
//     isCorrect += 1;
//   } else {
//     document.getElementById("answer1-in").className = "wrong";
//     document.getElementById("feedback1").className = "feedbackq";
//     document.getElementById("feedback1").innerHTML =
//       "Incorrect, the correct answer is: Mo Xiang Tong Xiu";
//   }

//   //QUESTION 2
//   if (answer2 === "xianle") {
//     document.getElementById("answer2-in").className = "correct";
//     isCorrect += 1;
//   } else {
//     document.getElementById("answer2-in").className = "wrong";
//     document.getElementById("feedback2").className = "feedbackq";
//     document.getElementById("feedback2").innerHTML =
//       "Incorrect, the correct answer is: Xianle";
//   }

//   //QUESTION 3
//   if (
//     answer3 === "hua cheng") {
//     document.getElementById("answer3-in").className = "correct";
//     isCorrect += 1;
//   } else {
//     document.getElementById("answer3-in").className = "wrong";
//     document.getElementById("feedback3").className = "feedbackq";
//     document.getElementById("feedback3").innerHTML =
//       "Incorrect, the correct answer is: Hua Cheng";
//   }

//   //QUESTION 4
//   if (
//     answer4 === "qingxuan") {
//     document.getElementById("answer4-in").className = "correct";
//     isCorrect += 1;
//   } else {
//     document.getElementById("answer4-in").className = "wrong";
//     document.getElementById("feedback4").className = "feedbackq";
//     document.getElementById("feedback4").innerHTML =
//       "Incorrect, the correct answer is: Shi Qingxuan";
//   }

//   //QUESTION 5
//   if (
//     answer5 === "qi rong") {
//     document.getElementById("answer5-in").className = "correct";
//     isCorrect += 1;
//   } else {
//     document.getElementById("answer5-in").className = "wrong";
//     document.getElementById("feedback5").className = "feedbackq";
//     document.getElementById("feedback5").innerHTML =
//       "Incorrect, the correct answer is: Qi Rong";
//   }
//   document.getElementById("score").innerHTML = isCorrect;

//   let percent = (isCorrect / 5) * 100;
//   document.getElementById("percent").innerHTML = Math.round(percent);

//   if (isCorrect === 5) {
//     document.getElementById("feedback").innerHTML =
//       "Perfect! You know everything about 'Heaven Official's Blessing'!";
//   } else if (isCorrect === 4) {
//     document.getElementById("feedback").innerHTML =
//       "Good Job! You know a lot about 'Heaven Official's Blessing'!";
//   } else if (isCorrect === 3) {
//     document.getElementById("feedback").innerHTML =
//       "Well Done. Try doing the test again after you have reviewed you facts.";
//   } else if (isCorrect === 2) {
//     document.getElementById("feedback").innerHTML = "Good luck next time!";
//   } else if (isCorrect === 1) {
//     document.getElementById("feedback").innerHTML =
//       "Good Try, maybe you should read about the characters more.";
//   } else {
//     document.getElementById("feedback").innerHTML =
//       "Are you sure you know the characters in 'Heaven Official's Blessing'?";
//   }
// }