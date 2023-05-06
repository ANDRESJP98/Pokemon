const initialState={
    pokemons:[],
    allPokemons:[],
    types:[],
    detail:[]
};
const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case "GET_POKEMONS":
            return {...state, 
                pokemons:action.payload, 
                allPokemons:action.payload };
        case "GET_NAME_POKEMONS": 
        return{...state,
            pokemons:action.payload};
        case "GET_TYPES":
        return {...state,
        types:action.payload}
        case "POST_POKEMONS":
        return {
        ...state}
        case "ORDER_BY_NAME":
        const sortedArr=action.payload==="asc" ?
        state.pokemons.sort(function(a,b){
        if(a.name>b.name){return 1;
        }if(b.name>a.name){return -1;
        }return 0;}) :
        state.pokemons.sort(function(a,b){
        if(a.name>b.name){return -1;
        }if(b.name>a.name){return 1;
        }})
        return{...state,
        pokemons:sortedArr};
        case "ORDER_BY_ATTACK":
        const sortedArrA=action.payload==="asc attack" ?
        state.pokemons.sort(function(a,b){
        if(a.attack>b.attack){return 1;
        }if(b.attack>a.attack){return -1;
        }return 0;}) :
        state.pokemons.sort(function(a,b){
        if(a.attack>b.attack){return -1;
        }if(b.attack>a.attack){return 1;
        }})
        return{...state,
        pokemons:sortedArrA};
        case "FILTER_BY_TYPES":
        const allPokemons=state.allPokemons
        const statusFiltered=action.payload === 'All' ? allPokemons : allPokemons.filter(elem=>elem.Types.some(type => type.name === action.payload) );
        return {...state, 
        pokemons:statusFiltered };
        case "FILTER_CREATED":
        const allPokemonsc=state.allPokemons
        const createdFiltered=action.payload==='created' ? allPokemonsc.filter(elem=>elem.created) : allPokemonsc.filter(elem=>!elem.created);
        return {...state,
        pokemons: action.payload==='All' ? state.allPokemons :createdFiltered };
        case "GET_DETAILS":
        return {...state,
                detail:action.payload };
        default:
        return {...state};
    }
}
    
export default rootReducer