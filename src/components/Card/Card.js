//React allows use of react library, style_card.css stores styles for information card, typeColor stores colors for pokemon types
import React from "react";
import "./style_card.css";
import typeColor from "../typeColors"


//card layout: takes in object pokemon as parameter, returns pokedex entry in the form of card
function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt=""/>
            </div>
            <div className="Card__info">
                <div className="Card__name">
                    <p className="info">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1, pokemon.name.length)}</p>
                </div>
                <div className="Card__id">
                    <p className="info">ID: {pokemon.id}</p>
                </div>
                <div className="Card__data Card__data--height">
                    <p className="info">Ht: {Math.round(pokemon.height * 3.9)}"</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="info">Wt: {Math.round(pokemon.weight /4.3)} lbs</p>
                </div>
            </div>         
            <div className="Card__types">
                {pokemon.types.map(type => {
                    return (
                        <div className="Card__type" style={{ backgroundColor: typeColor[type.type.name]}}>{type.type.name}</div>
                    )
                })}
            </div>
            <div className="Card__stats">
                    <p className="stat">HP: {pokemon.stats[0].base_stat}</p>
                    <p className="stat">Def: {pokemon.stats[2].base_stat}</p>
                    <p className="stat">Sp Def: {pokemon.stats[4].base_stat}</p>
                    <p className="stat">Spd: {pokemon.stats[5].base_stat}</p>                    
                    <p className="stat">Atk: {pokemon.stats[1].base_stat}</p>
                    <p className="stat">Sp Atk: {pokemon.stats[3].base_stat}</p>
            </div>
        </div>
    )
};

export default Card;