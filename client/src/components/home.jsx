import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, orderByWeight,orderByHeight, orderBySpeed, orderByLife, orderByDefense, orderByName, orderByAttack, filterPokemonsByTypes, filterCreated } from "../actions/actions";
import Card from "./Card";
import Paginacion from "./paginado";
import { Link } from "react-router-dom";
import { getNamePokemons } from "../actions/actions";
import style from './home.module.css'

export default function Home(){
    const dispatch =useDispatch();
    const allPokemons = useSelector(state=>state.pokemons)
    const [orden,setOrden]=useState('')
    const [currentPage, setCurrentPage]=useState(1)
    const [pokemonsPerPage, setpokemonsPerPage]=useState(12)
    const [loading, setLoading] = useState(true);
    const indexOfLastPokemon=currentPage * pokemonsPerPage
    const indexOfFirstPokemon=indexOfLastPokemon - pokemonsPerPage
    const currentPokemons= allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const [name, setName]=useState("")
    const [searchError, setSearchError] = useState(false); 
    const [selectedSort, setSelectedSort] = useState(""); // Estado del filtro de ordenamiento
    const [selectedFilterType, setSelectedFilterType] = useState("All"); // Estado del filtro de tipos
    const [selectedFilterCreated, setSelectedFilterCreated] = useState("All"); // Estado del filtro de creación
    const paginado =(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    useEffect(()=>{
        setLoading(true);
        dispatch(getPokemons())
        .then(() => setLoading(false));
    },[dispatch])

    const handleClick =(e)=>{
        e.preventDefault();
        setLoading(true);
        dispatch(getPokemons())
        .then(() => {setLoading(false)
        setOrden(""); 
      setCurrentPage(1); 
      setName(""); 
      setSearchError(false); 
      setSelectedSort(""); 
      setSelectedFilterType("All"); 
      setSelectedFilterCreated("All"); 
    });
}
    const handleSort =(e)=>{
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setSelectedSort(e.target.value);
    };
    const handleSortAttack =(e)=>{
        e.preventDefault();
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1);
        setSelectedSort(e.target.value);
    };
    const handleSortDefense =(e)=>{
        e.preventDefault();
        dispatch(orderByDefense(e.target.value))
        setCurrentPage(1);
        setSelectedSort(e.target.value);
    };
    const handleSortLife =(e)=>{
        e.preventDefault();
        dispatch(orderByLife(e.target.value))
        setCurrentPage(1);
        setSelectedSort(e.target.value);
    };
    const handleSortWeight =(e)=>{
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        setCurrentPage(1);
        setSelectedSort(e.target.value);
    };
    const handleSortHeight =(e)=>{
        e.preventDefault();
        dispatch(orderByHeight(e.target.value))
        setCurrentPage(1);
        setSelectedSort(e.target.value);
    };
    const handleSortSpeed =(e)=>{
        e.preventDefault();
        dispatch(orderBySpeed(e.target.value))
        setCurrentPage(1);
        setSelectedSort(e.target.value);
    };
    const handleFilterTypes=(e)=>{
        e.preventDefault();
        dispatch(filterPokemonsByTypes(e.target.value))
        setSelectedFilterType(e.target.value);
    };
    const handleFilterCreated=(e)=>{
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
        setSelectedFilterCreated(e.target.value);
    };    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)

    }
    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        dispatch(getNamePokemons(name))
        .then(() => {setLoading(false);
        setSearchError(false) // Si la búsqueda tiene éxito, se restablece el estado de error
        })
      .catch(() => {
        setLoading(false);
        setSearchError(true); // Si ocurre un error en la búsqueda, se establece el estado de error a true
      });
    }
    
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
        <div >
        <input value={name} type="text" placeholder='Search...' onChange={(e)=>handleInputChange(e)}></input>
            <button  type="submit" onClick={(e)=>handleSubmit(e)} >Search</button>
        </div>
        <div >
        <select value={selectedSort} onChange={e=>handleSort(e)} className={style.order}>
            <option>---</option>
            <option value="asc" >A-Z</option>
            <option value="desc">Z-A</option>
        </select>
        <select  value={selectedSort} onChange={e=>handleSortLife(e)} className={style.order}>
            <option>---</option>
            <option value="asc life" >-life</option>
            <option value="desc life">+life</option>
        </select>
        </div>
        <div>
        <select  value={selectedSort} onChange={e=>handleSortAttack(e)} className={style.order}>
            <option>---</option>
            <option value="asc attack">-Attack</option>
            <option value="desc attack">+ Attack</option>
        </select>
        <select  value={selectedSort} onChange={e=>handleSortDefense(e)} className={style.order}>
            <option>---</option>
            <option value="asc defense">-Defense</option>
            <option value="desc defense">+ Defense</option>
        </select>
        </div>
        <div>
        <select  value={selectedSort} onChange={e=>handleSortWeight(e)} className={style.order}>
            <option>---</option>
            <option value="asc weight">-Weight</option>
            <option value="desc weight">+ weight</option>
        </select>
        <select  value={selectedSort} onChange={e=>handleSortHeight(e)} className={style.order}>
            <option>---</option>
            <option value="asc height">-height</option>
            <option value="desc height">+ height</option>
        </select>
        </div>
        <div >
        <select  value={selectedFilterCreated} onChange={e=>handleFilterCreated(e)} className={style.filter}>
            <option value='All'>All</option>
            <option value="created">Created</option>
            <option value="api">From Api</option>
        </select>
        <select value={selectedFilterType} onChange={e=>handleFilterTypes(e)} className={style.filter}>
            <option value='All'>All</option>
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
        <div>
        <select value={selectedSort} onChange={e=>handleSortSpeed(e)} className={style.order}>
            <option>---</option>
            <option value="asc speed">-Speed</option>
            <option value="desc speed">+ Speed</option>
        </select>
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
        currentPage={currentPage}
        /> 
        </div> 
        <div className={style.columnsR}>
            {
                 loading ?(
                <div className={style.img2}>
                <img  src="https://media.tenor.com/74l5y1hUdtwAAAAj/pokemon.gif"
                width="250px" height="250px" />
                <p>Loading...</p>
               </div>
                 ): searchError ? (
                    <div>
                         <img className={style.img3} src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/6420b-pikachu-sentado-png.png?resize=800%2C800&ssl=1"
                width="150px" height="150px" />
                <div className={style.errorMsg}>
                    <h1>Error 404</h1>
                    <h5>The pokemon does not exist</h5></div>
                    </div>
                 ):(
            currentPokemons.map((pok)=>{
                return (
                <div className={style.cardContainer} >
                <Card name={pok.name} Types={pok.Types} image={pok.img?pok.img:pok.image} id={pok.id} key={pok.id}/> 
                </div>
                )
            }))
            }
        </div>
        </div>
        </div>

    )

}
