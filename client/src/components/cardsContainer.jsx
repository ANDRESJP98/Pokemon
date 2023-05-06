import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../actions/actions";
import Card from "./Card";
import Paginacion from "./paginado";
import { Link } from "react-router-dom";
import style from './cardContainer.module.css'

export default function CardsContainer(){
    const dispatch =useDispatch();
    const allPokemons = useSelector(state=>state.pokemons)
    const [order,setOrden]=useState('')
    const [currentPage, setCurrentPage]=useState(1)
    const [pokemonsPerPage, setpokemonsPerPage]=useState(12)
    const indexOfLastVideogame=currentPage * pokemonsPerPage
    const indexOfFirstVideogame=indexOfLastVideogame - pokemonsPerPage
    const currentPokemons= allPokemons.slice(indexOfFirstVideogame, indexOfLastVideogame);
    
    const paginado =(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    useEffect(()=>{
        dispatch(getPokemons());
    },[dispatch])
     <Paginacion pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        paginado ={paginado}/>
            {currentPokemons?.map((pok)=>{
                return (
                <div className={style.container}>
                <Link to={"/home/" + pok.id}>
                <Card  name={pok.name} types={pok.types} image={pok.img?pok.img:pok.image} key={pok.id}/>
                </Link>
                </div>
                )
            })}
}