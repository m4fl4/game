import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FinalPartida from '../components/FinalPartida';
import IniciarPartida from '../components/IniciarPartida';
import Home from '../pages/Home';

function Routes() {
    return (
        <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/IniciarPartida/" exact component={IniciarPartida} />
            <Route path="/FinalPartida/" exact component={FinalPartida} />
            
        </Switch>
    );
}

export default Routes;