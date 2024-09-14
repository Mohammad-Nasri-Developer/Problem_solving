/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {


    // Convert the strings into Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const timeDifference = Math.abs(d2 - d1); // this returns in milliseconds

    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    console.log(daysDifference);
    return  daysDifference;
};


daysBetweenDates("2019-06-29", "2022-05-11");