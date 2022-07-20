//点击返回顶部按钮
window.onscroll = function() {scrollFunction()};
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//下载OPPO商城
const text = document.getElementById('a');
const img = document.getElementById('tu');
        text.onmouseover = function(){
            img.style.display = 'block';
        }
        text.onmouseout = function(){
            img.style.display = 'none';
        }


// 关闭广告
var guan = document.getElementById('guan');
var guang = document.getElementById('guang');
guan.onclick = function(){
    guang.style.display = 'none';
}


//搜索框字体颜色变化
var tip = document.getElementById('tip');
tip.onfocus = function(){
    if(tip.placeholder === 'OPPO RENO 8'){
        this.style.color = 'black';
    }
}

//倒计时
var ocount = document.getElementById('count');
var spans = document.querySelector('#count').querySelectorAll('span');
clearInterval(timer);
var endTime = new Date('2022/07/30 00:00:00');//结束时间
var timer = null;//定时器 让他自己走
timer = setInterval(countTime,1000);
function countTime(){
        var nowTime = new Date();//现在时间
        var lastTime = parseInt((endTime - nowTime) / 1000);//剩余时间  未来-现在  返回的是秒数
        if(lastTime >= 0){//当倒计时不为0时
            var day = parseInt(lastTime/60/60/24);//剩余天
            day = day <10 ? '0'+ day : day;
            var hour = parseInt(lastTime/60/60%24);//时
            hour = hour <10 ? '0'+ hour : hour;
            var min = parseInt(lastTime/60%60);//分
            min = min <10 ? '0'+ min : min;
            var second = parseInt(lastTime%60);//秒
            second = second <10 ? '0'+ second : second;
            spans[0].innerHTML = day;
            spans[1].innerHTML = hour;
            spans[2].innerHTML = min;
            spans[3].innerHTML = second;
        }else{//当倒计时为0时 自己停下来
            clearInterval(timer);
        }
}



//tab选项卡
var spanes = document.querySelector('.tab_list').querySelectorAll('span');
var items = document.querySelectorAll('.item');
for(let i = 0;i<spanes.length;i++){
    spanes[i].setAttribute('index',i);
    spanes[i].onclick = function(){
        for(let i = 0;i<spanes.length;i++){
            spanes[i].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('index');
        console.log(index);
        for(let i = 0;i<items.length;i++){
            items[i].style.display = 'none';
        }
        items[index].style.display = "block";
    }
}











