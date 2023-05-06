import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
export default function Card ({id, name, Types, image}){
    return (
       
        <div className={style.card} >
            <Link to={"/home/"+id}>
            <img src={image} alt="img not found"
            width="200px" height="200px"/>
            </Link>
            <div className={style.gap}>
            <h2 className={style.text}>{name.charAt(0).toUpperCase() + name.slice(1)} </h2>
            <h2 className={style.text1}>{Types.map(elem=>elem.name.charAt(0).toUpperCase() + elem.name.slice(1)).join(" ")}</h2>
            </div>

        </div>

    )

}
