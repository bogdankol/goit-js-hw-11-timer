
const getDays = time => padTime(Math.floor(time / (1000 * 60 * 60 * 24)));
const getHours = time => padTime(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const getMins = time => padTime(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const getSecs = time => padTime(Math.floor((time % (1000 * 60)) / 1000));

function padTime(time) {
    return String(time).padStart(2, `0`) // добавляем нолик если число имеет меньше одной цифры
}

const methods = { getDays, getHours, getMins, getSecs }

module.exports = methods;