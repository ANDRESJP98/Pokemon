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
        const json= await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        return dispatch({
        type:"GET_NAME_POKEMONS", 
        payload:json.data});
}
};
export const getTypes=()=>{
    return async function (dispatch){
        var json= await axios.get("http://localhost:3001/types");
        return dispatch({
        type:"GET_TYPES", 
        payload:json.data});
    }
}
export const postPokemons=(payload)=>{
    return async function (dispatch){
        var json= await axios.post("http://localhost:3001/pokemons", payload);
        console.log(json)
        return json
    }
};
export const orderByName=(payload)=>{
    return {
        type:"ORDER_BY_NAME",
        payload
    }
};
export const orderByAttack=(payload)=>{
    return {
        type:"ORDER_BY_ATTACK",
        payload
    }
};
export const orderByWeight=(payload)=>{
    return {
        type:"ORDER_BY_WEIGHT",
        payload
    }
};
export const orderByHeight=(payload)=>{
    return {
        type:"ORDER_BY_HEIGHT",
        payload
    }
};
export const orderBySpeed=(payload)=>{
    return {
        type:"ORDER_BY_SPEED",
        payload
    }
};
export const orderByLife=(payload)=>{
    return {
        type:"ORDER_BY_LIFE",
        payload
    }
};
export const orderByDefense=(payload)=>{
    return {
        type:"ORDER_BY_DEFENSE",
        payload
    }
};
export const filterPokemonsByTypes=(payload)=>{
return {
    type:"FILTER_BY_TYPES",
    payload
}
};
export const filterCreated=(payload)=>{
    return {
        type:"FILTER_CREATED",
        payload
    }
    };

export const getDetail=(id)=>{
    return async function (dispatch){
            var json= await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({
                type:"GET_DETAILS",
                payload:json.data
            })
    }
}