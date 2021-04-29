import Player from '../Player';
import Turno from '../Turno';

class Partida2P {
    id;
    tipo;
    players;
    turno;

    constructor() {
        this.tipo = "2P";
        this.setPlayers([new Player(), new Player()]);
        this.players[0].setCor("Azul");
        this.players[1].setCor("Vermelho");
        this.setTurno( new Turno() );
        this.getTurno().setPlayers(this.players);
        this.getTurno().inicioRandom(this.players);
        this.getTurno().geraTurnos();
    }

    setId(id) {
        this.id = id;
    }
    getId() { 
        return this.id;
    }

    getTipo() {
        return this.tipo;
    }

    setPlayers(players) {
        this.players = players;
    }
    getPlayers() {
        return this.players;
    }

    setTurno(turno) {
        this.turno = turno;
    }
    getTurno() {
        return this.turno;
    }

    bubbleSort(array) {
        let len = array.length;
        for(let i=0; i<len; i++) {
            for(let j=0; j<len-1; j++) {
                let valor1 = array[j].getMissao().getPontuacao();
                let valor2 = array[j+1].getMissao().getPontuacao();
                if(valor1 > valor2) {
                    let aux = array[j];
                    array[j] = array[j+1];
                    array[j+1] = aux;
                }
            }   
        }
        return array;
    }

    vencedor() {
        this.setPlayers(this.getTurno().getPlayers());
        let pontPlayer1 = this.players[0].getMissao().getPontuacao();
        let pontPlayer2 = this.players[1].getMissao().getPontuacao();
        let vencedor = null;
        if(pontPlayer1 > pontPlayer2) {
            vencedor = this.players[0];
        } else if(pontPlayer2 > pontPlayer1) {
            vencedor = this.players[1];
        }
        return vencedor;
    } 
}

export default Partida2P;