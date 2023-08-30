const lista = document.getElementById('lista');
const form =document.getElementById('form_add');

//array da nossa lista
const listaDeClientes = ['Kaian', 'Julia', 'Lucas'];

//função que exibirá nossa lista
const exibirLista = () => {
   lista.innerHTML = "";
   for(let i = 0; i < listaDeClientes.length; i++) {
    lista.innerHTML += `<div class="lista"><h2>${listaDeClientes[i]}</h2><button onclick="excluirItem(${i})"S>Excluir</button></div>`
   }
}
    


//método para cadastrar um item da lista
const cadastrarItem = () => {
    lista.innerHTML = "";
    lista.style.display = 'block';
    form.style.display = 'none';
    const input = document.getElementById('input').value
    listaDeClientes.push(input);
    exibirLista();
}

//função para exibir o formulário
const exibirFormulario = () => {
    lista.style.display  = 'none';
    form.style.display = 'block'
}

//função para excluir um item da lista 
const excluirItem = i => {
    listaDeClientes.splice(i, 1);
    exibirLista();
}
    
exibirLista()