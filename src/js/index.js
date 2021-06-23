const Counter = require('./class.js');

refs = {
  days: document.querySelector(`${this.selector}, [data-value="days"]`),
  hours: document.querySelector(`${this.selector}, [data-value="hours"]`),
  minutes: document.querySelector(`${this.selector}, [data-value="mins"]`),
  seconds: document.querySelector(`${this.selector}, [data-value="secs"]`),
}

const timer1 = new Counter({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});

timer1.start()








// some styles
const body = document.body.style;
body.display = 'flex';
body.justifyContent = 'center';
body.fontSize = '24px'
body.fontWeight = 'bold'
body.paddingTop = '40px'




































































































































