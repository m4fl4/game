class Turno {
    atual;
    total;
    players;

    constructor() {
        this.players = [];
        this.atual = null;
        this.total = [0,0];
    }

    setAtual(atual) {
        this.atual = atual;
    }
    getAtual() {
        return this.atual;
    }

    setTotal(total) {
        this.total = total;
    }
    getTotal() {
        return this.total;
    }

    setPlayers(players) {
        this.players = players;
    }
    getPlayers() {
        return this.players;
    }

    inicioRandom(players) {
        let random = Math.round(Math.random() * players.length);
        this.atual = players[random];
    }

    mudaTurno() {
        if(this.total[1] < this.total[0] ) {
            let len = this.players.length;
            for(let i=0; i<len; i++) {
                if(this.players[i].getId() == this.atual.getId()) {
                    if(i+1 < len) {
                        this.atual = this.players[i+1];
                    } else {
                        this.atual = this.players[0];
                    }
                    break;
                }
            }
            this.total[1]++;
        }
    }
}

export default Turno;