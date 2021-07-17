class Data {
    public dia: number;
    private mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 2001);
console.log(data);