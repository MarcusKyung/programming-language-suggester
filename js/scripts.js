function decisionTree(event) {
  event.preventDefault();
  const qu1 = document.querySelector("input[name='q1']:checked").value;
  const qu2 = document.querySelector("input[name='q2']:checked").value;
  const qu3 = document.querySelector("input[name='q3']:checked").value;
  const qu4 = document.querySelector("input[name='q4']:checked").value;
  const qu5 = document.querySelector("input[name='q5']:checked").value;

  let result;
  if ((qu1 === "false")) {
    result = "language a";
  } else if ((qu1 === "true" && qu2 === "false" && qu3 === "false")) {
    result = "language b";
  } else if ((qu1 === "true" && qu2 === "true" && qu4 === "true")) {
    result = "language c";
  } else if ((qu1 === "true" && qu2 === "false" && qu3 === "true" && qu5 === "false")) {
    result = "language d";
  } else if (qu1 === "true" && qu2 === "false" && qu3 === "true" && qu5 === "true") {
    result = "language e";
  } else {
    result = "JavaScript"
  }

  document.getElementById("language-selection").innerText = result;
}

  window.addEventListener("load", function () {
    const form = document.getElementById("languagePicker");
    form.addEventListener("submit", decisionTree);
  });