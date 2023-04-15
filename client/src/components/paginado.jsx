import React from "react";

export default function Paginacion ({pokemonsPerPage, paginado, allPokemons}){
    const pageNumbers=[]
    for (let i=0; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i+1)
    }
    return (
        <div>
        <nav>
            <ul className="paginado" >
                {pageNumbers && pageNumbers.map(number=>(
                    <li className='number' key={number}>
                    <a  onClick={()=>paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    )
    
}