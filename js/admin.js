$(document).ready(function () {
    //Dodaj Folder
    $(document).on("click", "#DodajFolder", function () {
        var folder = $("input[name=folder]").val();
        var opis = $("input[name=opis]").val();
        if ((folder && opis) != "") {
            data = {
                folder: folder,
                opis: opis
            };
            $.ajax({
                type: "POST",
                data: data,
                url: "php/nowyFolder.php",
                success: function (html) {
                    console.log(html)
                    document.getElementById("DodajFolder").value = "Dodano";
                    setTimeout(function () {
                        location.reload()
                    }, 2000);
                }
            })
        } else {};
        return false;
    });
    //Zaktualizuj  Zdjecia
    $(document).on("click", "#zaktualizuj", function () {
        var folder = $(" option:selected").val();
        var opis = $(" option:selected").attr('id');
        $("#wait").show();
        document.getElementById('zaktualizuj').value = "Aktualizuje";
        if (document.getElementById('zaktualizuj').value != "Zaktualizuj") {
            data = {
                folder: folder,
                opis: opis

            }
            $.ajax({
                type: "POST",
                data: data,
                url: "php/zaktualizujZdjecia.php",
                success: function (html) {
                    $('.wait').html(html)
                    document.getElementById('zaktualizuj').value = "Zaktualizowano";
                    setTimeout(function () {
                        location.reload()
                    }, 2000);
                }
            });
            return false;
        }
    });
    // Zaktualizuj  Folder
    $(document).on("click", ".submitA", function () {
        var iname = $("input[name=hidden" + this.id + "]").val();
        var folderA = $("input[name=folder" + this.id + "]").val();
        var opisA = $("input[name=opis" + this.id + "]").val();
        var id = this.id
        // $("zaktualizuj").val("dd");
        data = {
            id: this.id,
            folder: folderA,
            opis: opisA,
            folderS: iname
        };
        $.ajax({
            type: "POST",
            data: data,
            url: "php/zaktualizujFolder.php",
            success: function (html) {
                console.log(html)
                document.getElementById(id).value = "Zaktualizowano";
                setTimeout(function () {
                    location.reload()
                }, 2000);
            }
        });
        return false;
    });
    // usun  Folder
    $(document).on("click", ".submitU", function () {
        var folder = $('#' + this.id).parent().children().children().attr('id')
        var id = this.id
        data = {
            folder: folder,
        };
        $.ajax({
            type: "POST",
            data: data,
            url: "php/usunFolder.php",
            success: function (html) {
                console.log(html)
                document.getElementById(id).value = "Usuniento";
                setTimeout(function () {
                    // document.getElementById(id).value = "Usun";
                    location.reload()
                }, 3000);
            }
        });
        return false;
    });
    //galeria
    $(document).on("click", ".nav", function () {
        var id = this.id
        data = {
            id: id,
        };
        $.ajax({
            type: "POST",
            data: data,
            url: "php/galeria.php",
            success: function (html) {
                $('#box').hide().html(html).fadeIn()
            }
        });
        return false;
    });
    //loguj
    $(document).on("click", "#zaloguj", function () {
        var login = $("input[name=login]").val();
        var haslo = $("input[name=haslo]").val();

        data = {
            login: login,
            haslo: haslo
        };

        $.ajax({
            type: "POST",
            data: data,
            url: "php/zaloguj.php",
            success: function (html) {
                $('#loginNie').fadeIn().html(html)
                console.log(html)
                if (html != "Złe hasło lub login") {

                    location = "admin.php"
                }


            }
        });
        return false;
    });
    //star
    $(document).on("click", "#star div", function () {
        var id = this.id

        data = {
            id: id
        };

        $.ajax({
            type: "POST",
            data: data,
            url: "php/zaloguj.php",
            success: function (html) {
                console.log(html)
            }
        });
        return false;
    });
});