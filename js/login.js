// 短信验证  账号切换  板块
var yzm = document.querySelector("#yzm");
var mima = document.querySelector("#mima");
var dx = document.querySelector(".dx");
var pw = document.querySelector(".pw");
mima.onclick = function(){
    dx.style.display = "none";
    pw.style.display = "block";
    this.style.color = "black";
    yzm.style.color = "gray";
}
yzm.onclick = function(){
    pw.style.display = "none";
    dx.style.display = "block";
    this.style.color = "black";
    mima.style.color = "gray";

}

// 账号  扫码  切换板块
var er = document.querySelector("#er");
var zh = document.querySelector("#zh");
var login = document.querySelector(".login");
var sm = document.querySelector(".sm");
er.onclick = function(){
    login.style.display = "none";
    sm.style.display = "block";
}
zh.onclick = function(){
    sm.style.display = "none";
    login.style.display = "block";


}



