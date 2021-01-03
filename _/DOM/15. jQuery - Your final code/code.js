$('#p2').css('background-color', 'lightgreen');
$('.red').removeClass('red').addClass('blue');


var a = setTimeout(function(){
    $('[name="p3"]').fadeOut();
}, 3000);
var b = setTimeout(function(){
    $('[name="p3"]').fadeIn();
}, 5000);

$('p').css('font-size', '24px');

$('a').attr('href', 'http://wikipedia.org');
$('a').attr('target', '_blank');

console.log($('#p3').html());
$('#p3').html('Paragraph 3 changed!');

$('input').val('Mark');
console.log($('input').val());

$('div').addClass('grey');
$('div').width(350);

//add click event to the div
$('div').click(function(){
    $('div').animate({width: 200}, callback);
});

function callback(){
    console.log('animation finshed!');
}


$('div').after('<div>Extra div added!</div>');
