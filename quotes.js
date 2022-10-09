const quotes = [
    {quote: "Never give up on what really want to do. The person with big drama is more powerful than the one with all the facts",
    author: "Harriet Jackson Brown Jr."},
    {quote:"The indispensable fist step to getting the things you want out of life is this:decide what you want.",
     author: "Les Brown"},
    {quote:"If you don't build your dreams, someone will hire you to help build theirs",
     author: "Tony Gaskin"},
     {quote: "To accomplish great things, we must not only act, but also dream; not only plan, but also believe",
    author:"Anatole France"},
     {quote: "Miracles start to happen when you give as much energy to your dreams as you do to your fears",
    author:"Richard Wilkins"},
    {quote: "Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination",
    author: "Mae Jemison"},
    {quote: "I have had dreams, and I've had nightmares, I overcame the nightmares because of my dreams.",
    author:"Jonas Salk"},
    {quote: " Keep your heart open to dreams. For as long as ther's dream, thre is hope, and as long as ther is hope, there is joy in linving",
    author: "blah blah"},
    {quote: " A main is not old until regrets take the place of dreams.",
    author: "John Barrymore"},
    {quote: "No more hiding, I gotta seize my momoent",
    author: "Diseny"}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;