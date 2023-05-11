import React from "react";
import style from './paginacion.module.css'

export default function Paginacion ({pokemonsPerPage, paginado, allPokemons, currentPage}){
    const pageNumbers=[]
    for (let i=0; i<=Math.ceil(allPokemons/pokemonsPerPage)-1; i++){
        pageNumbers.push(i+1)
    }
    const maxPages = 10;
    const currentBlock = Math.ceil(currentPage / maxPages);
    const firstPage = (currentBlock - 1) * maxPages;
    const lastPage = Math.min(currentBlock * maxPages, pageNumbers.length);
    const nextPage = currentBlock < Math.ceil(pageNumbers.length / maxPages) ? lastPage + 1 : currentPage;
    const prevPage = currentBlock > 1 ? firstPage - 1 : currentPage;
    return (
        <div>
        <nav>
            <ul className={style.paginacion} >
                <li className={style.pageItem}>
                    <a className={style.pageLink} onClick={()=>paginado(prevPage)}>{"<"}</a>
                </li>
                {pageNumbers.slice(firstPage, lastPage).map(number=>(
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