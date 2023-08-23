const lista = doument.getElementById('lista')

//array da nossa lista
const listaDeClientes = ['Kaian', 'Julia', 'Lucas'];

//função que exibirá nossa lista
const exibirLista = () => {
    for(let i =0; i < listaDeClientes.length; i++) {
        lista.innerHTML += listaDeClientes[i];
    }
}
alert("OI")
exibirLista()