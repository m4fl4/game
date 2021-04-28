import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Partida from '../components/Partida';
import Home from '../pages/Home';


function Routes() {
    return (
        <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/Partida/:tipo" exact component={Partida} />
            
        </Switch>
    );
}

export default Routes;