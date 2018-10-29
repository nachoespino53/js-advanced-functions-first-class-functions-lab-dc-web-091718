const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = x => {
  return y => x * y;
}

const fareDoubler = x => x * 2;

const fareTripler = x => x * 3;

const fetchSpecifiedDrivers = (drivers, func) => {
  return func(drivers);
}
