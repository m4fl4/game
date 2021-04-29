import React from 'react'
import IniciarPartida from '../../components/IniciarPartida';
import { Redirect } from 'react-router-dom';

function Home(props) {
    
    return (<>
        <Redirect to={'/IniciarPartida'} />
    </>)
}

export default Home;