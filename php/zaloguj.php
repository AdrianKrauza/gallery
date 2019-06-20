<?php
session_start();
$login = "admin";
$haslo = "admin1";

$loginPost = $_POST['login'];
$hasloPost = $_POST['haslo'];
$loginPost = htmlentities($loginPost,ENT_QUOTES,"UTF-8");
$hasloPost = htmlentities($hasloPost,ENT_QUOTES,"UTF-8");
if ((!isset($_POST['login'])) || (!isset($_POST['haslo']))){
    header('location: ../login.php');
    exit();
}
if($loginPost == "admin"  && $hasloPost ==  "admin1" ){
    echo "Poprawnie zalogowano";
    header('location:../admin.php');
    $_SESSION['zalogowany'] = true;

}else{
    echo "Złe hasło lub login";
}
?>