var moreInformationElements = document.querySelectorAll('.more-information');

var messages = [
    'La IA agiliza el proceso de diseño y maquetación web, simplificando la creación de sitios atractivos y funcionales.',
    'La IA permite agilizar el trabajo de maquetacion a los diseñadores y a los usuarios nuevos en el mundo del diseño web.',
    'Ofrecemos servicios de Hosting y Dominio para que puedas tener tu sitio web en línea.',
];

moreInformationElements.forEach(function(element, index) {
    element.addEventListener('click', function() {
        var textElement = this.parentNode.nextElementSibling.querySelector('.more-information-text');
        if (textElement.textContent === '') {
            textElement.textContent = messages[index]; // Usa el índice para obtener el mensaje correspondiente
            textElement.style.padding = '20px';
        } else {
            textElement.textContent = '';
            textElement.style.padding = "0";
        }
    });
});
