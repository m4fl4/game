import React, { useEffect, useState } from 'react'

function FinalPartida(props) {

    const [ partida, setPartida ] = useState(props.location.state.partida);

    return (<>
        <div className="row mt-5">
            <div className="col-lg-12 center">
                <h1>A partida chegou ao fim!</h1>
                <h2 className="mt-5">Player Vencedor: <b>{partida.estatistica()[1].getCor()}</b></h2>
            </div>
        </div>
    </>)
}

export default FinalPartida;