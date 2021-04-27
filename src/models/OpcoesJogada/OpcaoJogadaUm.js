class OpcaoJogadaUm {
    tipo;
    dados;
    total

    constructor() {
        this.tipo = "1";
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
        array.map(d => {
            if(d.getNumero() == 1) {
                this.dados.push(d);
                this.total += d.getNumero();
            }
        })
    }
}

export default OpcaoJogadaUm;