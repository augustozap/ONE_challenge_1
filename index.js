window.onload=inicio;
function inicio(){
    document.querySelector(".copy_button").style.visibility="hidden";
    document.querySelector(".cryptor").onclick=encriptar;
    document.querySelector(".decryptor").onclick=desencriptar;
    
}
var cadena="";


function encriptar(){
    let caracter;
    let texto = document.querySelector(".input").value;
    let largo = texto.length;
    
    for (i=0; i < largo; i++){

        caracter = texto.substr(i,1);
        switch (caracter) {
            case "a":
                console.log("letra a");
                cadena = cadena + "ai";
                break;
            case "e":
                console.log("letra e");
                cadena = cadena + "enter";
                break;
            case "i":
                console.log("letra i");
                cadena = cadena + "imes";
                break;
            case "o":
                console.log("letra o");
                cadena = cadena + "ober";
                break;    
            case "u":
                console.log("letra u");
                cadena = cadena + "ufat";
                break;    
            default:
                console.log("cualquier otra letra");
                cadena = cadena + caracter;
                break;
          }

    }
    verifica_estilos();

    document.querySelector(".status_title").innerHTML=`Tu texto encriptado: <br>${cadena}`;
    document.querySelector(".status_message").innerHTML="";
    document.querySelector(".cryptor").style.visibility="hidden";
    document.querySelector(".decryptor").style.visibility="hidden";
}
function desencriptar(){
    cadena = "";
    let texto = document.querySelector(".input").value;

    cadena = texto.replace(/ai/g, "a");
    console.log(cadena);
    cadena = cadena.replace(/enter/g, "e");
    console.log(cadena);
    cadena = cadena.replace(/imes/g, "i");
    console.log(cadena);
    cadena = cadena.replace(/ober/g, "o");
    console.log(cadena);
    cadena = cadena.replace(/ufat/g, "u");
    console.log(cadena);

    document.querySelector(".status_title").innerHTML=`Tu texto desencriptado: <br>${cadena}`;
    document.querySelector(".status_message").innerHTML="";
    document.querySelector(".cryptor").style.visibility="hidden";
    document.querySelector(".decryptor").style.visibility="hidden";
    verifica_estilos();
}

function verifica_estilos(){
    let desk = window.matchMedia('(min-width: 992px)');
    let tabl = window.matchMedia('(min-width: 601px)');
    let cell = window.matchMedia('(max-width: 600px)');

    document.querySelector(".copy_button").style.visibility="visible";
    document.querySelector(".copy_button").onclick=copiarPortapapeles;

    if (desk.matches) {
        document.querySelector(".status_title").style.fontSize="18px";
        document.querySelector(".status_title").style.textAling="center";
        console.log("pantalla de escritorio");
    }else{
        if (tabl.matches) {
            document.querySelector(".status_title").style.fontSize="15px";
            document.querySelector(".status_title").style.textAling="center";
            console.log("pantalla de tableta");
        }else{
            if (cell.matches) {
                document.querySelector(".status_title").style.fontSize="12px";
                document.querySelector(".status_title").style.textAling="center";
                console.log("pantalla de celular");
            }
        }
    }
}
function copiarPortapapeles() {
    
    
    navigator.clipboard.writeText(cadena)
        .then(() => {
        alert("Texto copiado al portapapeles!")
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
     
    
}



