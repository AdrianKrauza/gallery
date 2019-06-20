$(document).ready(function () {
    var idImg;
    $(document).on("click", "img", function () {
        idImg = this.id
    })
    $("#star div").hover(function () {
        for (let i = 1; i <= 10; i++) {
            $("#star" + i).removeClass()
            $("#star" + i).addClass("icon-star-half_empty")
        }
        const id = this.id;
        for (let i = 1; i <= id; i++) {
            $("#star" + i).removeClass()
            $("#star" + i).addClass("icon-star-half")
        }
    });
});
