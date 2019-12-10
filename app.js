const elQuestion = document.querySelector('.question');
const elScore = document.querySelector('.score');

const questions = [
  { text: '3+2=5?', answer: true },
  { text: 'Правда ли, что у осьминогов прямоугольные зрачки?', answer: true },
  { text: 'Столица Германии - Прага', answer: false },
  {
    text:
      'Правда ли, что изюм содержит в своём составе тетрагидроканнабинол и поэтому запрещён к ввозу в Судан и Филиппины?',
    answer: false
  },
  {
    text:
      'Правда ли, что американские астронавты 45 лет назад устроили в космосе забастовку?',
    answer: true
  },
  { text: '1*0=1', answer: false },
  { text: 'В России больше всего часовых поясов.', answer: false },
  {
    text:
      'Правда ли, что спутники Сатурна Эпиметей и Янус периодически меняются орбитами?',
    answer: false
  },
  { text: '2-2=0', answer: true },
  { text: '2+2=4', answer: true }
];

let index = 0;
let score = 0;

function init() {
  elQuestion.innerHTML = `<div class="jumbotron"><h2>${questions[index].text}</h2></div>`;
  elScore.textContent = `Score : ${score}`;
}
init();
function getResult(userAnswer, el) {
  if (index < 9) {
    index++;
    if (userAnswer == questions[index].answer) {
      score++;
      el.classList.add('btn-success');
    } else {
      el.classList.add('btn-danger');
    }
    setTimeout(() => {
      el.classList.remove('btn-success');
      el.classList.remove('btn-danger');
    }, 500);
    init();
  } else {
    alert(`Your score is ${score} points`);
    index = 0;
    score = 0;
    init();
  }

  console.log(index);
}
