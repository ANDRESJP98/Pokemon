import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../actions/actions";
import Card from "./Card";
import Paginacion from "./paginado";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";

export default function Home(){
    const dispatch =useDispatch();
    const allPokemons = useSelector(state=>state.pokemons)
    //const [order,setOrden]=useState('')
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

    const handleClick =(e)=>{
        e.preventDefault();
        dispatch(getPokemons())
    };
    /*const handleSort =(e)=>{
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };
    const handleFilterGenres=(e)=>{
        dispatch(filterVideogamesByGenres(e.target.value))
    };
    const handleFilterCreated=(e)=>{
        dispatch(filterCreated(e.target.value))
    };*/
    return (
        <div>
        <Link to='/pokemon'>Add pokemons</Link>
        <div >
        <h1>Videogames</h1>
        <div>
        <button onClick={e=>{handleClick(e)}}>Back to pokemons</button>
        </div>
        <select /*</div>onChange={e=>handleSort(e)}*/>
            <option value="asc" >A-Z</option>
            <option value="desc">Z-A</option>
        </select>
        <select >
            <option value='All'>TODOS</option>
            <option value="desc rating">+ Valorada</option>
            <option value="asc rating">- Valorada</option>
        </select>
        <select /*onChange={e=>handleFilterCreated(e)}*/>
            <option value='All'>TODOS</option>
            <option value="created">Creados</option>
            <option value="api">Existentes</option>
        </select>
        <select /*onChange={e=>handleFilterGenres(e)}*/>
            <option value="All">TODOS</option>
            <option value="Action">Action</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="Platformer">Platformer</option>
            <option value="Racing">Racing</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
        </select>
        <SearchBar/>
        <Paginacion pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        paginado ={paginado}/>
            {currentPokemons?.map((pok)=>{
                return (
                <div >
                <Link to={"/home/" + pok.id}>
                <Card name={pok.name}  types={pok.genres} key={pok.id}/>
                </Link>
                </div>
                )
            })}
        </div>
        </div>
    )

}
