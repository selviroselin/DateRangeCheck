describe("isValidDate", function () {
    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format.

    it("It accepts the Valid Date", function () {
        // Invoke the unit being tested as necessary
        var dat1 = new Date("2010-09-01");
        var dat2 = new Date("2010-09-15");
        var result = isValidDate(dat1,dat2);
        // Check the results; "expect" and toEqual are Jasmine methods..
        expect(result).toEqual(true);
    });
});

describe("isBetweenSuppliedDate", function () {
     it("It accepts the Valid Date", function () {
        // Invoke the unit being tested as necessary
      var suppliedDate = new Date("2010-09-02");
      var minDate = new Date("2010-09-01");
      var maxDate = new Date("2010-09-15");
        var result = isBetweenSuppliedDate(suppliedDate, minDate, maxDate);
        expect(result).toEqual(true);
    });
});

describe("LeapYear", function () {
     it("It accepts the year", function () {
        var startDate = new Date("2010-09-01");
        var endDate = new Date("2010-10-01");
        var yearsDifference=endDate.getFullYear()-startDate.getFullYear();
        var result =isleapYear(yearsDifference);
        expect(result).toEqual(true);
    });
});

describe("getMonthsBetween", function () {
     it("It accepts the from Date and To Date to get the months between", function () {
        var date1 = new Date("2010-09-01");
        var date2 = new Date("2010-10-15");
        var result =getMonthsBetween(date1,date2,true);
        expect(result).toEqual(1.5);
    });
});

describe("dateDifferenceInDays", function () {
     it("It accepts the from Date and To Date to find the difference in days", function () {
        var minDate = new Date("2010-09-01");
        var maxDate = new Date("2010-10-15");
        var result =dateDifferenceInDays(minDate,maxDate);
        console.log ("result=" + result);
        expect(result).toEqual(44);
    });
});

/*describe("truncateTimes", function () {
     it("It truncates the time from the given date", function () {
        var result =truncateTimes(new Date("2010-09-01 18:00"));
        console.log ("result=" + result);
        expect(result).toEqual("Thu Jan 01 1970 10:00:02 GMT+1000 (Australian Eastern Standard Time)");
    });
});*/