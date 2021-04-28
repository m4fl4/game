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

    inicioRandom(players, num) {
        let random = Math.round(Math.random() * num);
            this.atual = players[random];
    }
}

export default Turno;