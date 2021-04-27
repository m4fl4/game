import React, { useEffect, useState } from 'react'
import Missao from '../../components/Missao';
import Jogada from '../../components/Jogada';
import MissaoModel from '../../models/Missao';

function Home(props) {
    
    const [ missao, setMissao ] = useState(new MissaoModel());

    useEffect(() => {
    }, intervaloAtt() )

    function intervaloAtt() {
        setInterval(() => { document.getElementById('att-missao').click() }, 3000)
    }

    function attMissao() {
        let m = new MissaoModel();
        m.setUm(missao.getUm());
        m.setDois(missao.getDois());
        m.setTreis(missao.getTreis());
        m.setQuatro(missao.getQuatro());
        m.setCinco(missao.getCinco());
        m.setSeis(missao.getSeis());
        m.setSeguida(missao.getSeguida());
        m.setTrinca(missao.getTrinca());
        m.setQuadra(missao.getQuadra());
        m.setFullHouse(missao.getFullHouse());
        m.setGeneral(missao.getGeneral());
        setMissao(m);
    }

    return (<>
        <div className="row"> 
            <div className="col-lg-9 d-flex flex-column mt-2">
                <Jogada missao={missao} setMissao={setMissao} />
            </div>
            <div className="col-lg-3 mt-2">
                <button className="btn btn-success mb-2" id="att-missao" onClick={attMissao}><i className="fa fa-spinner"></i></button>
                <Missao missao={missao} />
            </div>
    </div>
    </>)
}

export default Home;