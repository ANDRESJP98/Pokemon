const { Router } = require('express');
const {getPokemonsHandler, getPokemonsIdHandler, 
    createPokemonsHandler} = require('../handlers/pokemonsHandler')

const pokemonsRouter=Router();
const validate =(req,res,next)=>{
    const{name,image, type}=req.body;
if(!name)
res.status(400).json({error:"Missing name"})
if(!image)
res.status(400).json({error:"Missing image"})
if(type.length<2)
res.status(400).json({error:"Minimun 2 types required"})
next()
}
pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/:id', getPokemonsIdHandler);
pokemonsRouter.post('/', validate, createPokemonsHandler);

module.exports=pokemonsRouter;