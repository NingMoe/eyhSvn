/**
 * Created by WHB on 2016/4/8.
 */

/*表单垂直居中*/
function heightAuto(){
    var d = $(".logBg, .logWrap,.reWrap");
    d.each(function(){
        var ht = -$(this).get(0).offsetHeight/2-11+"px";
        $(this).get(0).style.marginTop = ht;
    });
}
$(function(){
    heightAuto();
});