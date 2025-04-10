function Alert_CEP(){
    document.querySelector('button[type="submit"]').addEventListener('click',function(event){
        event.preventDefault();
        const cepValor = document.getElementById('cep').value;
        window.alert('O CEP informado é: ' + cepValor);
    });
}
Alert_CEP();
function buscarCep(event){
    event.preventDefault();
    let cep = document.querySelector('#cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
    .then(function(response){
        return response.json()
        })
    .then(function(data){
        console.log("Dados recebidos:",data)
        preenchimentoCep(data)
    })
    .catch(function(error){
        console.error("Erro ao buscar o CEP: ",error)
    })
    }

function preenchimentoCep(dados){
    document.querySelector('input[name="logradouro"]').value = dados.logradouro || ' ';
    document.querySelector('input[name="bairro"]').value = dados.bairro || ' ';
    document.querySelector('input[name="cidade"]').value = dados.localidade || ' ';
    document.querySelector('input[name="regiao"]').value = dados.regiao || ' ';
    document.querySelector('input[name="estado"]').value = dados.uf || ' ';

}
window.buscarCep = buscarCep;