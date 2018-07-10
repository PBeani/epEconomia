$(document).ready( function () {
    (function () {

        var module = $('#fleming');
        var classList = ['incial', 'bp', 'lm', 'ls', 'expM', 'expF', 'imp'];
        var contentMap = {expM: 'money', expF: 'fiscal', imp: 'import'};
        var $view = $('.flemingView, .content', module);
        var isFlex = false;

        var updateView = function(target, rate) {

            for(var x in classList){
                $view.removeClass(classList[x]);
            }
            $view.addClass(target);

            if(typeof(rate) != 'undefined') {
                $view.removeClass('floating').addClass(rate);
            }
        };

        var updateContent = function(target) {
            $('.actionItem').addClass('hidden');
            var selector = '.actionItem.'+ contentMap[target] + '-' + (isFlex ? 'flex' : 'fixed');
            $(selector).removeClass('hidden');
        };

        $('.flemingItem', module).on('click', function () {
            var target = $(this).attr('plot');
            updateContent(target);
            updateView(target);
        });

        $('.flemingItem', module).last().off('click').on('click', function () {
            var $this = $(this);
            var rate = $this.find('span').html() ==  'Taxa Fixa' ? 'floating' : '';
            $this.find('span').html(rate == 'floating' ? 'Taxa Flexivel' : 'Taxa Fixa');
            isFlex = rate == 'floating' ? true : false;
            updateView('', rate)
            updateContent('');
        });
    })();
});