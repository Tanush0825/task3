document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) =>
    question.addEventListener("click", () => {
      if (question.parentNode.classList.contains("active")) {
        question.parentNode.classList.toggle("active");
      } else {
        questions.forEach((q) => q.parentNode.classList.remove("active"));
        question.parentNode.classList.add("active");
      }
    })
  );
});