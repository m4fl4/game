import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import Missao from '../../components/Missao';
import Jogada from '../../components/Jogada';
import PartidaFactory from '../../models/Partidas/PartidaFactory';

function Partida(props) {
    
    const [ partida, setPartida ] = useState(new PartidaFactory().createPartida(props.match.params.tipo))
    const [ aux, setAux ] = useState(new PartidaFactory().createPartida(props.match.params.tipo));
    const [ finalPartida, setFinalPartida ] = useState(0);
    
    useEffect(() => {
        attPartida();
    }, [] )

    function attPartida() {
        setInterval(() => {
            setAux(new PartidaFactory().createPartida(props.match.params.tipo));
            setAux(partida);
            setPartida(aux);    
            est();
        }, 1000)
    }

    function est() {
        let est = partida.estatistica();
        if(est[0] != null) {
            setFinalPartida(1);
        }
    }
    
    if(finalPartida == 1) {
        return ( 
            <Redirect to={ { pathname: `/FinalPartida/`, state: { from: props.location, partida: partida} } } />
        );
    }


    return (<>
        <div className="row"> 
            <div className="col-lg-9 d-flex flex-column mt-2">
                <button onClick={est}>est</button>
                <div className="d-flex flex-row">
                    <h1 className="mb-5">
                        Turno: <b>{partida.getTurno().getAtual().getCor()} </b>
                    </h1>
                    <h2 className="mt-1 ml-3">
                        [ {partida.getTurno().getTotal()[1]} /  
                        {partida.getTurno().getTotal()[0]} ]
                    </h2>
                </div>
                <div className="d-flex flex-row">
                    <h1 className="mb-5">
                        Placar: 
                    </h1>
                    {partida.getTurno().getPlayers().map(p => (<>
                        <h2 className="mt-1 ml-3">
                            [ {p.getCor()} : {p.getMissao().getPontuacao()} ]
                        </h2>
                    </>))}
                </div>
                <Jogada 
                    partida={partida} 
                    p={() => setPartida}
                />
            </div>
            {!!partida.getTurno().getAtual().getMissao() && (<>
                <div className="col-lg-3 mt-2">
                    
                    <Missao missao={partida.getTurno().getAtual().getMissao()} />
                </div>
            </>)}
        </div>
    </>)
}

export default Partida;