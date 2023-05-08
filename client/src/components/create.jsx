import React, {useState, useEffect} from "react";
import {getTypes, postPokemons} from '../actions/actions';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  style from "./create.module.css";

function validate(input){
    let errors = {};
  if (!input.name) {
    errors.name = "¡A name is required!";
  }
  if (!input.image) {
    errors.image = "¡An URL is required!";
  }if(input.type.length<2){
    errors.type="¡Minimun 2 types required!"
  }else errors.type=""
  return errors;
}
export default function CreatePokemon(){
    const dispatch=useDispatch()
    const history=useHistory()
    const types=useSelector((state)=>state.types)
    const [errors, setErrors]=useState({
        name:"", 
        image:"",
        type:[]
    })
    const [input, setInput]=useState({
        name:"", 
        image:"",
        life:"", 
        attack:"",
        defense:"",
        speed:"", 
        height:"", 
        weight:"", 
        type:[]
    })

    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))
    };
    const handleSelect=(e)=>{
            setInput({
                ...input, 
                type:[...input.type,e.target.value]
        })
    }
    const handleDelete=(elem)=>{
        setInput({
            ...input, 
            type:input.type.filter(type=>type!==elem)
    })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(postPokemons(input))
        alert("Pokemon created")
        setInput({
        name:"", 
        image:"",
        life:"", 
        attack:"",
        defense:"",
        speed:"", 
        height:"", 
        weight:"", 
        type:[],
        })
        history.push("/home")
    }
    useEffect(()=>{
        dispatch(getTypes())
    },[]);
    return (
        <div className={style.totalImg}>
            <div className={style.sameSpot}>
            <Link to='/home'><button className={style.button}>Back to home</button></Link>
            <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png" alt="img not found"
            width="335px" height="208px" className={style.img}/>
            <h1 className={style.text}>Create your pokemon</h1>
            <p className={style.text3}>Add the image, name and details about your pokemon</p>
            <form onSubmit={(e)=>handleSubmit(e)} >
            <div className={style.image}>
                <img className={style.imagePosition} src={input.image} alt=""
            width="400px" height="400px"/>
                <input placeholder="ImageUrl" className={style.input2} type="text"  value={input.image} name="image" onChange={(e)=>handleChange(e)} />
                </div>
                {errors.image && <p className={style.error1}>{errors.image}</p>}
                <div >
                <input placeholder="Name" className={style.input} type='text' value={input.name} name='name' onChange={(e)=>handleChange(e)}></input>
                </div>
                {errors.name &&(
                    <p className={style.error2}>{errors.name }</p>
                )}
                <div className={style.position} >
                <label className={style.text2}>Life</label>
                <input className={style.bar} type='range' min="1" max="255" value={input.life} name='life' onChange={(e)=>handleChange(e)}></input>
                <span>{input.life}</span>
                </div>
                <div className={style.position} >
                <label className={style.text2}>Attack</label>
                <input className={style.bar} type='range' min="1" max="200" value={input.attack} name='attack' onChange={(e)=>handleChange(e)}></input>
                <span>{input.attack}</span>
                </div>
                <div className={style.position} >
                <label className={style.text2}>Defense</label>
                <input className={style.bar} type='range'  min="1" max="250" value={input.defense} name='defense' onChange={(e)=>handleChange(e)}></input>
                <span>{input.defense}</span>
                </div>
                <div className={style.position} >
                <label className={style.text2}>Speed</label>
                <input className={style.bar} type='range'  min="1" max="200" value={input.speed} name='speed' onChange={(e)=>handleChange(e)}></input>
                <span>{input.speed}</span>
                </div>
                <div className={style.position} >
                <label className={style.text2}>Height</label>
                <input className={style.bar} type='range'  min="1" max="1000" value={input.height} name='height' onChange={(e)=>handleChange(e)}></input>
                <span>{input.height}</span>
                </div>
                <div className={style.position} >
                <label className={style.text2} >Weight</label>
                <input className={style.bar} type='range'  min="1" max="10000" value={input.weight} name='weight' onChange={(e)=>handleChange(e)}></input>
                <span>{input.weight}</span>
                </div>
                <div className={style.position} >
                <select onChange={(e)=>handleSelect(e)}> 
                {types.map((elem)=> {return <option value={elem.name}>{elem.name}</option>})}
                </select>
                </div>
                <div className={style.types}>
                {input.type.map(elem=>
                <div className={style.distance} >
                    <p onChange={(e)=>handleChange(e)}>{elem}</p>
                    <button className={style.buttonX} onClick={()=>handleDelete(elem)}>x</button>
                </div>)}
                </div>
                 {errors.type &&(
                    <p className={style.error3}>{errors.type}</p>
                )} 
                <button className={style.button2} type="submit">Create pokemon</button>
                
            </form>
            </div>
        </div>
    )
}