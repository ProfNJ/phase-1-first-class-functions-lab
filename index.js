const returnFirstTwoDrivers = function (drivers) {
    let newArr = drivers.slice(0, 2);

    return newArr;

}

const returnLastTwoDrivers = function (drivers) {
    let newArr = drivers.slice(drivers.length - 2, drivers.length);

    return newArr;

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function (fare){
        return fare * num;
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);
const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, funct){

    return funct(drivers);

}