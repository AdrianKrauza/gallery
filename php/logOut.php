<?php
	session_start();
    $_SESSION['zalogowany'] = false;
	// session_unset();
	
header('location:../index.php');
?>