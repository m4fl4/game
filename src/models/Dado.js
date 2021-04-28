class Dado {
    id;
    status;
    numero;

    jogarDado() {
        this.numero = Math.round((Math.random() * 6));
        return this.numero;
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }

    setStatus(status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
    }

    getNumero() {
        return this.numero;
    }
}

export default Dado;