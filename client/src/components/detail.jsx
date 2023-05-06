import React, { useEffect} from "react";
import {getDetail} from '../actions/actions';
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./detail.module.css"

export default function DetailPokemon(props){

const dispatch=useDispatch();
useEffect(()=>{
dispatch(getDetail(props.match.params.id));
},[dispatch])
const myPokemon=useSelector((state)=>state.detail)
return (
    <div className={style.sameSpot}>
    <div className={style.detail}>
        
        <div><Link to="/home"><button className={style.button1}>Back to home</button></Link></div>
        {
            myPokemon.length>0 ?
            <div className={style.position}>
                <div className={style.text}>
                <h1>{myPokemon[0].name.charAt(0).toUpperCase() + myPokemon[0].name.slice(1)}</h1>
                <img alt='' width='300px' height="300px" src={myPokemon[0].img? myPokemon[0].img: myPokemon[0].image} />
                </div>
                <div>
                <div >
                <label className={style.text2}>Life</label><input className={style.range} type="range" min="1" max="250" value={myPokemon[0].life}/><span className={style.text2}>{myPokemon[0].life}</span>
                </div>
                <div>
                <label className={style.text2}>Attack</label><input className={style.range} type="range" min="1" max="250" value={myPokemon[0].attack}/><span className={style.text2}>{myPokemon[0].attack}</span>
                </div>
                <div>
                <label className={style.text2}>Defense</label><input className={style.range} type="range" min="1" max="250" value={myPokemon[0].defense}/><span className={style.text2}>{myPokemon[0].defense}</span>
                </div>
                <div>
                <label className={style.text2}>Speed</label><input className={style.range} type="range" min="1" max="250" value={myPokemon[0].speed}/><span className={style.text2}>{myPokemon[0].speed}</span>
                </div>
                <div>
                <label className={style.text2}>Height</label><input className={style.range} type="range" min="1" max="250" value={myPokemon[0].height}/><span className={style.text2}>{myPokemon[0].height}</span>
                </div>
                <div> 
                <label className={style.text2}>Weight</label><input className={style.range} type="range" min="1" max="1500" value={myPokemon[0].weight}/><span className={style.text2}>{myPokemon[0].weight}</span>
                </div>
                <div className={style.text1}> 
                    <h2>{myPokemon[0].Types.map(elem=>elem.name.charAt(0).toUpperCase() + elem.name.slice(1)).join(" ")}</h2> 
                </div>
                </div>              
            </div>:<div className={style.img2}>
            <img  src="https://media.tenor.com/74l5y1hUdtwAAAAj/pokemon.gif"
            width="250px" height="250px" />
            <p>Loading...</p>
           </div>
        }
        </div>
    </div>
)
}
