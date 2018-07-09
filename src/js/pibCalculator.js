$(document).ready(function () {
    (function () {

        var module = $('#pibCalculator');
        var itemList = [];

        var yearList = [
            {
                year: '2002',
                itemList: [],
                pib: 0
            },
            {
                year: '2006',
                itemList: [],
                pib: 0
            },
            {
                year: '2010',
                itemList: [],
                pib: 0
            },
            {
                year: '2014',
                itemList: [],
                pib: 0
            },
            {
                year: '2018',
                itemList: [],
                pib: 0,
                realPib: [0, 0 , 0, 0, 0]
            }
        ];

        var calculateRealPib = function (item) {
            var list = yearList[item].itemList;

            var pib = 0;

            for(var x in list) {
                pib += list[x].valor * yearList[4].itemList[x].qtd;
            }

            yearList[4].realPib[item] = pib;
        }

        var updateRealPib = function() {
            $('#yearData .line', module).remove();

            for(var x in yearList){
                calculateRealPib(x);
                $('#yearData', module).append(
                '<div class="line">' +
                    '<label>' + yearList[x].year + ' - R$: </label>' +
                    '<span>'+ yearList[4].realPib[x] + '</span>' +
                '</div>');
            }
        }

        $('.yearOptions .year', module).on('click', function () {
            var year = $(this).find('span').html();
            var list = []
            for (var x in yearList) {
                if (yearList[x].year === year) {
                    list = yearList[x].itemList;
                    break;
                }
            }

            mountItemList(list, x);
        });

        var clearYear = function() {
            $('.yearValues', module).empty();
            $('.yearInfo', module).empty();
            updateAllPib();
            updateRealPib();
        }

        var updateAllPib = function () {
            for(var x in yearList) {
                updateYearPib(x, false);
            }
        }

        var updateYearPib = function (year, update){
            var pib = 0;
            var list = yearList[year].itemList;
            
            for(var x in list) {
                pib += list[x].valor * list[x].qtd;
            }

            yearList[year].pib = pib;
            if(update) {
                $('.yearInfo span').last().find('strong').html(pib);
            }
        }

        var mountItemList = function (list, year) {
            clearYear();

            $('.yearInfo', module).append(
                '<span>' +  yearList[year].year + '</span>' +
                '<span>PIB Nominal: R$ <strong>' + yearList[year].pib + '</strong></span>');
            
            for(var x in list) {
                $('.yearValues', module).append(
                    '<div class="yearItem" key="' + x + '">' +
                        '<span>' + list[x].nome + '</span>' +
                        '<div>' +
                            '<label>Valor: </label>' +
                            '<input class="value" type="number" value="' + list[x].valor + '">' +
                        '</div>' +
                        '<div>' +
                            '<label>Qtd: </label>' +
                            '<input class="qtd" type="number" value="' + list[x].qtd + '">' +
                        '</div>' +
                    '</div>'
                );

                var $item = $('.yearValues .yearItem', module).last();

                $('.value', $item).on('change', function () {
                    var $this = $(this);
                    var value = $this.val();
                    var index = $this.closest('.yearItem').attr('key');

                    value = value < 0 ? 0 : value;
                    list[index].valor = value;
                    updateYearPib(year, true);
                    updateRealPib();
                });

                $('.qtd', $item).on('change', function () {
                    var $this = $(this);
                    var value = $this.val();
                    var index = $this.closest('.yearItem').attr('key');
                    
                    value = value < 0 ? 0 : value;
                    list[index].qtd = value;
                    updateYearPib(year, true);
                    updateRealPib();
                });
            }
        }

        var addOnYearList = function (item) {
            for (var x in yearList) {
                yearList[x].itemList.push({ nome: item, valor: 0, qtd: 0 });
            }
            clearYear();
        }

        var removeYearList = function (item) {
            for (var x in yearList) {

                for (var y in yearList[x].itemList) {
                    if (yearList[x].itemList[y].nome === item) {
                        yearList[x].itemList.splice(y, 1);
                        clearYear();
                        break;
                    }
                }
            }
        }

        var addRemoveAction = function () {
            $('.remover', module).off('click').on('click', function () {
                var $parent = $(this).parent();
                var item = $parent.find('span').html();
                for (var i in itemList) {
                    if (itemList[i] === item) {
                        itemList.splice(i, 1);
                        break;
                    }
                }
                removeYearList(item);
                $parent.remove();
            });
        }

        addRemoveAction();

        $('.addItem', module).on('click', function () {
            swal({
                title: 'Adicionar elemento',
                input: 'text',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    'adicionar',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    'cancelar',
                cancelButtonAriaLabel: 'Thumbs down',
                preConfirm: (login) => {
                    var add = login.length ? true : false;

                    for (var i in itemList) {
                        if (itemList[i] === login) {
                            add = false;
                        }
                    }

                    if (add) {
                        itemList.push(login);
                        addOnYearList(login);
                        $('.list', module).append('<div class="item"><span class="nome">' + login + '</span><button type="button" class="remover">Remover</button></div>');
                        addRemoveAction();
                    }
                }
            })
        });
    })();
});