// 共通化パーツの読み込み
$(function(){
    $.ajaxSetup({cache:false});
    $("header").load("/common/header.html");
    $("footer").load("/common/footer.html");
});

//トップへ戻るボタン
$(window).scroll(function (){
    var now = $(window).scrollTop();

    if (now > 200) {
        $('.pagetop').fadeIn("slow");
    } else {
        $('.pagetop').fadeOut("slow");
    }

});


$('.pagetop').click(function(){
    $('html, body').animate({scrollTop: 0}, 0);

});

