// A collection of quotes to display.
const quotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Stay hungry, stay foolish. — Steve Jobs",
    "Innovation distinguishes between a leader and a follower. — Steve Jobs",
    "Don't cry because it's over, smile because it happened. — Dr. Seuss",
    "Be yourself; everyone else is already taken. — Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. — Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. — Nelson Mandela",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. — Steve Jobs",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "The best way to predict the future is to create it. — Peter Drucker",
    "The key to success is to focus our conscious mind on things we desire not things we fear. — Brian Tracy",
    "Opportunities don't happen. You create them. — Chris Grosser",
    "The secret of getting ahead is getting started. — Mark Twain",
    "I have not failed. I've just found 10,000 ways that won't work. — Thomas A. Edison",
    "If you are not embarrassed by the first version of your product, you’ve launched too late. — Reid Hoffman",
    "Risk more than others think is safe. Dream more than others think is practical. — Howard Schultz"
];

const quoteContainer = document.getElementById('quote-container');
const quoteSpan = quoteContainer.querySelector('span');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote
function updateQuote() {
    const newQuote = getRandomQuote();
    quoteSpan.textContent = newQuote;
}

// Set up the interval to change the quote every 5 seconds (5000 milliseconds)
setInterval(updateQuote, 5000);

// Display a random quote as soon as the page loads
updateQuote();
