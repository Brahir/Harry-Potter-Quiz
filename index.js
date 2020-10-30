main.style.display = 'none';
tryAgain.style.display = 'none';
advanceClass.style.display = 'none';
var classyear = 1

var btn = document.querySelector('#submit');
btn.addEventListener('click', participant);
btn.addEventListener('click', classYear);


function participant() {
    var house = document.hphouse.house.value
    var fname = document.hphouse.fname.value
    var lname = document.hphouse.lname.value
    title.textContent = `Welcome ${fname} ${lname}!`
    if (house == "Hufflepuff") { document.querySelector('img').src = 'img/hufflepuff.png' }
    else if (house == "Gryffindor") { document.querySelector('img').src = 'img/gryffindor.jpg' }
    else if (house == "Slytherin") { document.querySelector('img').src = 'img/slytherin.jpg' }
    else if (house == "Ravenclaw") { document.querySelector('img').src = 'img/ravenclaw.jpg' }
    else { }
}

function classYear() {
    main.style.display = 'inherit';
    hpquiz.style.display = 'inherit';
    hphouse.style.display = 'none'
    tryAgain.style.display = 'none';
    advanceClass.style.display = 'none';

    if (classyear == 1) {
        hpyear.textContent = "Year 1";
        q1.textContent = "Harry lives with his aunt, his uncle and with his cousin. What's the name of his cousin?";
        q2.textContent = "Which is uncles Vernon favourite day of the weekend and why?";
        q3.textContent = "Where do Harry Potter and Draco Malfoy meet for the first time?";
        q4.textContent = "What is the difference between monkshood and wolfsbane?";
        q5.textContent = "Which is Gryffindor students characteristic?";
        q6.textContent = "Who was referee on the quidditch match Gryffindor vs Hufflepuff?";
        q7.textContent = "At the end of the year, who won the 10 points that made Gryffindor win?";
        q8.textContent = "What is it that Hagrid gives to Harry the day they are returning home?";
    }
    else {
        hpyear.textContent = "Year 2";
        q1.textContent = "Year 2 Q1";
        q2.textContent = "Year 2 Q2";
        q3.textContent = "Where do Harry Potter and Draco Malfoy meet for the first time?";
        q4.textContent = "What is the difference between monkshood and wolfsbane?";
        q5.textContent = "Which is Gryffindor students characteristic?";
        q6.textContent = "Who was referee on the quidditch match Gryffindor vs Hufflepuff?";
        q7.textContent = "At the end of the year, who won the 10 points that made Gryffindor win?";
        q8.textContent = "What is it that Hagrid gives to Harry the day they are returning home?";
    }
}

function check() {
    var c = 0;
    var q1 = document.hpquiz.question1.value;
    var q2 = document.hpquiz.question2.value;
    var q3 = document.hpquiz.question3.value;
    var q4 = document.hpquiz.question4.value;
    var q5 = document.hpquiz.question5.value;
    var q6 = document.hpquiz.question6.value;
    var q7 = document.hpquiz.question7.value;
    var q8 = document.hpquiz.question8.value;
    var result = document.getElementById('result');
    var quiz = document.getElementById('hpquiz');

    if (q1 == "q1correct") { c++ }
    if (q2 == "q2correct") { c++ }
    if (q3 == "q3correct") { c++ }
    if (q4 == "q4correct") { c++ }
    if (q5 == "q5correct") { c++ }
    if (q6 == "q6correct") { c++ }
    if (q7 == "q7correct") { c++ }
    if (q8 == "q8correct") { c++ }

    hpquiz.style.display = 'none';

    if (c >= 5) {
        result.textContent = `Congratulations, you have answered ${c}/8 questions correct. You have passed into next year!`
        classyear++;
        advanceClass.style.display = 'inherit';
    }
    else {
        result.textContent = `Too bad! You have only scored ${c}/8 questions correct. You need to study more.`
        tryAgain.style.display = 'inherit';
    }
}