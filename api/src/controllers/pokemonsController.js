const {Pokemon, Type}=require('../db');
const axios=require('axios');

const createPokemon = async (name, image, life, 
    attack, defense, speed, height, weight, created)=>
        await Pokemon.create({name, image, life, 
            attack, defense, speed, height, weight, created});

const getAllpokemons = async ()=>{
    let id=1
    const infoApi=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemonsApi=[infoApi.data];
    const pokemonsObj=pokemonsApi.map(elem=>{
        return {
            id:id,
            name:elem.name,
            life:elem.stats[0].base_stat,
            attack:elem.stats[1].base_stat,
            defense:elem.stats[2].base_stat,
            speed:elem.stats[5].base_stat,
            height:elem.height,
            weight:elem.weight,
            types:elem.types.map(elem=>{
                return {
                    type:elem.type.name
                }
            })
        }
    })
   
    const dbVideogames= await Pokemon.findAll({
        include:{
            model:Type,
            attributes:['name'],
            through:{
                attributes:[],
            }
            }
        });
     
    return [...pokemonsObj,...dbVideogames];
}


module.exports ={ getAllpokemons , createPokemon };