//RULES

// Make an asynchronous request to a remote server via javascript using async/await and try/catch.
// DOM manipulation : modify the DOM according to the result of the request.
// Don't forget HTML semantics (blockquote..)

//Basic DOM
let body = document.querySelector("body");
let newDiv = document.createElement("div");
newDiv.classList.add("quote-container");

//request API

async function fetchQuote(){
  try{
    fetch("https://thatsthespir.it/api")
    .then((response) => response.json())
    .then((json) => {
      //Author
      let author = json.author;
      //age
      let age = json.age;
      // if (age === null){
      //   fetch("https://thatsthespir.it/api")
      //   .then((response) => response.json())
      //   .then((json) => {
      //     let age = age.json;
      //   });
      // } 
      //blockQuote
      let quoteblock = json.quote;
      //Image
      let picture = json.photo;
      let content = `
      <h1 class="quote-title">${author}</h1>
      <h2 class="quote-age">${age}</h2>
      <image src="${picture}" class="quote-image"></image>
      <blockquote class="quote">${quoteblock}</blockquote>
      <button class="quote-button">Refresh</button>
      `;
      newDiv.innerHTML += content;
      body.appendChild(newDiv);
      let buttonRefresh = document.getElementsByClassName("quote-button")[0];
      buttonRefresh.addEventListener("click", () => {
        location.reload();
      });
    });
  }catch(error){
    let content = `
    <p>Error</p>
    `
    newDiv.innerHTML += content;
  }
}

fetchQuote();