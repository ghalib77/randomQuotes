const quotesText = document.querySelector(".quotes-text");
const quotesAuthor = document.querySelector(".quotes-author");
const generateButton = document.querySelector(".card-button");
const rootStyle = document.documentElement.style;

//option to get api fetch
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "RVH8jWYx9lovNIOblypNiw==MsKYtrShnisI5Pgi",
  },
};

//get random quotes by fetching
const getRandomQuotes = async () => {
  quotesText.textContent = "...loading";
  quotesAuthor.textContent = "...loading";
  return new Promise(async (resolve, rejected) => {
    try {
      const resp = await fetch("https://api.api-ninjas.com/v1/quotes", options);
      const quotes = await resp.json();
      resolve(quotes);
    } catch (err) {
      rejected(err);
    }
  });
};

const setRandomQuotes = async () => {
  const quotes = await getRandomQuotes();
  var randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  quotesText.textContent = "''" + quotes[0].quote + "''";
  quotesAuthor.textContent = "~" + quotes[0].author + "~";
  rootStyle.setProperty(
    "--color-primary",
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
};

document.addEventListener("DOMContentLoaded", setRandomQuotes);
generateButton.addEventListener("click", setRandomQuotes);
