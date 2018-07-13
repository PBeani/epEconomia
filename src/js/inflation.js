$(document).ready(function () {
    (function () {

        var module = $('#inflacao');
        var $table = $('tbody', module);

        var updateTax = function($current) {
            var deflator = $current.find('.deflator strong').html();
            var index = $current.attr("index");
            var prev = index - 1;
            var $prev = $('tr[index='+ prev +']', module);
            var preveDeflator = $prev.find('.deflator strong').html();
            
            // Cálculo da taxa de inflação
            var tax = (deflator - preveDeflator) * 100/preveDeflator;
            $('.taxa strong', $current).html(tax.toFixed(2) + ' %');

            if(index <= 3) {
                var $next = $('tr[index="'+ index + 1 * 1 +'"]', module);
                updateTax($next);
            }
        };

        var updateDeflator = function ($line) {
            var nominalValue = $('.nominal input', $line).val() || 0;
            var realValue = $('.real input', $line).val() || 1;

            // Cáculo do deflator
            var deflator = (nominalValue/realValue) * 100;
            $line.find('.deflator strong').html(deflator.toFixed(2));
            updateTax($line);
        };

        $('tr input', $table).on('change', function () {
            var $line = $(this).closest('tr');
            updateDeflator($line);
        });

        $('tr', $table).first().find('input').off('change').on('change', function () {
            var $this = $(this);
            var $line = $this.closest('tr');
            var val = $this.val();

            $('.real input', $line).val(val);
        });

    })();
});