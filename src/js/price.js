$(document).ready(function () {
    (function() {

        var module = $('#price');
        
        var $oferta = $('.oferta', module);
        var $demanda = $('.demanda', module);
        
        $('.btn', module).on('click', function () {
            var eqOferta = {
                c: $('.cVal', $oferta).val() || 0,
                a: $('.aVal', $oferta).val() || 0,
                b: $('.bVal', $oferta).val() || 0
            }

            var eqDemanda = {
                c: $('.cVal', $demanda).val() || 0,
                a: $('.aVal', $demanda).val() || 0,
                b: $('.bVal', $demanda).val() || 0
            }

            eqDemanda.a = eqDemanda.a * eqDemanda.c;
            eqDemanda.b = eqDemanda.b * eqDemanda.c;
            
            eqOferta.a = eqOferta.a * eqOferta.c;
            eqOferta.b = eqOferta.b * eqOferta.c;

            var subA = eqDemanda.a - eqOferta.a;
            var subB = eqDemanda.b - eqOferta.b;

            subB = subB*(-1);
            
            var resp = "";
            if(!subA && !subB) {
                resp = 'Retas iguais';
            } else if(!subA) {
                resp = 'Retas concorrentes';
            } else {
                var x = (subB/subA).toFixed(2);
                resp = ((eqDemanda.a * x) + eqDemanda.b);
            }

            $('.res', module).html(resp);
        });

    })();
});