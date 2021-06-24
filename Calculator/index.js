var number = document.querySelectorAll(".cal").length;
console.log(number);
var str = " ";
var result;
var a;
var curr = document.querySelector('.curr');
for (let i = 0; i < number; i++) {
    document.querySelectorAll(".cal")[i].addEventListener('click',function(){
       console.log(this.innerHTML);
       switch (this.innerHTML) {
           case 'C':
                curr.innerHTML = "0";
                str = " ";
               break;
            case '+/-':
               
                break;
            case '%':
                str += '%';
                curr.innerHTML = str;
                break;
            case '/':
                str += '/';
                curr.innerHTML = str;
                break;
            case '7':
                str += '7';
                curr.innerHTML = str;
                break;
            case '8':
                str += '8';
                curr.innerHTML = str;
                break;
            case '9':
                str += '9';
                curr.innerHTML = str;
                break;
            case 'x':
                str += '*';
                curr.innerHTML = str;
                break;
            case '4':
                str += '4';
                curr.innerHTML = str;
                break;
            case '5':
                str += '5';
                curr.innerHTML = str;
                break;
            case '6':
                str += '6';
                curr.innerHTML = str;
                break;
            case '-':
                str += '-';
                curr.innerHTML = str;
                break;
            case '1':
                str += '1';
                curr.innerHTML = str;
                break;
            case '2':
                str += '2';
                curr.innerHTML = str;
                break;
            case '3':
                str += '3';
                curr.innerHTML = str;
                break;
            case '+':
                str += '+';
                curr.innerHTML = str;
                break;
            case '0':
                str += '0';
                curr.innerHTML = str;
                break;
            case '.':
                str += '.';
                curr.innerHTML = str;
                break;
            case '=':
                console.log(str);
                document.querySelector('.result').innerHTML=eval(str);
                str="";
                break;
           default:
               break;
       }
    });
    
}