window.onload=main;

function main(){


//MENIUL PRINCIPAL
//localStorage.clear();
meniuPrincipal();


//imaginea pentru pattern am pus-o aici ca aveam niste erori cand o puneam pe pagina de joc si nu mi-am dat seama de unde erau
//POZA NU SE VEDE PT CA ARE DISPLAY:NONE O FOLOSESC DOAR PENTRU PATTERN
var poza=document.createElement('img');
poza.setAttribute('src','caietMate.jpg');
poza.setAttribute('alt',' mathPattern');
poza.setAttribute('id','mate');
document.body.appendChild(poza);		
	

//ceasul
var time=document.createElement('DIV');
document.body.appendChild(time);
time.setAttribute("id","oraCurenta");
startTime();
};


function creazaPaginaDeJoc(jocNormal,dificultatea){
			var buttonContainer=document.getElementById('buttonContainer');
			document.body.removeChild(buttonContainer);		




             //BUTONUL DE  HOME
			var home=document.createElement("button");
			var textHome=document.createTextNode("Meniul Principal");
			home.appendChild(textHome);
			home.setAttribute('id','home');
			document.body.appendChild(home);
			home.onclick=homeButton;		
			
			
			// CANVAS+TABELA DE SCOR	
			var canvasContainer=document.createElement('DIV');
			canvasContainer.setAttribute('id','canvasContainer');
			var canvas=document.createElement('CANVAS');
			canvas.setAttribute('id','canvas');
			canvas.setAttribute('width','300');
			canvas.setAttribute('height','420');
			document.body.appendChild(canvasContainer);	
						//CREAZA TABELA DE SCOR + CLASAMENT DACA ESTE NECESAR
			if(jocNormal==true)	{
				creazaScorTip1()
			}
			else {
			creazaScorTip2()
			}		
			
			canvasContainer.appendChild(canvas);		
			//TRUE==JOC NORMAL    FALSE==CELALALT MOD
			creazaJoc(jocNormal,dificultatea); 		
			

			
}


function creazaScorTip1(){
			sessionStorage.calculator=0;
			sessionStorage.Jucator=0;
			sessionStorage.remize=0;
			var scor=document.createElement('P');
			scor.innerHTML="Calculator:"+sessionStorage.calculator +"	Jucator:"+sessionStorage.Jucator+"	Remize:"+sessionStorage.remize;
			setInterval(function(){
				scor.innerHTML="Calculator:"+sessionStorage.calculator +"	Jucator:"+sessionStorage.Jucator+" 	Remize:"+sessionStorage.remize;
			},1000);

			scor.setAttribute('id','scor');

			var canvasContainer=document.getElementById('canvasContainer');
			canvasContainer.appendChild(scor);
}

function creazaScorTip2(){

			sessionStorage.calculator=0;
			sessionStorage.Jucator=0;
			sessionStorage.remize=0;
			var scor=document.createElement('P');
			//ARE DELAY DE 1S DACA LAS DOAR IN SETINTERVAL
			scor.innerHTML="Castiguri:"+sessionStorage.Jucator+"		Remize:"+sessionStorage.remize;
			setInterval(function(){
				scor.innerHTML="Castiguri:"+sessionStorage.Jucator+"		Remize:"+sessionStorage.remize;
			},1000);
			scor.setAttribute('id','scor');
			var canvasContainer=document.getElementById('canvasContainer');
			canvasContainer.appendChild(scor);
			
			//Creaza  top5 scoruri pentru MOARTE SUBITA
			var ladderContainer=document.createElement('div');		
			ladderContainer.setAttribute('id','ladderContainer');
			
			var ladder0=document.createElement('p');
			ladder0.setAttribute('class','ladderTitle');
			ladder0.innerHTML="Clasament <br/> Victorii/Remize";
			ladderContainer.appendChild(ladder0);
			
			var ladder1=document.createElement('p');
			ladder1.setAttribute('id','ladder1');
			ladder1.setAttribute('class','ladder');
			ladder1.innerHTML="1)"+localStorage.numeNr1+"   "+localStorage.winsNr1+"/"+localStorage.drawsNr1;
			ladderContainer.appendChild(ladder1);
			
			
			var ladder2=document.createElement('p');
			ladder2.setAttribute('id','ladder2');
			ladder2.setAttribute('class','ladder');
			ladder2.innerHTML="2)"+localStorage.numeNr2+"   "+localStorage.winsNr2+"/"+localStorage.drawsNr2;
			ladderContainer.appendChild(ladder2);
			
			
			var ladder3=document.createElement('p');
			ladder3.setAttribute('id','ladder3');
			ladder3.setAttribute('class','ladder');
			ladder3.innerHTML="3)"+localStorage.numeNr3+"   "+localStorage.winsNr3+"/"+localStorage.drawsNr3;
			ladderContainer.appendChild(ladder3);
			
			var ladder4=document.createElement('p');
			ladder4.setAttribute('id','ladder4');
			ladder4.setAttribute('class','ladder');
			ladder4.innerHTML="4)"+localStorage.numeNr4+"   "+localStorage.winsNr4+"/"+localStorage.drawsNr4;
			ladderContainer.appendChild(ladder4);
			
			var ladder5=document.createElement('p');
			ladder5.setAttribute('id','ladder5');
			ladder5.setAttribute('class','ladder');
			ladder5.innerHTML="5)"+localStorage.numeNr5+"   "+localStorage.winsNr5+"/"+localStorage.drawsNr5;
			ladderContainer.appendChild(ladder5);
			
			document.body.appendChild(ladderContainer);
			
}


function reevaluareaClasamentului(){
var ales=false;
if(typeof  localStorage.numeNr1 =='undefined'){ 
	localStorage.numeNr1=localStorage.numeCurent;
	localStorage.winsNr1=localStorage.winsCurent;
	localStorage.drawsNr1=localStorage.drawsCurent;
	ales=true;
	}
if(typeof  localStorage.numeNr2 =='undefined' && ales==false){ 
	localStorage.numeNr2=localStorage.numeCurent;
	localStorage.winsNr2=localStorage.winsCurent;
	localStorage.drawsNr2=localStorage.drawsCurent;
	ales=true;
	}	
if(typeof  localStorage.numeNr3 =='undefined' && ales==false){ 
	localStorage.numeNr3=localStorage.numeCurent;
	localStorage.winsNr3=localStorage.winsCurent;
	localStorage.drawsNr3=localStorage.drawsCurent;
	ales=true;
	}	

if(typeof  localStorage.numeNr4 =='undefined' && ales==false){ 
	localStorage.numeNr4=localStorage.numeCurent;
	localStorage.winsNr4=localStorage.winsCurent;
	localStorage.drawsNr4=localStorage.drawsCurent;
	ales=true;
	}	
	
if(typeof  localStorage.numeNr5 =='undefined' && ales==false){ 
	localStorage.numeNr5=localStorage.numeCurent;
	localStorage.winsNr5=localStorage.winsCurent;
	localStorage.drawsNr5=localStorage.drawsCurent;
	ales=true;
	}		
/*	
if(ales==false){
var sum1=localStorage.winsNr5*3+localStorage.drawsNr5;
var sum2=localStorage.winsCurent*3+localStorage.drawsCurent;
if(sum1>sum2) { return;}
else{
		localStorage.numeNr5=localStorage.numeCurent;
		localStorage.winsNr5=localStorage.winsCurent;
		localStorage.drawsNr5=localStorage.drawsCurent;		
}
}*/
sorteazaStorage();

	
var ladder1=document.getElementById('ladder1');	
var ladder2=document.getElementById('ladder2');	
var ladder3=document.getElementById('ladder3');	
var ladder4=document.getElementById('ladder4');	
var ladder5=document.getElementById('ladder5');		



ladder1.innerHTML="1)"+localStorage.numeNr1+"   "+localStorage.winsNr1+"/"+localStorage.drawsNr1;
ladder2.innerHTML="2)"+localStorage.numeNr2+"   "+localStorage.winsNr2+"/"+localStorage.drawsNr2;
ladder3.innerHTML="3)"+localStorage.numeNr3+"   "+localStorage.winsNr3+"/"+localStorage.drawsNr3;
ladder4.innerHTML="4)"+localStorage.numeNr4+"   "+localStorage.winsNr4+"/"+localStorage.drawsNr4;
ladder5.innerHTML="5)"+localStorage.numeNr5+"   "+localStorage.winsNr5+"/"+localStorage.drawsNr5;
}



function sorteazaStorage(){
var sum1;
var sum2;
var sum3;
var sum4;
var sum5;


if(localStorage.winsNr1){sum1=localStorage.winsNr1*3+localStorage.drawsNr1;}
if(localStorage.winsNr2){sum2=localStorage.winsNr2*3+localStorage.drawsNr2;}
if(localStorage.winsNr3){sum3=localStorage.winsNr3*3+localStorage.drawsNr3;}
if(localStorage.winsNr4){sum4=localStorage.winsNr4*3+localStorage.drawsNr4;}
if(localStorage.winsNr5){sum5=localStorage.winsNr5*3+localStorage.drawsNr5;}


var tempNume;
var tempWins;
var tempDraws;
var sumTemp;
if(localStorage.winsNr5){
  if(sum5>sum4) {
        tempNume=localStorage.numeNr4;
		tempWins=localStorage.winsNr4;
		tempdraws=localStorage.drawsNr4;
		
		localStorage.numeNr4=localStorage.numeNr5;
		localStorage.winsNr4=localStorage.winsNr5;
		localStorage.drawsNr4=localStorage.drawsNr5;
		
		localStorage.numeNr5=tempNume;
		localStorage.winsNr5=tempWins;
		localStorage.drawsNr5=tempdraws;		
		
		sumTemp=sum4;
		sum4=sum5;
		sum5=sumTemp;
		}
	}

if(localStorage.winsNr4){
  if(sum4>sum3) {
        tempNume=localStorage.numeNr3;
		tempWins=localStorage.winsNr3;
		tempdraws=localStorage.drawsNr3;
		
		localStorage.numeNr3=localStorage.numeNr4;
		localStorage.winsNr3=localStorage.winsNr4;
		localStorage.drawsNr3=localStorage.drawsNr4;
		
		localStorage.numeNr4=tempNume;
		localStorage.winsNr4=tempWins;
		localStorage.drawsNr4=tempdraws;		
		
		
		sumTemp=sum3;
		sum3=sum4;
		sum4=sumTemp;
		}
	}	
	

if(localStorage.winsNr3){
  if(sum3>sum2) {
        tempNume=localStorage.numeNr2;
		tempWins=localStorage.winsNr2;
		tempdraws=localStorage.drawsNr2;
		
		localStorage.numeNr2=localStorage.numeNr3;
		localStorage.winsNr2=localStorage.winsNr3;
		localStorage.drawsNr2=localStorage.drawsNr3;
		
		localStorage.numeNr3=tempNume;
		localStorage.winsNr3=tempWins;
		localStorage.drawsNr3=tempdraws;		
		
		
		sumTemp=sum2;
		sum2=sum3;
		sum3=sumTemp;
		}
	}

if(localStorage.winsNr2){
  if(sum2>sum1) {
        tempNume=localStorage.numeNr1;
		tempWins=localStorage.winsNr1;
		tempdraws=localStorage.drawsNr1;
		
		localStorage.numeNr1=localStorage.numeNr2;
		localStorage.winsNr1=localStorage.winsNr2;
		localStorage.drawsNr1=localStorage.drawsNr2;
		
		localStorage.numeNr2=tempNume;
		localStorage.winsNr2=tempWins;
		localStorage.drawsNr2=tempdraws;		
		
	    sumTemp=sum1;
		sum1=sum2;
		sum2=sumTemp;
		}
	}
	
	
}


function alegeDificultatea(jocNormal){
var buttonContainer=document.getElementById('buttonContainer');
buttonContainer.innerHTML='';
var paragraf=document.createElement('p');
var dificultatea1=document.createElement('button');
var dificultatea2=document.createElement('button');
var dificultatea3=document.createElement('button');

paragraf.innerHTML="Alege Dificultatea";
paragraf.setAttribute('class','titlu');

dificultatea1.setAttribute("class","button");
dificultatea2.setAttribute("class","button");
dificultatea3.setAttribute("class","button");
var txt=document.createTextNode('Usor');
dificultatea1.appendChild(txt);
txt=document.createTextNode('Intermediar');
dificultatea2.appendChild(txt);

txt=document.createTextNode('Expert');
dificultatea3.appendChild(txt);

buttonContainer.appendChild(paragraf);
buttonContainer.appendChild(dificultatea1);
buttonContainer.appendChild(dificultatea2);
buttonContainer.appendChild(dificultatea3);

dificultatea1.onclick=function(){
creazaPaginaDeJoc(jocNormal,"usor");
}
dificultatea2.onclick=function(){
creazaPaginaDeJoc(jocNormal,"intermediar");
}
dificultatea3.onclick=function(){
creazaPaginaDeJoc(jocNormal,"expert");
}

//return ales;
}



//JOCUL PROPIU ZIS
function creazaJoc(jocNormal,dificultatea){
	var joc=new xSi0(jocNormal,dificultatea);
	xSi0.prototype.reset=reset;
	xSi0.prototype.verificaVictorie= verificaVictorie;
	xSi0.prototype.addListener= addListener;
	xSi0.prototype.Listener= Listener;
	xSi0.prototype.getMousePos=getMousePos;
	joc.addListener();
}

function meniuPrincipal(){
	var buttonContainer=document.createElement('DIV');
	buttonContainer.setAttribute("id","buttonContainer");
	document.body.appendChild(buttonContainer);
	
	var paragraf=document.createElement('p');
	paragraf.setAttribute('class','titlu');
	paragraf.innerHTML="Alege Tipul De Joc";
	buttonContainer.appendChild(paragraf);
	
	
	var button1=document.createElement('BUTTON');
	button1.setAttribute("class","button");
	var text=document.createTextNode("Joc Standard");
	button1.appendChild(text);
	buttonContainer.appendChild(button1);
	var button2=document.createElement('BUTTON');
	button2.setAttribute("class","button");
    text=document.createTextNode("Moarte Subita");
	button2.appendChild(text);
	buttonContainer.appendChild(button2);
	

	
	
	//TIPUL 1 DE JOC
	button1.onclick=function(){
	//TRUE==JOC NORMAL    FALSE==CELALALT MOD
		alegeDificultatea(true);
	
		}
	//TIPUL 2 DE JOC	
	button2.onclick=function(){
	//TRUE==JOC NORMAL    FALSE==CELALALT MOD
		alegeDificultatea(false);
		}
}


function homeButton(){
var canvasContainer=document.getElementById('canvasContainer');
document.body.removeChild(canvasContainer);
var home=document.getElementById('home');
document.body.removeChild(home);
var informatiiContainer=document.getElementById('informatiiContainer'); 
document.body.removeChild(informatiiContainer);
var ladderContainer=document.getElementById('ladderContainer');
if(ladderContainer)  document.body.removeChild(ladderContainer);
meniuPrincipal();
}


function checkTime(i) {
    if (i<10) {i = "0" + i};  // ADAUG UN  0 IN FATA NUMERELOR  < 10 PT SECUNDE SI MINUTE
    return i;
}
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
	var time=document.getElementById('oraCurenta');
    time.innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},1000);
}














/*NU O STERGE*/
function dummy(){

}
function getMousePos(event) {
        var drept = this.canvas.getBoundingClientRect();
        return {
          x: event.clientX - drept.left,
          y: event.clientY - drept.top
		  
        };
      }	 

function addListener(){
var context=this;
this.canvas.addEventListener('click',function(event){
context.canvas.removeEventListener('click', arguments.callee);
context.Listener(event);
context.addListener();
}); 
}
	  
	  
	  
function xSi0(jocNormall,dificultatea){
	//INFORMATII
	var informatiiContainer=document.createElement('div');
	informatiiContainer.setAttribute('id','informatiiContainer');
	var paragraf1=document.createElement('p');
	paragraf1.setAttribute('class','headInformatii');
	paragraf1.innerHTML='INFORMATII';
		informatiiContainer.appendChild(paragraf1);

	var paragraf2=document.createElement('p');
	paragraf2.setAttribute('class','paragrafInformatii');
	var tipDeJoc;
	var informatiiTipDeJoc
	if(jocNormall==true) {tipDeJoc="normal"; informatiiTipDeJoc="Rezultatul fiecarui meci va fii contorizat, indiferent de rezultat contorul nu va fii resetat decat la alegerea jucatorului";}
		else {tipDeJoc="moarte subita";informatiiTipDeJoc="Cat timp jucatorul castiga sau ajunge la  remiza rezultatul este contorizat.Cand jucatorul pierde daca scorul curent este mai mare decat cel mai mare scor de pana acum  el va fii salvat si cel curent resetat.<span>Clasamentul</span> este creat dupa urmatoarea formula : victoriile sunt 3 puncte fiecare ,remizele 1 punct fiecare"}
	
	paragraf2.innerHTML='<span>Dificultatea</span>: '+dificultatea+'<br/><span>Tip de joc</span>:   ' +tipDeJoc+"<br/><span>Informatii despre tipul de joc</span>:  "+informatiiTipDeJoc;
	informatiiContainer.appendChild(paragraf2);
	document.body.appendChild(informatiiContainer);





this.dificultate=new String(dificultatea);
this.jocNormal=jocNormall;
this.canvas=document.getElementById('canvas');
this.ctx=this.canvas.getContext("2d");
this.img=document.getElementById('mate');
this.pattern=this.ctx.createPattern(this.img,'repeat');
/*incepeJucator spune daca Jucator joaca cu X si are prima miscare daca este true si joaca cu 0 si are a 2-a miscare daca este false*/
this.incepeJucator=true;
/*JucatorUL ARE VALOAREA 0 IN TABLA SI CALCULATORUL ARE VALOAREA 1 IN TABLA CASUTELE NEALESE AU VALOAREA -1*/
this.tabla = new Array();
for(i=1;i<10;i++){
	this.tabla[i]=-1;
}

//informatii pentru strategia de expert
this.miscariPlayer=new Array();
this.rundaCurenta=1;

//SUNT INFORMATII PENTRU STRATEGIA DE EXPERT DE CARE AM NEVOIE SI IMI SPUNE DACA PUNAND PLAYERUL A 2/3 LEA X POATE CASTIGA RUNDA URMATOARE
this.al2leaXcastiga=false;
this.al3leaXcastiga=false;
this.incoltit=false;

	//SPUN  CU CE JOACA PLAYERUL X SAU 0 IN DREPTUNGHIUL CU INFORMATII
	var informatiiContainer=document.getElementById('informatiiContainer');
	var paragraf=document.createElement('p');
	paragraf.setAttribute('class','paragrafInformatii');
	paragraf.setAttribute('id','simbol');
	if(this.incepeJucator==true)paragraf.innerHTML="<span>Acum joci cu </span>: X";
		else paragraf.innerHTML="<span>Acum joci cu </span>: O";
	informatiiContainer.appendChild(paragraf);


this.ctx.fillStyle=this.pattern;
this.ctx.lineCap="round";
this.ctx.lineWidth=6;

this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
this.ctx.fillStyle="white";
this.ctx.strokeStyle="white";
/*LINIILE*/
this.ctx.beginPath();
this.ctx.moveTo(100,0);
this.ctx.lineTo(100,300);
this.ctx.moveTo(200,0);
this.ctx.lineTo(200,300);
this.ctx.moveTo(0,100);
this.ctx.lineTo(300,100);
this.ctx.moveTo(0,200);
this.ctx.lineTo(300,200);
this.ctx.stroke();

/*CELE 9 PATRATE*/
this.ctx.fillStyle=this.pattern;
this.ctx.fillRect(0,0,97,97); /*1*/
this.ctx.fillRect(103,0,94,97); /*2*/
this.ctx.fillRect(203,0,97,97); /*3*/
this.ctx.fillRect(0,103,97,94); /*4*/
this.ctx.fillRect(103,103,94,94); /*5*/
this.ctx.fillRect(203,103,97,94); /*6*/
this.ctx.fillRect(0,203,97,97); /*7*/
this.ctx.fillRect(103,203,94,97); /*8*/
this.ctx.fillRect(203,203,97,97); /*9*/
/*context.fillRect(x,y,width,height);*/

/*BUTONU DE RESET*/
this.ctx.strokeStyle="white"
this.ctx.font="30px Verdana";
this.ctx.fillStyle="white";
this.ctx.fillText("Reset",100,400);
if(this.incepeJucator!=true){

var mutareComputer=strategie(this.tabla,this.incepeJucator,this.dificultate,this.miscariPlayer,this.rundaCurenta,this.al2leaXcastiga,this.al3leaXcastiga,this.incoltit);
this.rundaCurenta=this.rundaCurenta+1;
	
/*AFISAREA REZULTATULUI ALES DE CALCULATOR*/

switch(mutareComputer){
case 1:
		if(this.incepeJucator==false){		
		this.ctx.beginPath(); 
		this.ctx.moveTo(7,7);//+7 +7
		this.ctx.lineTo(90,90);//-7 -7
		this.ctx.moveTo(90,7);//-7 +7
		this.ctx.lineTo(7,90);//+7 -7
		this.ctx.stroke();
		this.tabla[1]=1;	
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(50,50,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[1]=1;
		}
break;
case 2:
		if(this.incepeJucator==false){	
		this.ctx.beginPath(); 
		this.ctx.moveTo(110,7);//+7 +7
		this.ctx.lineTo(190,90);//-7 -7
		this.ctx.moveTo(190,7);//-7 +7
		this.ctx.lineTo(110,90);//+7 -7
		this.ctx.stroke();
		this.tabla[2]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,50,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[2]=1;
		}
break;
case 3:
		if(this.incepeJucator==false){	
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,7);//+7 +7
		this.ctx.lineTo(290,90);//-7 -7
		this.ctx.moveTo(290,7);//-7 +7
		this.ctx.lineTo(210,90);//+7 -7
		this.ctx.stroke();
		this.tabla[3]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,50,40,0,2*Math.PI);
		this.ctx.stroke();		
		this.tabla[3]=1;
		}
break;
case 4:
		if(this.incepeJucator==false){
		this.ctx.beginPath();
		this.ctx.moveTo(7,110);
		this.ctx.lineTo(90,190);
		this.ctx.moveTo(90,110);
		this.ctx.lineTo(7,190);
		this.ctx.stroke();
		this.tabla[4]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(50,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[4]=1;
		}
break;
case 5:
		if(this.incepeJucator==false){
		this.ctx.beginPath();
		this.ctx.moveTo(110,110);
		this.ctx.lineTo(190,190);
		this.ctx.moveTo(190,110);
		this.ctx.lineTo(110,190);
		this.ctx.stroke();
		this.tabla[5]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[5]=1;
		}
break;
case 6:
		if(this.incepeJucator==false){
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,110);
		this.ctx.lineTo(290,190);
		this.ctx.moveTo(290,110);
		this.ctx.lineTo(210,190);
		this.ctx.stroke();
		this.tabla[6]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[6]=1;
		}

break;
case 7:
		if(this.incepeJucator==false){
		this.ctx.beginPath(); 
		this.ctx.moveTo(7,210);
		this.ctx.lineTo(90,290);
		this.ctx.moveTo(90,210);
		this.ctx.lineTo(7,290);
		this.ctx.stroke();
		this.tabla[7]=1;
		}
	else{
		this.ctx.beginPath();
		this.ctx.arc(50,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[7]=1;
	}
break;
case 8:
		if(this.incepeJucator==false){
		this.ctx.beginPath();
		this.ctx.moveTo(110,210);
		this.ctx.lineTo(190,290); 
		this.ctx.moveTo(190,210);
		this.ctx.lineTo(110,290);
		this.ctx.stroke();
		this.tabla[8]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[8]=1;
		}
break;

case 9:
		if(this.incepeJucator==false){
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,210);
		this.ctx.lineTo(290,290); 
		this.ctx.moveTo(290,210);
		this.ctx.lineTo(210,290);
		this.ctx.stroke();
		this.tabla[9]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[9]=1;
		}
break;
}
}
}

function reset(){
//INVERSEZ CINE INCEPE
   if(this.incepeJucator==true){ this.incepeJucator=false;}
	else{this.incepeJucator=true;}

//ACTUALIZEZ SIMBOLUL CURENT IN TABELA DE INFORMATII
	paragraf=document.getElementById('simbol');
	if(this.incepeJucator==true)paragraf.innerHTML="<span>Acum joci cu </span>: X";
		else paragraf.innerHTML="<span>Acum joci cu </span>: O";

   this.rundaCurenta=1;
   //SUNT INFORMATII PENTRU STRATEGIA DE EXPERT DE CARE AM NEVOIE SI IMI SPUNE DACA PUNAND PLAYERUL A 2/3 LEA X POATE CASTIGA RUNDA URMATOARE
this.al2leaXcastiga=false;
this.al3leaXcastiga=false;
this.incoltit=false;

	for(i=1;i<10;i++){
		this.tabla[i]=-1;
	}
	this.ctx.strokeStyle="white";
	this.ctx.beginPath()
	this.ctx.lineWidth=6;
	this.ctx.moveTo(100,0);
	this.ctx.lineTo(100,300);
	this.ctx.moveTo(200,0);
	this.ctx.lineTo(200,300);
	this.ctx.moveTo(0,100);
	this.ctx.lineTo(300,100);
	this.ctx.moveTo(0,200);
	this.ctx.lineTo(300,200);
	this.ctx.stroke();
	this.ctx.fillStyle=this.pattern;
	this.ctx.fillRect(0,0,97,97); /*1*/
	this.ctx.fillRect(103,0,94,97); /*2*/
	this.ctx.fillRect(203,0,97,97); /*3*/
	this.ctx.fillRect(0,103,97,94); /*4*/
	this.ctx.fillRect(103,103,94,94); /*5*/
	this.ctx.fillRect(203,103,97,94); /*6*/
	this.ctx.fillRect(0,203,97,97); /*7*/
	this.ctx.fillRect(103,203,94,97); /*8*/
	this.ctx.fillRect(203,203,97,97); /*9*/
	this.ctx.strokeStyle="white"
	if(this.incepeJucator!=true){
var mutareComputer=strategie(this.tabla,this.incepeJucator,this.dificultate,this.miscariPlayer,this.rundaCurenta,this.al2leaXcastiga,this.al3leaXcastiga,this.incoltit);
this.rundaCurenta=this.rundaCurenta+1;
/*AFISAREA REZULTATULUI ALES DE CALCULATOR*/

switch(mutareComputer){
case 1:
		if(this.incepeJucator==false){		
		this.ctx.beginPath(); 
		this.ctx.moveTo(7,7);//+7 +7
		this.ctx.lineTo(90,90);//-7 -7
		this.ctx.moveTo(90,7);//-7 +7
		this.ctx.lineTo(7,90);//+7 -7
		this.ctx.stroke();
		this.tabla[1]=1;	
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(50,50,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[1]=1;
		}
break;
case 2:
		if(this.incepeJucator==false){	
		this.ctx.beginPath(); 
		this.ctx.moveTo(110,7);//+7 +7
		this.ctx.lineTo(190,90);//-7 -7
		this.ctx.moveTo(190,7);//-7 +7
		this.ctx.lineTo(110,90);//+7 -7
		this.ctx.stroke();
		this.tabla[2]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,50,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[2]=1;
		}
break;
case 3:
		if(this.incepeJucator==false){	
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,7);//+7 +7
		this.ctx.lineTo(290,90);//-7 -7
		this.ctx.moveTo(290,7);//-7 +7
		this.ctx.lineTo(210,90);//+7 -7
		this.ctx.stroke();
		this.tabla[3]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,50,40,0,2*Math.PI);
		this.ctx.stroke();		
		this.tabla[3]=1;
		}
break;
case 4:
		if(this.incepeJucator==false){
		this.ctx.beginPath();
		this.ctx.moveTo(7,110);
		this.ctx.lineTo(90,190);
		this.ctx.moveTo(90,110);
		this.ctx.lineTo(7,190);
		this.ctx.stroke();
		this.tabla[4]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(50,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[4]=1;
		}
break;
case 5:
		if(this.incepeJucator==false){
		this.ctx.beginPath();
		this.ctx.moveTo(110,110);
		this.ctx.lineTo(190,190);
		this.ctx.moveTo(190,110);
		this.ctx.lineTo(110,190);
		this.ctx.stroke();
		this.tabla[5]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[5]=1;
		}
break;
case 6:
		if(this.incepeJucator==false){
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,110);
		this.ctx.lineTo(290,190);
		this.ctx.moveTo(290,110);
		this.ctx.lineTo(210,190);
		this.ctx.stroke();
		this.tabla[6]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[6]=1;
		}

break;
case 7:
		if(this.incepeJucator==false){
		this.ctx.beginPath(); 
		this.ctx.moveTo(7,210);
		this.ctx.lineTo(90,290);
		this.ctx.moveTo(90,210);
		this.ctx.lineTo(7,290);
		this.ctx.stroke();
		this.tabla[7]=1;
		}
	else{
		this.ctx.beginPath();
		this.ctx.arc(50,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[7]=1;
	}
break;
case 8:
		if(this.incepeJucator==false){
		this.ctx.beginPath();
		this.ctx.moveTo(110,210);
		this.ctx.lineTo(190,290); 
		this.ctx.moveTo(190,210);
		this.ctx.lineTo(110,290);
		this.ctx.stroke();
		this.tabla[8]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[8]=1;
		}
break;

case 9:
		if(this.incepeJucator==false){
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,210);
		this.ctx.lineTo(290,290); 
		this.ctx.moveTo(290,210);
		this.ctx.lineTo(210,290);
		this.ctx.stroke();
		this.tabla[9]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[9]=1;
		}
break;
}
}
}


function verificaVictorie(){


if(this.tabla[1]!=-1 && this.tabla[1]==this.tabla[2] &&this.tabla[2]==this.tabla[3]) return this.tabla[1]+1; 
if(this.tabla[4]!=-1 && this.tabla[4]==this.tabla[5] &&this.tabla[5]==this.tabla[6]) return this.tabla[4]+1; 
if(this.tabla[7]!=-1 && this.tabla[7]==this.tabla[8] &&this.tabla[8]==this.tabla[9]) return this.tabla[7]+1; 
if(this.tabla[1]!=-1 && this.tabla[1]==this.tabla[4] &&this.tabla[4]==this.tabla[7]) return this.tabla[1]+1; 
if(this.tabla[2]!=-1 && this.tabla[2]==this.tabla[5] &&this.tabla[5]==this.tabla[8]) return this.tabla[2]+1; 
if(this.tabla[3]!=-1 && this.tabla[3]==this.tabla[6] &&this.tabla[6]==this.tabla[9]) return this.tabla[3]+1; 
if(this.tabla[1]!=-1 && this.tabla[1]==this.tabla[5] &&this.tabla[5]==this.tabla[9]) return this.tabla[1]+1; 
if(this.tabla[3]!=-1 && this.tabla[3]==this.tabla[5] &&this.tabla[5]==this.tabla[7]) return this.tabla[3]+1; 


var remize=true;
for(i=1;i<10;i++)
if(this.tabla[i]==-1) remize=false;
if(remize==true) return 3;

return -1;
}


//EVENT LISTENER
function  Listener(event){
var mousePos =this.getMousePos(event);
this.ctx.strokeStyle="white"
/*Reset*/

this.ctx.beginPath();

this.ctx.rect(100,370,100,100);
if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
    sessionStorage.Jucator=0;
	sessionStorage.calculator=0;
	sessionStorage.remize=0;
	this.reset();
	return;
};




/*CASUTA ALEASA DE Jucator*/
/*PATRATUL 1*/
//clickPeCasute IMI SPUNE DACA AM DAT CLICK PE O CASUTA DEFINITA MAI JOS. DACA NU , DAM RETURN FUNCTIEI
var clickPeCasute=false;
	this.ctx.beginPath();
	this.ctx.rect(0,0,97,97); 
if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
	if(this.tabla[1]==-1){
		if(this.incepeJucator==true){		
		this.ctx.beginPath(); 
		this.ctx.moveTo(7,7);//+7 +7
		this.ctx.lineTo(90,90);//-7 -7
		this.ctx.moveTo(90,7);//-7 +7
		this.ctx.lineTo(7,90);//+7 -7
		this.ctx.stroke();
		this.tabla[1]=0;	
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(50,50,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[1]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=1;
		}
	}
	else {
	alert('NU SE POATE');return;
	}	
	
}
/*PATRATUL 2*/
this.ctx.beginPath();
this.ctx.rect(103,0,94,97); 

if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
	if(this.tabla[2]==-1){
		if(this.incepeJucator==true){	
		this.ctx.beginPath(); 
		this.ctx.moveTo(110,7);//+7 +7
		this.ctx.lineTo(190,90);//-7 -7
		this.ctx.moveTo(190,7);//-7 +7
		this.ctx.lineTo(110,90);//+7 -7
		this.ctx.stroke();
		this.tabla[2]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=2;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,50,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[2]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=2;
		}
	}
	else {
	alert('NU SE POATE');return;
	}
}	
	/*PATRATUL 3*/
this.ctx.beginPath();
this.ctx.rect(203,0,97,97); 

if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
	if(this.tabla[3]==-1){		
		if(this.incepeJucator==true){	
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,7);//+7 +7
		this.ctx.lineTo(290,90);//-7 -7
		this.ctx.moveTo(290,7);//-7 +7
		this.ctx.lineTo(210,90);//+7 -7
		this.ctx.stroke();
		this.tabla[3]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=3;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,50,40,0,2*Math.PI);
		this.ctx.stroke();		
		this.tabla[3]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=3;
		}
	}
	else {
	alert('NU SE POATE');return;
	}
}


	/*PATRATUL 4*/
this.ctx.beginPath();
this.ctx.rect(0,103,97,94); 		
if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
	if(this.tabla[4]==-1){	
		if(this.incepeJucator==true){
		this.ctx.beginPath();
		this.ctx.moveTo(7,110);
		this.ctx.lineTo(90,190);
		this.ctx.moveTo(90,110);
		this.ctx.lineTo(7,190);
		this.ctx.stroke();
		this.tabla[4]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=4;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(50,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[4]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=4;
		}
	}
	else {
	alert('NU SE POATE');return;
	}		
}
	
/*PATRATUL 5*/
this.ctx.beginPath();
this.ctx.rect(103,103,94,94); 

if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
	if(this.tabla[5]==-1){	
		if(this.incepeJucator==true){
		this.ctx.beginPath();
		this.ctx.moveTo(110,110);
		this.ctx.lineTo(190,190);
		this.ctx.moveTo(190,110);
		this.ctx.lineTo(110,190);
		this.ctx.stroke();
		this.tabla[5]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=5;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[5]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=5;
		}
	}
	else {
	alert('NU SE POATE');return;
	}	
}
 /*PATRATUL 6*/
this.ctx.beginPath();
this.ctx.rect(203,103,97,94);
if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
	if(this.tabla[6]==-1){	
		if(this.incepeJucator==true){
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,110);
		this.ctx.lineTo(290,190);
		this.ctx.moveTo(290,110);
		this.ctx.lineTo(210,190);
		this.ctx.stroke();
		this.tabla[6]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=6;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[6]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=6;
		}
	}
	else{
	alert('NU SE POATE');return;
	}
};
/*PATRATUL 7*/
this.ctx.beginPath();
this.ctx.rect(0,203,97,97); 

if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
	if(this.tabla[7]==-1){	
		if(this.incepeJucator==true){
		this.ctx.beginPath(); 
		this.ctx.moveTo(7,210);
		this.ctx.lineTo(90,290);
		this.ctx.moveTo(90,210);
		this.ctx.lineTo(7,290);
		this.ctx.stroke();
		this.tabla[7]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=7;
		}
	else{
		this.ctx.beginPath();
		this.ctx.arc(50,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[7]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=7;
	}	
	}
	else{
	alert('NU SE POATE');return;
	}
};
/*PATRATUL 8*/
this.ctx.beginPath();
this.ctx.rect(103,203,94,97); 

if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
	if(this.tabla[8]==-1){
		if(this.incepeJucator==true){
		this.ctx.beginPath();
		this.ctx.moveTo(110,210);
		this.ctx.lineTo(190,290); 
		this.ctx.moveTo(190,210);
		this.ctx.lineTo(110,290);
		this.ctx.stroke();
		this.tabla[8]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=8;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[8]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=8;
		}
	}	
	else{
	alert('NU SE POATE');return;
	}
};
/*PATRATUL 9*/
this.ctx.beginPath();
this.ctx.rect(203,203,97,97); 

if (this.ctx.isPointInPath(mousePos.x,mousePos.y)){
	if(this.tabla[9]==-1){
		if(this.incepeJucator==true){
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,210);
		this.ctx.lineTo(290,290); 
		this.ctx.moveTo(290,210);
		this.ctx.lineTo(210,290);
		this.ctx.stroke();
		this.tabla[9]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=9;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[9]=0;
		clickPeCasute=true;
		this.miscariPlayer[this.rundaCurenta]=9;
		}
	}
	else{
	alert('NU SE POATE');return;
	}
}
if(clickPeCasute==false){return;}
/*REZULTATUL RUNDEI DUPA ALEGEREA JucatorULUI */
var verifica=this.verificaVictorie();
if(verifica!=-1) {
	if(verifica==3) {
		alert('remiza');
		sessionStorage.remize=Number(sessionStorage.remize )+1;
		this.reset();
		return;
	}
	else{
		alert('victorie pentru Jucator '); 
		sessionStorage.Jucator=Number(sessionStorage.Jucator)+1;
		this.reset();
		return;
	}
}	
if(this.incepeJucator==true && this.rundaCurenta==2){
	  var rezultat=castigaRundaUrm(this.tabla,0);
		if(rezultat!=-1) this.al2leaXcastiga=true;
}
if(this.incepeJucator==true && this.rundaCurenta==3){
	  var rezultat=castigaRundaUrm(this.tabla,0);
		if(rezultat!=-1) this.al3leaXcastiga=true;
}

if(this.incepeJucator==true && this.rundaCurenta==2){
	
	 if(this.miscariPlayer[1]==4 && this.miscariPlayer[2]==2) this.incoltit=true;
	 if(this.miscariPlayer[2]==4 && this.miscariPlayer[1]==2) this.incoltit=true;
	 if(this.miscariPlayer[1]==2 && this.miscariPlayer[2]==6) this.incoltit=true; 
	 if(this.miscariPlayer[2]==2 && this.miscariPlayer[1]==6) this.incoltit=true; 
	 if(this.miscariPlayer[1]==4 && this.miscariPlayer[2]==8) this.incoltit=true; 
	 if(this.miscariPlayer[2]==4 && this.miscariPlayer[1]==8) this.incoltit=true;  
     if(this.miscariPlayer[1]==6 && this.miscariPlayer[2]==8) this.incoltit=true;    
	 if(this.miscariPlayer[2]==6 && this.miscariPlayer[1]==8) this.incoltit=true;    
}
//COMPUTERUL ISI ALEGE URMATOAREA MISCARE
var mutareComputer=strategie(this.tabla,this.incepeJucator,this.dificultate,this.miscariPlayer,this.rundaCurenta,this.al2leaXcastiga,this.al3leaXcastiga,this.incoltit);
this.rundaCurenta=this.rundaCurenta+1;
/*Math.floor((Math.random()*100))%9+1;
while(this.tabla[mutareComputer]!=-1){
	mutareComputer=Math.floor((Math.random()*100))%9+1;
	}
*/

switch(mutareComputer){
case 1:
		if(this.incepeJucator==false){		
		this.ctx.beginPath(); 
		this.ctx.moveTo(7,7);//+7 +7
		this.ctx.lineTo(90,90);//-7 -7
		this.ctx.moveTo(90,7);//-7 +7
		this.ctx.lineTo(7,90);//+7 -7
		this.ctx.stroke();
		this.tabla[1]=1;	
		
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(50,50,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[1]=1;
		}
break;
case 2:
		if(this.incepeJucator==false){	
		this.ctx.beginPath(); 
		this.ctx.moveTo(110,7);//+7 +7
		this.ctx.lineTo(190,90);//-7 -7
		this.ctx.moveTo(190,7);//-7 +7
		this.ctx.lineTo(110,90);//+7 -7
		this.ctx.stroke();
		this.tabla[2]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,50,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[2]=1;
		}
break;
case 3:
		if(this.incepeJucator==false){	
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,7);//+7 +7
		this.ctx.lineTo(290,90);//-7 -7
		this.ctx.moveTo(290,7);//-7 +7
		this.ctx.lineTo(210,90);//+7 -7
		this.ctx.stroke();
		this.tabla[3]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,50,40,0,2*Math.PI);
		this.ctx.stroke();		
		this.tabla[3]=1;
		}
break;
case 4:
		if(this.incepeJucator==false){
		this.ctx.beginPath();
		this.ctx.moveTo(7,110);
		this.ctx.lineTo(90,190);
		this.ctx.moveTo(90,110);
		this.ctx.lineTo(7,190);
		this.ctx.stroke();
		this.tabla[4]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(50,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[4]=1;
		}
break;
case 5:
		if(this.incepeJucator==false){
		this.ctx.beginPath();
		this.ctx.moveTo(110,110);
		this.ctx.lineTo(190,190);
		this.ctx.moveTo(190,110);
		this.ctx.lineTo(110,190);
		this.ctx.stroke();
		this.tabla[5]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[5]=1;
		}
break;
case 6:
		if(this.incepeJucator==false){
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,110);
		this.ctx.lineTo(290,190);
		this.ctx.moveTo(290,110);
		this.ctx.lineTo(210,190);
		this.ctx.stroke();
		this.tabla[6]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,150,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[6]=1;
		}

break;
case 7:
		if(this.incepeJucator==false){
		this.ctx.beginPath(); 
		this.ctx.moveTo(7,210);
		this.ctx.lineTo(90,290);
		this.ctx.moveTo(90,210);
		this.ctx.lineTo(7,290);
		this.ctx.stroke();
		this.tabla[7]=1;
		}
	else{
		this.ctx.beginPath();
		this.ctx.arc(50,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[7]=1;
	}
break;
case 8:
		if(this.incepeJucator==false){
		this.ctx.beginPath();
		this.ctx.moveTo(110,210);
		this.ctx.lineTo(190,290); 
		this.ctx.moveTo(190,210);
		this.ctx.lineTo(110,290);
		this.ctx.stroke();
		this.tabla[8]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(150,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[8]=1;
		}
break;

case 9:
		if(this.incepeJucator==false){
		this.ctx.beginPath(); 
		this.ctx.moveTo(210,210);
		this.ctx.lineTo(290,290); 
		this.ctx.moveTo(290,210);
		this.ctx.lineTo(210,290);
		this.ctx.stroke();
		this.tabla[9]=1;
		}
		else{
		this.ctx.beginPath();
		this.ctx.arc(250,250,40,0,2*Math.PI);
		this.ctx.stroke();
		this.tabla[9]=1;
		}
break;
}
/*REZULTATUL RUNDEI DUPA ALEGEREA CALCULATORULUI*/
var verifica=this.verificaVictorie();
if(verifica!=-1) {
	if(verifica==3) {
		alert('remiza');
		sessionStorage.remize=Number(sessionStorage.remize )+1;
		this.reset();
		return;
	}
	else{
		
		if(this.jocNormal==true){
			alert('victorie pentru Calculator '); 
			sessionStorage.calculator=Number(sessionStorage.calculator )+1;
		}
		else{
		alert('Ai pierdut.Scorul tau este: '+sessionStorage.Jucator+" victorii si "+sessionStorage.remize+" remize"); 
		if(typeof  localStorage.numeNr5 =='undefined' || typeof  localStorage.numeNr4 =='undefined' || typeof  localStorage.numeNr3 =='undefined'|| typeof  localStorage.numeNr2 =='undefined'|| typeof  localStorage.numeNr1 =='undefined')
		{
		alert('Ai avut scorul destul de bun sa fii in top 5 , alegeti un nume '); 
       	var imagineFundal=document.createElement('img');
		imagineFundal.setAttribute('id','imagineFundal');
		imagineFundal.setAttribute('src','Gri.jpg');
		document.body.appendChild(imagineFundal);
		
		
		
			var newWindow=window.open("WindowChild.html",'window','height=200,width=250');
			
			var wins=sessionStorage.Jucator;
			var draws=sessionStorage.remize;
			localStorage.copilWins=wins;
			localStorage.copilDraws=draws;
			
			var verificaInchis=setInterval(function(){
			if(newWindow && newWindow.closed){
				clearInterval(verificaInchis);
			
			
			
			localStorage.numeCurent=localStorage.numeTransmis;
			localStorage.winsCurent=wins;
			localStorage.drawsCurent=draws;
			reevaluareaClasamentului();	
			document.body.removeChild(imagineFundal);
			}
			},1000)
			
			
		}
		else{

		
		
		var scorCurent=sessionStorage.Jucator*3+sessionStorage.remize;
		var ultimulLoc=localStorage.winsNr5*3+localStorage.drawsNr5;
		//daca scorul curent este mai mare decat cel de pe locul 5 inseamna ca sigur este in top 5 trebuie sa vad unde mai exact 
		if(scorCurent>ultimulLoc){
		alert('Ai avut scorul destul de bun sa fii in top 5 , alegeti un nume '); 
		var imagineFundal=document.createElement('img');
		imagineFundal.setAttribute('id','imagineFundal');
		imagineFundal.setAttribute('src','Gri.jpg');
		document.body.appendChild(imagineFundal);
		
		
		var wins=sessionStorage.Jucator;
		var draws=sessionStorage.remize;
		localStorage.copilWins=wins;
		localStorage.copilDraws=draws;
			var newWindow=window.open("WindowChild.html",'window','height=200,width=250');
			var verificaInchis=setInterval(function(){
			if(newWindow && newWindow.closed){
				clearInterval(verificaInchis);
			//	alert('Ai pierdut, scorul tau va fi resetat');
			
			
			localStorage.numeNr5= localStorage.numeTransmis;
			localStorage.winsNr5=wins;
			localStorage.drawsNr5=draws;
			reevaluareaClasamentului();	
			document.body.removeChild(imagineFundal);
			}
			},1000)
			}
		
		}



		
		

		sessionStorage.calculator=0;
		sessionStorage.Jucator=0;
		sessionStorage.remize=0;
		}
		this.reset();
		return;
	}
}
	

}


function strategie(tabla,incepeJucator,dificultate,miscariPlayer,rundaCurenta,al2leaXcastiga,al3leaXcastiga,incoltit){
//DIFICULTATEA USOR ESTE RANDOM
if(dificultate=="usor"){
	var mutareComputer=Math.floor((Math.random()*100))%9+1;
	while(tabla[mutareComputer]!=-1){
		mutareComputer=Math.floor((Math.random()*100))%9+1;
		}
	return mutareComputer;
}
//DIFICUTATEA INTERMEDIAR
if(dificultate=="intermediar"){
var rezultat;
//VERIFIC DACA ELEMENTELE DE 1 ADICA CALCULATORUL CASTIGA
rezultat=castigaRundaUrm(tabla,1);
if(rezultat==-1){
	rezultat=castigaRundaUrm(tabla,0);
	if(rezultat!=-1) {return rezultat;}
	} 
	else {return rezultat;}




//COLUTIRE SI MIJLOCUL le pun intr-un array si le amestec random sa nu se invete patternu
var tabelTemporar=new Array();
tabelTemporar[1]=1;
tabelTemporar[2]=3;
tabelTemporar[3]=7;
tabelTemporar[4]=9;
tabelTemporar[5]=5;
var tabelTemporar2= shuffleArray(tabelTemporar);

if(tabla[tabelTemporar2[1]]==-1) {return tabelTemporar2[1];}
if(tabla[tabelTemporar2[2]]==-1) {return tabelTemporar2[2];}
if(tabla[tabelTemporar2[3]]==-1) {return tabelTemporar2[3];}
if(tabla[tabelTemporar2[4]]==-1) {return tabelTemporar2[4];}
if(tabla[tabelTemporar2[5]]==-1) {return tabelTemporar2[5];}

//RESTU DE CASUTE sunt puse si ele intr un array si amestecate din acelasi motiv
tabelTemporar[1]=2;
tabelTemporar[2]=4;
tabelTemporar[3]=6;
tabelTemporar[4]=8;
tabelTemporar2= shuffleArray(tabelTemporar);

if(tabla[tabelTemporar2[1]]==-1) {return tabelTemporar2[1];}
if(tabla[tabelTemporar2[2]]==-1) return tabelTemporar2[2];
if(tabla[tabelTemporar2[3]]==-1) return tabelTemporar2[3];
if(tabla[tabelTemporar2[4]]==-1) return tabelTemporar2[4];
}
//http://www.chessandpoker.com/tic_tac_toe_strategy.html
if(dificultate=="expert"){
//CAND INCEPE CALCULATORUL PROGRAMUL GANDESTE CA PLAYERUL ESTE INAINTEA CALCULATORULUI DAR CALCULATORUL ARE 1 RUNDA IN PLUS SA FACA
//O MISCARE FARA CA PLAYERUL SA FACA CEVA ASTEFEL INCAT PLAYERUL INCEPE SA JOACE DIN RUNDA 2. AM FACUT ASA PENTRU USURINTA IMPLEMENTARII
     if(incepeJucator==false){
		if(rundaCurenta==1){
	    var vector=new Array();
		vector[1]=1;
		vector[2]=3;
		vector[3]=7;
		vector[4]=9;
		vector=shuffleArray(vector);
		if(tabla[vector[1]]==-1) return vector[1];
		if(tabla[vector[2]]==-1) return vector[2];
		if(tabla[vector[3]]==-1) return vector[3];
		if(tabla[vector[4]]==-1) return vector[4];
		}
		else{
		//PRIMA MISCARE IN MIJLOC
			if(miscariPlayer[2]==5){
				if(rundaCurenta==2){
					if(tabla[1]==1) return 9;
					if(tabla[3]==1) return 7;
					if(tabla[7]==1) return 3;
					if(tabla[9]==1) return 1;
				}
				else{
				  if(miscariPlayer[3]==1 || miscariPlayer[3]==3|| miscariPlayer[3]==7|| miscariPlayer[3]==9){
					  if(rundaCurenta==3){
							if(tabla[1]==-1) return 1;
							if(tabla[3]==-1) return 3;
							if(tabla[7]==-1) return 7;
							if(tabla[9]==-1) return 9;
					}
					else{
					  return castigaRundaUrm(tabla,1);
					}
					
				  }
				  else{
				  //daca poate sa castige runda asta o face daca nu blocheaza pe oponent
				var rezultat=castigaRundaUrm(tabla,1);
				if(rezultat!=-1) return rezultat;
				else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}	
				  }
				}
			
			}
		if(miscariPlayer[2]==1 || miscariPlayer[2]==3||miscariPlayer[2]==7||miscariPlayer[2]==9){
			if(rundaCurenta==2){
				var vector=new Array();
				vector[1]=1;
				vector[2]=3;
				vector[3]=7;
				vector[4]=9;
				vector=shuffleArray(vector);
				if(tabla[vector[1]]==-1) return vector[1];
				if(tabla[vector[2]]==-1) return vector[2];
				if(tabla[vector[3]]==-1) return vector[3];
				if(tabla[vector[4]]==-1) return vector[4];
			}
			else{
			    if(rundaCurenta==3){
				 var rezultat=castigaRundaUrm(tabla,1);
				  if(rezultat!=-1) return rezultat;
					else{
						var vector=new Array();
						vector[1]=1;
						vector[2]=3;
						vector[3]=7;
						vector[4]=9;
						vector=shuffleArray(vector);
						if(tabla[vector[1]]==-1) return vector[1];
						if(tabla[vector[2]]==-1) return vector[2];
						if(tabla[vector[3]]==-1) return vector[3];
						if(tabla[vector[4]]==-1) return vector[4];
					}
				}
				else{
				var rezultat=castigaRundaUrm(tabla,1);
				if(rezultat!=-1) return rezultat;
				else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}	
				}
			}
		}
	 if(miscariPlayer[2]==2 || miscariPlayer[2]==4||miscariPlayer[2]==6||miscariPlayer[2]==8){
		if(rundaCurenta==2){
			return 5;
		}
		else{
		 if(rundaCurenta==3){
				var rezultat=castigaRundaUrm(tabla,1);
				 if(rezultat!=-1) return rezultat;
				 else{
					var rezultat=castigaRundaUrm(tabla,0);
				  if(rezultat!=-1) return rezultat;
					 else{
						if(tabla[2]!=0 && tabla[4]!=0 && tabla[5]!=0 && tabla[1]==-1) return 1;
						if(tabla[2]!=0 && tabla[6]!=0 && tabla[5]!=0 && tabla[3]==-1) return 3;
						if(tabla[4]!=0 && tabla[5]!=0 && tabla[8]!=0 && tabla[7]==-1) return 7;
						if(tabla[6]!=0 && tabla[5]!=0 && tabla[8]!=0 && tabla[7]==-1) return 9;
					 }
				 }
		 }
		 else{
				var rezultat=castigaRundaUrm(tabla,1);
				if(rezultat!=-1) return rezultat;
				else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}	
		 
		 }
		}
	 
	}
	 }
	 }
	 
	 
//INCEPE PLAYERUL	 
	 if(incepeJucator==true){
       if(miscariPlayer[1]==5){
	    if(rundaCurenta==1){
			var vector=new Array();
			vector[1]=1;
			vector[2]=3;
			vector[3]=7;
			vector[4]=9;
			vector=shuffleArray(vector);
			if(tabla[vector[1]]==-1) return vector[1];
			if(tabla[vector[2]]==-1) return vector[2];
			if(tabla[vector[3]]==-1) return vector[3];
			if(tabla[vector[4]]==-1) return vector[4];
	    }
		else{
			if(rundaCurenta==2){
			var rezultat=castigaRundaUrm(tabla,0);
		    if(rezultat!=-1) return rezultat;
			else{
				var vector=new Array();
				vector[1]=1;
				vector[2]=3;
				vector[3]=7;
				vector[4]=9;
				vector=shuffleArray(vector);
				if(tabla[vector[1]]==-1) return vector[1];
				if(tabla[vector[2]]==-1) return vector[2];
				if(tabla[vector[3]]==-1) return vector[3];
				if(tabla[vector[4]]==-1) return vector[4];
			  }
			}
			else{
				var rezultat=castigaRundaUrm(tabla,1);
				if(rezultat!=-1) return rezultat;
				else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}	
			}
		
		}
	  }
	  //NON CENTRAL
	  else{
	  if(rundaCurenta==1) {return 5;}
	   else{
			if(al2leaXcastiga==true){
			if(rundaCurenta==2){
				var rezultat=castigaRundaUrm(tabla,0);
				  if(rezultat!=-1) return rezultat;
			}
			else{
			  	var rezultat=castigaRundaUrm(tabla,1);
				if(rezultat!=-1) return rezultat;
			  if(al3leaXcastiga==true){
					var rezultat=castigaRundaUrm(tabla,1);
					if(rezultat!=-1) return rezultat;
	 				else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}	
			  }
			  else{
				if(rundaCurenta==3){
						var vector=new Array();
						vector[1]=2;
						vector[2]=4;
						vector[3]=6;
						vector[4]=8;
						vector=shuffleArray(vector);
						if(tabla[vector[1]]==-1) return vector[1];
						if(tabla[vector[2]]==-1) return vector[2];
						if(tabla[vector[3]]==-1) return vector[3];
						if(tabla[vector[4]]==-1) return vector[4];
				}
				else{
					var rezultat=castigaRundaUrm(tabla,1);
					if(rezultat!=-1) return rezultat;
					else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}						
				}
			  
			  }
			}
			
			}
			
			
			
		//UN X PE UN COLT ALTUL PE EDGE	
		if(((miscariPlayer[1]==1 || miscariPlayer[1]==3 || miscariPlayer[1]==7 || miscariPlayer[1]==9)&&(miscariPlayer[2]==2 || miscariPlayer[2]==4 || miscariPlayer[2]==6 || miscariPlayer[2]==8))   ||    ((miscariPlayer[1]==1 || miscariPlayer[2]==3 || miscariPlayer[2]==7 || miscariPlayer[2]==9)&&(miscariPlayer[1]==2 || miscariPlayer[1]==4 || miscariPlayer[1]==6 || miscariPlayer[1]==8)))
			{
			if(rundaCurenta==2){
				if(miscariPlayer[1]==1) return 9;
				if(miscariPlayer[1]==3) return 7;
				if(miscariPlayer[1]==7) return 3;
				if(miscariPlayer[1]==9) return 1;
				if(miscariPlayer[2]==1) return 9;
				if(miscariPlayer[2]==3) return 7;
				if(miscariPlayer[2]==7) return 3;
				if(miscariPlayer[2]==9) return 1;
			}
			else{
				var rezultat=castigaRundaUrm(tabla,1);
				if(rezultat!=-1) return rezultat;
				else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}	
			}
		}
		
		
		if(miscariPlayer[1]!=1 && miscariPlayer[1]!=3 &&miscariPlayer[1]!=5 && miscariPlayer[1]!=7  &&miscariPlayer[1]!=9 &&miscariPlayer[2]!=1 && miscariPlayer[2]!=3 &&miscariPlayer[2]!=5 && miscariPlayer[2]!=7  &&miscariPlayer[2]!=9)
		{
		   //CAND E INCOLTIT
		   if(incoltit==true){
		       if(rundaCurenta==2){
			    if(miscariPlayer[1]==4 && miscariPlayer[2]==2) return 1;
				if(miscariPlayer[2]==4 && miscariPlayer[1]==2) return 1;
				if(miscariPlayer[1]==2 && miscariPlayer[2]==6) return 3;
				if(miscariPlayer[2]==2 && miscariPlayer[1]==6) return 3;
				if(miscariPlayer[1]==4 && miscariPlayer[2]==8) return 7; 
				if(miscariPlayer[2]==4 && miscariPlayer[1]==8) return 7;
				if(miscariPlayer[1]==6 && miscariPlayer[2]==8) return 9;
				if(miscariPlayer[2]==6 && miscariPlayer[1]==8) return 9;
				}
				else{
					var rezultat=castigaRundaUrm(tabla,1);
					if(rezultat!=-1) return rezultat;
					else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}	
				}
				
				
		   }
		   //CAND NU E INCOLTIT
		   else{
		    if(rundaCurenta==2){
				var vector=new Array();
				vector[1]=1;
				vector[2]=3;
				vector[3]=7;
				vector[4]=9;
				vector=shuffleArray(vector);
				if(tabla[vector[1]]==-1) return vector[1];
				if(tabla[vector[2]]==-1) return vector[2];
				if(tabla[vector[3]]==-1) return vector[3];
				if(tabla[vector[4]]==-1) return vector[4];
			
			}
			else{
				var rezultat=castigaRundaUrm(tabla,1);
				if(rezultat!=-1) return rezultat;
				else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}	
			}
		   }
		}
	






   //AMBELE PE COLTURI OPUSE
	if((miscariPlayer[1]==1 && miscariPlayer[2]==9) || (miscariPlayer[1]==3 && miscariPlayer[2]==7) || (miscariPlayer[2]==3 && miscariPlayer[1]==7)|| (miscariPlayer[1]==9 && miscariPlayer[2]==1) )
		 {
		  if(rundaCurenta==2){
				var vector=new Array();
				vector[1]=2;
				vector[2]=4;
				vector[3]=6;
				vector[4]=8;
				vector=shuffleArray(vector);
				if(tabla[vector[1]]==-1) return vector[1];
				if(tabla[vector[2]]==-1) return vector[2];
				if(tabla[vector[3]]==-1) return vector[3];
				if(tabla[vector[4]]==-1) return vector[4];
		  }
		  else{
				var rezultat=castigaRundaUrm(tabla,1);
				if(rezultat!=-1) return rezultat;
				else {
						rezultat=castigaRundaUrm(tabla,0);
						if(rezultat!=-1) return rezultat;
						if(tabla[1]==-1) return 1;
						if(tabla[2]==-1) return 2;
						if(tabla[3]==-1) return 3;
						if(tabla[4]==-1) return 4;
						if(tabla[5]==-1) return 5;
						if(tabla[6]==-1) return 6;
						if(tabla[7]==-1) return 7;
						if(tabla[8]==-1) return 8;
						if(tabla[9]==-1) return 9;
					}	
		  }
		 }
	   }
	  }
    }	 
}
}










//FUNCTIA IMI SPUNE DACA CINEVA POATE CASTIGA MECIUL RUNDA URMATOARE.DACA parametrul cineCastiga este 0 imi spune daca Jucatorul poate castiga runda urmatoare, daca este 1 imi
//spune daca calculatorul poate castiga runda aceasta pentru ca el nu a facut inca o miscare cand apeleaza functia.
function castigaRundaUrm(tabla,cineCastiga){

//PRIMA LINIE
if(tabla[1]==cineCastiga && tabla[2]==cineCastiga && tabla[3]==-1) return 3;
if(tabla[2]==cineCastiga && tabla[3]==cineCastiga && tabla[1]==-1) return 1;
if(tabla[1]==cineCastiga && tabla[3]==cineCastiga && tabla[2]==-1) return 2;

//A DOUA LINIE
if(tabla[4]==cineCastiga && tabla[5]==cineCastiga && tabla[6]==-1) return 6;
if(tabla[4]==cineCastiga && tabla[6]==cineCastiga && tabla[5]==-1) return 5;
if(tabla[5]==cineCastiga && tabla[6]==cineCastiga && tabla[4]==-1) return 4;

//A TREIA LINIE
if(tabla[7]==cineCastiga && tabla[8]==cineCastiga && tabla[9]==-1) return 9;
if(tabla[7]==cineCastiga && tabla[9]==cineCastiga && tabla[8]==-1) return 8;
if(tabla[8]==cineCastiga && tabla[9]==cineCastiga && tabla[7]==-1) return 7;

//DIAGONALA 1 5 9
if(tabla[1]==cineCastiga && tabla[5]==cineCastiga && tabla[9]==-1) return 9;
if(tabla[1]==cineCastiga && tabla[9]==cineCastiga && tabla[5]==-1) return 5;
if(tabla[5]==cineCastiga && tabla[9]==cineCastiga && tabla[1]==-1) return 1;

//DIAGONALA 3 5 7
if(tabla[3]==cineCastiga && tabla[5]==cineCastiga && tabla[7]==-1) return 7;
if(tabla[3]==cineCastiga && tabla[7]==cineCastiga && tabla[5]==-1) return 5;
if(tabla[5]==cineCastiga && tabla[7]==cineCastiga && tabla[3]==-1) return 3;

//COLOANA 1 4 7
if(tabla[1]==cineCastiga && tabla[4]==cineCastiga && tabla[7]==-1) return 7;
if(tabla[1]==cineCastiga && tabla[7]==cineCastiga && tabla[4]==-1) return 4;
if(tabla[7]==cineCastiga && tabla[4]==cineCastiga && tabla[1]==-1) return 1;

//COLOANA 2 5 8
if(tabla[2]==cineCastiga && tabla[5]==cineCastiga && tabla[8]==-1) return 8;
if(tabla[2]==cineCastiga && tabla[8]==cineCastiga && tabla[5]==-1) return 5;
if(tabla[8]==cineCastiga && tabla[5]==cineCastiga && tabla[2]==-1) return 2;

//COLOANA 3 6 9
if(tabla[3]==cineCastiga && tabla[6]==cineCastiga && tabla[9]==-1) return 9;
if(tabla[3]==cineCastiga && tabla[9]==cineCastiga && tabla[6]==-1) return 6;
if(tabla[9]==cineCastiga && tabla[6]==cineCastiga && tabla[3]==-1) return 3;

//INTOARCE -1 DACA NU CASTIGA RUNDA URMATOARE
return -1;
}
//functie ce imi amesteca valorile dintr-un array
function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() *100)%(array.length - 1)+1;
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    } 
	
    return array;
}