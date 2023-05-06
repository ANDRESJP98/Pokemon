import React from "react";
import style from './paginacion.module.css'
export default function Paginacion ({pokemonsPerPage, paginado, allPokemons}){
    const pageNumbers=[]
    for (let i=0; i<=Math.ceil(allPokemons/pokemonsPerPage)-1; i++){
        pageNumbers.push(i+1)
    }
    return (
        <div>
        <nav>
            <ul className={style.paginacion} >
                {pageNumbers?.map(number=>(
                    <li className={style.pageItem} key={number}>
                    <a className={style.pageLink} onClick={()=>paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    )
    
}