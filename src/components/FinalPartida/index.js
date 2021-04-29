import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Missao from '../../components/Missao';

function FinalPartida(props) {
    
    if(!props.location.state) {
        return ( 
            <Redirect to={ { pathname: `/` } } />
            );
    }

    return (<>
        <div className="row m-3 d-flex flex-column mt-5">
            <div className="col-lg-12 center">
                <Link to={'/'}></Link>
                <h1>A partida chegou ao fim!</h1>
                <h2 className="mt-5">
                    Player Vencedor: 
                    <b className="ml-3">{props.location.state.partida.vencedor().getCor()}</b>
                    <i className="fas fa-crown text-warning ml-3"></i>
                </h2>
            </div>
            <div className="col-lg-12 d-flex flex-row mb-5 mt-5">
                {props.location.state.partida.getPlayers().map(p => (<>
                    <div className="mt-5 mr-5 w-100">
                        <h3 className="text-center">{p.getCor()}</h3>
                        <Missao missao={p.getMissao()} />
                    </div>
                </>))}
            </div>
        </div>
    </>)
}

export default FinalPartida;