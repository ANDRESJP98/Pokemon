import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/landing';
import Home from './components/home';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
};
