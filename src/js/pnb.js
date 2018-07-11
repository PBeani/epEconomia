$(document).ready(function () {
    (function () {

        var module = $('#pnb');
        var list = [];

        $('.addCompany', module).on('click', function () {
            var $this = $(this);
            var $country = $(this).closest('.country');
            var $table = $country.find('table');

            swal({
                title: 'Adicionar empresa',
                input: 'text',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    'adicionar',
                cancelButtonText:
                    'cancelar',
                preConfirm: (company) => {
                    var add = company.length ? true : false;

                    for (var x in list) {
                        if (list[x] === company) {
                            add = false;
                            break;
                        }
                    }

                    if (add) {
                        $('tbody', $table).append(
                            '<tr>' +
                            '<td>' + company + '</td>' +
                            '<td>' +
                            '<input type="number">' +
                            '</td>' +
                            '<td>' +
                            '<select>' +
                            '<option value="1">Brasileira</option>' +
                            '<option value="2">Chilena</option>' +
                            '</select>' +
                            '</td>' +
                            '<td>' +
                            '<button type="button" class="remover">x</button>' +
                            '</td>' +
                            '</tr>');

                        list.push(company);

                        $('input, select', $table).off('change').on('change', function () {
                            updateTotals();
                        })

                        $('.remover', $table).off('click').on('click', function () {
                            var $this = $(this);
                            var $line = $this.closest('tr');
                            var value = $('td', $line).first().html();

                            for (var x in list) {
                                if (list[x] === value) {
                                    list.splice(x, 1);
                                    break;
                                }
                            }

                            $line.remove();
                            updateTotals();
                        });
                    }
                }
            });
        });

        var updateTotals = function() {
            var brazilPIB = 0;
            var brazilPNB = 0;
            var chilePIB = 0;
            var chilePNB = 0;
            
            $('.country').each(function () {
                var $country = $(this);
                var isBrazilTable = $('.countryName', $country).html() === "BRASIL" ? true : false;

                $('tbody tr', $country).each( function () {
                    var $line = $(this);
                    var isBrazilCompany = $('option:selected', $line).val() === '1' ? true : false;

                    var value = $('input', $line).val() * 1;

                    if(isBrazilTable) {
                        brazilPIB += value;
                    } else {
                        chilePIB += value;
                    }

                    if(isBrazilCompany) {
                        brazilPNB += value;
                    } else {
                        chilePNB += value;
                    }
                });
            });

            var $brazilTotals = $('.totals', module).first();
            $brazilTotals.find('.pib strong').html(brazilPIB);
            $brazilTotals.find('.pnb strong').html(brazilPNB);

            var $chileTotals = $('.totals', module).last();
            $chileTotals.find('.pib strong').html(chilePIB);
            $chileTotals.find('.pnb strong').html(chilePNB);
        }
    })();
})