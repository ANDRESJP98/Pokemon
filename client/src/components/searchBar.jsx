import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemons} from '../actions/actions';



export default function SearchBar(){
    const dispatch=useDispatch();
    const [name, setName]=useState("")
    const [error, setError] = useState(false);
    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        setError(false);
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name)).then((response) => {
            if (response === undefined || response.length === 0) {
              setError(true);
            }
          });
    }
    return (
        <div >
            <input type="text" placeholder='Search...' onChange={(e)=>handleInputChange(e)}></input>
            <button  type="submit" onClick={(e)=>handleSubmit(e)} >Search</button>
            {error && <p>Could not find a Pokémon whit that name nombre.</p>}
        </div>
    )
}