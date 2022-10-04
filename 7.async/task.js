'use strict'

//   Task_1
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, fnCallback, idCall) {
    if (!idCall) {
      throw new Error('Параметр id не передан');
    } else if (this.alarmCollection.find(call => call.idCall === idCall)) {
      return console.error('Будильник с таким id уже существует');
    }
    return this.alarmCollection.push({ time, fnCallback, idCall });
  }

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter(call => call.idCall !== id);
    return this.alarmCollection.length < this.alarmCollection.length;
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    function checkClock(call) {
      if (call === this.getCurrentFormattedTime()) {
        return fnCallback();
      }
    }
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(call => checkClock(call));
      }, 1000);
    }
    return;
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(clock => console.log(`Будильник номер ${clock.id} заведен на ${clock.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock('00:00', () => console.log('Хватит спать, начинай кодить!'), 3);
  phoneAlarm.addClock('00:01', () => { console.log('Ты все проспал :('); phoneAlarm.removeClock(2) }, 2);
  phoneAlarm.addClock('00:02', () => console.log('Подъем! Дедлайн не ждет.'), 1);
  phoneAlarm.printAlarms();
  phoneAlarm.removeClock(1);
  phoneAlarm.removeClock(2);
  phoneAlarm.removeClock(3);
  phoneAlarm.printAlarms();
}

testCase();


