function validar(){
    if(document.form.nome.value == "" || document.form.nome.value.length <4){
        alert('Preencha o campo Nome')
        return false;
    } 
    if ($("M").val() == "") {
        alert("preencha os campos!!");
    } 
    if ($("F").val() == "") {
        alert("preencha os campos!!");
    }
    if(document.dtnasc.value== ""){
        alert("Preencha sua data de nascimento")
    }
    if(document.form.email.value == "" && document.form.email.value.indexOf('@')== -1){
        alert('Preencha o campo E-mail')
        return false;
    }
    if(document.form.cpf.value.length ==11){
        alert("Insira sua CPF")
    }
    if(document.fomr.tel.value.length <=11){
        alert("Verifique seu telefone")
    }
    if(document.form.email.value.indexOf('.')== -1){
        alert('Está faltando o "."')
        return false;
    }
    if(document.form.cidade.value ==""){ 
        alert('Informe sua cidade')
        return false;
    }
    if(document.form.estado.value == "Selecione um Estado"){
        alert('Informe seu estado')
        return false
    }
    if(document.form.senha.value.length <=8){
        alert('Você precisa digitar pelo menos 8 caracteres!')
        return false;
    }
    if(document.form.confirm_senha.value == senha)
        alert(' Senhas não compativeis')
}