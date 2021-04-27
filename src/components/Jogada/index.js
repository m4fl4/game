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

    function missao() {
    }

    function opcoes() {
        let opcaoJogadaFactory = new OpcaoJogadaFactory();
        let dados = jogada.getDados();
        let opcoes = [];
        let aux = [];

        dados.map(d => {
            aux.push(d.getNumero());
        })

        aux.map(num => {
            if(num == 1) {
                let opcaoUm = opcaoJogadaFactory.createOpcao("1");
                opcaoUm.filtro(dados);
                opcoes.push(opcaoUm);
            } else if(num == 2) {
                let opcaoDois = opcaoJogadaFactory.createOpcao("2");
                opcaoDois.filtro(dados);
                opcoes.push(opcaoDois);
            } else if(num == 3) {
                let opcaoTres = opcaoJogadaFactory.createOpcao("3");
                opcaoTres.filtro(dados);
                opcoes.push(opcaoTres);
            } else if(num == 4) {
                let opcaoQuatro = opcaoJogadaFactory.createOpcao("4");
                opcaoQuatro.filtro(dados);
                opcoes.push(opcaoQuatro);
            } else if(num == 5) {
                let opcaoCinco = opcaoJogadaFactory.createOpcao("5");
                opcaoCinco.filtro(dados);
                opcoes.push(opcaoCinco);
            } else if(num == 6) {
                let opcaoSeis = opcaoJogadaFactory.createOpcao("6");
                opcaoSeis.filtro(dados);
                opcoes.push(opcaoSeis);
            }

        })
        
        setOpcoesSalvar(opcoes);
    }

    return (<>
        {!!statusJogada == 0 && ( <>
            <button
                onClick={jogar}
                className="btn btn-success mb-3 mr-5"
            >
                Jogar
            </button>
            {jogada.getDados().map(d => ( <>
            <div className="ml-2" onClick={() => salvarDado(d.getId())}>
                <Dado dado={d} />
            </div>
            </>))}
            <div className="alert alert-primary ml-3">
               Turno: { jogada.getTurno() }        
            </div>
        </>)}
        {!!statusJogada == 1 && ( <>
            <button
                onClick={opcoes}
                className="btn btn-danger mb-3 mr-5"
            >
                Finalizar
            </button>
            {!!opcoesSalvar.length && (<>
                {opcoesSalvar.map(op => (<>
                    <span>{op.getTipo()}</span>
                </>))}
            </>)}
            {jogada.getDados().map(d => ( <>
            <span className="ml-2 text-success">
                <Dado dado={d} />
            </span>
            </>))}
            <div className="alert alert-danger ml-3">
               Fim da jogada!       
            </div>        
        </>)}
    </>)
}

export default Jogada;