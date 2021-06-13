//getAllPokemon is an asynchronous function that makes call to API, requests data set for all pokemon, and then stores the data it recieves
export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })
}

//getPokemon is an asynchronous function that makes call to API, requests data set for a specific pokemon, and then stores the data it recieves
export async function getPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })
}