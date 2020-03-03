$(document).ready(function(){
//Variables

var count = 0;
var time =30;
var timerId;
var correct=0;
var incorrect=0;
var unanswered=0;

//Questions
var ques1= ["What type of fish was Nemo?"];
var ques2= ["What is the fastest fish?"];
var ques3= [ "What is the worlds largest fish?"];
var ques4= ["What is the most popular seafood in America?"];

//Answers
var ans1= ["goby", "clownfish" , "angelfish" , "cuttlefish"];
var ans2= ["swordfish", "mako shark", "tuna" , "sailfish"];
var ans3= ["whale shark" , "sunfish" , "lionfish" , "giant squid"];
var ans4= ["crab" , "cod" , "shrimp" , "salmon"];


//show question and answers options
function showQuestion(){
    $('#question1').html(ques1);
    
}


//click listener
$("button").click(function(){
    $("#question1").html(ques1);
});
//if correct answer is picked


//if wrong answer is picked











//timer




});








