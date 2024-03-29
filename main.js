// PROGRAM TITLE

document.getElementById("submit").addEventListener("click", btnClicked);

function btnClicked() {
  let answer1 = document.getElementById("answer1-in").value.toLowerCase();
  let answer2 = document.getElementById("answer2-in").value.toLowerCase();
  let answer3 = document.getElementById("answer3-in").value.toLowerCase();
  let answer4 = document.getElementById("answer4-in").value.toLowerCase();
  let answer5 = document.getElementById("answer5-in").value.toLowerCase();
  let score = answer1 + answer2 + answer3 + answer4 + answer5;
  var isCorrect = 0;

  if (answer1 === "mo xiang tong xiu") {
    document.getElementById("answer1-in").className = "correct";
    isCorrect += 1;
  } else {
    document.getElementById("answer1-in").className = "wrong";
    document.getElementById("feedback1").className = "feedbackq";
    document.getElementById("feedback1").innerHTML =
      "Incorrect, the correct answer is: Mo Xiang Tong Xiu";
  }

  //QUESTION 2
  if (answer2 === "xianle" || answer2 === "xianle nation") {
    document.getElementById("answer2-in").className = "correct";
    isCorrect += 1;
  } else {
    document.getElementById("answer2-in").className = "wrong";
    document.getElementById("feedback2").className = "feedbackq";
    document.getElementById("feedback2").innerHTML =
      "Incorrect, the correct answer is: Xianle";
  }

  //QUESTION 3
  if (
    answer3 === "huacheng" ||
    answer3 === "hua cheng" ||
    answer3 === "crimson rain sought flower" ||
    answer3 === "sanlang" ||
    answer3 === "san lang" ||
    answer3 === "ghost king" ||
    answer3 === "the ghost king"
  ) {
    document.getElementById("answer3-in").className = "correct";
    isCorrect += 1;
  } else {
    document.getElementById("answer3-in").className = "wrong";
    document.getElementById("feedback3").className = "feedbackq";
    document.getElementById("feedback3").innerHTML =
      "Incorrect, the correct answer is: Hua Cheng";
  }

  //QUESTION 4
  if (
    answer4 === "shiqingxuan" ||
    answer4 === "qingxuan" ||
    answer4 === "the lord who pours wine" ||
    answer4 === "lord wind master" ||
    answer4 === "lady wind master"
  ) {
    document.getElementById("answer4-in").className = "correct";
    isCorrect += 1;
  } else {
    document.getElementById("answer4-in").className = "wrong";
    document.getElementById("feedback4").className = "feedbackq";
    document.getElementById("feedback4").innerHTML =
      "Incorrect, the correct answer is: Shi Qingxuan";
  }

  //QUESTION 5
  if (
    answer5 === "qi rong" ||
    answer5 === "night-touring green lantern" ||
    answer5 === "night touring green lantern" ||
    answer5 === "greenghost" ||
    answer5 === "green ghost qi rong" ||
    answer5 === "qirong"
  ) {
    document.getElementById("answer5-in").className = "correct";
    isCorrect += 1;
  } else {
    document.getElementById("answer5-in").className = "wrong";
    document.getElementById("feedback5").className = "feedbackq";
    document.getElementById("feedback5").innerHTML =
      "Incorrect, the correct answer is: Qi Rong";
  }
  document.getElementById("score").innerHTML = isCorrect;

  let percent = (isCorrect / 5) * 100;
  document.getElementById("percent").innerHTML = Math.round(percent);

  if (isCorrect === 5) {
    document.getElementById("feedback").innerHTML =
      "Perfect! You know everything about 'Heaven Official's Blessing'!";
  } else if (isCorrect === 4) {
    document.getElementById("feedback").innerHTML =
      "Good Job! You know a lot about 'Heaven Official's Blessing'!";
  } else if (isCorrect === 3) {
    document.getElementById("feedback").innerHTML =
      "Well Done. Try doing the test again after you have reviewed you facts.";
  } else if (isCorrect === 2) {
    document.getElementById("feedback").innerHTML = "Good luck next time!";
  } else if (isCorrect === 1) {
    document.getElementById("feedback").innerHTML =
      "Good Try, maybe you should read about the characters more.";
  } else {
    document.getElementById("feedback").innerHTML =
      "Are you sure you know the characters in 'Heaven Official's Blessing'?";
  }
}
