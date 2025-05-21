const display = document.getElementById('display');
const numbuttons = document.getElementsByClassName('numbtn');
const opbuttons = document.getElementsByClassName('opbtn');

for(let i = 0; i < numbuttons.length; i++) {
    numbuttons[i].addEventListener('click', (e) => {
        display.value += e.target.textContent
    });
}
for(let i = 0; i < opbuttons.length; i++){
    opbuttons[i].addEventListener('click', (e) => {
        const buttonId = e.target.id;
        if(buttonId == 'equal') {
            if(display.value == ''){
                alert('Please Enter A Proper Value');
            return
            }else{
                try {
                    let expression = display.value;
                    expression = expression.replace(/√(\d+)/g, 'Math.sqrt($1)');
                    expression = expression.replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');
                    display.value = eval(expression);
                }catch(error){
                    alert('Invalid expression');
                    display.value = '';
                }
            }
        }else if(buttonId == 'backspace') {
            display.value = display.value.slice(0, -1);
        }else if(buttonId == 'clear') {
            display.value = '';
        }else if(buttonId == 'divide'){
            display.value += '/';
        }else if(buttonId == 'multiply'){
            display.value += '*';
        }else if(buttonId == 'modulo'){
            display.value += '%';
        }else if(buttonId == 'subtract'){
            display.value += '-';
        }else if(buttonId == 'add'){
            display.value += '+';
        }else if(buttonId == 'decimal'){
            display.value += '.';
        }else if(buttonId == 'sqrt'){
            display.value += '√';
        }else if(buttonId == 'open-parentheses'){
            display.value += '(';
        }else if(buttonId == 'close-parentheses'){
            display.value += ')';
        }else if(buttonId == 'exp'){
            display.value += '^'; 
        }
    });
}