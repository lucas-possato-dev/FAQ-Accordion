const questions = document.querySelectorAll("dt .btn");
const answers = document.querySelectorAll("section dd");
const arrows = document.querySelectorAll("dt .arrow img");

function handleClick(event) {
  const clickedButton = event.currentTarget;
  const index = Array.from(questions).indexOf(clickedButton);
  const answer = answers.item(index);
  const arrow = arrows.item(index);

  answers.forEach((answerElement) => {
    if (answerElement !== answer) {
      answerElement.classList.remove("active");
    }
  });

  arrows.forEach((arrowElement) => {
    if (arrowElement !== arrow) {
      arrowElement.classList.remove("ativado");
    }
  })


  arrow.classList.toggle("ativado");
  answer.classList.toggle("active");
}

questions.forEach((question) => {
  question.addEventListener("click", handleClick);
})

console.log(arrows);

