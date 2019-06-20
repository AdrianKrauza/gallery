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
    <script src="js/star.js"></script>
    <link rel="stylesheet" href="css/fontello-731ba227/css/arr.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <div id="pojemnik">
        <div>
            <nav>
                <ul>
                    <?php
                         $mysqli = @new mysqli("localhost","root","","galeria");    
                         $mysqli->set_charset('utf8');
                         $result = $mysqli->query("SELECT * FROM `foldery`");
                         while($row = mysqli_fetch_assoc($result)){
                            echo "<li class='nav' id=".$row['tytulFolderu'].">".$row['tytulFolderu']."</li>";
                         }
                         echo "<li  class=\"zwin\">Zwin </li>";
                         mysqli_close($mysqli); 
                    ?>
                </ul>
                <li style="display:none" class="zwin nav">Rozwin </li>
            </nav>
            <a  class="admin" href="login.php">Administracja </a>
        </div style="width: 100%">
        <div id="box">
        </div>

        <div id="boxImg">
        <div id="boxShadow"></div>
        <!-- <div id="star">
            <div class="half" id="1"><i  id="star1" class="icon-star-half_empty"></i></div><div class="star" id="2"><i  id="star2" class="icon-star-half_empty"></i></div>
            <div class="half" id="3"><i  id="star3" class="icon-star-half_empty"></i></div><div class="star" id="4"><i  id="star4" class="icon-star-half_empty"></i></div>
            <div class="half" id="5"><i  id="star5" class="icon-star-half_empty"></i></div><div class="star" id="6"><i  id="star6" class="icon-star-half_empty"></i></div>
            <div class="half" id="7"><i  id="star7" class="icon-star-half_empty"></i></div><div class="star" id="8"><i  id="star8" class="icon-star-half_empty"></i></div>
            <div class="half" id="9"><i  id="star9" class="icon-star-half_empty"></i></div><div class="star" id="10"><i id="star10"  class="icon-star-half_empty"></i></div>
        </div> -->
        
            <i id="arrow1" class="icon-left-big arrow"></i>
            <i id="arrow2" class="icon-right-big arrow"></i>
            <div id="img"></div>
            <div id="play-pause">
                <i class="icon-play" id="play"></i>
                <i class="icon-pause" id="pause"></i>
            </div>
        </div>
        <div id="boxImgRes">
            <div id="boxShadowRes"></div> <div id="resArrow">
            <i id="arrowRes1" class="icon-angle-left arrowRes"></i>
            <i id="arrowRes2" class="icon-angle-right arrowRes"></i></div>   
            <div id="imgRes"></div>
        </div>
    </div>
</body>

</html>
