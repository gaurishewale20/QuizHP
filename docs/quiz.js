window.onload = function() {
    this.show(0);
}
let questions = [{
        id: 1,
        question: " Q1. What is the patronus of Prof.Dumbledore ?",
        answer: "Phoenix",
        options: [
            "Cat",
            "Deer",
            "Phoenix",
            "Hornbill"
        ]
    },
    {
        id: 2,
        question: "Q2. What is the name of the sport played by wizards ?",
        answer: "Quidditch",
        options: [
            "Quidprowiz",
            "Magicball",
            "Squibblers",
            "Quidditch"
        ]
    },
    {
        id: 3,
        question: "Q3. How many Horcruxes were created by the Dark Lord ?",
        answer: "Seven",
        options: [
            "Seven",
            "Six",
            "Twelve",
            "Five"
        ]
    },
    {
        id: 4,
        question: "Q4. What is the name of potions master of first year students ?",
        answer: "Severus Snape",
        options: [
            "Severus Snape",
            "Snivellus scape",
            "Scarnius slape",
            "Sorcerous skape"
        ]
    },
    {
        id: 5,
        question: "Q5. What is the name of gatekeeper of Hogwarts?",
        answer: "Hagrid",
        options: [
            "Peter Pettigrew",
            "Hagrid",
            "Aberforth",
            "Grindlewold"
        ]
    }
]

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    // Store playername
    sessionStorage.setItem("name", name);

    location.href = "quiz.html";
}
let question_count = 0;
let point = 0;

function Next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check answer by  the user

    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points", point);
    }

    if (question_count == questions.length - 1) {

        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }

    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");
    // question.innerHTML = "<h2>" + questions[count].question + "</h2>"
    question.innerHTML = `<h2>${ questions[count].question }</h2>
    <ul class = "option_group" >
        <li class = "option">${questions[count].options[0]}</li> 
        <li class = "option">${questions[count].options[1]}</li> 
        <li class = "option">${questions[count].options[2]}</li>
         <li class = "option">${questions[count].options[3]}</li> 
        </ul>`;
    toggleActive();

}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }

}