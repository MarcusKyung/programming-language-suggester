function decisionTree(event) {
  event.preventDefault();
  const qu1 = document.querySelector("input[name='q1']:checked").value;
  const qu2 = document.querySelector("input[name='q2']:checked").value;
  const qu3 = document.querySelector("input[name='q3']:checked").value;
  const qu4 = document.querySelector("input[name='q4']:checked").value;
  const qu5 = document.querySelector("input[name='q5']:checked").value;

  let result;
  if ((qu1 === "true") && qu1, qu3, qu4, qu5 === "false" ) {
    result = "Swift";
  } else if ((qu1 === "false" && qu2 === "true" && qu3 === "true")) {
    result = "language b";
  } else if ((qu1 === "false" && qu2 === "false" && qu4 === "false")) {
    result = "language c";
  } else if ((qu1 === "false" && qu2 === "true" && qu3 === "false" && qu5 === "true")) {
    result = "language d";
  } else if (qu1 === "false" && qu2 === "true" && qu3 === "false" && qu5 === "false") {
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