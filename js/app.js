$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    })
    .mousedown(function(){
        if(!$('throw-text').is(':visible')){
            $('#throw-text').hide();
        }
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });
});

    $(document).keydown(function(e) {
    if (e.keyCode == 88) {
        if(!$('cool-text').is(':visible')){
            $('#cool-text').hide();
        }
        playCool()
        $('.ryu-action').hide();
        $('.ryu-cool').show();
    }   
    }).keyup(function(e) {
        if (e.keyCode == 88) {
        $('#cool-sound')[0].pause();
        $('#cool-sound')[0].load();
        $('.ryu-cool').hide();
        $('.ryu-still').show();
    }
    });

function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
}

var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    // $('#cool')[0].load()
    $('#cool-sound')[0].play();
  }
}