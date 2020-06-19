const state = {
    timer: {
        defaultTime: '00:30:00',
        countdownTime: '00:00:00',
        timerRunning: false,
        timerId: 0,
        autoStart: false
    }
};

function playAlarm(){
    var alarm = document.getElementById("alarm_sound");
    alarm.play();
  }

function stopAlarm(){
    var alarm = document.getElementById("alarm_sound");
    if (alarm) {
        alarm.pause();
    }
}

function addTime (time, hour, minute, second) {
    var hmsArray = time.split(':');
    var additionalSeconds = hour * 60 * 60 + minute * 60 + second
    var totalSeconds = 
        (parseInt(hmsArray[0])) * 60 * 60 
        + (parseInt(hmsArray[1])) * 60 
        + (parseInt(hmsArray[2]))
        + additionalSeconds;
    totalSeconds = (totalSeconds < 0) ? 0 : totalSeconds;
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    var seconds = totalSeconds % 60;
    var updatedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    return updatedTime;
}

function setTime (time, hour, minute, second) {
    // must set to 'null' in parameter if do not want to set hour/minute/second
    var hmsArray = time.split(':');
    var hours = (hour > 0 && hour||hour === 0) ? (hour) : parseInt(hmsArray[0])
    var minutes = (minute > 0 && minute||minute === 0) ? (minute) :parseInt(hmsArray[1])
    var seconds = (second > 0 && second||second === 0) ? (second % 60) : (parseInt(hmsArray[2]) % 60)
    var updatedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    return updatedTime;
}

const getters = {
    getCountdownTime: (state) => state.timer.countdownTime,
    getDefaultTime: (state) => state.timer.defaultTime,
    getAutoStart: (state) => state.timer.autoStart,
    getTimerStatus: (state) => state.timer.timerRunning,
    getTotalSecondsLeft: (state) => parseInt(state.timer.countdownTime.split(':')[0] * 60 * 60)
        + parseInt(state.timer.countdownTime.split(':')[1] * 60)
        + parseInt(state.timer.countdownTime.split(':')[2])
};

const actions = {
    startTimer({ commit, state }){
        var seconds = getters.getTotalSecondsLeft(state);
        const now = Date.now();
        const then = now + seconds * 1000;
        commit('updateTimerStatus', true)
        // Start updating timer every 1 seconds
        const timerId = window.setInterval(() => {
            const secondsLeft = Math.round((then - Date.now())/1000);

            // Check if you should stop it
            if (secondsLeft <= -1){
                playAlarm();
                // alert pop up to reset timer   
                window.clearInterval(state.timer.timerId)               
                return;
            }

            // Update the state            
            var hours = Math.floor(secondsLeft / 3600);
            var minutes = Math.floor((secondsLeft - hours * 3600) / 60);
            var remainderSeconds = secondsLeft % 60;
            var countdownTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
            document.title = countdownTime;            
            commit('updateCountdownTime', countdownTime)
        },1000);
        commit('updateIntervalId', timerId) // save the interval id so that we can stop it
        // End of timer update
    },
    stopTimer({ commit, dispatch, state }){
        window.clearInterval(state.timer.timerId);          
        commit('updateTimerStatus', false);
        document.title = 'Reminder';
        if (state.timer.countdownTime == '00:00:00'){
            dispatch('resetTimer')
        }
    },
    resetTimer({ commit, dispatch, state }){
        // Stop the timer
        if (state.timer.timerRunning){
            dispatch('stopTimer')
        }
        // Stop Alarm sound
        stopAlarm();
        // Reset the time to default
        commit('updateCountdownTime', state.timer.defaultTime)
    },
    setTimer({ commit, dispatch, state }, { hour, minute, second }){
        var updateTime
        // Need to stop timer before setting time if timer is live
        if (state.timer.timerRunning){
            dispatch('stopTimer')
            updateTime = addTime(state.timer.countdownTime, hour, minute, second)
            commit('updateCountdownTime', updateTime)
            dispatch('startTimer')
        } else {
            updateTime = setTime(state.timer.countdownTime, hour, minute, second)
            commit('updateCountdownTime', updateTime)
            commit('updateDefaultTime', updateTime)
        }
    },
    incrementTimer({ commit, dispatch, state }, { hour, minute, second }){
        var updateTime = addTime(state.timer.countdownTime, hour, minute, second)
        // Need to stop timer before setting time if timer is live
        if (state.timer.timerRunning){
            dispatch('stopTimer')
            commit('updateCountdownTime', updateTime)
            dispatch('startTimer')
        } else {
            commit('updateCountdownTime', updateTime)
            commit('updateDefaultTime', updateTime)
        }
    },
    toggleAutoStart({ commit }){
        commit('toggleAutoStart')
    }
    
};

const mutations = {
    updateCountdownTime: (state, countdownTime) => (state.timer.countdownTime = countdownTime),
    updateDefaultTime: (state, countdownTime) => (state.timer.defaultTime = countdownTime),
    updateTimerStatus: (state, status) => (state.timer.timerRunning = status),
    updateIntervalId: (state, timerId) => (state.timer.timerId = timerId),
    toggleAutoStart: (state) => (state.timer.autoStart = !state.timer.autoStart),
};

export default {
    state,
    getters,
    actions,
    mutations
}