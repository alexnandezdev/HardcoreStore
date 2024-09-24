let cart =[];
let total =0;

var cont=true;
document.getElementById("alerta").style.display="none";
document.getElementById("btnpay").onclick=function(){
    document.getElementById("alerta").style.display="";
    document.getElementById("btnpay").style.display="none";
    borroso();
}
document.getElementById("alerta").onclick=function(){
    document.getElementById("btnpay").style.display="";
    document.getElementById("alerta").style.display="none";
    borroso();
}
function borroso(){
    if(cont==true){
        document.getElementById("cardfoot").style.filter="blur(10px)";
        cont=false;
    }else{
        document.getElementById("cardfoot").style.filter="blur(0)";
        cont=true;
    }
}
