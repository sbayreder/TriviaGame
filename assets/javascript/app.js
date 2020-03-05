$(document).ready(function() {
  //Variables
var count = 0;
var time = 90;
var timerId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

  //Questions
var ques1 = ["What type of fish was Nemo?"];
var ques2 = ["What is the fastest fish?"];
var ques3 = ["What is the worlds largest fish?"];
var ques4 = ["What is the most popular seafood in America?"];

  //Answers
var ans1 = ["goby", "clownfish", "angelfish", "cuttlefish"];
var ans2 = ["swordfish", "mako shark", "tuna", "sailfish"];
var ans3 = ["whale shark", "sunfish", "lionfish", "giant squid"];
var ans4 = ["crab", "cod", "shrimp", "salmon"];

  //show question and answers options
$(".question1").text(ques1);
$(".question2").text(ques2);
$(".question3").text(ques3);
$(".question4").text(ques4);

$(".answer1").text(ans1);
$(".answer2").text(ans2);
$(".answer3").text(ans3);
$(".answer4").text(ans4);

  //if correct answer is picked

  //if wrong answer is picked

  //timer

function run() {
    clearInterval(timerId);
    timerId = setInterval(decrement, 1000);
}
function decrement() {
    time--;
    $(".timer").html("<h2>" + time + "</h2>");

    if (time === 0) {
    stop();
    alert("Time Up!");
    }
}
function stop() {
    clearInterval(timerId);
}
run();
});
