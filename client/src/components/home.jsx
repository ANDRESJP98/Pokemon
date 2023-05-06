import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, orderByName, orderByAttack, filterPokemonsByTypes, filterCreated } from "../actions/actions";
import Card from "./Card";
import Paginacion from "./paginado";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import style from './home.module.css'

export default function Home(){
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

    const handleClick =(e)=>{
        e.preventDefault();
        dispatch(getPokemons())
    };
    const handleSort =(e)=>{
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };
    const handleSortAttack =(e)=>{
        e.preventDefault();
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };
    const handleFilterTypes=(e)=>{
        e.preventDefault();
        dispatch(filterPokemonsByTypes(e.target.value))
    };
    const handleFilterCreated=(e)=>{
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
    };
    
    return (
        <div className={style.container1}>
        <div className={style.columnsL}>
            <div className={style.sameSpot}>
        <div >
        <Link to='/pokemon'><button className={style.button1}>Add pokemons</button></Link>
        </div>
        <div>
        <button className={style.button2} onClick={e=>{handleClick(e)}}>Clear filters</button>
        </div>
        <div  >
        <select onChange={e=>handleSort(e)} className={style.order}>
            <option>---</option>
            <option value="asc" >A-Z</option>
            <option value="desc">Z-A</option>
        </select>
        <select onChange={e=>handleSortAttack(e)} className={style.order}>
            <option>---</option>
            <option value="asc attack">-Attack</option>
            <option value="desc attack">+ Attack</option>
        </select>
        </div>
        <div >
        <select onChange={e=>handleFilterCreated(e)} className={style.filter}>
            <option value='All'>---</option>
            <option value="created">Created</option>
            <option value="api">From Api</option>
        </select>
        <select onChange={e=>handleFilterTypes(e)} className={style.filter}>
            <option value='All'>---</option>
            <option value="normal">normal</option>
            <option value="fighting">fighting</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
            <option value="unknown">unknown</option>
            <option value="shadow">shadow</option>
        </select>
        </div>
        <div >
        <SearchBar/>
        </div>
        <div>
            <img className={style.gif} src="https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/lucario.gif"
            width="150px" height="300px"/>
        </div>
        </div>
        </div>
        <div className={style.totalImg}>
        <div className={style.columnsf}>
         <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png" alt="img not found"
            width="335px" height="208px" className={style.img}/>
        <Paginacion pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        paginado ={paginado}
        /> 
        </div> 
        <div className={style.columnsR}>
            {
            currentPokemons.length>0?
            currentPokemons.map((pok)=>{
                return (
                <div className={style.cardContainer} >
                <Card name={pok.name} Types={pok.Types} image={pok.img?pok.img:pok.image} id={pok.id} key={pok.id}/> 
                </div>
                )
            }):<div className={style.img2}>
            <img  src="https://media.tenor.com/74l5y1hUdtwAAAAj/pokemon.gif"
            width="250px" height="250px" />
            <p>Loading...</p>
           </div>
            }
        </div>
        </div>
        </div>

    )

}
