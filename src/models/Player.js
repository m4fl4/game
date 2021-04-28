import Missao from '../models/Missao';
import { v4 as uuidv4 } from 'uuid';

class Player {
    id;
    nome;
    cor;
    missao;

    constructor() {
        this.id = uuidv4();
        this.nome = "";
        this.cor = "";
        this.missao = new Missao();
    }

    getId() {
        return this.id;
    }

    setNome(nome) {
        this.nome = nome;
    }  
    getNome() {
        return this.nome;
    }  

    setCor(cor) {
        this.cor = cor;
    }
    getCor() {
        return this.cor;
    }

    setMissao(missao) {
        this.missao = missao;
    }
    getMissao() {
        return this.missao;
    }
}

export default Player;