class OpcaoJogadaSeguida {
    tipo;
    dados;
    total;
    controle;

    constructor() {
        this.tipo = "seguida";
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

    atualizaMissao(missao) {
        if(missao.getOpcoes()[7].getTotal() == 0) {
            missao.getOpcoes()[7].setTotal(this.total);
        }
    }

    bubbleSort(array) {
        let len = array.length;
        for(let i=0; i<len; i++) {
            for(let j=0; j<len-1; j++) {
                let valor1 = array[j].getNumero();
                let valor2 = array[j+1].getNumero();
                if(valor1 > valor2) {
                    let aux = array[j];
                    array[j] = array[j+1];
                    array[j+1] = aux;
                }
            }   
        }
        return array;
    }

    filtro(a) {
        let array = this.bubbleSort(a);
        let check = 0;
        for(let i=0; i<array.length-1; i++) {
            if(array[i].getNumero()+1 != array[i+1].getNumero()) {
                check++;
            }
        }
        if(!check) {
            this.dados = array;
            this.total = 30;
        } else {
            this.total = 0;
        }
    }
}

export default OpcaoJogadaSeguida;