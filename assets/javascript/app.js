$(document).ready(function(){
// set questions
let options = [
    {
        question: "What is Frank Ocean's real name?",
        choices: ["John Wayne Gacy", "Jim Lahey", "Christopher Edwin Cooksey", "Frank Reynolds"],
        answer: 2,
        pic: "../images/frank.gif"
    },

    {
        question: "In the hit TV show 'Eastbound and Down', Danny McBride plays which character?",
        choices: [ "Larry David", "Kenny Powers", "Danny Tanner", "Stevie Janowski"],
        answer: 1,
        pic: "../images/kennypowers.gif"
    },

    {
        question: "Lawrence Wright wrote which New York Times best seller?",
        choices:["Going Clear: Scientology, Hollywood, and the Prison of Belief", "On The Road", "Choke", "So You've Been Publicaly Shamed"],
        answer: 0,
        pic: "../images/tomcruise.gif"

    },

    {
        question: "Jesse F. Keeler of the dj duo MSTRKRFT also plays bass guitar in which band?",
        choices:[ "LCD Soundsystem", "Haim", "Death From Above 1979", "Bon Iver"],
        answer: 2,
        pic: "../images/mstrkrft.gif"
    },

    {
        question: "On the podcast 'The Joe Rogan Experiment', host Joe Rogan does what?",
        choices: ["Pretends to be smarter than he is", "Smoke weed", "Has conversations with other meat heads", "All of the above"],
        answer: 3,
        pic:"../images/rogan.gif"
    },

    {
        question: "Soft drink Freshca is what flavor?",
        choices: ["Bacon", "Cola", "Grapefruit", "Lemon-Lime"],
        answer: 2,
        pic: "../images/workaholics.gif"
    },

    {
        question: "Bernie Sanders is a senator of which state?",
        choices: ["California", "Wyoming", "Nebraska", "Vermont"],
        answer: 3,
        pic: "../images/bernie.gif"
    },

    {
        question: "On the tv show 'Parks and Rec', who is Ron Swanson's hero?",
        choices: ["Bobby Knight", "Bill Clinton", "Richard Nixon", "D'Angelo"],
        answer: 0,
        pic: "../images/swanson.gif"
    },
];

const correctCount = 0;
const wrongCount = 0;
const unanswerCount = 0;
const timer = 20;
const intervalID;
const userGuess = "";
const running = false;
const qCount = options.length;
const pick;
const index;
const newArray = [];
const holder = [];

$("reset").hide();
// click start button to begin
$("#start").on("click", function(){
    $("#start").hide();
    displayQuestion();
    runTimer();
    for(const i = 0; i < options.length; i++){
        holder.push(options[i]);
    }
})

// start timer
function runTimer(){
    if(!running){
        intervalID = setInterval(decrement, 1000);
        running = true;
    }
}

// timer countdown
function decrement(){
    $("#timeleft").html("<h3>Time Remaining: " + timer + "</h3>");
    timer --;

    // stop timer when it reaches 0
    if (timer ===0){
        unanswerCount++;
        stop();
        $("#answer").html("<p> Time's up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
        hidepicture();
    }
}

// stop timer
function stop(){
    running = false;
    clearInterval(intervalID);
}

});