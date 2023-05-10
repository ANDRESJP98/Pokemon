import React from "react";
import style from './paginacion.module.css'

export default function Paginacion ({pokemonsPerPage, paginado, allPokemons, currentPage}){
    const pageNumbers=[]
    for (let i=0; i<=Math.ceil(allPokemons/pokemonsPerPage)-1; i++){
        pageNumbers.push(i+1)
    }
    const maxPages = 10;
    const lastPage = Math.min(currentPage + Math.floor(maxPages / 2), pageNumbers.length);
    const firstPage = Math.max(lastPage - maxPages + 1, 1);
    const nextPage = currentPage < pageNumbers.length ? currentPage + 10 : currentPage;
    const prevPage = currentPage > 1 ? currentPage - 10 : currentPage;
    return (
        <div>
        <nav>
            <ul className={style.paginacion} >
                <li className={style.pageItem}>
                    <a className={style.pageLink} onClick={()=>paginado(prevPage)}>{"<"}</a>
                </li>
                {pageNumbers.slice(firstPage - 1, lastPage).map(number=>(
                    <li className={`${style.pageItem} ${number === currentPage ? style.active : ""}`} key={number}>
                        <a className={style.pageLink} onClick={()=>paginado(number)}>{number}</a>
                    </li>
                    
                ))}
                <li className={style.pageItem}>
                    <a className={style.pageLink} onClick={()=>paginado(nextPage)}>{">"}</a>
                </li>
            </ul>
        </nav>

        </div>
    )
}