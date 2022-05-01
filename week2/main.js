//Chapter 2 Ninja Quiz Game:
/*
//Assigning a variable for the question and answer 
const question = "What is Superman's real name?"
const answer = prompt(question);
//The prommpt will pop-up when the page loads and ask the question and an alert will return the answer. The answer also uses a template literal.
alert(`You answered ${answer}`);
*/

//Chapter 3 Ninja Quiz Game: 
// Quiz is an array that contains a nested array for each question and answer pair.  
/*
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"],
    ["What is Green Lantern's real name?","John Stewart"],
    ["What is the Flash's real name?","Barry Allen"]
];
let score = 0 // initialize score
//the for loop takes nested loop and compares the input from the user to the answer
for(const [question,answer] of quiz){
    const response = prompt(question);
    //the if/else statement updates the score as needed when it compares the response
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
    }
      
// At the end of the game, report the player's score
//the shorthand means the 's' is to be added if there is more than 1 point won by the user.  
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
//This game needs to include when the names are lowercased too as correct answers. 
//Also it may need to be changed to full name, in case someone only knows the first names. 
//Clark Kent is technically Superman's Earth name, but Kal El would technically also be correct. 
*/

//Chapter 4 Game Updates:

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