import Player from '../Player';
import Turno from '../Turno';

class Partida4P {
    id;
    tipo;
    players;
    turno;

    constructor() {
        this.tipo = "4P";
        this.players = [new Player(), new Player(), new Player(), new Player()];
        this.players[0].setCor("Azul");
        this.players[1].setCor("Vermelho");
        this.players[2].setCor("Preto");
        this.players[3].setCor("Verde");
        this.turno = new Turno();
        this.turno.setPlayers(this.players);
        this.turno.inicioRandom(this.players);
        this.turno.total[0] = 42;
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

    estatistica() {

        this.setPlayers(this.getTurno().getPlayers());
        
        let playersOrdenados = this.bubbleSort(this.getPlayers());
        
        let est = [null,null];

        if(this.getTurno().getTotal()[0] == this.getTurno().getTotal()[1]) {
            est[0] = 1;
        }

        est[1] = playersOrdenados[playersOrdenados.length-1]

        return est;
    }
}

export default Partida4P;