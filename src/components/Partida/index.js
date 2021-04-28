import React, { useEffect, useState } from 'react'
import Missao from '../../components/Missao';
import Jogada from '../../components/Jogada';
import PartidaFactory from '../../models/Partidas/PartidaFactory';

function Partida(props) {
    
    const [ partida, setPartida ] = useState(new PartidaFactory().createPartida("default"))
    const [ aux, setAux ] = useState(new PartidaFactory().createPartida("default"));
    
    useEffect(() => {
        attPartida();
    }, [] )

    function attPartida() {
        setInterval(() => {
            setAux(new PartidaFactory().createPartida("default"));
            setAux(partida);
            setPartida(aux);    
        }, 3000)
    }

    function mudaTurno() {
        alert('a');
        partida.getPlayers().map(p => {
            if(p.getId() == partida.getTurno().getAtual().getId())
            {
                p = partida.getTurno().getAtual();
            }
        })
    }

    return (<>
        <div className="row"> 
            <div className="col-lg-9 d-flex flex-column mt-2">
                {!!partida && (<>
                    <Jogada 
                        partida={partida} 
                        p={() => setPartida}
                    />
                </>)}
            </div>
            {!!partida.getTurno().getAtual().getMissao() && (<>
                <div className="col-lg-3 mt-2">
                    <Missao missao={partida.getTurno().getAtual().getMissao()} />
                </div>
            </>)}
            <button onClick={mudaTurno}>muda turno</button>
    </div>
    </>)
}

export default Partida;