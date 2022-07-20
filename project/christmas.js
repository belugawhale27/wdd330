const days = document.querySelector('#days'); 
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear();

const christmasTime = new Date(`December 25 ${currentYear} 00:00:00`);

function updateCountdowntime() {
    const currentTime = new Date()  
    const diff = christmasTime - currentTime;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    days.innerHTML = d == -1 ? 1 + d:d;
    hours.innerHTML = 0 < h && h < 10 ? '0' + h : h && h <= -1 ?  -(h) - 1:h; 
    minutes.innerHTML = 0 < m && m < 10 ? '0' + m : m && m <= -1 ? -(m) -1:m;
    seconds.innerHTML = 0 < s && s < 10 ? '0' + s : s && s <= -1 ? -(s) -1:s;
  
    if (diff<= 0) {
      window.location.assign("./snow.html")
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
  