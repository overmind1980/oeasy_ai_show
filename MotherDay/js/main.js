/**
 * Created by Leon on 15/8/15.
 */

var pages = document.getElementsByClassName("page");
var curPage = 0;

window.onload = function(){
    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("touchstart",turnBegin);
    body.addEventListener("touchmove",turning);
    body.addEventListener("touchend",turnEnd);
}

var x,y;
var isTurning = false;

function turnBegin(){
    var touch = event.touches[0];
    x = touch.pageX;
    y = touch.pageY;
}

var x2,y2;

function turning(){
    event.preventDefault();
    var touch = event.touches[0];
    x2 = touch.pageX;
    y2 = touch.pageY;
}

function turnEnd(){
    if(!isTurning){
        if(y2 - y > 100){
            turnUp();
        }
        else if(y - y2 > 100){
            turnPage();
        }
        isTurning = true;
        setTimeout(function(){
            isTurning = false;
        },600);
    }
}

function turnPage(){
    pages[curPage].className = "page pt-page-moveToTop";//把当前页隐藏
    if(curPage < pages.length - 1){       //如果不是最后一页
        pages[curPage + 1].className = "page pt-page-moveFromBottom";
        curPage ++;
    }
    else{                                //如果是最后一页，则跳回首页
        pages[0].className = "page pt-page-moveFromBottom";
        curPage = 0;
    }
}

function turnUp(){
    pages[curPage].className = "page pt-page-moveToBottom";
    if(curPage > 0){
        pages[curPage - 1].className = "page pt-page-moveFromTop"
        curPage --;
    }
    else{
        pages[pages.length - 1].className = "page pt-page-moveFromTop"
        curPage = pages.length - 1;
    }
}