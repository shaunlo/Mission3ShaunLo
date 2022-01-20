// "Use jQuery selectors(i.e.the “$”) in your program"

$("#btnCal").click(function () {

    var score = Number($("#txtAssignment").val() * 0.55) + Number($("#txtGroupProject").val() *0.05) + Number($("#txtQuizzes").val() *0.1) + Number($("#txtExams").val()*0.2) + Number($("#txtIntex").val()*0.1)
    var as = Number($("#txtAssignment").val())
    var gp = Number($("#txtGroupProject").val())
    var quiz = Number($("#txtQuizzes").val())
    var exam = Number($("#txtExams").val())
    var intex = Number($("#txtIntex").val())

    if (!($("#txtAssignment").val() && $("#txtGroupProject").val() && $("#txtQuizzes").val() && $("#txtExams").val() && $("#txtIntex").val())) {
        alert("Make sure all input is not blank. Please Enter your score!");
        return 0;
    }

    if (as > 100 || as < 0 || gp > 100 || gp < 0 || quiz > 100 || quiz < 0 || exam > 100 || exam < 0 || intex > 100 || intex < 0) {
        alert("Your input has some problem.")
        return 0;
    }

    if (score >= 94 && score <= 100) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is A"
        );
    }
    else if (score >= 90 && score <= 94) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is A-"
        );
    }
    else if (score >= 87 && score <= 90) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is B+"
        );
    }
    else if (score >= 84 && score <= 87) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is B"
        );
    }
    else if (score >= 80 && score <= 84) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is B-"
        );
    }
    else if (score >= 77 && score <= 80) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is C+"
        );
    }
    else if (score >= 74 && score <= 77) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is C"
        );
    }
    else if (score >= 70 && score <= 74) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is C-"
        );
    }
    else if (score >= 67 && score <= 70) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is D+"
        );
    }
    else if (score >= 64 && score <= 67) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is D"
        );
    }
    else if (score >= 60 && score <= 64) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is D-"
        );
    }
    else if (score < 60 && score >= 0) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is E"
        );
    }
    else {
        alert("Your Input: " + score + " is out of (0-100) or not a number. Please retype it again!")
    }
})

