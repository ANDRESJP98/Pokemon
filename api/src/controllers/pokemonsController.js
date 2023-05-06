const {Pokemon, Type}=require('../db');
const axios=require('axios');

const createPokemon = async (name, image, life, 
    attack, defense, speed, height, weight, created)=>
        await Pokemon.create({name, image, life, 
            attack, defense, speed, height, weight, created});
              
const getAllpokemons = async ()=>{
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemons = response.data.results;
        const pokemonData = await Promise.all(pokemons.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return {
            id: res.data.id,
            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
            life: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed:res.data.stats[5].base_stat,
            height:res.data.height, 
            weight:res.data.weight, 
            Types:res.data.types.map(elem=>{return {name:elem.type.name}})
          }
        }))
        const response2 = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
        const pokemons2 = response2.data.results;
        const pokemonData2 = await Promise.all(pokemons2.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return {
            id: res.data.id,
            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
            life: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed:res.data.stats[5].base_stat,
            height:res.data.height, 
            weight:res.data.weight, 
            Types:res.data.types.map(elem=>{return {name:elem.type.name}})
          }
        }))
        const response3 = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=40&limit=20');
        const pokemons3 = response3.data.results;
        const pokemonData3 = await Promise.all(pokemons3.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return {
            id: res.data.id,
            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
            life: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed:res.data.stats[5].base_stat,
            height:res.data.height, 
            weight:res.data.weight, 
            Types:res.data.types.map(elem=>{return {name:elem.type.name}})
          }
        }))
        const response4 = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=60&limit=20');
        const pokemons4 = response4.data.results;
        const pokemonData4 = await Promise.all(pokemons4.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return {
            id: res.data.id,
            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
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
     
 return [...dbPokemons,...pokemonData,...pokemonData2,...pokemonData3,...pokemonData4];
    }catch(error){
        console.log(error)
    }
}



module.exports ={ getAllpokemons , createPokemon };