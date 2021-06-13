//import React allows use of React library, useState and useEffect are functions that allow use of states in React 
//getAllPokemon and getPokemon are functions that make calls to retrieve and store data from the API
//Card allows use of custom card component, ./style_app.css stores the styles for the grid
import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "../pokemon";
import Card from "./Card/Card";
import "./style_app.css"

function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const initialUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151"

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            await loadingPokemon(response.results);
            setLoading(false); 
        }
        fetchData();
    }, []);

    const loadingPokemon =  async (data) => {
        let _pokemonData = await Promise.all(
            data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon.url);
                return pokemonRecord;
            })
        );

        setPokemonData(_pokemonData);
    }

    console.log(pokemonData);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <>
                    <div className="grid-container ">
                        {pokemonData.map((pokemon, i) => {
                            return <Card key={i} pokemon={pokemon} />
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default App;