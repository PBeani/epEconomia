function changeCategorie() {
    var span = document.getElementById('categorieSpan');

    if (span.innerHTML !== 'MACRO') {
        span.innerHTML = 'MACRO';
        document.getElementById('macroItens').style.display = 'flex';
        document.getElementById('microItens').style.display = 'none';
    } else {
        span.innerHTML = 'MICRO';
        document.getElementById('microItens').style.display = 'flex';
        document.getElementById('macroItens').style.display = 'none';
    }
}

function changeView() {
    var btn = document.getElementById('changeView');
    if (btn.classList.contains('viewPlot')) {
        btn.classList.remove('viewPlot');
        document.getElementById('text').style.display = 'block';
        document.getElementById('plot').style.display = 'none';
        
    } else {
        btn.classList.add('viewPlot');
        document.getElementById('plot').style.display = 'block';
        document.getElementById('text').style.display = 'none';
    }
}

function item(selector) {
    $('.plot').addClass('hidden');
    $(selector).removeClass('hidden');
}
