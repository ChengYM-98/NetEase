// window.onload = () => {
//     let bestSale = document.getElementById("yx-aside-left");
//     let navSale = document.getElementById("nav-con");
   
//     window.onscroll = () =>{
//         let scrollTop = document.documentElement.scrollTop;
//         if(scrollTop > 500) {
//             bestSale.style.position = "fixed";
//             bestSale.style.top = "62px";
//         } else {
//             bestSale.style.position = "absolute";
//             bestSale.style.top = "610px";
//         }

//         if(scrollTop > 100) {
//             navSale.style.top = "0px";
//         } else {
//             navSale.style.top = "-50px"
//         }
//     }
// }

window.onload = function() {
    var bestSale = document.getElementById("yx-aside-left");
    var aside = document.getElementById('yx-aside-right');
    var navSale = document.getElementById("nav-con");
    window.onscroll = function() {

        var scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop);
        if(scrollTop > 550) {
            bestSale.style.position = "fixed";
            bestSale.style.top = "62px";

            aside.style.position = 'fixed';
            aside.style.top = "62px";


        } else {
            bestSale.style.position = "absolute";
            aside.style.position = 'absolute';
            bestSale.style.top = "610px";
            aside.style.top = "620px";
        }

        if(scrollTop > 100) {
            navSale.style.top = "0px";
        } else {
            navSale.style.top = "-50px"
        }
    }


    var div = document.getElementById("yx-img"),
        ul = document.getElementById("yx-img-item"),
        list = document.getElementById("list"),
        // lis = list.querySelectorAll('li'),
        lis = list.querySelectorAll("li"),
        left = document.getElementById('left-arrow'),
        right = document.getElementById('right-arrow'),
        index = 0,
        timer = null;

    //轮播图自动轮播
    function auto(){
        timer = setInterval(function(){
            index++;
            if(index >= lis.length){
                index = 0;
            }
            change(index)
        },2000)
    }
    auto();

    // 轮播函数，切换图片，切换原点
    function change(curIndex){
        // ul偏移距离，切换图片，改变ul上边距实现图片切换效果
        ul.style.marginLeft = -1400 * curIndex + "px";
        // 排他思想，切换圆点，让当前圆点添加on类名
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        lis[curIndex].className = "on";
        console.log("lis[curIndex]:"+curIndex);

        // 更新索引
        index = curIndex;
    }

    //当鼠标悬停
    div.onmouseenter = function(){
        div.style.cursor = "pointer";
        //鼠标移动到轮播区时，停止轮播
        clearInterval(timer);
        console.log("stop!!");
    }


    //离开时开启自动轮播
    div.onmouseleave = auto;
    //js避免onmouseover onmouseout多次触发
    
    // div.onmouseout=function(ev){
    //     var oEvent=ev||event;
    //     var oTo=oEvent.toElement||oEvent.relatedTarget;
    //     //其中oEvent.toElement兼容IE，chrome
    //     //oEvent.relatedTarget;兼容FF。
    //     if(this.contains(oTo)) return; //判断div是不是包含oTo,如果包含就返回
    //     auto;
    // }



    //鼠标滑动到圆点对应id上时，切换到对应图片
    for(var i = 0;i < lis.length;i++){
        lis[i].index = i;
        lis[i].onmouseover = function(){
            change(this.index);
        }
    }


    //右侧按钮
    right.addEventListener("click",function(){
        if(index == ul.children.length - 1){
            ul.style.marginLeft = 0;
            index = 0;
        }else{
            ul.style.marginLeft = -1400 * index + "px";
            index++;
        }
        console.log(ul.children.length);
 
        change(index);
    });

    //左侧按钮
    left.addEventListener('click',function(){
        if(index == 0){
            ul.style.marginLeft = -1400 *(index+2) + "px";
            index = ul.children.length - 1;
        }
        else{
            ul.style.marginLeft = 1400 *index + "px";
            index--;
        }

        change(index);
    })

}