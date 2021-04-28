import React, { useEffect, useState } from 'react'
import Missao from '../../components/Missao';
import Jogada from '../../components/Jogada';
import PartidaFactory from '../../models/Partidas/PartidaFactory';

function Partida(props) {
    
    const [ partida, setPartida ] = useState(new PartidaFactory().createPartida("default"))
    const [ partidaAux, setPartidaAux ] = useState(new PartidaFactory().createPartida("default"))
    
    useEffect(() => {
        attPartida();
    }, setPartida )

    function interval() {
        setInterval(() => {
        }, 3000)
    }

    function attPartida() {
        setPartidaAux(partida);
        setPartida(partidaAux);
    }

    return (<>
        <div className="row"> 
            <div className="col-lg-9 d-flex flex-column mt-2">
                <Jogada 
                    partida={partida} 
                    setPartida={setPartida}
                />
            </div>
            <div className="col-lg-3 mt-2">
                <button className="btn btn-success mb-2" id="att-partida" onClick={attPartida}><i className="fa fa-spinner"></i></button>
                <Missao missao={partida.getTurno().getAtual().getMissao()} />
            </div>
    </div>
    </>)
}

export default Partida;