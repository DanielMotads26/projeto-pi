<?php

$servidor= "localhost";
$usuario= "root";
$senha= "";
$database= "batata";

$conexao= mysqli_connect($servidor, $usuario, $senha, $database);

if ($conexao){
   echo "Conectado com sucesso";
}else{
    echo "Falha ao conectar!";
}

?>