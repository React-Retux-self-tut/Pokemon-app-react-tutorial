import React from 'react'
import "./pokemonList.css"

export default function PokemonList({pokemon}) {
    return (
        <div className="namesTable">
         {pokemon.map(p => (
             <div key={p} className="names">{p}</div>
         ))}           
        </div>
    )
}
