<?php
$tytyl = $_POST['folder'];
$opis = $_POST['opis'];
if ($handle = opendir('../images/')) {
    while (false !== ($file = readdir($handle))) { 
        if($file == $tytyl){
            echo "folder o tytule ".$tytyl." jest już stworzony";
            return false;
        }
    }
    closedir($handle); 
 }
    $mysqli = @new mysqli("localhost","root","","galeria");    
    $mysqli->set_charset('utf8');
    @mkdir("../images/".$tytyl, 0777);
    @mkdir("../images/".$tytyl."/tm", 0777);
    $mysqli->query("INSERT `galeria`.`foldery` set `tytulFolderu`='$tytyl',  `opisFolderu`='$opis' ");
    mysqli_close($mysqli); 
    echo "pomyślnie utworzony folder"
?>
