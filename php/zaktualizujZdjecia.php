<?php
$fileFolder = $_POST['folder'];
$opis = $_POST['opis'];
// // $bazaDanych 
         $mysqli = @new mysqli("localhost","root","","galeria");         
         $mysqli->set_charset('utf8');
         require_once 'thumb/ThumbLib.inc.php';      
             $name = 99;
             $zrobionaMinaturka = 0;    
                 $name = 99;

                     if ($handle = opendir('../images/'.$fileFolder)) {
                         while (false !== ($file = readdir($handle))) { 
                             //zmiana nazwy pliku
                             if($file != "." && $file != ".." && $file != "tm"  ){
                                 $name = $name +1;                   
                                 $odczyt = pathinfo( "../images/".$fileFolder.$file);
                                 $ext = $odczyt['extension'];
                                 rename("../images/".$fileFolder."/".$file, "../images/".$fileFolder."/".$name.".".$ext);  
                                 //usuwanie minaturek
                                 if ($handleTm = opendir('../images/'.$fileFolder.'/tm')) {
                                     while (false !== ($fileTm = readdir($handleTm))) { 
                                         if($fileTm != "." && $fileTm != ".." && $name == 1 ){
                                             unlink("../images/".$fileFolder."/tm/".$fileTm);
                                         }
                                     }                                     
                                     closedir($handleTm); 
                                 }
                                 //tworzenie minaturek
                                 $odczyt = pathinfo( "../images/".$fileFolder.$file);
                                 $ext = $odczyt['extension'];
                                 $obrazek = "../images/".$fileFolder."/".$name.".".$ext;
                                 $rozmiar = getimagesize($obrazek);
                                 $wspolczynnik = $rozmiar[0]/$rozmiar[1];
                                 if($wspolczynnik>1) {
                                     $h=160;
                                     $w=$h*$wspolczynnik;
                                 }
                                 if($wspolczynnik<=1) {
                                     $w=160;
                                     $h=$w/$wspolczynnik;
                                 }
                                 $thumb = PhpThumbFactory::create($obrazek);
                            
                                 $thumb->resize($w, $h);
                                 $thumb->cropFromCenter(160,160);
                                 $thumb->save('../images/'.$fileFolder.'/tm/tm_'.$name.".jpg");   
                                 $zrobionaMinaturka += 1;

                             } 
                         }
                         closedir($handle); 
                     }
                     $name = $name - 100 ;
             if ($fileFolder != "." && $fileFolder != ".." && $fileFolder != "," ) {
                $mysqli->query("DELETE FROM `folder` WHERE `folder`.`nazwa`='$fileFolder'");
                 $mysqli->query("INSERT `galeria`.`folder` set `nazwa`='$fileFolder',  `izdjec`='$name ',  `opis`='$opis ' ");
             
         }
         mysqli_close($mysqli); 
     ?>

     <script>
     $("#wait").hide();
115
     </script>