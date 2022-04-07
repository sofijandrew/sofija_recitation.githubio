//document.querySelector('button');

//document.querySelector('.new-quote button');



async function getQuote(){
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint)
    if (!response.ok){
      throw Error(response.statusText)
    }
    const json = await response.json();
    displayQuote(json.content);
    console.log(json);
  } catch(err){
    console.log(err);
    alert('Failed');
  }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'https://api.quotable.io/random';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);
