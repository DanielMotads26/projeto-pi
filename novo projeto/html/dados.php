<?php
include_once('index.php');
$nome = $_POST['nome'];
$sexo = $_POST['sexo'];
$data_nasc = $_POST['data_nasc'];
$cpf = $_POST['cpf'];
$telefone = $_POST['telefone'];
$estado = $_POST['estado'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$confirm_senha = $_POST['confirm_senha'];

$sql= "INSERT INTO frita
(nome, sexo, data_nasc, cpf, telefone, estado, email, senha, confirm_senha)
VALUES ('$nome', '$sexo', '$data_nasc', '$cpf', '$telefone', '$estado','$email',
'$senha' ,'$confirm_senha')";
$query= mysqli_query($conexao, $sql)
                                                                              
?>
<script>
 window.alert('Enviado com Sucesso')
 window.location.href= "hp.html"

</script>