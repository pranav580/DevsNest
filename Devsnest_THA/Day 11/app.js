const quiz = document.querySelectorAll('.quiz');
const center = document.querySelector('h2');
const op = document.querySelectorAll('.op');
console.log(op.length);
var i=0;
const questions = ["","Which famous con-artist's life is the film Catch Me If You Can based on?",
                    "How many stars does the U.S flag have?",
                    "Which of these is the Albanian flag?",
                    "In aviation, what does ACC stand for?"];
const options = [[],
                ["Frank Abagnale","Bernard Madoff","Charles Ponzi","Gregor MacGregor"],
                [24,10,13,15],
                [],
                ["Airworthiness Check Certificate","Active Clearance Control","Approach Control Computer","Air Crew Council"]
                ];
const ans =[0,2,3,1];

function correct(){
   
}

const next = ()=> {
    console.log(options.length);
    if(i==0){
        quiz[i].classList.replace('n','p');
        i=i+1;
        quiz[i].classList.remove('p');
    }
    center.innerHTML = questions[i];
    op[0].innerHTML = options[i][0];
    op[1].innerHTML = options[i][1];
    op[2].innerHTML = options[i][2];
    op[3].innerHTML = options[i][3];
    correct();
    console.log(i);
    i=i+1;
    if(i==5){
        i=0;
    }
}
const prev = ()=> {  
    center.innerHTML = questions[i];
    op[0].innerHTML = options[i][0];
    op[1].innerHTML = options[i][1];
    op[2].innerHTML = options[i][2];
    op[3].innerHTML = options[i][3];
    console.log(i);
    i=i-1;
    if(i==1){
        i=5;
    }
}

document.querySelector('.next').addEventListener('click',function(){
    next();
    
});

document.querySelector('.prev').addEventListener('click',function(){
   prev();
});