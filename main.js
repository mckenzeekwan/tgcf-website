// PROGRAM TITLE

document.getElementById("submit").addEventListener("click", btnClicked);

function btnClicked() {
  let answer1 = +document.getElementById("answer1-in").value.toLowerCase();
  let answer2 = +document.getElementById("answer2-in").value.toLowerCase();
  let answer3 = +document.getElementById("answer3-in").value.toLowerCase();
  let answer4 = +document.getElementById("answer4-in").value.toLowerCase();
  let answer5 = +document.getElementById("answer5-in").value.toLowerCase();

  if (
    answer1 === "mo xiang tong xiu" &&
    answer2 === "xianle" &&
    answer3 === "huacheng" &&
    answer4 === "qingxuan" &&
    answer5 === "qirong"
  ) {
    document.getElementById("score").innerHTML = "5/5";
  }
}
