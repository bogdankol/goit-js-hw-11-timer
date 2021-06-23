
const getDays = time => Math.floor(time / (1000 * 60 * 60 * 24));
const getHours = time => Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const getMins = time => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const getSecs = time => Math.floor((time % (1000 * 60)) / 1000);

const methods = { getDays, getHours, getMins, getSecs }

module.exports = methods;