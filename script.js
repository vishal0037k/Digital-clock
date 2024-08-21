const currentTime = () => {
    let curTime = new Date().toLocaleTimeString();
    document.getElementById('clock').innerText = curTime;
    console.log(curTime);
}
currentTime();

// update after 1000miliseconds (1sec) //
const intervalId = setInterval(() => {
    currentTime();
}, 1000);

//if we want to stop that time //

// setTimeout(() => {
//     alert('Low battery please refresh to charge and get time');
//     clearInterval(intervalId)
// }, 5000);