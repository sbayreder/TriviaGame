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
    ques: "What type of fish was Nemo?",
    ans: ["goby", "clownfish", "angelfish", "cuttlefish"],
    corr: "clownfish"
  },
  {
    ques: "What is the fastest fish",
    ans: ["swordfish", "mako shark", "tuna", "sailfish"],
    corr: "sailfish"
  },
  {
    ques: "What is the worlds largest fish?",
    ans: ["whale shark", "sunfish", "lionfish", "giant squid"],
    corr: "whale shark"
  },
  {
    ques: "What is the most popular seafood in America?",
    ans: ["crab", "cod", "shrimp", "salmon"],
    corr: "shrimp"
  },
]



  //show question and answers options
  for (var i = 0; i < questions.length; i++) {
    // Write question to html
    var num = i+1;
    $(".question"+ num).text(questions[i].ques);
    // Print all the buttons
    printBtn(i);
   
    }



//how do i make the buttons show up under the question?
function printBtn(i) {
for (var j = 0; j < questions[i].ans.length; j++) {
    var btn = document.createElement("button");
    var t = document.createTextNode( questions[i].ans[j]);
    btn.append(t);
    btn.addClass("notChecked");
    btn.attr("checked", false);
    var num = j+1;
    $(".answer"+num).append(btn);
    }
}



  //if correct answer is picked
  //var htmlBtn = "<btn class="notChecked" checked=false></btn>";
  $(document).on("click","btn",function(){
      var currentClicked = $(this).attr("checked");
      $(this).attr("checked",!currentClicked);
  });

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
