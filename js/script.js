document.getElementById('votarForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Evitar el envío del formulario

    //Obtener el valor de la sección seleccionada
    const seccion = document.querySelector('input[name="seccion"]:checked');
    const resultado = document.getElementById('resultado');

    if (seccion) {
        const valorSeccion = seccion.value;

        // Usar switch para emitir el mensaje correspondiente
        switch (valorSeccion) {
            case 'norte':
                resultado.textContent = "Has votado por la sección Norte.";
                resultado.style.color = '#FF5733'; // Cambiar color del texto a naranja
                break;
            case 'sur':
                resultado.textContent = "Has votado por la sección Sur.";
                resultado.style.color = '#33FF57'; // Cambiar color del texto a verde
                break;
            case 'centro':
                resultado.textContent = "Has votado por la sección Centro.";
                resultado.style.color = '#3357FF'; // Cambiar color del texto a azul
                break;
            default:
                resultado.textContent = "Por favor, selecciona una sección.";
                resultado.style.color = '#FF3333'; // Cambiar color del texto a rojo
        }
    } else {
        resultado.textContent = "Por favor, selecciona una sección antes de votar.";
        resultado.style.color = '#FF3333'; // Cambiar color del texto a rojo
    }
});
