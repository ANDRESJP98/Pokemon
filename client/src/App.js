
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './components/landing';
import Home from './components/home';
import DetailPokemon from './components/detail';
import CreatePokemon from './components/create';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route exact path='/' component={Landing}/>
        <Route path='/home' component={Home}/>
        <Route path='/home/:id' component={DetailPokemon}/>
        <Route path='/pokemon' component={CreatePokemon}/>
    </div>
    </BrowserRouter>
  );
};
