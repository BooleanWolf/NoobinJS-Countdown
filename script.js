let future_date = "2022-10-05"; 


const countdown = () => {

    const mnth = document.getElementById("months")
    const dys =document.getElementById("days")
    const hrs = document.getElementById("hours")
    const mns = document.getElementById("mins")
    const secs = document.getElementById("secs")


    

    const future = new Date(future_date); 
    console.log(future_date); 

    const current_date = new Date();
    
    let seconds = (future - current_date)/1000;
    let minutes = Math.floor(seconds/60); 
    let hours = Math.floor(minutes/60); 
    let days = Math.floor(hours/24);
    let months = Math.floor(days/30); 

    seconds = Math.floor(seconds - minutes*60);

    minutes = minutes - hours*60; 

    hours = hours - days*24;

    days = days - months*30; 

    mnth.innerHTML = months;
    dys.innerHTML = days;
    hrs.innerHTML = hours;
    mns.innerHTML = minutes; 
    secs.innerHTML = seconds;

    
}

const user_countdown = () => {
    console.log("User die ebar");

    const form = document.getElementById('frm-1');
    const new_date = form.elements['user-date'].value;

    future_date = new_date

    setInterval(countdown, 1000);
}

