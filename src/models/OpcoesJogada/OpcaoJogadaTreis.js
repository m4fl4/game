class OpcaoJogadaTreis {
    tipo;
    dados;
    total;
    controle;

    constructor() {
        this.tipo = "3";
        this.dados = [];
        this.total = 0;
        this.controle = 0;
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

    setControle(controle) {
        this.controle = controle;
    }
    getControle() {
        return this.controle;
    }

    filtro(array) {
        array.map(d => {
            if(d.getNumero() == 3) {
                this.dados.push(d);
                this.total += d.getNumero();
            }
        })
        this.controle++;
    }
}

export default OpcaoJogadaTreis;