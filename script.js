

    var link = $(".menu li a");
    var subir = $('.btn');


    $(window).scroll(function(){
     var minhaPosicao = $(this).scrollTop();
        if(minhaPosicao >= 1200){
            subir.fadeIn();
        } else{
            subir.fadeOut();
        }
    });

    link.on('click', function(){
        var seletor = $(this).attr("href");
       var posicao = $(seletor).offset().top;
        $("html ,body").animate({scrollTop: posicao-60},1000);
    });

    subir.on('click',function(){
        $("html ,body").animate({scrollTop: 900 },1000);
    })