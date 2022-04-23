const links = [
    {
        label: "Week1 notes or exercises",
        url: "week1/even_or_odd.html"
    }
]

const examples = document.querySelector('.examples');

  function displayWeekly(links) {
    // Create elements to add to the document
    let example = document.createElement('section');
    let h2 = document.createElement('h2');
    let a = document.createElement('a');

    h2.innerHTML = `${links.label}`;
    p.innerHTML = `${links.url}`;  
  
    // Add/append the section(card) with the h2 element
    example.appendChild(h2);
    example.appendChild(a);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    examples.appendChild(example);
  }

