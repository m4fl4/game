class Turno {
    atual;
    total;

    constructor() {
        this.atual = null;
        this.total = 0;
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

    inicioRandom(players) {
        let random = Math.round(Math.random());
        if(random == 0) {
            this.atual = players[0];
        } else {
            this.atual = players[1];
        }
    }
}

export default Turno;