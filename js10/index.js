//animiraj velicinu margine stranice

var body =document.querySelector("body");
var bodyW=window.getComputedStyle(body, null);
var marginB=bodyW.getPropretyValue("margin"); //getPropretyValue vraca string
console.log("marginB");
let marginNum=parseInt(marginBody);//pretvara string u integer
console.log("marginNum:" + marginNum);

let interval=setInterval(animiraj, 200);//ime funkcije je animiraj

var reverse=false;

function animiraj () {
  console.log("Pozvana je funkcija animkiraj()");
  if(marginNum==30){
    reverse=true;
  }
  if(reverse){

    margin--;

    if(marginNum==8){
        reverse=false;
      }
  }
  else{
    margin++;
  }
body.style.margin=marginNum +"px";//postavlja marginu
  
}

//margina se pomice polako
//ako zelimo da stane setInterval() koji se koristi za animacije i ponavlja se stalno
//onda se koristi clearInterval()

//EVENTS --10 LEKCIJA
//addEventListener("blur", imefunkcije)
//mogu se i inline napravit <div onblur="blure()"> zove funkciju blure

/*
function fokusIn() {
console.log("dogadaj na fokusIn");
let input1= documet.getElementById("input1");
input1.style.backgroundColor="yellow";
}

function fokusOut(){
console.log("dogadaj na fokusOut");
let input2= documet.getElementById("input1");
input2.style.backgroundColor="red";

//alert("Izasli ste iz fokusa");
}

function klikButton(){

    console.log("Dogadaj na onClick button");
    //alert("Kliknili ste na button");
    let input3=document.getElementById("mojButton");
    
    input3.style.backgroundColor="white";
}

let inputDrugi=getElementById("input2");
inputDrugi.addEventListener('focus', fokusIn2);
inputDrugi.addEventListener('blur', fokusOut2);
function fokusIn2(){
    inputDrugi.style.backgroundColor="green";
}
function fokusOut2(){
    inputDrugi.style.backgroundColor="purple";
}
*/

//------------------------------------------OVO JE SAMO DODATAN ZADATAK-NAPRAVI RESET FORME AKO SE ZELI
// I DA SU SVA POLJA CRVENA KADA FORMA NIJE ISPUNJENA (ODFOKUS)
debugger;
function fokusirajse(){
    let form = document.getElementById("ime").value;
    document.getElementById("ime").onfocus = function() {
      if (form == "") {
        document.getElementById("ime").style.backgroundColor = "red";
        document.getElementById("showText").innerHTML = "Form is empty";
      } else {}
      document.getElementById("ime").onkeyup = function() {
        document.getElementById("ime").style.backgroundColor = "white";
        document.getElementById("showText").innerHTML =
          "Form is not Empty, No red Background";
      };
    };
}

function fokus2(){
    let form = document.getElementById("prezime").value;
document.getElementById("prezime").onfocus = function() {
  if (form == "") {
    document.getElementById("prezime").style.backgroundColor = "red";
    document.getElementById("showText").innerHTML = "Form is empty";
  } else {}
  document.getElementById("prezime").onkeyup = function() {
    document.getElementById("prezime").style.backgroundColor = "white";
    document.getElementById("showText").innerHTML =
      "Form is not Empty, No red Background";
  };
};
}


function fokus3(){

    let form = document.getElementById("email").value;
document.getElementById("email").onfocus = function() {
  if (form == "") {
    document.getElementById("email").style.backgroundColor = "red";
    document.getElementById("showText").innerHTML = "Form is empty";
  } else {}
  document.getElementById("email").onkeyup = function() {
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("showText").innerHTML =
      "Form is not Empty, No red Background";
  };
};
}




function alMe(){
alert("Poslali ste dokument.");
}

//ovo je kod za resetirat formu, tj. unos
function reset(){
    var r = confirm("Are you sure you want to reset all text?");
    if (r == true) {
        document.getElementById("ime").value="";
        document.getElementById("prezime").value="";
        document.getElementById("email").value="";
       
    }
}


