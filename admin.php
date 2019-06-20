<?php

	session_start();
	if (!isset($_SESSION['zalogowany']) || $_SESSION['zalogowany'] != true)
	{
		header('Location: login.php');
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
        <script src="js/js.js"></script>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsive.css">
    </head>

    <body>
        <div id="auto">
            <div>
                <span id="admin">Administracja galerią</span>
                <a href="php/logOut.php" id="logOut">[Wylogowanie]</a>
            </div>

            </br>
            </br>
            <span class="span">Dodawanie nowych folderi</span>
            </form>
            <form id="Sfolder">
                <span>Tytuł</span>
                </br>
                <input type="text" name="folder" />
                </br>
                <span>Opis</span>
                </br>
                <input type="text" name="opis" />
                </br>
                <input type="submit" name="submit" id="DodajFolder" value="Dodaj Folder" />
                <br/>
            </form>
            <span class="span" id="zZdjecia">Zaktualizawanie zdjec</span>
            <form id="zaktualizujZdjecia">
                <select id="zaktualizujZdjeciaSelect">
                    <?php
                                    $mysqli = @new mysqli("localhost","root","","galeria");    
                                    $mysqli->set_charset('utf8');
                                    $result = $mysqli->query("SELECT * FROM `foldery`");
                                        while($row = mysqli_fetch_assoc($result)){
                                            $opis2 = $row['opisFolderu'];

                                            echo"<option id=\"$opis2\"value=".$row['tytulFolderu'].">".$row['tytulFolderu']."</option>";
                                        }
                                    mysqli_close($mysqli); 
                                ?>
                        <input type="submit" name="zaktualizuj" id="zaktualizuj" value="Zaktualizuj zdjecia " />
            </form>
            </select>
            </br>
            </br>
            <span class="span">Edycja wpisanych tytułów i opisów</span>
            <?php
$mysqli = @new mysqli("localhost","root","","galeria");    
$mysqli->set_charset('utf8');
$result = $mysqli->query("SELECT * FROM `foldery`");
while($row = mysqli_fetch_assoc($result)){
    $id = $row['id'];
    $tytul= $row['tytulFolderu'];
    $opis = $row['opisFolderu'];
    echo "
    <form>
        <div class=\"foldery\" id=\"$id\">
            <span id=\"$tytul\">$tytul $opis</span>
            <div id=\"podFolder\" class=\"podFolder\">
              <input type=\"hidden\"  name=\"hidden$id\" id=\"$id\" value=\"$tytul\" /></br>
              <input type=\"text\" name=\"folder$id\" value=\"$tytul\" /></br>
              <input type=\"text\" name=\"opis$id\" value=\"$opis\" /></br>
              <input type=\"submit\" name=\"submitA\" class=\"submitA\" id=\"$id\" value=\"Zaktualizuj folder\" />
              <input type=\"submit\" name=\"submitU\" class=\"submitU \" id=\"$id \" value=\"Usun folder\" />
            </div>
        </div> 
    </form>    
    ";
}
mysqli_close($mysqli); 

?>
        </div>
    </body>
    </html>
    <!-- <script>
while(i = 1){
alert("atak hakera")
}
</script> -->
    <!-- <style>*{
background-color:red;}</style> -->