import React from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"
import Calculator from "./components/Calculator/Calculator"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const App = ()=>{
    return(
       <Router> 
            <div>
            <Switch>
             <Route path="/" exact component={Login}></Route>
             <Route path="/home" component={Home}></Route>
             <Route path="/calculator" component={Calculator}></Route>
            </Switch>
            </div>
        </Router>
    )
}


export default App;