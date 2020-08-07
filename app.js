window.onload = init;
let quoteText = document.getElementById("text");
let quoteAuthor = document.getElementById("author");
let tweetButton = document.getElementById("tweet-quote");
let quotes;
function init() {
  getQuotes();
}

function generateQuote() {
  quoteText.innerText =
    quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)].quote;
  quoteAuthor.innerText =
    quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)].author;
  tweetButton.href =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
    encodeURIComponent(
      '"' + quoteText.innerText + '" ' + quoteAuthor.innerText
    );
}

function getQuotes() {
  var xhttp = new XMLHttpRequest();
  let url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      quotes = JSON.parse(xhttp.responseText);
      generateQuote();
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
