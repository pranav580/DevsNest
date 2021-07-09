
const input=document.querySelector('input');
const btn = document.querySelector(".btn");
const todos = document.querySelector('.todos');


const DeleteQuery =()=>{
    var d = document.querySelectorAll('.delete');
        for (let i = 0; i < d.length; i++) {
            d[i].addEventListener('click',function(){
                d[i].parentElement.remove();
            });
        }
}

const DeleteBtn = (newtodo) =>{
    const del = document.createElement('div');
    newtodo.appendChild(del);
    del.classList.add('delete');
    del.classList.add('far');
    del.classList.add('fa-trash-alt');   
}
function aadd(){
    const newtodo = document.createElement('div');
    const p = document.createElement('p');
    p.innerHTML = input.value;
    newtodo.appendChild(p);
    if(input.value!=""){
        todos.appendChild(newtodo)
        newtodo.classList.add('list');
        DeleteBtn(newtodo);
        DeleteQuery();
    }else{
        alert("Enter Something")
    }
input.value = "";
}

btn.addEventListener('click',function(){
    aadd();
});

document.addEventListener('keypress',function(){
    if(event.key == 'Enter'){
        aadd();
    }
})

