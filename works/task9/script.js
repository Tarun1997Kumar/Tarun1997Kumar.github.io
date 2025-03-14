function grade_calculator() {
  let score = document.getElementById("score").value;
  let grade = "";
  let color = "";
  const gradeEle = document.getElementById("grade");
  if (score >= 80 && score <= 100) {
    grade = "A";
    color = "green";
  } else if (score >= 60 && score <= 79) {
    grade = "B";
    color = "blue";
  } else if (score >= 40 && score <= 59) {
    grade = "C";
    color = "orange";
  } else if (score >= 0 && score <= 39) {
    grade = "F";
    color = "red";
  } else {
    grade = "invalid input";
  }
  gradeEle.innerHTML = grade;
  gradeEle.setAttribute("style", `color: ${color};`);
}
