import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      
      <Navigation/>

      <Switch>

        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/register" >
          <Register/>
        </Route>
        <Route path="/login" >
          <Login/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
