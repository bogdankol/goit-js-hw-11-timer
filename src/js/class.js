const {getDays, getHours, getMins, getSecs} = require ('./methods.js');

class CountdownTimer {

  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
  };

  start() {
    setInterval(() => {
      const time = this.getTimeDifference();
      this.otherTime = this.updateValues(time);
      console.log(time)
    }, 1000)
  }

  getTimeDifference() {

    const currentDate = new Date().getTime()
  
    const daysLeft = getDays(this.targetDate - currentDate)
    const hoursLeft = getHours(this.targetDate - currentDate)
    const minutesLeft = getMins(this.targetDate - currentDate)
    const secondsLeft = getSecs(this.targetDate - currentDate)

    return {daysLeft, hoursLeft, minutesLeft, secondsLeft}
  }

  updateValues({daysLeft, hoursLeft, minutesLeft, secondsLeft}) {
    refs.days.textContent = `${daysLeft}`;
    refs.hours.textContent = `${hoursLeft}`;
    refs.minutes.textContent = `${minutesLeft}`;
    refs.seconds.textContent = `${secondsLeft}`;
  }
}

module.exports = CountdownTimer;











