import * as moment from 'moment';

function getRemainTime(deadline) {
    let now = new Date(),
    deadl = moment(new Date(deadline)),
    remainTime = deadl.diff(now, 'seconds') + 1,
    remainSeconds = ('0' + remainTime%60).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime/60%60)).slice(-2);
    return {remainTime, remainSeconds, remainMinutes};
}

function countdown(deadline, elem, finalMessage) {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);

        el.innerHTML = `${t.remainMinutes}:${t.remainTime}`;
        console.log(`${t.remainMinutes}:${t.remainSeconds}`);
        if(t.remainTime <= 1){
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
            console.log(finalMessage);
        }
    }, 1000);
}

var newDateObj = moment().add(1.05, 'm');
countdown(newDateObj, 'clock', '00:00');
