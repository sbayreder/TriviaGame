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
    
   
    }



//how do i make the buttons show up under the question?
function printBtns(num) {
for (var i = 0 ; i < questions[num -1].ans.length; i++) {
    var btn = $("<button class='answerBtn'></button>");
    var t = $('<p></p>')
    t.text (questions[num -1].ans[i]);
    btn.append(t);
    btn.addClass("notChecked");
    btn.attr("btn.checked", false);
    //var num = i+1;
    $(".answer"+num).append(btn);
    }

}

printBtns(1);
printBtns(2);
printBtns(3);
printBtns(4);



  //if correct answer is picked
  //var htmlBtn = "<btn class="notChecked" checked=false></btn>";
  $(document).on("click",".answerBtn",function(){

    //may need boolean on 74
    var currentClicked = $(this).attr("btn.checked");
    $(this).attr("btn.checked",!currentClicked);
    console.log(currentClicked)
  });
//swap classes for styling (conditionally) w/jquery
  //if wrong answer is picked
$(".submit").on("click", function(){
  console.log('submit button clicked')
})

//timer functions
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
