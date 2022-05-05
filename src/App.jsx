
import './App.css';

// import './pages/Home'




import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';


import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';




const App=() =>{
  return (

    
    <Router>
  
    
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        
        <Route path="/CreateAccount" exact>
          <CreateAccount/>
        </Route>
        <Route path="/Login" exact>
          <Login/>
        </Route>
        
        <Route path="/Product" exact>
          <Product/>
        </Route>
        
        <Redirect to="/" />
      </Switch>
    
   </Router>
    
   
  );
}

export default App;
