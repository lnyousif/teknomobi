$(function() {
    $('.lang-pl').live('click', function() {
        $('#pl').show();
        $('#gb').hide();
        return 0;
    });
    $('.lang-gb').live('click', function() {
        $('#pl').hide();
        $('#gb').show();
        return 0;
    });
});
