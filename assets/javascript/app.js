$(document).ready(function(){
//trivia 
var trivia= {
    correct: 0,
    incorrect: 0,
    unasnwered: 0,
    timer: 90,
    timerOn: false,
    timerId: '',

}


//event listeners
$(timer).hide();
$('#start').on('click',tivia.startGame);
$(document).on('click','option',trivia.guessCheck);






});