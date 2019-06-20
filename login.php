<?php
session_start();

if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true)){
    header('location:admin.php');
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Galeria</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="js/jquery.min.js"></script>
    <script src="js/admin.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>

<body>
<form id="formLogin">
    <div id="log">Logowanie</div>
  <input type="text" name="login" id="login" placeholder="Login" onfocus="this.placeholder=''" onblur="this.placeholder='Login'" autocomplete="off"/>
  <input type="password" name="haslo" id="haslo"placeholder="Haslo" onfocus="this.placeholder=''" onblur="this.placeholder='Haslo'" autocomplete="off" />
  <input type="submit" value="Zaloguj" id="zaloguj" ></br>
  <div id="loginNie"></div>
</form>

</body>

</html>