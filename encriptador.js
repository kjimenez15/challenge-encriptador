function encriptar(){
    var mensaje = document.getElementById('mensaje').value; //obtiene el texto ingresado por el usuario
    var mensajeTransformado = encriptador(mensaje); //Función para encriptar el mensaje

    document.getElementById('mensaje-convertido').value = mensajeTransformado; //muestra el mensaje en el area de texto convertido
    document.getElementById('mensaje').value = ""; //limpia la pantalla
}

function encriptador(texto){

    //verifica que el mensaje no contenga únicamente espacios o que contenga caracteres espciales
    if(!texto.trim() || !/^[a-z\s]*$/.test(texto)){
        alert("Por favor, ingrese solo letras minúsculas y espacios.")
        return null;
    }

    //Busca y reemplaza las vocales por  el texto encriptado
    return texto.replace(/[aeiou]/g, function (vocal) {
        switch (vocal) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return vocal;
        }
    });
}

function desencriptar(){
    var mensajePrueba = document.getElementById('mensaje').value; //obtiene el texto ingresado por el usuario
    var mensajeDesencriptado = desencriptador(mensajePrueba); //Función para desencriptar el mensaje

    document.getElementById('mensaje-convertido').value = mensajeDesencriptado; //muestra el mensaje en el area de texto convertido
    document.getElementById('mensaje').value = ""; //limpia la pantalla
    
}

function desencriptador(texto){

    //verifica que el mensaje no contenga únicamente espacios o que contenga caracteres espciales
    if (!texto.trim() || !/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingrese solo letras minúsculas y espacios.");
        return texto;
    }

    var result = '';
    var i = 0;

    //Recorre y busca secuencias de caracteres que coincidan con la longitud y orden brindados y los reemplaza por una vocal
    while (i < texto.length) {
        if (texto.slice(i, i + 5) === 'enter') {
            result += 'e';
            i += 5;
        } else if (texto.slice(i, i + 4) === 'imes') {
            result += 'i';
            i += 4;
        } else if (texto.slice(i, i + 2) === 'ai') {
            result += 'a';
            i += 2;
        } else if (texto.slice(i, i + 4) === 'ober') {
            result += 'o';
            i += 4;
        } else if (texto.slice(i, i + 4) === 'ufat') {
            result += 'u';
            i += 4;
        } else {
            result += texto[i];
            i++;
        }
    }
    return result;
}

function copiar(){
    var mensajeEncriptado = document.getElementById('mensaje-convertido').value; //obtiene el mensaje convertido

    //verifica que exista un mensaje
    if (mensajeEncriptado) {
        navigator.clipboard.writeText(mensajeEncriptado) //copia al portapapeles
            .then(function () {
                alert("¡El contenido se ha copiado al portapapeles!");//confirma la copia
            })
            .catch(function (error) {
                alert("Error al copiar al portapapeles: " + error);//en caso de la copia falle
            });
    } else {
        alert("Primero debes encriptar o desencriptar el contenido antes de copiarlo al portapapeles."); //mensaje en caso de que no haya nada que copiar
    }

}

