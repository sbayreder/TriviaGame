$(document).ready(function() {
  //Variables
var count = 0;
var time = 90;
var timerId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

  //Questions
  var questions=[{
    ques: "what type of fish was Nemo?",
    ans: ["goby", "clownfish", "angelfish", "cuttlefish"],
    corr: "clownfish"
  },
  // {

  // }
]
console.log(questions[0].ques);
// var ques1 = ["What type of fish was Nemo?"];
var ques2 = ["What is the fastest fish?"];
var ques3 = ["What is the worlds largest fish?"];
var ques4 = ["What is the most popular seafood in America?"];

  //Answers
// var ans1 = ;
var ans2 = ["swordfish", "mako shark", "tuna", "sailfish"];
var ans3 = ["whale shark", "sunfish", "lionfish", "giant squid"];
var ans4 = ["crab", "cod", "shrimp", "salmon"];


// var correct1 =["goby"]
var correct2 =["sailfish"]
var correct3 =["whale shark"]
var correct4 =["shrimp"]
  //show question and answers options
  for (var i = 0; i < questions.length; i++) {
    // Write question to html
    var num = i+1;
    $(".question"+ num).text(questions[i].ques);
    // Print all the buttons
    printBtn(i);
   
    }

// $(".question2").text(ques2);
// $(".question3").text(ques3);
// $(".question4").text(ques4);

// $(".answer1").text(ans1);
// $(".answer2").text(ans2);
// $(".answer3").text(ans3);
// $(".answer4").text(ans4);



//how do i make the buttons show up under the question?
function printBtn(i) {
for (var j = 0; j < questions[i].ans.length; j++) {
    var btn = document.createElement("button");
    var t = document.createTextNode( questions[i].ans[j]);
    btn.append(t);
    document.body.append(btn);
    var num = j+1;
    $(".answer"+num).text();
    }
}

//copy above code for all answer var


  //if correct answer is picked

  //if wrong answer is picked

  //timer

function run() {
    clearInterval(timerId);
    timerId = setInterval(decrement, 1000);
}
function decrement() {
    time--;
    $(".timer").html("<h2>" + time + " seconds" + "</h2>");

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
