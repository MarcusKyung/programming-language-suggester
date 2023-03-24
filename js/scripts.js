function decisionTree(event) {
  event.preventDefault();
  const q1 = document.querySelector("input#q1").value;
  const q2 = document.querySelector("input#q2").value;
  const q3 = document.querySelector("input#q3").value;
  const q4 = document.querySelector("input#q4").value;
  const q5 = document.querySelector("input#q5").value;

  let result;
  if (condition) {
    result = "language";
  } else if (condition) {
    result = "language";
  } else if (condition) {
    result = "language";
  } else if (condition) {
    result = "language";
  } else if (condition) {
    result = "language";
  } else if (condition) {
    result = "language";
  } else if (condition) {
    result = "language";
  } else if (condition) {
    result = "language";
  }

  document.getElementById("language-selection").innerText = result;
}

  window.addEventListener("load", function () {
    const form = document.getElementById("#languagePicker");
    form.addEventListener("submit", decisionTree)
  });