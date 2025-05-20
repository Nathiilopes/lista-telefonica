const formulario = document.getElementById('form-contato');
const contatos = [];
const telefones =[];

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const contato = formulario.elements[0].value;
    const telefone = formulario.elements[1].value;
    
    adicionarContato(contato, telefone); //chama a função
    
    formulario.reset();
    
    renderizarContatos(contatos, telefones); //chama a função
});

function adicionarContato(contato, telefone) {
    contatos.push(contato);
    telefones.push(telefone);
}

function renderizarContatos(contatos, telefones) {
    const tabela = document.querySelector('table tbody'); //seleciona a tabela no html
    tabela.innerHTML = '';
    
    for (let i = 0; i < contatos.length; i++) {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${contatos[i]}</td>
            <td>${telefones[i]}</td>
        `;
        tabela.appendChild(linha);
    }
}

