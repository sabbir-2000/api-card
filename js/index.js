const loadDog = () => {
    fetch('https:/api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))
}
const displayDog = dogList => {
    const main = document.getElementById('main')
    const first10Data = dogList.slice(0, 10)
    for (const dog of first10Data) {
        const div = document.createElement('div');
        div.className = 'col-lg-4'
        /* browser e ei column system ta kaj kore nai */

        // console.log(dog.weight.imperial);
        div.innerHTML = `
             <h2>${dog.name}</h2>
             <p>${dog.temperament}</p>
             <h4>${dog.weight.imperial}</h4>
             <img width="50%" src = "${dog.image.url}"/>
         `;
        main.appendChild(div)



    }
}