import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Partida from '../components/Partida';
import FinalPartida from '../components/FinalPartida';
import Home from '../pages/Home';


function Routes() {
    return (
        <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/Partida/:tipo" exact component={Partida} />
            <Route path="/FinalPartida/" exact component={FinalPartida} />
            
        </Switch>
    );
}

export default Routes;