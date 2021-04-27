import React from 'react'

function Missao(props) {
    
    return (<>
        <div className="row mb-3">
            <div className="col-lg-2">
                <span className="center bg-warning text-lg">Missão</span>
            </div>
        </div>
        <div className="row text-white ">
            <div className="col-lg-1 bg-dark">
                <div className="center bg-secondary">1</div>
                <span className="center mt-1 text-lg">{props.missao.getUm()}</span>
            </div>
            <div className="col-lg-1 bg-dark ml-1">
                <div className="center bg-secondary">2</div>
                <span className="center mt-1 text-lg">{props.missao.getDois()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-1 bg-dark">
                <div className="center bg-secondary">3</div>
                <span className="center mt-1 text-lg">{props.missao.getTreis()}</span>
            </div>
            <div className="col-lg-1 bg-dark ml-1">
                <div className="center bg-secondary">4</div>
                <span className="center mt-1 text-lg">{props.missao.getQuatro()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-1 bg-dark">
                <div className="center bg-secondary">5</div>
                <span className="center mt-1 text-lg">{props.missao.getCinco()}</span>
            </div>
            <div className="col-lg-1 bg-dark ml-1">
                <div className="center bg-secondary">6</div>
                <span className="center mt-1 text-lg">{props.missao.getSeis()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-1 bg-dark">
                <div className="center bg-secondary">Seguida</div>
                <span className="center mt-1 text-lg">{props.missao.getSeguida()}</span>
            </div>
            <div className="col-lg-1 bg-dark ml-1">
                <div className="center bg-secondary">Trinca</div>
                <span className="center mt-1 text-lg">{props.missao.getTrinca()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-1 bg-dark">
                <div className="center bg-secondary">Full House</div>
                <span className="center mt-1 text-lg">{props.missao.getFullHouse()}</span>
            </div>
            <div className="col-lg-1 bg-dark ml-1">
                <div className="center bg-secondary">Quadra</div>
                <span className="center mt-1 text-lg">{props.missao.getQuadra()}</span>
            </div>
        </div>
        <div className="row mt-3 text-white ">
            <div className="col-lg-2 bg-dark">
                <div className="center bg-secondary">General</div>
                <span className="center mt-1 text-lg">{props.missao.getGeneral()}</span>
            </div>
        </div>
    </>)
}

export default Missao;