function decisionTree(event) {
  event.preventDefault();
  const question1 = document.querySelector("input[name='q1']:checked").value;
  const question2 = document.querySelector("input[name='q2']:checked").value;
  const question3 = document.querySelector("input[name='q3']:checked").value;
  const question4 = document.querySelector("input[name='q4']:checked").value;
  const question5 = document.querySelector("input[name='q5']:checked").value;

  let result;
  if ((question1 === "true") && (question2, question3, question4, question5 === "true" || question2, question3, question4, question5 === "false")) {
    result = "Swift";
  } else if ((question1 === "false" && question2 === "true") && (question3, question4, question5 === "true" || question3, question4, question5 === "false"))  {
    result = "COBOL";
  } else if ((question1 === "false" && question2 === "true" && question3 === "true") && (question4, question5 === "true" || question4, question5 === "false")) {
    result = "JavaScript";
  } else if ((question1 === "false" && question2 === "true" && question3 === "true" && question4 === "true") && (question5 === "true" || question5 === "false")) {
    result = "Python";
  } else if ((question1 === "false" && question2 === "true" && question3 === "true" && question4 === "true") && (question5 === "true")) {
    result = "Java";
  } else if ((question1 === "false" && question2 === "true" && question3 === "true" && question4 === "true") && (question5 === "false")) {
    result = "Ruby";
  } 

  document.getElementById("language-selection").innerText = result;
}

  window.addEventListener("load", function () {
    const form = document.getElementById("languagePicker");
    form.addEventListener("submit", decisionTree);
  });