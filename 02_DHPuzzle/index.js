/**
 * Created by swartz006 on 2017/8/10.
 */
var d = [1,2,3,4,5,6,7,8,0]
var time = 0
var set_timer
var pause = true
var d_posXY = [
    [0,0],
    [150,0],
    [300,0],
    [0,150],
    [150,150],
    [300,150],
    [0,300],
    [150,300],
    [300,300]
]

var d_direct=[
    [2,4],
    [1,3,5],
    [2,6],
    [1,5,7],
    [2,4,6,8],
    [3,5,9],
    [4,8],
    [5,7,9],
    [6,8]
]

$(function () {
    reset()
})

function move(num) {
    var i = 0
    for (i = 0; i < d.length; i++) {
        if (d[i] == num)
            break
    }
    console.log(i)
    var target = whereCanto(i)
    if (target != -1) {
        d[i] = 0;
        d[target] = num;
        document.getElementById("d"+num).style.left=d_posXY[target][0]+"px";
        document.getElementById("d"+num).style.top=d_posXY[target][1]+"px";
    }

    var finished = true
    for (var j = 0; j < d.length - 1; j++) {
        if (d[j] != j+1) {
            finished = false
            break
        }
    }

    if (finished) {
        alert("congratulation")
        reset()
    }
}

function whereCanto(index) {
    var j = 0
    var canMove = false
    for(j = 0; j < d_direct[index].length; j ++){
        console.log(d[d_direct[index][j] - 1])
        if( d[d_direct[index][j]-1] == 0 ){
            canMove = true;
            break;
        }
    }

    if (canMove)
        return d_direct[index][j] - 1
    return -1
}

function reset() {
    time = 0
    random_d();
    if (pause)
        start()
}

function start() {
    if (pause) {
        $("#start").html("暂停")
        pause = false
        set_timer = setInterval(timer, 1000)
    }else {
        $("#start").html("开始")
        pause = true
        clearInterval(set_timer)
    }
}

function timer() {
    time ++
    var min = parseInt(time / 60)
    var sec = time % 60
    $("#timer").html(min + "分" + sec + "秒")
}

function random_d() {
    for (var i = 0; i < 9; i++) {
        var to = parseInt(Math.random()*9)
        if (d[i] != 0) {
            $("#d" + d[i]).css({
                "left": d_posXY[to][0] + "px",
                "top": d_posXY[to][1] + "px"
            })
        }

        if (d[to] != 0) {
            $("#d" + d[to]).css({
                "left": d_posXY[i][0] + "px",
                "top": d_posXY[i][1] + "px"
            })
        }
        var tmp = d[i]
        d[i] = d[to]
        d[to] = tmp
    }
    // for(var i=9; i>1; --i){
    //     var to=parseInt(Math.random()*(i-1)+1);
    //     if(d[i]!=0){
    //         document.getElementById("d"+d[i]).style.left=d_posXY[to][0]+"px";
    //         document.getElementById("d"+d[i]).style.top=d_posXY[to][1]+"px";
    //     }
    //     if(d[to]!=0){
    //         document.getElementById("d"+d[to]).style.left=d_posXY[i][0]+"px";
    //         document.getElementById("d"+d[to]).style.top=d_posXY[i][1]+"px";
    //     }
    //     var tem=d[to];
    //     d[to]=d[i];
    //     d[i]=tem;
    // }
}