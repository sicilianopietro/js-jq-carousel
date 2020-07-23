$(".prev").click(function(){
    prev();
});
$(".next").click(function(){
    next();
});

function prev(){
    var x = $(".images img.active");
    var y = $(".nav i.active");

    $('.active').removeClass('active');

    if(!x.hasClass("first")){
        x.prev().addClass("active")
        y.prev().addClass("active")
    } else {
        $(".images img.last").addClass("active")
        $(".nav i.last").addClass("active")
    }
}

function next(){
    var x = $(".images img.active");
    var y = $(".nav i.active");

    $('.active').removeClass('active');

    if(!x.hasClass("last")){
        x.next().addClass("active")
        y.next().addClass("active")
    } else {
        $(".images img.first").addClass("active")
        $(".nav i.first").addClass("active")
    }
}

// BONUS METODO 1
$(".nav i:nth-of-type(1)").click(function(){
    if (!$(this).hasClass("active")){
        $(".nav").find("i.active").removeClass("active");
        $(this).addClass("active");

        $(".images").find(".active").removeClass("active");
        $(".images img:nth-of-type(1)").addClass("active");
    }
});
$(".nav i:nth-of-type(2)").click(function(){
    if (!$(this).hasClass("active")){
        $(".nav").find("i.active").removeClass("active");
        $(this).addClass("active");

        $(".images").find(".active").removeClass("active");
        $(".images img:nth-of-type(2)").addClass("active");
    }
});
$(".nav i:nth-of-type(3)").click(function(){
    if (!$(this).hasClass("active")){
        $(".nav").find("i.active").removeClass("active");
        $(this).addClass("active");

        $(".images").find(".active").removeClass("active");
        $(".images img:nth-of-type(3)").addClass("active");
    }
});
$(".nav i:nth-of-type(4)").click(function(){
    if (!$(this).hasClass("active")){
        $(".nav").find("i.active").removeClass("active");
        $(this).addClass("active");

        $(".images").find(".active").removeClass("active");
        $(".images img:nth-of-type(4)").addClass("active");
    }
});
// BONUS METODO 2
// $('.nav i').click(function() {
//     var indexNavDot = $(this).index();
//     indexNavDot++;
//     if (!$(this).hasClass("active")){
//         $(".active").removeClass("active");
//         $(this).addClass("active");
//         $(".images > img:nth-child(" + indexNavDot + ")").addClass("active");//
//     }
// })
// BONUS METODO 3 (THANKS ALBERTO!)
// $('.nav i').click(function(){
//   $('.active').removeClass('active');
//   $(this).addClass('active');
//   $('img').eq($(this).index()).addClass('active');
// });
