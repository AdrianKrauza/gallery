<?php
$mysqli = @new mysqli("localhost","root","","galeria");    
$mysqli->set_charset('utf8');
$id = $_POST["id"];
$tytyl = $_POST['folder'];
$opis = $_POST['opis']; 
$folderS = $_POST['folderS']; 
$mysqli->query("UPDATE `galeria`.`foldery` set `tytulFolderu`='$tytyl', `opisFolderu`='$opis' WHERE `id` = $id ");
rename("../images/".$folderS, "../images/".$tytyl);  
mysqli_close($mysqli); 
?>
