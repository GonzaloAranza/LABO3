let puntaje = 0;


const puntos  = document.querySelectorAll(".puntos");
const BotonesSig = document.querySelectorAll(".btnsiguiente");
const ingresos = document.querySelectorAll (".ingreso"); 
let boton = document.getElementById("BTNcomenzar");
 


boton.addEventListener("click", function(e){
    let nombre = document.getElementById("Nombre");
    let apellido = document.getElementById("Apellido");

   if(nombre.value =="" || apellido.value ==""){
       alert("ingrese nombre y apellido");
       return;
   }

    puntos[0].style.display = "block";

    ingresos.forEach(element =>{
        element.setAttribute('disabled','true');
        boton.setAttribute('disabled','true')

    });    

})


BotonesSig[0].addEventListener("click",function(e){
    let radios = document.querySelectorAll('input[name="VarServidor"]');
    for(i=0;i<radios.length;i++){
        if(radios[i].checked && radios[i].classList.contains('radiocorrecto')){
            sumar(); 
            document.getElementById("divcorrecta1").style.backgroundColor = "greenyellow";
        }       
        if(radios[i].checked && radios[i].classList.contains('radioincorrecto')){
            document.getElementById("divincorrecta" + i).style.backgroundColor = "red";
        }
             
    }
    
    puntos[0].style.display = "none";
    puntos[1].style.display = "block";

})


BotonesSig[1].addEventListener('click',function(e){
    let checkboxs = document.querySelectorAll('input[name="checkbox"]');
    let correctos = document.getElementsByClassName('checkboxcorrecto');
    let incorrectos = document.getElementsByClassName('checkboxincorrecto')
    divscorrectos = document.getElementsByClassName('divcheckboxcorrecto');

    let respuestacorrecta = 0;
    let respuestaincorrecta = 0;

    for (var i = 0; i < correctos.length;i++){
    
        if (correctos[i].checked){
            respuestacorrecta ++;
            correctos[i].parentNode.style.backgroundColor = "greenyellow";
        }
        else
        {
            correctos[i].parentNode.style.backgroundColor = "red";
            respuestaincorrecta ++;
        }
    }

    for (var  i = 0; i < incorrectos.length;i++)
    if (incorrectos[i].checked){
        respuestaincorrecta ++;
        incorrectos[i].parentNode.style.backgroundColor = "red";
    }    

    if(respuestacorrecta == correctos.length && respuestaincorrecta == 0)
        sumar();


        puntos[1].style.display = "none";
        puntos[2].style.display = "block";
    

})

BotonesSig[2].addEventListener('click',function(e){
      if (document.getElementById("opciones").value == "correcta"){
          sumar();
          document.getElementById("opciones").style.backgroundColor = "greenyellow";
      }
      else
      document.getElementById("opciones").style.backgroundColor = "red";

      puntos[2].style.display = "none";
      puntos[3].style.display = "block";


})

BotonesSig[3].addEventListener('click',function (e) {

    VFs = document.getElementsByClassName("VF");
    
    for(var i = 0; i < VFs.length; i++)
        if(VFs[i].value == "correcta"){
            if(VFs[i].checked){
                VFs[i].parentNode.style.backgroundColor = "greenyellow";
                puntaje += ((10/puntos.length) / document.getElementsByClassName("afirmacion").length)
            }
                
            else    
                VFs[i].parentNode.style.backgroundColor = "red";
        }

        final ();
      

})



/* idea para no olvidarme en otro ocasión
function borde (image){

    if (flagimagenes == 1){

        imagenes = document.getElementsByClassName("logo");

       for( var i = 0; i < imagenes.length; i++)
            imagenes[i].removeAttribute("style");

        flagimagenes = 0;
    }

    image.setAttribute('style','border-style: solid; border-color: blue;');
    flagimagenes = 1;
    
}
*/
function logocorrecto(image){
    image.setAttribute('style','border-style: solid; border-color: greenyellow;');
    sumar();
    puntos[3].style.display = "none";
    puntos[4].style.display = "block";
    
 

}

function logoincorrecto(image) {
    image.setAttribute('style','border-style: solid; border-color: red;');
    puntos[3].style.display = "none";
    puntos[4].style.display = "block";

    puntos[3].style.display = "none";
    puntos[4].style.display = "block";

}




function sumar (){
    puntaje += 10/puntos.length;

}


function final(){
    puntos.forEach(element => element.style.display = "block" )
    BotonesSig.forEach(element => element.style.display = "none")

    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length;i++){
        inputs[i].setAttribute("disabled","true");
    }



    var sel = document.getElementById("opciones")
    sel.setAttribute("disabled","true");

 let divresultado = document.getElementById("divpuntaje")
    let resultado = document.createElement("p");
    resultado.innerHTML = "Tu resultado fue: " + puntaje;
    divresultado.appendChild(resultado);

    var imagenes = document.getElementsByClassName("logo")
    for(var i = 0; i<imagenes.length;i++)
        imagenes[i].removeAttribute("onclick")

   
}



