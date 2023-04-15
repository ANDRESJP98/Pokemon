const {getAllpokemons, createPokemon}=require('../controllers/pokemonsController');
const {Type}=require('../db');

const getPokemonsHandler =async (req,res)=>{
    const {name}=req.query;
    let pokemonsTotal=await getAllpokemons();
    if(name){
    let pokemonsName= await pokemonsTotal.filter(elem=>elem.name.toLowerCase().includes(name.toLowerCase()))
    pokemonsName.length?
    res.status(200).send(pokemonsName) :
    res.status(404).send('No existe el pokemon');
}else {
    res.status(200).send(pokemonsTotal)
}
}
const getPokemonsIdHandler = async (req,res)=>{
    const {id}=req.params;
    const pokemons= await getAllpokemons();
    if(id){
        const pokemonId= await pokemons.filter(elem=>elem.id==id)
        pokemonId.length?
        res.status(200).send(pokemonId) :
        res.status(400).send('No existe el pokemon');
    }
}
const createPokemonsHandler= async (req,res)=>{
    try {
        const {name, image, life, 
            attack, defense, speed, height, weight, created, type}=req.body;
        const newPokemon = await createPokemon(name, image, life, 
            attack, defense, speed, height, weight, created);
        const newGenre= await Type.findAll({
            where:{name:type}
        });
        newPokemon.addType(newGenre)
            res.status(201).send(newPokemon);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}
module.exports={getPokemonsHandler, getPokemonsIdHandler , 
    createPokemonsHandler}