var id = 1
var img
var MaxImg, stopPlay
$(document).ready(function () {
    // /zaktualizuj Folder
    var id = "0"
    $(document).on("click", ".foldery", function () {
        if (id != $('#' + this.id).attr('id')) {
            id = $('#' + this.id).attr('id');
            $('.podFolder ').not('#' + this.id).slideUp()

            $(' #' + this.id).children().slideDown()
        }
    });
    // Zwijanie menu
    $(document).on("click", ".zwin", function () {
        $('nav ul').slideToggle();
        $('nav li').slideToggle();
    });

    //powiekszanie obrazu   
    var MaxImg;
    $(document).on("click", "#box img", function () {

        MaxImg = $('#' + id).parent().parent().children().attr('class');
        $('#pojemnik').addClass('pojemnikImg')
        $('#boxImg').fadeIn()
        $('#boxShadow').fadeIn()
        id = this.id
        nazwa = $('#' + id).attr('class');
        idImg = $('#' + id).parent().attr('id');
        $('#img').html("<img src='images/" + nazwa + "/" + idImg + "'>");
        img = new Image();
        img.src = 'images/' + nazwa + "/" + idImg;
        img.onload = function () {
            widthWindow = window.innerWidth
            heightWindow = window.innerHeight
            heightImg = img.height;
            widthImg = img.width;
            if (heightImg >= 800) {
                $('#img img').css('width', '800px')
                heightImg /= widthImg / 800
                widthImg = 800
            }
            if (widthImg >= 800) {
                $('#img img').css('width', '800px')
                heightImg /= widthImg / 800
                widthImg = 800
            }
            heightI = ((heightWindow - heightImg) / 2) - 20
            $('#cross').css('left', 'calc((51% - ' + widthImg + 'px  /2 ) - 60px)');
            $('#play-pause').css('left', 'calc(50% - 30px');
            $('#play-pause').css('bottom', 'calc(' + heightI + 'px)');
            $('#cross').css('top', 'calc(45% - ' + heightImg + 'px /2)');
            
            $('#img').css('top', 'calc(48% - ' + heightImg + 'px /2)');
            $('#img').css('left', 'calc(50% - ' + widthImg + 'px /2)');
            $('#arrow1').css('left', 'calc((50% - ' + widthImg + 'px  /2 ) - 60px)');
            $('#arrow2').css('left', 'calc((50% + ' + widthImg + 'px  /2 ) + 30px)');
            if (widthImg >= widthWindow - 120) {
                $('#boxImg').css('display', 'none');
                $('#boxImgRes').css('display', 'block');
                $('#imgRes').html("<img src='images/" + nazwa + "/" + idImg + "'>");
            }
        };
       

    })
    // do tyłu
    $(document).on("click", "#arrow1", function () {

        $('#img').fadeOut("fast");
        setTimeout(function () {
            id *= 1;
            id -= 1;
            if (id == -1) {
                id = MaxImg - 1
            }
            idImg = $('#' + id).parent().attr('id');

            $('#img').html("<img src='images/" + nazwa + "/" + idImg + "'>");
            img = new Image();
            img.src = 'images/' + nazwa + "/" + idImg;
            img.onload = function () {
                widthWindow = window.innerWidth
                heightWindow = window.innerHeight
                heightImg = (img.height);
                widthImg = (img.width);
                if (heightImg >= 800) {
                    $('#img img').css('width', '800px')
                    heightImg /= widthImg / 800
                    widthImg = 800
                }
                if (widthImg >= 800) {
                    $('#img img').css('width', '800px')
                    heightImg /= widthImg / 800
                    widthImg = 800
                }
                heightI = ((heightWindow - heightImg) / 2) - 20
                
                $('#play-pause').css('left', 'calc(50% - 30px');
                $('#play-pause').css('bottom', 'calc(' + heightI + 'px)');
                $('#cross').css('left', 'calc((51% - ' + widthImg + 'px  /2 ) - 60px)');
                $('#cross').css('top', 'calc(45% - ' + heightImg + 'px /2)');
                $('#img').css('top', 'calc(48% - ' + heightImg + 'px /2)');
                $('#img').css('left', 'calc(50% - ' + widthImg + 'px /2)');
                $('#arrow1').css('left', 'calc((50% - ' + widthImg + 'px  /2 ) - 60px)');
                $('#arrow2').css('left', 'calc((50% + ' + widthImg + 'px  /2 ) + 30px)');
            }
            $('#img').fadeIn("fast");
        }, 250);
    })
    //do przodu
    $(document).on("click", "#arrow2", function () {
        $('#img').fadeOut("fast");
        setTimeout(function () {
            id *= 1;
            id += 1;
            if (id == MaxImg) {
                id = 0
            }
            idImg = $('#' + id).parent().attr('id');
            $('#img').html("<img src='images/" + nazwa + "/" + idImg + "'>");
            img = new Image();
            img.src = 'images/' + nazwa + "/" + idImg;
            img.onload = function () {
                widthWindow = window.innerWidth
                heightWindow = window.innerHeight
                heightImg = (img.height);
                widthImg = (img.width);
                if (heightImg >= 800) {
                    $('#img img').css('width', '800px')
                    heightImg /= widthImg / 800
                    widthImg = 800
                }
                if (widthImg >= 800) {
                    $('#img img').css('width', '800px')
                    heightImg /= widthImg / 800
                    widthImg = 800
                }
                heightI = ((heightWindow - heightImg) / 2) - 20
               
                $('#play-pause').css('left', 'calc(50% - 30px');
                $('#play-pause').css('bottom', 'calc(' + heightI + 'px)');
                $('#cross').css('left', 'calc((51% - ' + widthImg + 'px  /2 ) - 60px)');
                $('#cross').css('top', 'calc(45% - ' + heightImg + 'px /2)');
                $('#img').css('top', 'calc(48% - ' + heightImg + 'px /2)');
                $('#img').css('left', 'calc(50% - ' + widthImg + 'px /2)');
                $('#arrow1').css('left', 'calc((50% - ' + widthImg + 'px  /2 ) - 60px)');
                $('#arrow2').css('left', 'calc((50% + ' + widthImg + 'px  /2 ) + 30px)');
            }
            $('#img').fadeIn("fast");
        }, 250);
    })
    //do tyłu Res
    $(document).on("click", "#arrowRes1", function () {
        id *= 1;
        id -= 1;
        if (id == -1) {
            id = MaxImg - 1
        }
        idImg = $('#' + id).parent().attr('id');
        $('#imgRes').html("<img src='images/" + nazwa + "/" + idImg + "'>");
    })

    //do przodu Res
    $(document).on("click", "#arrowRes2", function () {
        id *= 1;
        id += 1;
        if (id == MaxImg) {
            id = 0
        }
        idImg = $('#' + id).parent().attr('id');
        $('#imgRes').html("<img src='images/" + nazwa + "/" + idImg + "'>");
    })
    //resposywnosc 
    $(window).load(function () {
        winResized();
    }).bind('resize', function () {
        winResized();
    })
    $(document).on("click", "nav li", function () {
        winResized();
    });
    $(document).on("click", "img", function () {
        widthWindow = $('body').width();
        if (widthWindow < 600) {
            $('#pojemnik').css('display', 'flex');
        }
    });
    function winResized() {

        if(img != null){
        widthWindow = $('body').width();
        heightWindow = $('body').height();
        
            heightImg = img.height;
            widthImg = img.width;
            heightImg2 = img.height;
            widthImg2 = img.width;
        
            imgRes = img.height/img.width
 
        if (heightImg2 >= 800) {
            $('#img img').css('width', '800px')
            heightImg2 /= widthImg2 / 800
            widthImg2 = 800
        }
        if (widthImg2 >= 800) {
            $('#img img').css('width', '800px')
            heightImg2 /= widthImg2 / 800
            widthImg2 = 800
        }

        if (widthImg2 >= widthWindow - 120) {

            $('#boxImg').css('display', 'none');
            $('#boxImgRes').css('display', 'block');
            $('#imgRes').html("<img src='images/" + nazwa + "/" + idImg + "'>");
            widthImg = widthWindow
              
            if (widthImg < 600) {
                $('#pojemnik').css('display', 'flex');
            }
        }
        if (widthImg2 <= widthWindow - 120) {
            $('#boxImg').css('display', 'block');
            $('#boxImgRes').css('display', 'none');
            widthImg = widthWindow
              
        }
        $('#resArrow').css('height', widthImg*imgRes);
    }}
    $(document).on("click", "#play", function () {
        PlayNext()
    })
    $(document).on("click", "#pause", function () {
        stopPlay = "true"
        $('#pause').css('display', 'none');
        $('#play').fadeIn("fast");
    })
    $(document).on("click", "#boxShadowRes", function () {
       
        $('#boxImgRes').fadeOut()
        $('#pojemnik').removeClass('pojemnikImg')
        stopPlay = "true"
        $('#pause').css('display', 'none');
        $('#play').fadeIn("fast");
    });
    $(document).on("click", "#boxShadow", function () {
        
        $('#boxImg').fadeOut()
        $('#pojemnik').removeClass('pojemnikImg')
        stopPlay = "true"
        $('#pause').css('display', 'none');
        $('#play').fadeIn("fast");
    });
});

function PlayNext() {

    $('#play').css('display', 'none');
    $('#pause').fadeIn("fast");
    $('#img').fadeOut("fast");
    setTimeout(function () {
        id *= 1;
        id += 1;
        if (id == MaxImg) {
            id = 0
        }
        idImg = $('#' + id).parent().attr('id');
        $('#img').html("<img src='images/" + nazwa + "/" + idImg + "'>");
        img = new Image();
        img.src = 'images/' + nazwa + "/" + idImg;
        img.onload = function () {
            widthWindow = window.innerWidth
            heightWindow = window.innerHeight
            heightImg = (img.height);
            widthImg = (img.width);
            if (heightImg >= 800) {
                $('#img img').css('width', '800px')
                heightImg /= widthImg / 800
                widthImg = 800
            }
            if (widthImg >= 800) {
                $('#img img').css('width', '800px')
                heightImg /= widthImg / 800
                widthImg = 800
            }
            heightI = ((heightWindow - heightImg) / 2) - 20
            
            $('#play-pause').css('left', 'calc(50% - 30px');
            $('#play-pause').css('bottom', 'calc(' + heightI + 'px)');
            $('#cross').css('left', 'calc((51% - ' + widthImg + 'px  /2 ) - 60px)');
            $('#cross').css('top', 'calc(45% - ' + heightImg + 'px /2)');
            $('#img').css('top', 'calc(48% - ' + heightImg + 'px /2)');
            $('#img').css('left', 'calc(50% - ' + widthImg + 'px /2)');
            $('#arrow1').css('left', 'calc((50% - ' + widthImg + 'px  /2 ) - 60px)');
            $('#arrow2').css('left', 'calc((50% + ' + widthImg + 'px  /2 ) + 30px)');
        }
        $('#img').fadeIn("fast");
    }, 250);
    if (stopPlay != "true") {
        setTimeout("PlayNext()", 5000);
    }
}