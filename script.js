
    function encriptar() {
        var texto = document.getElementById("texto-encriptado").value.toLowerCase();
        var textoEncriptado = texto.replace(/e/img, "enter");
        var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
        
        document.getElementById("texto-desencriptado").innerHTML = textoEncriptado;
        document.getElementById("texto-encriptado").value = "";


        
    }


    function desencriptar() {
        var texto = document.getElementById("texto-encriptado2").value.toLowerCase();
        var textoEncriptado = texto.replace(/enter/img, "e");
        var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
        var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
        var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
        var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
        
        document.getElementById("texto-desencriptado2").innerHTML = textoEncriptado;
        document.getElementById("texto-encriptado2").value = "";


        
    }


    function copiar() {
        var contenido = document.querySelector("#texto-desencriptado");
        contenido.select();
        document.execCommand("copy");

        
    }
