const questions = document.querySelectorAll(".wasDT .btn");
const answers = document.querySelectorAll("section .wasDD");
const arrows = document.querySelectorAll(".wasDT .arrow img");

function handleClick(event) {
  const clickedButton = event.currentTarget;
  const index = Array.from(questions).indexOf(clickedButton);
  const answer = answers.item(index);
  const arrow = arrows.item(index);
  const question = questions.item(index)

  questions.forEach((questionElement) => {
    if(questionElement !== question) {
      questionElement.classList.remove("color");
    }
    
  });

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
  question.classList.toggle("color");
}

questions.forEach((question) => {
  question.addEventListener("click", handleClick);
})


