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
                ["<img style='width:60px' src='images/default (1).jpg'>","<img style='width:60px' src='images/default (2).jpg'>","<img style='width:60px' src='images/default.jpg'>","<img style='width:60px' src='images/default.png'>"],
                ["Airworthiness Check Certificate","Active Clearance Control","Approach Control Computer","Air Crew Council"]
                ];
const ans =[0,2,3,1];



const next = ()=> {
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
    for(let j=0;j<4;j++){
        op[j].classList.remove('green');
        op[j].classList.remove('red');
        op[j].classList.add('op');
        
    }
    
});

document.querySelector('.prev').addEventListener('click',function(){
   prev();
});

for (let k = 0; k < 4; k++) {
    op[k].addEventListener('click',function(){
        for (let j = 1; j < questions.length; j++) {
            if(center.innerHTML==questions[j]){
                if(j==1 & k==0){
                    op[0].classList.replace('op','green')
                }else if(j==2 & k==2){
                    op[2].classList.replace('op','green')
                }else if(j==3 & k==2){
                    op[2].classList.replace('op','green')
                }else if(j==4 & k==1){
                    op[1].classList.replace('op','green')
                }else{
                    op[k].classList.replace('op','red');
                }
            }
        }
            
    }        
    
)};