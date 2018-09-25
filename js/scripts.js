var check = function () {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    console.log(question2);
    
    var questions = [question1,question2,question3,question4,question5];
    questions.forEach(function(question) {
        if(question == 20) {
            correct+=20;
            
        }
    })

    var messages = ["Great job!", "That's just okay", "you really need to do better"];

    // console.log(correct);
    var range;
    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }

    if (correct > 4) {
        range = 0;
    }


    document.getElementById("after_submit").style.visibility = "visible";



    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";
}
