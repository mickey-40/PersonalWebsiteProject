//Final JavaScript
const generateQuote = function() {
    const quotes = [
    {
        quote: "Raising kids is the only job where you work 24 hours a day and it actually costs you money."
    },
    {
        quote: "Being a dad at bedtime is like being a designated driver trying to get your friends to leave the bar."
    },
    {
        quote: "Dad: Spider-killing superhero."
    },
    {
        quote: "My kids always ask me which one of them is my favorite. I don't tell them I don't actually like any of them."
    },
    {
        quote: "No one wants to see Dad dance, but he does it anyway."
    },
    {
        quote: "Being a dad is when you realize you can actually like people who puke in your car multiple times."
    },
    {
        quote: "Fatherhood is all about pretending neck ties are the best gifts you ever received."
    },
    {
        quote: "For the first two years, being a good dad is mostly about keeping your kid from finding new and creative ways to hurt himself."
    },
    {
        quote: "When your kids are toddlers, they'll embarrass you constantly in the grocery store, at the doctor's office, at the park, everywhere. When they're teenagers, it's Dad's turn to pay them back."
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}