const buttons = document.querySelectorAll("button");
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        if(button.id === 'grey'){
            body.style.backgroundColor = button.id;
        }
        if(button.id === 'red'){
            body.style.backgroundColor = button.id;
        }
        if(button.id === 'green'){
            body.style.backgroundColor = button.id;
        }
        if(button.id === 'yellow'){
            body.style.backgroundColor = button.id;
        }
    })
})