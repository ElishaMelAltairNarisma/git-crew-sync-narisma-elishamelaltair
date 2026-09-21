function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours > 8) {
    const regularHours = 8;
    const regularPay = regularHours * rate;
    const overtimeHours = hours - regularHours;
    const overtimePay = overtimeHours * rate * 1.5;
    return Math.round(regularPay + overtimePay);
  }
  return Math.round(hours * rate);
}

module.exports = { isValidShift, calculatePay };