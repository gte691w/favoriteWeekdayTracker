describe('getWeekdayVal', function() {
  it("returns the day of the entered day", function() {
    getWeekdayVal("Saturday").should.equal(6);
  });
describe('getWeekdayVal', function() {
  it("returns false if a correct weekday is not entered", function() {
    getWeekdayVal("Saturdayi").should.equal(false);
  });


});
});

describe('daysInMonth', function() {
  it("Gives the number of days in the month", function() {
    daysInMonth("November", 2014).should.equal(30);
  });

describe('daysInMonth', function() {
  it("Returns false if a valid month is not given", function() {
    daysInMonth("helena", 2014).should.equal(false);
  });

});

});

describe('numericalMonth', function() {
  it("Returns the numerical month", function() {
    numericalMonth("december").should.equal(12);
  });

describe('numericalMonth', function() {
  it("Returns false if not given a valid month", function() {
    numericalMonth("decemberi").should.equal(false);
  });

});
});

describe('startingDay', function() {
  it("returns starting date of the month given a specific year", function() {
    startingDay("October", 2015).should.equal(4);
  });
});


describe('getWeekdaysInMonth', function() {
  it("returns every date of the selected weekday for that month ", function() {
    getWeekdaysInMonth("Saturday", "November", "2015").should.equal("11/7/2015 11/14/2015 11/21/2015 11/28/2015");
  });
});

describe('reviewYear', function() {
  it("determines if date is a valid number ", function() {
    reviewYear("2015").should.equal(true);
  });
});







	