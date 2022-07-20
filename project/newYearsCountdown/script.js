const days = document.querySelector('#days'); 
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January ${currentYear + 1} 00:00:00`);

function updateCountdowntime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

    if (diff= 0) {
      window.location.assign("./firework.html")
    }
  }

setInterval(updateCountdowntime, 1000);

document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
  
    async function updateQuote() {
      // Fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        cite.textContent = data.author;
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
  
    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);
  
    // call updateQuote once when page loads
    updateQuote();
  });

//Coundown works, but need to add the API for a quote
//Create a form to start the countdown of user's choice
//Create a variable countdown with pseudo classes in css
    //This will depend on User Input
    //Graduation, Birthday, and Celebration Countdowns will be affected
//Figured out how to update New Year Countdown to change to a Christmas one 
    //issue with this is depending on the Christmas is still coming or has passed for the year
    //Only really an issue in December . . . .
    //Maybe add a button that will let the user switch to the New Year's Countdown? 
//Keep New Year Countdown in tact in case it is needed 
//Figure out how to change the background to "Celebrate Event" 
//Add a button that will allow the user to reset the countdown again after __ seconds of celebrating
//Continue counting after the event has passed
