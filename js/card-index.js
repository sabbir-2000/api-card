const main = document.getElementById('main')
const searchButton = () => {
    const input = document.getElementById('input-value')
    const error = document.getElementById('error')

    const inputValue = parseInt(input.value);
    // console.log(inputValue);
    input.value = '';
    if (isNaN(inputValue) || inputValue == '') {
        // alert('please inter e number mama!!!')
        error.innerText = "please give a valid number"
        /* wrong asar pore jeno card faka hoie jay tai empty string */
        main.innerHTML = '';
    }
    else if (inputValue <= 0 || inputValue > 52) {
        error.innerText = "please give a positive and valid number"
        main.innerHTML = '';
    }

    else {
        main.innerHTML = '';
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data.cards))
        error.innerHTML = '';
    }

}
const cardsDisplay = (cards) => {


    // cards = cards.cards; or uporer function e data er sathe .cards dilew hobe
    for (const card of cards) {
        console.log(card.image);
        const div = document.createElement('div')
        div.className = ('col-lg-4 mb-5');
        // div.className = ();
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title${card.suit}</h5>

          <p class="card-text">${card.code}</p>
          <button href="#" class="btn btn-primary">See Details</button>
          
        </div>
      </div>
        `;
        main.appendChild(div)
    }

}