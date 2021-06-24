const {getDays, getHours, getMins, getSecs} = require ('./methods.js');

class CountdownTimer {

  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();

  };

  

  start() {
    this.id = setInterval(() => {

      const time = this.getTimeDifference();

      this.stopData = this.targetDate - this.currentDate;

      if (this.stopData <= 0) {

        this.stop();
        return;

      } else {

        this.otherTime = this.updateValues(time);
        
        }

      this.otherTime = this.updateValues(time);

    }, 1000)
  }

  getTimeDifference() {

    this.currentDate = new Date().getTime();
  
    const daysLeft = getDays(this.targetDate - this.currentDate)
    const hoursLeft = getHours(this.targetDate - this.currentDate);
    const minutesLeft = getMins(this.targetDate - this.currentDate);
    const secondsLeft = getSecs(this.targetDate - this.currentDate);

    return {daysLeft, hoursLeft, minutesLeft, secondsLeft}
  }

  updateValues({daysLeft, hoursLeft, minutesLeft, secondsLeft}) {
    refs.days.textContent = `${daysLeft}`;
    refs.hours.textContent = `${hoursLeft}`;
    refs.minutes.textContent = `${minutesLeft}`;
    refs.seconds.textContent = `${secondsLeft}`;
  }

  stop() { 
            
    refs.days.textContent = '00';
    refs.hours.textContent = '00';
    refs.minutes.textContent = '00';
    refs.seconds.textContent = '00';

    this.id = 0;
  }

}

module.exports = CountdownTimer;










