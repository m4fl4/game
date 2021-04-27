class OpcaoJogadaTreis {
    tipo;
    dados;
    total

    constructor() {
        this.tipo = "full-house";
        this.dados = [];
        this.total = 0;
    }

    getTipo() {
        return this.tipo;
    }

    setDados(dados) {
        this.dados = dados;
    }
    getDados() {
        return this.dados;
    }

    setTotal(total) {
        this.total = total;
    }
    getTotal() {
        return this.total;
    }

    filtro(array) {
        
    }
}

export default OpcaoJogadaTreis;