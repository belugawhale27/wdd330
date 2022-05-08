/*//Chapter 4 Game Updates:

//This nested array still has the questions
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"],
    ["What is Green Lantern's real name?","John Stewart"],
    ["What is the Flash's real name?","Barry Allen"]
];
//This function has been included and starts the game
function start(quiz){
let score = 0;

// main game loop
//This for loop uses the other functions below to run the quiz
for(const [question,answer] of quiz){
    const response = ask(question);
    check(response,answer);
}
// end of main game loop
//This function uses an alert when the game is over and works similarly to how it was structured before, but now it's a function
gameOver();

// function declarations
//This function asks the questions through a prompt
function ask(question){
    return prompt(question);
}
//This function is used to check the response and add to the score when needed
function check(response,answer){
    if(response === answer){
    alert('Correct!');
    score++;
    } else {
    alert(`Wrong! The correct answer was ${answer}`);
    }
}
//This is what the function gameOver() shows and ends the game.
function gameOver(){
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
}
}
//This line of code actually starts the quiz game
start(quiz);
/*Things I would like to do to change/improve this game include:
Making buttons instead of just prompts/alerts for the questions and answers
Changing the colors to reflect the Justice League since that's where these heroes are from
*/

/*Chapter 5 Game Updates: */

//The questions and answers are being stored as objects inside an array
const quiz = [
    { name: "Superman",realName: "Clark Kent"},
    { name: "Wonder Woman", realName: "Diana Prince"},
    { name:"Batman", realName: "Bruce Wayne"},
    { name: "Green Lantern", realName: "John Stewart"},
    { name: "Flash", realName: "Barry Allen"},
];


//Object called game that will be the namespace
const game = {
    start(quiz){
        //because it's inside the object it uses this.questions here
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
        //using template literals for the questions, answers, and score
        const question = `What is ${this.question.name}'s real name?`;
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        alert('Correct!');
        this.score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

//function to start the quiz
game.start(quiz);
