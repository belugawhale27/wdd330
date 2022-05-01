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
                