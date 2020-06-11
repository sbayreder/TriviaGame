$(document).ready(function () {
  //Variables
  var count = 0;
  var time = 90;
  var timerId;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  //Questions
  var questions = [
    {
      ques: "What type of fish was Nemo?",
      ans: ["goby", "clownfish", "angelfish", "cuttlefish"],
      corr: "clownfish",
    },
    {
      ques: "What is the fastest fish",
      ans: ["swordfish", "mako shark", "tuna", "sailfish"],
      corr: "sailfish",
    },
    {
      ques: "What is the worlds largest fish?",
      ans: ["whale shark", "sunfish", "lionfish", "giant squid"],
      corr: "whale shark",
    },
    {
      ques: "What is the most popular seafood in America?",
      ans: ["crab", "cod", "shrimp", "salmon"],
      corr: "shrimp",
    },
  ];

  //show question and answers options
  for (var i = 0; i < questions.length; i++) {
    // Write question to html
    var num = i + 1;
    $(".question" + num).text(questions[i].ques);
    // Print all the buttons
  }

  //need to add the same attr to correct answer to return true**

  //checking for which button is clicked
  function printBtns(num) {
    for (var i = 0; i < questions[num - 1].ans.length; i++) {
      var btn = $("<button class='answerBtn'></button>");
      var t = $("<p></p>");
      t.text(questions[num - 1].ans[i]);
      btn.append(t);
      //btn.addClass("notChecked");
      btn.attr("btn.checked", false);

      //var num = i+1;
      $(".answer" + num).append(btn);
    }
  }

  printBtns(1);
  printBtns(2);
  printBtns(3);
  printBtns(4);

  //if correct answer is picked
  //var htmlBtn = "<btn class="notChecked" checked=false></btn>";
  $(document).on("click", ".answerBtn", function () {
    var answerBtns = $(this).parent().children();
    console.log(answerBtns);
    for (let index = 0; index < answerBtns.length; index++) {
      const element = answerBtns[index];
      element.setAttribute("btn.checked", false);
      element.classList.remove("checked");
    }
    $(this).attr("btn.checked", true);
    $(this).addClass("checked");

    //   var currentClicked = $(this).attr("btn.checked");
    //   if(currentClicked == "false"){

    //   }
    //   else{$(this).attr ("btn.checked" , false)
    // }
    console.log($(this).attr("btn.checked"));
  });
  //swap classes for styling (conditionally) w/jquery
  //if wrong answer is picked
  $(".submit").on("click", function () {
    for (let i = 0; i < questions.length; i++) {
      var num = i + 1;
      var buttons = $(".answer" + num).children();

      for (let j = 0; j < buttons.length; j++) {
        //var correctAnsPicked=false;

        if (buttons[j].getAttribute("btn.checked") == "true") {
          // correctAnsPicked=true;
          if (buttons[j].textContent == questions[i].corr) {
            correct++;
          }
          // else (correctAnsPicked)
        }
      }
    }
    stop();
    console.log(correct);
  });

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
