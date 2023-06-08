const {Pokemon, Type}=require('../db');
const axios=require('axios');

const createPokemon = async (name, image, life, 
    attack, defense, speed, height, weight, created)=>
        await Pokemon.create({name, image, life, 
            attack, defense, speed, height, weight, created});
              
const getAllpokemons = async ()=>{
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=500');
        const pokemons = response.data.results;
        const pokemonData = await Promise.all(pokemons.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          const image = res.data.sprites.other.dream_world.front_default ? 
                res.data.sprites.other.dream_world.front_default :
                (res.data.sprites.other['official-artwork'].front_default?
                res.data.sprites.other['official-artwork'].front_default:
                res.data.sprites.front_default);
          return {
            id: res.data.id,
            name: res.data.name,
            image,
            life: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed:res.data.stats[5].base_stat,
            height:res.data.height, 
            weight:res.data.weight, 
            Types:res.data.types.map(elem=>{return {name:elem.type.name}})
          }
        }))
     
    
    const dbPokemons= await Pokemon.findAll({
        include:{
            model:Type,
            attributes:['name'],
            through:{
                attributes:[],
            }
            }
        });
     
 return [...dbPokemons,...pokemonData];
    }catch(error){
        console.log(error)
    }
}



module.exports ={ getAllpokemons , createPokemon };