import React, { useEffect, useState } from 'react'
import Missao from '../../components/Missao';
import Jogada from '../../components/Jogada';
import MissaoModel from '../../models/Missao';

function Home(props) {
    
    const [ missao, setMissao ] = useState(new MissaoModel());
    
    useEffect(() => {
        geraMissao();
    }, [] )
    
    function geraMissao() {
        let m = new MissaoModel();
        /*m.setUm(4);
        m.setDois(6);
        m.setTreis(9);
        m.setQuatro(10);
        m.setCinco(17);
        m.setSeis(12);
        m.setSeguida(0);
        m.setTrinca(1);
        m.setQuadra(0);
        m.setFlush(1);
        m.setGeneral(0);*/

        setMissao(m);
    }

    return (<>
        <div className="col-xl-12 mt-3 mb-5 d-flex flex-row">
            <Jogada missao={missao} />
        </div>
        <div className="col-xl-12 mt-5">
            <Missao missao={missao} />
        </div>
    </>)
}

export default Home;