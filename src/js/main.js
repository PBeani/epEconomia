function changeCategorie() {
    var span = document.getElementById('categorieSpan');

    if (span.innerHTML !== 'MACRO') {
        span.innerHTML = 'MACRO';
        document.getElementById('macroItens').style.display = 'block';
        document.getElementById('microItens').style.display = 'none';
    } else {
        span.innerHTML = 'MICRO';
        document.getElementById('microItens').style.display = 'block';
        document.getElementById('macroItens').style.display = 'none';
    }
}

function changeView() {
    var btn = document.getElementById('changeView');

    if (btn.innerHTML !== 'Ver texto') {
        btn.innerHTML = 'Ver texto';
        document.getElementById('plot').style.display = 'block';
        document.getElementById('text').style.display = 'none';
    } else {
        btn.innerHTML = 'Ver plot';
        document.getElementById('text').style.display = 'block';
        document.getElementById('plot').style.display = 'none';
    }
}

function item() {
    alert("Coloca o plot e o texto desse item no quadrado verde (visualização)");
}
