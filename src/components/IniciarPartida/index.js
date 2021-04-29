import React, { useEffect, useState } from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';
import Partida from '../../components/Partida';
import PartidaFactory from '../../models/Partidas/PartidaFactory';

function IniciarPartida(props) {

    const [ tipo, setTipo ] = useState("");
    const [ custom, setCustom ] = useState(0);
    const [ partidaCustom, setPartidaCustom ] = useState(null);

    function criarPartidaCustom() {
        let custom = new PartidaFactory().createPartida("custom");
        setPartidaCustom(custom);
    }

    return (<>
        {!tipo && (<>
            <div className="d-flex flex-column m-5">
                <button onClick={() => setTipo("2P")} className="btn btn-success">2P</button>
                <hr />
                <button onClick={() => setTipo("4P")} className="btn btn-success">4P</button>
                <hr />
                <button onClick={() => setTipo("8P")} className="btn btn-success">8P</button>
                <hr />
                <button onClick={() => { setCustom(1) }, {criarPartidaCustom} } className="btn btn-success">Custom</button>
                {custom > 3 && (<>
                    Qtd Players. 
                    <select onChange={() => partidaCustom.pl}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </>)}
            </div>
        </>)}
        {tipo && (<>
            <Switch>
                <Partida partida={new PartidaFactory().createPartida(tipo)} />
            </Switch>
        </>)}
    </>)
}

export default IniciarPartida;