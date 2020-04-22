// $('li').click(function () {
//     console.log($(this).css('color'));
//     if($(this).css('color') === 'rgb(195, 195, 195)'){
//         $(this).css({
//             color:'black',
//             textDecoration:'none'
//         });
//     }else{
//         $(this).css({
//             color:'rgb(195, 195, 195)',
//             textDecoration:'line-through'
//         });
//     }
// });
$('ul').on('click','li',function () {
    $(this).toggleClass('done');
});

$('ul').on('click','span',function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
});

$('input').keypress(function(event) {
    if(event.which === 13){

        var itemTextInput = $(this).val();
        $(this).val('');
        $('ul').append('<li>'+ itemTextInput +'<span><i class="fas fa-backspace"></i></span></li>')
    }
});

$('h2 span').click(function () {
    $('input').fadeToggle();
});