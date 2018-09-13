// The number of milliseconds in a day (1000 x 60 seconds x 60 minutes x 24 hours):
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDifferenceInDays(date1, date2) {
  // Discarding the time and time-zone information.
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  console.log ("Date Difference in days : " + (utc2 - utc1) / _MS_PER_DAY);
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// Unit Testing the different Dates
const a = new Date("2017-01-01"),
    b = new Date("2017-07-25"),
    difference = dateDifferenceInDays(a, b);


// Unit Testing the Number of days between the two dates in the date range model 
const a1 = new Date("2010-09-01"),
    b1 = new Date("2010-09-15"),
    daysDifference = dateDifferenceInDays(a1, b1);

function getMonthsBetween(date1,date2,roundUpFractionalMonths)
{
    //Months will be calculated between start and end dates.
    //Make sure start date is less than end date.
    //But remember if the difference should be negative.
    var startDate=date1;
    var endDate=date2;
    var inverse=false;
    if(date1>date2)
    {
        startDate=date2;
        endDate=date1;
        inverse=true;
    }

    //Calculate the differences between the start and end dates
    var yearsDifference=endDate.getFullYear()-startDate.getFullYear();
    var monthsDifference=endDate.getMonth()-startDate.getMonth();
    var daysDifference=endDate.getDate()-startDate.getDate();

    var monthCorrection=0;
    //If roundUpFractionalMonths is true, check if an extra month needs to be added from rounding up.
    //The difference is done by ceiling (round up), e.g. 3 months and 1 day will be 4 months.
    if(roundUpFractionalMonths===true && daysDifference>0)
    {
    	if (monthsDifference > 0) {
    		switch (monthsDifference) {
    			case 2 :
    				// find out the year whether the year falls on the leap year or not
    				if (isleapYear(yearsDifference)) {
    					if (daysDifference < 15) {
				    		monthCorrection=0.5;	
				    	} else {
				    		monthCorrection=1;
				    	}	
    				} else {
    					if (daysDifference < 14) {
				    		monthCorrection=0.5;	
				    	} else {
				    		monthCorrection=1;
				    	}	
					}	
    				break;
    			default :
	    	    	if (daysDifference < 15) {
			    		monthCorrection=0.5;	
			    	} else {
			    		monthCorrection=1;
			    	}
			    	break;	
	    	}	
    	} else {
	    	if (daysDifference < 15) {
	    		monthCorrection=0.5;	
	    	} else {
	    		monthCorrection=1;
	    	}
    	}
    }
    //If the day difference between the 2 months is negative, the last month is not a whole month.
    else if(roundUpFractionalMonths!==true && daysDifference<0)
    {
        monthCorrection=-1;
    }
    console.log ("Month Differences : " + (inverse?-1:1)*(yearsDifference*12+monthsDifference+monthCorrection));
    return (inverse?-1:1)*(yearsDifference*12+monthsDifference+monthCorrection);
};

const d1 = new Date("2010-09-01"),
      d2 = new Date("2010-10-01"),
      monthsdifference = getMonthsBetween(d1, d2, true);

// Unit Testing the number of months between the 2 dates in date range model 
const date1 = new Date("2010-09-01"),
    date2 = new Date("2010-10-15"),
    mondifference = getMonthsBetween(date1, date2, true);    

// Unit Testing the number of months between the 2 dates in date range model 
const dat1 = new Date("2010-09-01"),
    dat2 = new Date("2010-09-15"),
    mondifferences = getMonthsBetween(dat1, dat2, true);      

// function to check whether the year is leap year or not
function isleapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// Unit Testing to check the supplied date is between the min and max date.
const suppliedDate = new Date("2010-09-02"),
    minDate = new Date("2010-09-01"),
    maxDate = new Date("2010-09-15"),
    suppliedDatediff = isBetweenSuppliedDate(suppliedDate, minDate, maxDate);      

// function is to check the supplied date is between the minimum Date and the maximum Date
function isBetweenSuppliedDate(suppliedDate, mindate, maxDate) {
	if (suppliedDate > minDate && suppliedDate < maxDate ){
		 console.log("The supplied date is between the Minimum Date and the Maximum Date");
         return true;
    }
    else {
    	console.log("The supplied date is not between the Minimum Date and the Maximum Date");
        return false;
    }
}

// Unit Testing to check for fromDate && toDate is valid or not by passing empty string in ToDate.
var newvariable = "";
const validDate = isValidDate(dat1, newvariable); 
isValidDate(dat1, dat2); 
// function to check fromDate and toDate is valid or not.
function isValidDate(fromDate, toDate) {
	if(fromDate && toDate) {
		console.log("From and To Date are valid dates");
		return true;
	} else if(!fromDate) {
		console.log("From date is not a valid date");
		return false;
	} else if(!toDate) {
		console.log("To date is not a valid date");
		return false;
	}
}

truncateTimes(new Date("2010-09-01 18:00"));
function truncateTimes(tmpDate) {
	//console.log("Date with the Truncated times : " + new Date(tmpDate.getDate() + tmpDate.getMonth() + tmpDate.getFullYear()));
	return new Date(tmpDate.getDate() + tmpDate.getMonth() + tmpDate.getFullYear());
}




