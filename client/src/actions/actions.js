import axios from 'axios';

export const getPokemons=()=>{
    return async function (dispatch){
        const json= await axios.get("http://localhost:3001/pokemons");
        return dispatch({type:"GET_POKEMONS", 
        payload:json.data});
    }
};
export const getNamePokemons=(name)=>{
    return async function (dispatch){
    try{
        const json= await axios.get("http://localhost:3001/pokemons?name=" + name);
        return dispatch({
        type:"GET_NAME_POKEMONS", 
        payload:json.data});
    }catch(error){
        console.log(error)
    }
}
};