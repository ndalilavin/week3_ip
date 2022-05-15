function findScore() {

    var score = 0;

    var quiz1 = document.questions.q1.value;
    if (quiz1 == "Both A and B") {score++}

    var quiz2 = document.questions.q2.value;
    if (quiz2 == "const") {score++}

    var quiz3 = document.questions.q3.value;
    if (quiz3 == "Object") {score++}

    var quiz4 = document.questions.q4.value;
    if (quiz4 == "stringify()") {score++}

    var quiz5 = document.questions.q5.value;
    if (quiz5 == "Cassandra") {score++}

    var myscore=document.getElementById('myscore');
    // myscore.textContent=`${score}`;

    var questions=document.getElementById("questions"); // Maintains page styling on results
    questions.style.display="none";


    if(score<2.5) {
        myscore.textContent=`Your score is ${score}. This is below the pass mark, please try again!`;
    } 
    else if(score>2.5 && score<4) {
        myscore.textContent=`Your score is ${score}. You can do better!`;
    }

    else {
        myscore.textContent=`Your score is ${score}. Excellent work, Congratulations!`;

    }


}