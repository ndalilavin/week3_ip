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

    document.write(score);

}