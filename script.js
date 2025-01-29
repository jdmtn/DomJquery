$(document).ready(function() {
    // Cambiar de color los párrafos
    $('#resaltar-parrafos').click(function() {
        $('p.text').css('background-color', '#ffffcc');
    });

    // Agregar bordes a los div
    $('#agg-bordes').click(function() {
        $('div.box').css({
            'border': '2px solid #007bff',
            'border-radius': '5px'
        });
    });

    // Borrar el último elemento de la lista
    $('#borrar-elemento').click(function() {
        $('#item-list li:last-child').remove();
    });

    // Agregar un nuevo elemento a la lista
    $('#agg-elemento').click(function() {
        const newText = $('#input-text').val();
        if (newText.trim() !== '') {
            $('#item-list').append(`<li>${newText}</li>`);
            $('#input-text').val('');
        } else {
            alert('Por favor ingresa un texto!');
        }
    });
});

