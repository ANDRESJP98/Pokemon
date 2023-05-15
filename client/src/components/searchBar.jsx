import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemons} from '../actions/actions';



export default function SearchBar(){
    const dispatch=useDispatch();
    const [name, setName]=useState("")
    const [loading, setLoading] = useState(true);
    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)

    }
    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        dispatch(getNamePokemons(name))
        .then(() => setLoading(false));
    }
    return (
        <div >
            <input type="text" placeholder='Search...' onChange={(e)=>handleInputChange(e)}></input>
            <button  type="submit" onClick={(e)=>handleSubmit(e)} >Search</button>
        </div>
    )
}