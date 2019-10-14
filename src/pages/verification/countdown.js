const getRemainTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime%60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime/60%60)).slice(-2);
    
    return {remainTime, remainMinutes, remainSeconds}
};

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() =>  {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainMinutes}:${t.remainSeconds}`;

        if(t.remainTime <= 1){
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000);
};

var newDateObj = moment().add(2, 'm');

countdown(newDateObj, 'clock', '00:00');