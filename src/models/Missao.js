class Missao {
    um;
    dois;
    treis;
    quatro;
    cinco;
    seis;
    seguida;
    fullHouse;
    trinca;
    quadra;
    general;

    constructor() {
        this.um = 0;
        this.dois = 0;
        this.treis = 0;
        this.quatro = 0;
        this.cinco = 0;
        this.seis = 0;
        this.seguida = 0;
        this.fullHouse = 0;
        this.trinca = 0;
        this.quadra = 0;
        this.general = 0;
    }

    setUm(um) {
        this.um = um;
    }
    getUm() {
        return this.um;
    }

    setDois(dois) {
        this.dois = dois;
    }
    getDois() {
        return this.dois;
    }

    setTreis(treis) {
        this.treis = treis;
    }
    getTreis() {
        return this.treis;
    }

    setQuatro(quatro) {
        this.quatro = quatro;
    }
    getQuatro() {
        return this.quatro;
    }

    setCinco(cinco) {
        this.cinco = cinco;
    }
    getCinco() {
        return this.cinco;
    }

    setSeis(seis) {
        this.seis = seis;
    }
    getSeis() {
        return this.seis;
    }

    setSeguida(seguida) {
        this.seguida = seguida;
    }
    getSeguida() {
        return this.seguida;
    }

    setFullHouse(fullHouse) {
        this.fullHouse = fullHouse;
    }
    getFullHouse() {
        return this.fullHouse;
    }

    setTrinca(trinca) {
        this.trinca = trinca;
    }
    getTrinca() {
        return this.trinca;
    }

    setQuadra(quadra) {
        this.quadra = quadra;
    }
    getQuadra() {
        return this.quadra;
    }

    setGeneral(general) {
        this.general = general;
    }
    getGeneral() {
        return this.general;
    }
}

export default Missao;