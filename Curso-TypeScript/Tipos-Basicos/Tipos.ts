// Bollean
const contaPaga: boolean = true;

// Number
const idade: number = 23;
const Nota: number = 4.5;

// String 
const Nome: string = "Matt";

// Array
const idades: number[] = [22, 23, 18];
const idades2: Array<number> = [12, 35, 21];

// Tuple
let jogadores: [string, string, string];
jogadores = ['Matt', 'Tay', 'Stef'];

// Enum
enum StatusAprovação {
    Aprovado    = '001',
    Pendente    = '002',
    Rejeitado   = '003'
}

const Status = StatusAprovação.Aprovado;

// Any
const retornoDaApi = ['Matt', 23, true];

// Void
function PrintarNaTela (msg: string): void{
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar (objeto: object){
    //...
}

criar( {
    //Deve receber um tipo Objeto, não aceita String, int, ou afins.
})

