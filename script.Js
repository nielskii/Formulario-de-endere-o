let cepValor="";
//function Alert_CEP(){
    //document.querySelector('button[type="submit"]').addEventListener('click',function(){
        //cepValor = document.getElementById('cep').value;
        //if(cepValor.trim()===""){
            //window.alert("CEP inválido :/");
        //}
           // buscarCep(cepValor);
    //});
//}
function buscarCep(event){
    event.preventDefault();
    cepValor = document.getElementById('cep').value;
    if(cepValor.trim() === ""){
        window.alert('CEP inválido :/');
        return;
    }
    else{
        let url = `https://viacep.com.br/ws/${cepValor}/json/`;
        fetch(url)
        .then(function(response){
            return response.json()
            })
        .then(function(data){
                console.log("Dados recebidos:",data)
                window.alert('O CEP informado é: ' + cepValor);
                preenchimentoCep(data);
                
        })
        .catch(function(error){
                console.log('Serviço indisponivel no momento :/');
                window.alert('Serviço indisponivel no momento :/')
                limparCampos();
            })
    }
    }

function preenchimentoCep(dados){
    document.querySelector('input[name="logradouro"]').value = dados.logradouro || ' ';
    document.querySelector('input[name="bairro"]').value = dados.bairro || ' ';
    document.querySelector('input[name="cidade"]').value = dados.localidade || ' ';
    document.querySelector('input[name="regiao"]').value = dados.regiao || ' ';
    document.querySelector('input[name="estado"]').value = dados.uf || ' ';
}

function limparCampos(){
    document.querySelector('#cep').value = "";
    document.querySelector('input[name="logradouro"]').value = "";
    document.querySelector('input[name="bairro"]').value = "";
    document.querySelector('input[name="cidade"]').value = "";
    document.querySelector('input[name="regiao"]').value = "";
    document.querySelector('input[name="estado"]').value = "";
}

window.buscarCep = buscarCep;