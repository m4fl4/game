import React from 'react'

function Missao(props) {
    
    return (<>
        <div className="row mb-3 w-100">
            <div className="col-lg-12 d-flex">
                <span className="center bg-warning text-lg">Missão</span>
            </div>
        </div>
        <div className="row text-white ">
            <div className="col-lg-6 bg-dark mb-1">
                <div className="center bg-secondary">1</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[0].getTotal()}</span>
            </div>
            <div className="col-lg-5 bg-dark ml-1">
                <div className="center bg-secondary">2</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[1].getTotal()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-6 bg-dark mb-1">
                <div className="center bg-secondary">3</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[2].getTotal()}</span>
            </div>
            <div className="col-lg-5 mb-1 bg-dark ml-1">
                <div className="center bg-secondary">4</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[3].getTotal()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-6 mb-1 bg-dark">
                <div className="center bg-secondary">5</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[4].getTotal()}</span>
            </div>
            <div className="col-lg-5 mb-1 bg-dark ml-1">
                <div className="center bg-secondary">6</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[5].getTotal()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-6 mb-1 bg-dark">
                <div className="center bg-secondary">Trinca</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[6].getTotal()}</span>
            </div>
            <div className="col-lg-5 mb-1 bg-dark  ml-1">
                <div className="center bg-secondary">Seguida</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[7].getTotal()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-6 mb-1 bg-dark ml-1">
                <div className="center bg-secondary">Quadra</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[8].getTotal()}</span>
            </div>
            <div className="col-lg-5 mb-1 bg-dark  ml-1">
                <div className="center bg-secondary">Full House</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[9].getTotal()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-11 bg-dark">
                <div className="center bg-secondary">General</div>
                <span className="center mt-1 text-lg">{props.missao.getOpcoes()[10].getTotal()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-11 bg-dark">
                <span>Pontos: {props.missao.getPontuacao()}</span>
            </div>
        </div>
    </>)
}

export default Missao;