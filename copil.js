window.onload=main;

function main(){
localStorage.numeTransmis="Anonim";
var mesaj=document.getElementById('mesaj');
mesaj.innerHTML="Scorul tau:"+localStorage.copilWins+" victorii si "+localStorage.copilDraws+" remize!";
var input=document.getElementById('nume');
input.onkeydown=function(e){
if(e.keyCode==13){

 localStorage.numeTransmis=input.value;
window.close();
}
}
}