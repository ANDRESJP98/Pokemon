const {getTypesApi}=require('../controllers/typesController')
const getTypesHandler = async(req,res)=>{
   
    const results =  await getTypesApi();
    res.status(200).send(results)
}
module.exports = {getTypesHandler};