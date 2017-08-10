/**
 * Created by aiden on 2017/8/9.
 */
var count
var n = 0
$(document).ready(function () {

    var t
    count = $("#content a").length

    $("#banner li").click(function () {
        var i = $(this).text() - 1
        n = i
        $("#title-info").html($("#content a").eq(i).find("img").attr("alt"))
        $("#content a").fadeOut(1000).parent().children().eq(i).fadeIn(1000)
        //toggleClass 有该类名就移除 没有就添加
        $(this).toggleClass("on")
        //siblings("")  获得匹配集合中每个元素的同胞，通过选择器进行筛选是可选的。
        $(this).siblings("").removeAttr("class")
    })
    $("#banner li").eq(0).trigger("click")
    t = setInterval("showAuto()",2000)
})

function showAuto() {
    n = n >= count-1 ? 0 : ++n
    $("#banner li").eq(n).trigger("click")
}