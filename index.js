
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimetr = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimetr);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
  
  onStart(totalDuration) {
    duration = totalDuration;
  },

  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', 
      perimetr * timeRemaining / duration - perimetr
    );
  },

  onComplete() {
    console.log('Timer compleate')
  }

});

//stroke-dasharray = "565" 
//stroke-dashoffset = "-100"