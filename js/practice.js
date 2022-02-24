// arrow function..
// const kayneQuotes = () => {
// kanye rest theke link ta paiche... 
// fetch('https://api.kanye.rest')
//         .then(res => res.json())
//         .then(data => displayQuotes(data))
// }
// const displayQuotes = ukti => {
//     console.log(ukti.quote);
//     const quoteVariableName = document.getElementById('new-api');
//     quoteVariableName.innerText = ukti.quote;
// }

const motivQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = speech => {
    // console.log(speech.quote);
    const speechElement = document.getElementById('motivational-quotes')
    speechElement.innerText = speech.quote;
}