/*Chapter 6 and 7 Game Updates */

//The questions and answers are being stored as objects inside an array
/*const quiz = [
    { name: "Superman",realName: "Clark Kent"},
    { name: "Wonder Woman", realName: "Diana Prince"},
    { name:"Batman", realName: "Bruce Wayne"},
    { name: "Green Lantern", realName: "John Stewart"},
    { name: "Flash", realName: "Barry Allen"},
];

// View Object
const view = {
    start: document.getElementById('start'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    //added in response with the form
    response: document.querySelector('#response'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    show(element){
        element.style.display = 'block';
    }, 
    hide(element){
        element.style.display = 'none';
    },
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
    
};
//removed the loop
const game = {
    start(quiz){
       //sets up the quiz again
        this.score = 0;
        this.questions = [...quiz];
        // main game loop
        this.ask();
        }
    },
    //Updated ask()
    ask(name){
        if(this.question.length > 0) {
        this.question = this.questions.pop();
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        }
        else {
        this.gameOver();
    //Updated check()
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        alert('Correct!');
        this.score++;
        view.render(view.score,this.score);
        } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        alert(`Wrong! The correct answer was ${answer}`);
        }
    //Updated check()
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        //The button will reappear when it's over
        view.show(view.start);
    }
}

//function to start the quiz
//game.start(quiz);
//still runs similarly to how it did after Chapter 6, but it updates at the end
view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);
*/

//Week 8 Forms
/*
const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
  { name: "Green Lantern", realName: "John Stewart" },
  { name: "Flash", realName: "Barry Allen" },
];
// View Object
const view = {
  score: document.querySelector("#score strong"),
  question: document.getElementById("question"),
  result: document.getElementById("result"),
  info: document.getElementById("info"),
  start: document.querySelector("#start"),
 //added this in to use a form for the response rather than an alert
  response: document.querySelector("#response"),
  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },
  show(element) {
    element.style.display = "block";
  },
  hide(element) {
    element.style.display = "none";
  },
  resetForm() {
    this.response.answer.value = "";
    this.response.answer.focus();
  },
  //this was used in the codepen
  setup() {
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score, game.score);
    this.render(this.result, "");
    this.render(this.info, "");
    this.resetForm();
  },
  teardown() {
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
  },
};

const game = {
    //updated this part, mostly removed things
  start(quiz) {
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.ask();
  },
  ask(name) {
      //this also got updated to removed the question from the array
    if (this.questions.length > 0) {
      this.question = this.questions.pop();
      const question = `What is ${this.question.name}'s real name?`;
      view.render(view.question, question);
    } else {
      this.gameOver();
    }
  },
  check(event) {
    event.preventDefault();
    const response = view.response.answer.value;
    const answer = this.question.realName;
    if (response === answer) {
      view.render(view.result, "Correct!", { class: "correct" });
      this.score++;
      view.render(view.score, this.score);
    } else {
      view.render(view.result, `Wrong! The correct answer was ${answer}`, {
        class: "wrong",
      });
    }
    view.resetForm();
    this.ask();
  },
  gameOver() {
    view.render(
      view.info,
      `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`
    );
    view.teardown();
  },
};
//added in an event listener for the submit button
view.start.addEventListener("click", () => game.start(quiz), false);
view.response.addEventListener("submit", (event) => game.check(event), false);
view.hide(view.response);
//figured out what was going wrong from last week's code, the script was loading before the html was there creating a null
//that was fixed by deferring the script until the html loaded. 
*/


//Chapter 12: OOP in JS

  const quiz = [
              { name: "Superman",realName: "Clark Kent" },
              { name: "Wonderwoman",realName: "Dianna Prince" },
              { name: "Batman",realName: "Bruce Wayne" },
              { name: "The Hulk",realName: "Bruce Banner" },
              { name: "Spider-man",realName: "Peter Parker" },
              { name: "Cyclops",realName: "Scott Summers" },
              { name: "Flash", realName: "Barry Allen"},
              { name: "Green Lantern", realName: "John Stewart"}
            ];

// Utility functions
function random(a,b=1) {
// if only 1 argument is provided, we need to swap the values of a and b
  if (b === 1) {
	  [a,b] = [b,a];
  }
  return Math.floor((b-a+1) * Math.random()) + a;
}

function shuffle(array) {
  for (let i = array.length; i; i--) {
      let j = random(i)-1;
      [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }
}

// View Object
const view = {
  score: document.querySelector('#score strong'),
  question: document.querySelector('#question'),
  result: document.querySelector('#result'),
  info: document.querySelector('#info'),
  start: document.querySelector('#start'),
  response: document.querySelector('#response'),
  timer: document.querySelector('#timer strong'),
  render(target,content,attributes) {
      for(const key in attributes) {
        target.setAttribute(key, attributes[key]);
      }
      target.innerHTML = content;
  },
  show(element){
    element.style.display = 'block';
  },
  hide(element){
    element.style.display = 'none';
  },
  setup(){
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score,game.score);
    this.render(this.result,'');
    this.render(this.info,'');
  },
  teardown(){
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
  },
  buttons(array){
    return array.map(value => `<button>${value}</button>`).join('');
  }
};

const game = {
  start(quiz){
    console.log('start() invoked');
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    //there's a timer! 
    this.secondsRemaining = 20;
    this.timer = setInterval( this.countdown , 1000 );
    this.ask();
  },
  countdown() {
    game.secondsRemaining--;
    view.render(view.timer,game.secondsRemaining);
      if(game.secondsRemaining <= 0) {
        game.gameOver();
      }
  },
  ask(name){
    console.log('ask() invoked');
    if(this.questions.length > 2) {
      shuffle(this.questions);
      this.question = this.questions.pop();
      const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
      shuffle(options);
      const question = `What is ${this.question.name}'s real name?`;
      view.render(view.question,question);
      view.render(view.response,view.buttons(options));
    }
    else {
      this.gameOver();
    }
  },
  check(event){
    console.log('check(event) invoked');
    const response = event.target.textContent;
    const answer = this.question.realName;
    if(response === answer){
      view.render(view.result,'Correct!',{'class':'correct'});
      this.score++;
      view.render(view.score,this.score);
    } else {
      view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    }
    this.ask();
  },
  gameOver(){
    console.log('gameOver() invoked');
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.teardown();
    clearInterval(this.timer);
  }
}

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('click', (event) => game.check(event), false);

//This game is super cool!!! I can't wait to work on the next project!!! 

/* Modular JavaScript Reading Notes:
Modules allow code to be saved as individual files that are easier to maintain
this allows those files to be exported and used similar to calling a method
It can be as simple as a variable for PI being used or many functions that are related and
grouped together to be used. All functions don't need to be exported, but can be used as needed.
Most browsers now support ES6 which is able to used modules. 

Modules seem to be the way to organize code and it seems likely
that they will be used by all languages in the future for those that aren't currently. */