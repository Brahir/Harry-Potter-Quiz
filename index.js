function check(){
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

    if (q1=="q1correct") {c++}
    if (q2=="q2correct") {c++}
    if (q3=="q3correct") {c++}
    if (q4=="q4correct") {c++}
    if (q5=="q5correct") {c++}
    if (q6=="q6correct") {c++}
    if (q7=="q7correct") {c++}
    if (q8=="q8correct") {c++}

    hpquiz.style.display = 'none';

    if (c>=5) {
        result.textContent = `Congratulations, you have answered ${c}/8 questions correct. You have passed into next year!`
    } else {
        result.textContent = `Too bad! You have only scored ${c}/8 questions correct. You need to study more.`
    }
  
}

const name = prompt('What is your name?');
var house = prompt('What house are you in?')
title.textContent = `Welcome ${name}, to our Harry Potter Quiz!`

if (house=="Hufflepuff") {document.querySelector('img').src = 'img/hufflepuff.png'}
else if (house=="Gryffindor") {document.querySelector('img').src = 'img/gryffindor.jpg'}
else if (house=="Slytherin") {document.querySelector('img').src = 'img/slytherin.jpg'}
else if (house=="Ravenclaw") {document.querySelector('img').src = 'img/ravenclaw.jpg'}
else {}