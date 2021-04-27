import Dado from '../models/Dado';

class Jogada {

    dados;
    turno;

    constructor() {
        this.dados = [];
        this.turno = 0;
    }

    setDados(dados) {
        this.dados = dados;
    }
    getDados() {
        return this.dados;
    }

    setTurno(turno) {
        this.turno = turno;
    }
    getTurno() {
        return this.turno;
    }

    jogar() {
        if(this.turno >= 3) {
            return null;
        }
        this.dados.map(j => {
            if(j.getStatus() == 0) {
                do {
                    j.jogarDado();
                } while(j.getNumero() <= 0);
            }
        })
        this.turno = this.turno + 1;
    }

    preencheDados() {
        if(this.turno == 0) {
            for(let i=0; i<5; i++) {
                let d = new Dado();
                d.setId(i+1);
                d.setStatus(0);
                this.dados.push(d);
            }
        }
    }
}

export default Jogada;