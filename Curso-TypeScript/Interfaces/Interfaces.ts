interface Usuario {
    nome: string,
    email: string,
    address?: string
}

function getUser(): Usuario {
    return{
    nome: 'Matt',
    email: 'matt@matt.com'
    }
}

function setUser(usuario: Usuario){
    //...
}