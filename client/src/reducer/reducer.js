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
        case "ORDER_BY_WEIGHT":
        const sortedArrB=action.payload==="asc weight" ?
        state.pokemons.sort(function(a,b){
        if(a.weight>b.weight){return 1;
        }if(b.weight>a.weight){return -1;
        }return 0;}) :
        state.pokemons.sort(function(a,b){
        if(a.weight>b.weight){return -1;
        }if(b.weight>a.weight){return 1;
        }})
        return{...state,
        pokemons:sortedArrB};
        case "ORDER_BY_HEIGHT":
        const sortedArrC=action.payload==="asc height" ?
        state.pokemons.sort(function(a,b){
        if(a.height>b.height){return 1;
        }if(b.height>a.height){return -1;
        }return 0;}) :
        state.pokemons.sort(function(a,b){
        if(a.height>b.height){return -1;
        }if(b.height>a.height){return 1;
        }})
        return{...state,
        pokemons:sortedArrC};
        case "ORDER_BY_SPEED":
        const sortedArrD=action.payload==="asc speed" ?
        state.pokemons.sort(function(a,b){
        if(a.speed>b.speed){return 1;
        }if(b.speed>a.speed){return -1;
        }return 0;}) :
        state.pokemons.sort(function(a,b){
        if(a.speed>b.speed){return -1;
        }if(b.speed>a.speed){return 1;
        }})
        return{...state,
        pokemons:sortedArrD};
        case "ORDER_BY_LIFE":
        const sortedArrE=action.payload==="asc life" ?
        state.pokemons.sort(function(a,b){
        if(a.life>b.life){return 1;
        }if(b.life>a.life){return -1;
        }return 0;}) :
        state.pokemons.sort(function(a,b){
        if(a.life>b.life){return -1;
        }if(b.life>a.life){return 1;
        }})
        return{...state,
        pokemons:sortedArrE};
        case "ORDER_BY_DEFENSE":
        const sortedArrF=action.payload==="asc defense" ?
        state.pokemons.sort(function(a,b){
        if(a.defense>b.defense){return 1;
        }if(b.defense>a.defense){return -1;
        }return 0;}) :
        state.pokemons.sort(function(a,b){
        if(a.defense>b.defense){return -1;
        }if(b.defense>a.defense){return 1;
        }})
        return{...state,
        pokemons:sortedArrF};
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