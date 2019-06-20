<?php
$id = $_POST["id"];
$name = 100;
$d = 0;
$mysqli = @new mysqli("localhost","root","","galeria");    
$mysqli->set_charset('utf8');
$result = $mysqli->query("SELECT * FROM `folder` WHERE `folder`.`nazwa`='$id'");
$roresult_assoc = mysqli_fetch_assoc($result) ;
if ($handle = opendir('../images/'.$id.'/')) {
    while (false !== ($file = readdir($handle))) { 
        if($file != "." && $file != ".." && $file != "tm"){
        $roz[$d] = $file;
        $d += 1;
        }
    } 
    closedir($handle); 
 }
$opis = $roresult_assoc['opis'];
echo "<div id=\"opis\" class=\"$d\">$opis</div>";
if($d != 0){
for ($i=0; $i <= $roresult_assoc['izdjec'] =$roresult_assoc['izdjec']    ; $i++) { 
    if($i <= 9){
        echo "<div id='$roz[$i]' class='imgDiv'><img class=\"$id\"   id='$i' src='images/".$id."/tm/tm_10".$i.".jpg'><i class='imgI'></i></div>";
    }else{
        echo "<div id='$roz[$i]' class='imgDiv'><img class=\"$id\"   id='$i' src='images/".$id."/tm/tm_1".$i.".jpg'><i class='imgI'></i></div>";
    }
}}
mysqli_close($mysqli); 
?> 