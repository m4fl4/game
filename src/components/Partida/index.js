import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import Missao from '../../components/Missao';
import Jogada from '../../components/Jogada';
import PartidaFactory from '../../models/Partidas/PartidaFactory';

function Partida(props) {
    
    let [ partida, setPartida ] = useState(props.partida)
    
    useEffect(() => {
        attPartida(partida);
    }, [partida] )
    
    function attPartida(partida) {
        const aux = new PartidaFactory().createPartida(props.partida.getTipo());
        setPartida(Object.assign(aux, partida));
    }

    if(partida.getTurno().verificaFinal() === 1) {
        return ( 
            <Redirect to={ { pathname: `/FinalPartida/`, state: { from: props.location, partida: partida} } } />
        );
    }

    return (<>
        <div className="row"> 
            <div className="col-lg-9 d-flex flex-column mt-2">
                <div className="d-flex flex-row mb-4">
                    <h1 className="mb-2">
                        Turno: <b>{partida.getTurno().getAtual().getCor()} </b>
                    </h1>
                    <h2 className="mt-1 ml-4">
                        {partida.getTurno().getTotal()[1]} 
                        /
                        {partida.getTurno().getTotal()[0]}
                    </h2>
                </div>
                <div className="d-flex flex-column mb-4" style={{maxWidth:700}}>
                    <h1 className="bg-dark text-white p-1">
                        Placar: 
                    </h1>
                    {partida.getTurno().getPlayers().map(p => (<>
                        <h2 className="bg-gray-200 p-1">
                            {p.getCor()} : {p.getMissao().getPontuacao()}
                        </h2>
                    </>))}
                </div>
                {partida.getTurno().verificaFinal() !== 1 && (<>
                    <Jogada 
                        partida={partida} 
                        setPartida={setPartida}
                    />
                </>)}
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