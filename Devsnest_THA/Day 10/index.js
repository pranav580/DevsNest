const box = document.querySelectorAll('.flip-card-inner');
const moves= document.querySelector('.moves');
var twofliped = 0;
var mov=0;

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click',function(){
        twofliped+=1;
        if(twofliped==3){
            reset();
        }
        box[i].classList.add('flip');
        mov+=1;
        moves.innerHTML = mov;
    });
}
function reset(){
    twofliped=0;
    for (let index = 0; index <= box.length; index++) {
        box[index].classList.remove('flip');
    }
}