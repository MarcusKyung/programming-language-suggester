function decisionTree(event) {
  event.preventDefault();
  const question1 = document.querySelector("input[name='q1']:checked").value;
  const question2 = document.querySelector("input[name='q2']:checked").value;
  const question3 = document.querySelector("input[name='q3']:checked").value;
  const question4 = document.querySelector("input[name='q4']:checked").value;
  const question5 = document.querySelector("input[name='q5']:checked").value;

  let result;
  if (question1 === "true") {
    result = "Swift";
    window.getElementById(hidden2).removeAttribute("class");
  } else if (question1 === "false" && question2 === "true")  {
    result = "COBOL";
  } else if (question1 === "false" && question2 === "true" && question3 === "true") {
    result = "JavaScript";
  } else if () {
    result = "language d";
  } else if () {
    result = "language e";
  } 

  document.getElementById("language-selection").innerText = result;
}

  window.addEventListener("load", function () {
    const form = document.getElementById("languagePicker");
    form.addEventListener("submit", decisionTree);
  });