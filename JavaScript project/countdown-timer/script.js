const newYear = new Date('1 Jan 2025').getTime();

let day = document.querySelector('#day');
let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');

let intervalId = setInterval(countdown, 1000);

function countdown(){
    let currentDate = new Date().getTime();
    let distance = newYear - currentDate;

    let daysLeft = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hoursLeft = Math.floor(distance % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    let minuteLeft = Math.floor(distance % ( 60 * 60 * 1000) / (60 * 1000) );
    let secondsLeft = Math.floor(distance % (60 * 1000) / 1000);
    
    day.innerHTML = `${daysLeft}`
    hour.innerHTML = `${hoursLeft}`
    minute.innerHTML = `${minuteLeft}`
    second.innerHTML = `${secondsLeft}`

    if(distance < 0){
        clearInterval(intervalId);
    }
}

