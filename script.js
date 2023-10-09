let string = "";
let buttons = document.querySelectorAll('.button');
let inputs = document.querySelector('input');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML=='=') {
            string=eval(string);
            inputs.value=string
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            inputs.value = string;
        }
        else if(e.target.innerHTML == 'DL'){
            string=string.substring(0,string.length-1);
            inputs.value=string;
        }
        else {
            string = string + e.target.innerHTML;
            inputs.value = string;
        }
    })
})