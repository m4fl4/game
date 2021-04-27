import React from 'react'
import './index.css';

function Dado(props) {

    return (<>
        <div className="card dado d-flex flex-column">
            <div className="card-body ">
                {props.dado.getStatus() == 1 && (
                    <span className="mb-3 text-success">{props.dado.getNumero()}</span>
                )}
                {props.dado.getStatus() == 0 && (
                    <span className="mb-3">{props.dado.getNumero()}</span>
                )}
            </div>
        </div>
    </>)
}

export default Dado;