main.style.display = 'none';
tryAgain.style.display = 'none';
advanceClass.style.display = 'none';
var classyear = 1;
var totalScore = 0;

var btn = document.querySelector('#submit');
btn.addEventListener('click', participant);
btn.addEventListener('click', classYear);


function participant() {
    var house = document.hphouse.house.value;
    var fname = document.hphouse.fname.value;
    var lname = document.hphouse.lname.value;
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
    hphouse.style.display = 'none';
    tryAgain.style.display = 'none';
    advanceClass.style.display = 'none';
    result.style.display = 'none';

    if (classyear == 1) {
        hpyear.textContent = "Year 1";
        q1.textContent = "Harry lives with his aunt, his uncle and with his cousin. What's the name of his cousin?";
        q1a1.textContent = "Dudley"; //correct answer
        q1a2.textContent = "Seamus";
        q1a3.textContent = "Vernon";
        q1a4.textContent = "Neville";
        q2.textContent = "Which is uncles Vernon favourite day of the weekend and why?";
        q2a1.textContent = "Sunday, beacause he can watch football";
        q2a2.textContent = "Saturday, beacause he can sleep up to late";
        q2a3.textContent = "Sunday, beacause there is no mail"; //correct answer
        q2a4.textContent = "Saturday, beacause he goes to the cinema";
        q3.textContent = "Where do Harry Potter and Draco Malfoy meet for the first time?";
        q3a1.textContent = "Platform 9 3/4";
        q3a2.textContent = `Madam Malkin's "Robes for all Occasions"`; //correct answer
        q3a3.textContent = "Hogwarts Express";
        q3a4.textContent = "Hogwarts Main Hall";
        q4.textContent = "What is the difference between monkshood and wolfsbane?";
        q4a1.textContent = "One is poisonous and the other is not";
        q4a2.textContent = "One is a plant and the other an animal";
        q4a3.textContent = "One is green and the other is red";
        q4a4.textContent = "There is no difference"; //correct answer
        q5.textContent = "Which is Gryffindor students characteristic?";
        q5a1.textContent = "Courage"; //correct answer
        q5a2.textContent = "Honour";
        q5a3.textContent = "Inteligence";
        q5a4.textContent = "Ambitious";
        q6.textContent = "Who was referee on the quidditch match Gryffindor vs Hufflepuff?";
        q6a1.textContent = "Severus Snape"; //correct answer
        q6a2.textContent = "Madame Hooch";
        q6a3.textContent = "Professor Quirrell";
        q6a4.textContent = "Lee Jordan";
        q7.textContent = "At the end of the year, who won the 10 points that made Gryffindor win?";
        q7a1.textContent = "Angelina Johnson";
        q7a2.textContent = "George Weasley";
        q7a3.textContent = "Neville Longbottom"; //correct answer
        q7a4.textContent = "Harry Potter";
        q8.textContent = "What is it that Hagrid gives to Harry the day they are returning home?";
        q8a1.textContent = "A cake";
        q8a2.textContent = "A brand new broom";
        q8a3.textContent = "A dragon egg";
        q8a4.textContent = "An album with pictures of his parents"; //correct answer
    }
    else if (classyear == 2) {
        hpyear.textContent = "Year 2";
        q1.textContent = "What creature was jumping on Harry's bed the day that the Masons were at the Dursleys house?";
        q1a1.textContent = "A Unicorn";
        q1a2.textContent = "A Centaur";
        q1a3.textContent = "A House Elf"; //correct answer
        q1a4.textContent = "A Grindylow";
        q2.textContent = "Which of this is NOT one of Ron's brothers";
        q2a1.textContent = "Percy";
        q2a2.textContent = "Charlie";
        q2a3.textContent = "Bill";
        q2a4.textContent = "Ted"; //correct answer
        q3.textContent = 'Who says: “Can you believe our luck? From all the trees we could’ve hit, we had to get one that hits back.” ?';
        q3a1.textContent = "Hermione Granger";
        q3a2.textContent = "Ron Weasley"; //correct answer
        q3a3.textContent = "Harry Potter";
        q3a4.textContent = "Ginny Weasley";
        q4.textContent = "What duo is always around Draco Malfoy?";
        q4a1.textContent = "Crabbe and Goyle"; //correct answer
        q4a2.textContent = "Calvin and Hobbes";
        q4a3.textContent = "Chip and Dale";
        q4a4.textContent = "Frodo and Sam";
        q5.textContent = "Hermione was supposed to become a Slytherin girl when she drank the Polijuice Potion. Who is this girl?";
        q5a1.textContent = "Pansy Parkinson";
        q5a2.textContent = "Padma Patil";
        q5a3.textContent = "Astoria Greengrass";
        q5a4.textContent = "Millicent Bulstrode"; //correct answer
        q6.textContent = " The day she was attacked, Hermione was found with another girl. From which house was the second girl from?";
        q6a1.textContent = "Gryffindor";
        q6a2.textContent = "Hufflepuff";
        q6a3.textContent = "Ravenclaw"; //correct answer
        q6a4.textContent = "Slytherin";
        q7.textContent = "What creature was the monster of the Chamber of Secrets?";
        q7a1.textContent = "A Giant Spider";
        q7a2.textContent = "A Basilisk"; //correct answer
        q7a3.textContent = "A Boggart";
        q7a4.textContent = "A Dragon";
        q8.textContent = "Why was Harry a parselmouth?";
        q8a1.textContent = "He is the heir of Slythrin";
        q8a2.textContent = "He was bit by a snake when he was a child";
        q8a3.textContent = "He inherited it from Voldemort's attack"; //correct answer
        q8a4.textContent = "He learned it at school";
        q1a3v.value = "q1correct"
        q1a1v.value = "q1incorrect"
        q2a4v.value = "q2correct"
        q2a3v.value = "q2incorrect"
        q3a2v.value = "q3correct"
        q3a1v.value = "q3incorrect"
        q4a1v.value = "q4correct"
        q4a4v.value = "q4incorrect"
        q5a4v.value = "q5correct"
        q5a1v.value = "q5incorrect"
        q6a3v.value = "q6correct"
        q6a1v.value = "q6incorrect"
        q7a2v.value = "q7correct"
        q7a3v.value = "q7incorrect"
        q8a3v.value = "q8correct"
        q8a4v.value = "q8incorrect"
    }
    else if (classyear == 3) {
        hpyear.textContent = "Year 3";
        q1.textContent = "At the Nocturn Bus, Harry pretended to be someone else. Who did he pretended to be?";
        q1a1.textContent = "Dean Thomas";
        q1a2.textContent = "Neville Longbottom"; //correct answer
        q1a3.textContent = "Ronald Weasley";
        q1a4.textContent = "Seamus Finnigan";
        q2.textContent = "What is the name of the book the 3rd years were asked to bring for Professor Hagrid assignment?";
        q2a1.textContent = "The Incredible Book of Magical Creatures";
        q2a2.textContent = "The Monster Book of Monsters"; //correct answer
        q2a3.textContent = "Quidditch Through the Ages";
        q2a4.textContent = "Fantastic Beasts and Where to Find Them";
        q3.textContent = "What does the Grim mean?";
        q3a1.textContent = "Luck";
        q3a2.textContent = "Love";
        q3a3.textContent = "Fear";
        q3a4.textContent = "Death"; //correct answer
        q4.textContent = "What is Ron’s Boggart?";
        q4a1.textContent = "A Spider"; //correct answer
        q4a2.textContent = "His Mother";
        q4a3.textContent = "A Dementor";
        q4a4.textContent = "Proffessor Snape";
        q5.textContent = "Which one of the following was not a friend of Lupin as kids";
        q5a1.textContent = "Prongs";
        q5a2.textContent = "Paddfoot";
        q5a3.textContent = "Snivelus"; //correct answer
        q5a4.textContent = "Wormtail";
        q6.textContent = "Who gave Hermione the Time Turner?";
        q6a1.textContent = "Prof. McGonagall"; //correct answer
        q6a2.textContent = "Prof. Dumpledore";
        q6a3.textContent = "Prof. Trelawney";
        q6a4.textContent = "Carnelius Fudge";
        q7.textContent = "Why was professor Lupin missing clases?";
        q7a1.textContent = "He fell asleep";
        q7a2.textContent = "He had to travel";
        q7a3.textContent = "He was sent to Azkaban";
        q7a4.textContent = "He is a Werewolf"; //correct answer
        q8.textContent = "Who sent Harry his new Firebolt?";
        q8a1.textContent = "Minerva McGonagall";
        q8a2.textContent = "Albus Dumbledore";
        q8a3.textContent = "Rubeus Hagrid";
        q8a4.textContent = "Sirius Black"; //correct answer
        q1a2v.value = "q1correct"
        q1a3v.value = "q1incorrect"
        q2a2v.value = "q2correct"
        q2a4v.value = "q2incorrect"
        q3a4v.value = "q3correct"
        q3a2v.value = "q3incorrect"
        q4a1v.value = "q4correct"
        q4a2v.value = "q4incorrect"
        q5a3v.value = "q5correct"
        q5a4v.value = "q5incorrect"
        q6a1v.value = "q6correct"
        q6a3v.value = "q6incorrect"
        q7a4v.value = "q7correct"
        q7a2v.value = "q7incorrect"
        q8a4v.value = "q8correct"
        q8a3v.value = "q8incorrect"
    }
    else if (classyear == 4) {
        hpyear.textContent = "Year 4";
        q1.textContent = "Who taught the 4th years about the three unforgivable curses?";
        q1a1.textContent = "Madeye Moody";
        q1a2.textContent = "Bartemius Crouch Jr."; //correct answer
        q1a3.textContent = "Severus Snape";
        q1a4.textContent = "Lucius Malfoy";
        q2.textContent = "Which was Cedric’s strategy to fool the dragon on the first task?";
        q2a1.textContent = "He transformed a rock into a dog"; //correct answer
        q2a2.textContent = "He used a charm so the dragon would fall asleep";
        q2a3.textContent = "He became invisible";
        q2a4.textContent = "He blinded the dragon";
        q3.textContent = "What was special about the Leprechaun gold?";
        q3a1.textContent = "It was invisible";
        q3a2.textContent = "It duplicated";
        q3a3.textContent = "It was heavey like a stone";
        q3a4.textContent = "It banished after a few hours"; //correct answer
        q4.textContent = "Who gives Harry the Gillyweed before the second task?";
        q4a1.textContent = "Neville Longbottom";
        q4a2.textContent = "Cedric Diggory";
        q4a3.textContent = "Hermione Granger";
        q4a4.textContent = "Dobby"; //correct answer
        q5.textContent = "How did Reeta Skeeter gathered information about the champions";
        q5a1.textContent = "She had microphones in the common room";
        q5a2.textContent = "Malfoy was her spy";
        q5a3.textContent = "She could turn into a beetle"; //correct answer
        q5a4.textContent = "She had an invisibility cloak and hid in the castle";
        q6.textContent = "Before the four champions knew about the maze, what did Fleur guess the third task was about?";
        q6a1.textContent = "They had to battle a mountain troll";
        q6a2.textContent = "They had to fight a Dementor";
        q6a3.textContent = "They had to fight each other";
        q6a4.textContent = "They had to find a treasure in an underground tunnel"; //correct answer
        q7.textContent = "Who said: ‘’What’s comin’ will come, an’ we’ll meet it when it does.’’?";
        q7a1.textContent = "Albus Dumbledore";
        q7a2.textContent = "Rubeus Hagrid"; //correct answer
        q7a3.textContent = "Harry Potter";
        q7a4.textContent = "Sirius Black";
        q8.textContent = "Whose wand conjured the Dark Mark during the Quidditch World Cup?";
        q8a1.textContent = "Harry Potter´s"; //correct answer
        q8a2.textContent = "Bartimius Crouch Jr´s";
        q8a3.textContent = "Lord Voldemort´s";
        q8a4.textContent = "Arthur Weasley´s";
        q1a2v.value = "q1correct"
        q1a3v.value = "q1incorrect"
        q2a1v.value = "q2correct"
        q2a2v.value = "q2incorrect"
        q3a4v.value = "q3correct"
        q3a3v.value = "q3incorrect"
        q4a4v.value = "q4correct"
        q4a1v.value = "q4incorrect"
        q5a3v.value = "q5correct"
        q5a4v.value = "q5incorrect"
        q6a4v.value = "q6correct"
        q6a1v.value = "q6incorrect"
        q7a2v.value = "q7correct"
        q7a4v.value = "q7incorrect"
        q8a1v.value = "q8correct"
        q8a4v.value = "q8incorrect"
    }
    else if (classyear == 5) {
        hpyear.textContent = "Year 5";
        q1.textContent = "In the Black's house, where did Buckbeak stay?";
        q1a1.textContent = "In the kitchen";
        q1a2.textContent = "In the Bathroom";
        q1a3.textContent = "In the Garden";
        q1a4.textContent = "In Sirius mother's room"; //correct answer
        q2.textContent = "What relationship do Nymphadora Tonks and Draco Malfoy have?";
        q2a1.textContent = "Both are pure bloods";
        q2a2.textContent = "They are siblings";
        q2a3.textContent = "They are cousines"; //correct answer
        q2a4.textContent = "They have no relationship";
        q3.textContent = "Who sent Ron a letter advising him not to hang around with Harry?";
        q3a1.textContent = "Seamus Finnigan";
        q3a2.textContent = "Percy Weasley"; //correct answer
        q3a3.textContent = "Draco Malfoy";
        q3a4.textContent = "Sirius Black";
        q4.textContent = "How many Death Eaters were needed to kill Gideon Prewett?";
        q4a1.textContent = "one";
        q4a2.textContent = "three";
        q4a3.textContent = "five"; //correct answer
        q4a4.textContent = "seven";
        q5.textContent = "Which Dumbledore's Army member reduced a table into dust during a meet?";
        q5a1.textContent = "Lavander Brown";
        q5a2.textContent = "Parvati Patil"; //correct answer
        q5a3.textContent = "Ginny Weasley";
        q5a4.textContent = "Luna Lovegood";
        q6.textContent = "Who sent the Dementors to attack Harry during the summer holidays?";
        q6a1.textContent = "Lord Voldemort";
        q6a2.textContent = "Lucius Malfoy";
        q6a3.textContent = "Dolores Umbridge"; //correct answer
        q6a4.textContent = "Cornilius Fudge";
        q7.textContent = "What was Voldemort's secrect weapon?";
        q7a1.textContent = "A laser gun";
        q7a2.textContent = "A super magical wand";
        q7a3.textContent = "His snake, Naginni";
        q7a4.textContent = "A prophecy about himself and Harry"; //correct answer
        q8.textContent = "Wile the 5th years were taking their Astronomy O.W.L, how many stunning spells hited Professor Mcgonagall on the chest?";
        q8a1.textContent = "four"; //correct answer
        q8a2.textContent = "two";
        q8a3.textContent = "five";
        q8a4.textContent = "three";
        q1a4v.value = "q1correct"
        q1a2v.value = "q1incorrect"
        q2a3v.value = "q2correct"
        q2a1v.value = "q2incorrect"
        q3a2v.value = "q3correct"
        q3a4v.value = "q3incorrect"
        q4a3v.value = "q4correct"
        q4a4v.value = "q4incorrect"
        q5a2v.value = "q5correct"
        q5a3v.value = "q5incorrect"
        q6a3v.value = "q6correct"
        q6a4v.value = "q6incorrect"
        q7a4v.value = "q7correct"
        q7a2v.value = "q7incorrect"
        q8a1v.value = "q8correct"
        q8a4v.value = "q8incorrect"
    }
    else if (classyear == 6) {
        hpyear.textContent = "Year 6";
        q1.textContent = "What did Sirius leave Harry after he died?";
        q1a1.textContent = "His wand";
        q1a2.textContent = "A letter";
        q1a3.textContent = "Everithing he owned"; //correct answer
        q1a4.textContent = "Nothing";
        q2.textContent = "How many ‘Outstandings’ did Ron have for his O.W.L’s?";
        q2a1.textContent = "One";
        q2a2.textContent = "None"; //correct answer
        q2a3.textContent = "Three";
        q2a4.textContent = "Two";
        q3.textContent = "Who finds Harry at the Hogwarts express and takes him back to the gates?";
        q3a1.textContent = "Luna Lovegood";
        q3a2.textContent = "Draco Malfoy";
        q3a3.textContent = "Nymphadora Tonks"; //correct answer
        q3a4.textContent = "Hagrid";
        q4.textContent = "Which student from Hufflepuff is the only one taking potions at Harry's class?";
        q4a1.textContent = "Hanna Abbot";
        q4a2.textContent = "Justin Finch-Fletchley";
        q4a3.textContent = "Ernie Macmillan"; //correct answer
        q4a4.textContent = "Susan Bones";
        q5.textContent = "Which was Harry's conclusion of why Tonks was so upset about Sirius’s death?";
        q5a1.textContent = "It was her fault he died";
        q5a2.textContent = "They where family";
        q5a3.textContent = "He owed her money";
        q5a4.textContent = "She was in love whith him"; //correct answer
        q6.textContent = "Which was the name of Tom Riddle’s mother?";
        q6a1.textContent = "Merope"; //correct answer
        q6a2.textContent = "Narscisa";
        q6a3.textContent = "Bellatrix";
        q6a4.textContent = "Andromeda";
        q7.textContent = "Which Order of the Phoenix member was harmed by Fenrir Greyback on the face?";
        q7a1.textContent = "Remus Lupin";
        q7a2.textContent = "Bill Weasley"; //correct answer
        q7a3.textContent = "Madeye Moody";
        q7a4.textContent = "Arthur Weasley";
        q8.textContent = "Who gave Katie Bell the enchanted necklaces at The Three Broomsticks?";
        q8a1.textContent = "Madam Rosmerta"; //correct answer
        q8a2.textContent = "Draco Malfoy";
        q8a3.textContent = "Prof. Slughorn";
        q8a4.textContent = "Rommilda Vane";
        q1a3v.value = "q1correct"
        q1a4v.value = "q1incorrect"
        q2a2v.value = "q2correct"
        q2a3v.value = "q2incorrect"
        q3a3v.value = "q3correct"
        q3a2v.value = "q3incorrect"
        q4a3v.value = "q4correct"
        q4a4v.value = "q4incorrect"
        q5a4v.value = "q5correct"
        q5a2v.value = "q5incorrect"
        q6a1v.value = "q6correct"
        q6a3v.value = "q6incorrect"
        q7a2v.value = "q7correct"
        q7a4v.value = "q7incorrect"
        q8a1v.value = "q8correct"
        q8a2v.value = "q8incorrect"
    }
    else if (classyear == 7) {
        hpyear.textContent = "Year 7";
        q1.textContent = "How did the death eaters discovered which of the seven Harry's was the original one?";
        q1a1.textContent = "Hedwig protected him";
        q1a2.textContent = "He disarmed Stan Shumpike"; //correct answer
        q1a3.textContent = "He was with Hagrid";
        q1a4.textContent = "They never found out";
        q2.textContent = "Who does Harry pretend to be during Bill and Fleur’s wedding?";
        q2a1.textContent = "Dudley";
        q2a2.textContent = "Barny Weasley"; //correct answer
        q2a3.textContent = "Piere Delacour";
        q2a4.textContent = "Himself";
        q3.textContent = "Who is R.A.B?";
        q3a1.textContent = "Rubeus Alastor Bauxbaton";
        q3a2.textContent = "Romilda Anne Bones";
        q3a3.textContent = "Roman Abeforth Bentley";
        q3a4.textContent = "Regulus Arcturus Black"; //correct answer
        q4.textContent = "Which student’s tried to steal the Gryffindor Sword from the headmaster’s office?";
        q4a1.textContent = "Harry, Ron and Hermione";
        q4a2.textContent = "Malfoy, Crabbe and Goyle";
        q4a3.textContent = "Ginny, Luna and Neville"; //correct answer
        q4a4.textContent = "Seamus, Justin and Dean";
        q5.textContent = "Which is the name of the radio channel Lee Jordan had?";
        q5a1.textContent = "Dumbledores Army";
        q5a2.textContent = "Guardians of Hogwarts";
        q5a3.textContent = "Death Beaters";
        q5a4.textContent = "Potterwatch"; //correct answer
        q6.textContent = "Where did Voldemort kill Severus Snape?";
        q6a1.textContent = "the Shrieking Shack"; //correct answer
        q6a2.textContent = "The Forbiden Forest";
        q6a3.textContent = "The Hogwarts Pier";
        q6a4.textContent = "The Astronomy Tower";
        q7.textContent = "How many Horcruxes did Lord Voldemort made?"
        q7a1.textContent = "seven"; //correct answer
        q7a2.textContent = "six";
        q7a3.textContent = "nine";
        q7a4.textContent = "eight";
        q8.textContent = "Mention (in order) the last 4 owners of the elder wand.";
        q8a1.textContent = "Dumbledore, Snape, Voldemort, Grindelwald";
        q8a2.textContent = "Malfoy, Dumbledore, Potter, Snape";
        q8a3.textContent = "Snape, Dumbledore,Voldemort, Potter";
        q8a4.textContent = "Grindelwald, Dumbledore, Malfoy, Potter"; //correct answer
        q1a2v.value = "q1correct"
        q1a3v.value = "q1incorrect"
        q2a2v.value = "q2correct"
        q2a3v.value = "q2incorrect"
        q3a4v.value = "q3correct"
        q3a3v.value = "q3incorrect"
        q4a3v.value = "q4correct"
        q4a2v.value = "q4incorrect"
        q5a4v.value = "q5correct"
        q5a2v.value = "q5incorrect"
        q6a1v.value = "q6correct"
        q6a2v.value = "q6incorrect"
        q7a1v.value = "q7correct"
        q7a2v.value = "q7incorrect"
        q8a4v.value = "q8correct"
        q8a1v.value = "q8incorrect"
    }
    else {
        var fname = document.hphouse.fname.value;
        alert(`Cogratulations ${fname}, you have compleated all years! Your final score is ${totalScore}/56`)
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
    result.style.display = 'inherit';

    if (c >= 5) {
        result.textContent = `Congratulations, you have answered ${c}/8 questions correct. You have passed into next year!`
        classyear++;
        totalScore = totalScore + c;
        advanceClass.style.display = 'inherit';
    }
    else {
        result.textContent = `Too bad! You have only scored ${c}/8 questions correct. You need to study more.`
        tryAgain.style.display = 'inherit';
    }
}