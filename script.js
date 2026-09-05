

const API_URL = "https://dummyjson.com/quotes/random";

const quoteText = document.getElementById("quoteText");
const authorName = document.getElementById("authorName");
const newQuoteButton = document.getElementById("newQuoteButton");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");


async function fetchRandomQuote() {
    try {
        
        showLoading(); // Show loading state
        clearError(); // Remove previous error
        const response = await fetch(API_URL); // Send GET request to the API
        const data = await response.json(); // Convert JSON response into JavaScript object
        displayQuote(data.quote, data.author); // Display the received quote

    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();  // Hide loading message
    }
}

// Display Quote

function displayQuote(quote, author) {
    quoteText.textContent = `"${quote}"`;
    authorName.textContent = `— ${author}`;
}

// Show Loading Message

function showLoading() {
    newQuoteButton.textContent = "⏳ Loading...";
}

// Hide Loading Message

function hideLoading() {
    newQuoteButton.textContent = "✨ New Quote";
}

// Display Error

function showError(message) {
    errorMessage.textContent = `⚠️ ${message}`;
}

// Clear Error

function clearError() {
    errorMessage.textContent = "";
}

// Button Events

// Generate a new quote
newQuoteButton.addEventListener("click",fetchRandomQuote);

fetchRandomQuote(); // Load Quote When Page Opens


