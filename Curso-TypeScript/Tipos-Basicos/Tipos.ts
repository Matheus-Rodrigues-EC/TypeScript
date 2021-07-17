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

// Never
function loopInfinito(): never {
    while(true);
}

function erro(msg: string): never{
    throw new Error(msg);
}

function falha(){
    return erro('Algo Falhou.');
}


// Union Types
function exibirNota(nota:number | string){
    console.log(`Sua nota eh ${nota}`);
}

exibirNota('10');

// Alias
type Funcionarios = Array<string> // | number | boolean;
const funcionarios: Funcionarios = ['Matt', 'Tay', 'Stef'];

function entrevista(funcionario: Funcionarios){
    // faz a entrevista...
}

type Aluno = {
    nome: string,
    sobrenome: string,
    matricula: number
}

type alunos = Array<Aluno>;
const registro: Aluno[] = [{
    nome: 'Matt',
    sobrenome: 'Rodrigues',
    matricula: 2021
}]

function tratarAlunos (alunos: Aluno[]){
    for(let aluno of alunos){
        console.log(`Nome do aluno: ${aluno.nome}`);
    }
}

// nulos e opicionais
type automovel = {
    nome: string,
    marca: string,
    ano: number,
    cor: string | null | number;
}

const carro: automovel = {
    nome: 'opala',
    marca: 'chevrolet',
    ano: 2020,
    cor: 3
}

type automovel2 = {
    nome: string,
    marca: string,
    ano: number,
    cor?: string
}

const moto: automovel2 = {
    nome: 'opala',
    marca: 'chevrolet',
    ano: 2020
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
<number>minhaIdade.toString();

const input = document.getElementById("objeto01") as HTMLInputElement;
console.log(input.value);

const input2 = <HTMLInputElement>document.getElementById("objeto01");
console.log(input2.value);

