const axios=require('axios');
const {Type}=require('../db')

const getTypesApi= async ()=>{

        const infoApi =await axios.get("https://pokeapi.co/api/v2/type");
        const allTypesApi=infoApi.data.results.map(elem=>{
           return { 
            name:elem.name
           }
        })

         allTypesApi.forEach(elem=>{
            Type.findOrCreate({
                where:{name:elem.name}
            })})

            const allTypes=await Type.findAll();
            return allTypes
    }
    module.exports = {getTypesApi};