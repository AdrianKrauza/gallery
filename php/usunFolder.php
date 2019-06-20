<?php
$tytyl = $_POST['folder'];
$katalog = "../images/".$tytyl;
removeDir($katalog);
function removeDir($path) {
    $dir = new DirectoryIterator($path);
    foreach ($dir as $fileinfo) {
    if ($fileinfo->isFile() || $fileinfo->isLink()) {
    unlink($fileinfo->getPathName());
    } elseif (!$fileinfo->isDot() && $fileinfo->isDir()) {
    removeDir($fileinfo->getPathName());
    }
    }
    rmdir($path);
    rmdir("../images/".$tytyl);
    }

    $mysqli = @new mysqli("localhost","root","","galeria");         
    $mysqli->set_charset('utf8');
    $result = $mysqli->query("DELETE FROM `folder` WHERE `folder`.`nazwa` = '$tytyl'");
    $result = $mysqli->query("DELETE FROM `foldery` WHERE `foldery`.`tytulFolderu` = '$tytyl'");
    mysqli_close($mysqli); 

?>