import React from "react";
import {Link} from 'react-router-dom';
import style from './landing.module.css'
export default function Landing(){
    return (
        <div className={style.image}>
            <h1 className={style.text}>START</h1>
            <Link to='/home'> 
            <button className={style.button}></button>
            </Link>
       
        </div>
    )

}