import URL_API from '../Global/PokeApi'

const getPokemon = async () =>{
    const response = await fetch(`${URL_API}pokemon?limit=100&offset=0`,{
        method:'GET',
    });
    const data = await response.json()
    return data;
}

export {
    getPokemon
}