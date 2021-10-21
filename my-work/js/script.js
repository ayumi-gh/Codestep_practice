// 共通化パーツの読み込み
$(function(){
    $.ajaxSetup({cache:false});
    $("header").load("/common/header.html");
    $("footer").load("/common/footer.html");
});