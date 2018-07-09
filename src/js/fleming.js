$(document).ready( function () {
    (function () {

        var module = $('#fleming');
        var classList = ['incial', 'bp', 'lm', 'ls', 'expM', 'expF', 'imp'];
        var $view = $('.flemingView, .content', module);

        var updateView = function(target, rate) {

            for(var x in classList){
                $view.removeClass(classList[x]);
            }
            $view.addClass(target);

            if(typeof(rate) != 'undefined') {
                $view.removeClass('floating').addClass(rate);
            }
        };

        $('.flemingItem', module).on('click', function () {
            var target = $(this).attr('plot');
            updateView(target);
        });

        $('.flemingItem', module).last().off('click').on('click', function () {
            var $this = $(this);
            var rate = $this.find('span').html() ==  'Taxa Fixa' ? 'floating' : '';
            $this.find('span').html(rate == 'floating' ? 'Taxa Flexivel' : 'Taxa Fixa');

            updateView('', rate)
        });
    })();
});