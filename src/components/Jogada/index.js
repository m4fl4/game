import React, { useEffect, useState } from 'react'
import JogadaModel from '../../models/Jogada';
import Dado from '../../components/Dado';
import OpcaoJogadaFactory from '../../models/OpcoesJogada/OpcaoJogadaFactory';

function Jogada(props) {

    const [ jogada, setJogada ] = useState(new JogadaModel());
    const [ statusJogada, setStatusJogada ] = useState(0);
    const [ opcoesSalvar, setOpcoesSalvar ] = useState([]);

    function jogar() {
        let j = new JogadaModel();
        j.setDados(jogada.getDados());
        j.setTurno(jogada.getTurno());
        j.preencheDados();
        j.jogar();
        setJogada(j);
        if(j.getTurno() == 3) {
            setStatusJogada(1);
            opcoes();
        }
    }

    function salvarDado(id) {
        let j = new JogadaModel();
        j.setDados(jogada.getDados());
        j.setTurno(jogada.getTurno());
    
        j.getDados().map(d => {
            if(d.getId() == id) {
                if(d.getStatus() == 1) {
                    d.setStatus(0);    
                } else {
                    d.setStatus(1);
                }
            }
        })
        setJogada(j);
    }

    function missao(tipo,total) {
        if(tipo == "1") {
            if(props.missao.getUm() == 0) {
                props.missao.setUm(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "2") {
            if(props.missao.getDois() == 0) {
                props.missao.setDois(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "3") {
            if(props.missao.getTreis() == 0) {
                props.missao.setTreis(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "4") {
            if(props.missao.getQuatro() == 0) {
                props.missao.setQuatro(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "5") {
            if(props.missao.getCinco() == 0) {
                props.missao.setCinco(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "6") {
            if(props.missao.getSeis() == 0) {
                props.missao.setSeis(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "seguida") {
            if(props.missao.getSeguida() == 0) {
                props.missao.setSeguida(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "trinca") {
            if(props.missao.getTrinca() == 0) {
                props.missao.setTrinca(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "quadra") {
            if(props.missao.getQuadra() == 0) {
                props.missao.setQuadra(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "full-house") {
            if(props.missao.getFullHouse() == 0) {
                props.missao.setFullHouse(total);
                props.setMissao(props.missao);
            }
        } else if(tipo == "general") {
            if(props.missao.getGeneral() == 0) {
                props.missao.setGeneral(total);
                props.setMissao(props.missao);
            }
        }
        setStatusJogada(0);
        setJogada(new JogadaModel());
        setOpcoesSalvar([]);
    }

    function opcoes() {
        let opcaoJogadaFactory = new OpcaoJogadaFactory();
        let dados = jogada.getDados();
        let opcoes = [];
        let aux = [];
        
        dados.map(d => {
            aux.push(d.getNumero());
        })
        
        function controleOpcao(opcao,dados) {
            if(opcao.getControle() == 0) {
                opcao.filtro(dados);
                opcoes.push(opcao);
            }
        }
        
        let opcaoUm = opcaoJogadaFactory.createOpcao("1");
        let opcaoDois = opcaoJogadaFactory.createOpcao("2");
        let opcaoTres = opcaoJogadaFactory.createOpcao("3");
        let opcaoQuatro = opcaoJogadaFactory.createOpcao("4");
        let opcaoCinco = opcaoJogadaFactory.createOpcao("5");
        let opcaoSeis = opcaoJogadaFactory.createOpcao("6");
        let opcaoSeguida = opcaoJogadaFactory.createOpcao("seguida");
        let opcaoTrinca = opcaoJogadaFactory.createOpcao("trinca");
        let opcaoQuadra = opcaoJogadaFactory.createOpcao("quadra");
        let opcaoFullHouse = opcaoJogadaFactory.createOpcao("full-house");
        let opcaoGeneral = opcaoJogadaFactory.createOpcao("general");
       
        controleOpcao(opcaoUm,dados);
        controleOpcao(opcaoDois,dados);
        controleOpcao(opcaoTres,dados);
        controleOpcao(opcaoQuatro,dados);
        controleOpcao(opcaoCinco,dados);
        controleOpcao(opcaoSeis,dados);
        controleOpcao(opcaoSeguida, dados);
        controleOpcao(opcaoTrinca, dados);
        controleOpcao(opcaoQuadra, dados);
        controleOpcao(opcaoFullHouse, dados);
        controleOpcao(opcaoGeneral, dados);

        setOpcoesSalvar(opcoes);
    }

    return (<>
        {!!statusJogada == 0 && ( <>
            <button
                onClick={jogar}
                className="btn btn-success mb-3 w-25"
                >
                Jogar
            </button>
            <div className="d-flex flex-row mb-3">
                {jogada.getDados().map(d => ( <>
                    <div className="ml-2" onClick={() => salvarDado(d.getId())}>
                        <Dado dado={d} />
                    </div>
                </>))}
            </div>
            <div className="alert alert-primary w-25">
                Turno: { jogada.getTurno() }        
            </div>
        </>)}
        {!!statusJogada == 1 && ( <>
            <div className="d-flex flex-row mb-3">
                {jogada.getDados().map(d => ( <>
                    <span className="ml-2 text-success">
                        <Dado dado={d} />
                    </span>
                </>))}
            </div>
            <div className="alert alert-danger w-25">
                Fim da jogada!       
            </div>
            {!!opcoesSalvar.length && (<>
                <div className="card bg-gray-200 w-50">
                    <div className="card-body">
                        {opcoesSalvar.map(op => (<>
                            <div className="d-flex flex-column">
                                <span><b>{op.getTipo()}</b></span>
                                <span>TOTAL: {op.getTotal()}</span>
                                {props.missao.get}
                                <button onClick={() => missao(op.getTipo(),op.getTotal())}>a</button>
                            </div>
                            <div className="d-flex flex-row">
                                {op.getDados().map(d => (<>
                                    <div className="ml-1 text-success">
                                        <Dado dado={d} />
                                    </div>
                                </>))}
                            </div>
                            <hr />
                        </>))}
                    </div>
                </div>
            </>)}
        </>)}
    </>)
}

export default Jogada;