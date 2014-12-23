var getWeekdayVal = function(day){
	var givenDay = day.toLowerCase();
	if( givenDay === "monday" ){
		return 1;
	}
	else if( givenDay === "tuesday" ){
		return 2;
	}
	else if( givenDay === "wednesday" ){
		return 3;
	}
	else if( givenDay === "thursday" ){
		return 4;
	}
	else if( givenDay === "friday" ){
		return 5;
	}
	else if( givenDay === "saturday" ){
		return 6;
	}
	else if( givenDay === "sunday" ){
		return 7;
	}
	else{
		return false;
	}	

};


var daysInMonth = function(month, year){
	var monthNum = numericalMonth(month.toLowerCase());

	if(monthNum){
		var days = new Date(year,monthNum,1,-1).getDate();
	  }
	else {
		var days = false
	   }
	return days;
};	

var startingDay = function(month, year){
	var selectMonth = numericalMonth(month.toLowerCase());
	var starting = new Date(year + "-" + selectMonth + -01).getDay();
	return starting;

};

var numericalMonth = function(month){
	
	if (month === "january"){
		return 1;
	}
	else if (month === "february"){
		return 2;
	}
	else if (month === "march"){
		return 3;
	}
	else if (month === "april"){
		return 4;
	}
	else if (month === "may"){
		return 5;
	}
	else if (month === "june"){
		return 6;
	}
	else if (month === "july"){
		return 7;
	}
	else if (month === "august"){
		return 8;
	}
	else if (month === "september"){
		return 9;
	}
	else if (month === "october"){
		return 10;
	}
	else if (month === "november"){
		return 11;
	}
	else if (month === "december"){
		return 12;
	}
	else {
		return false;
	}
};

var reviewYear = function(year){
	var thatYear = year.split("");
	var value;
	for(var i = 0; i<thatYear.length; i++){
		if(!(isNaN(parseInt(thatYear[i])))){
			value = true
		}
		else{
			value = false;
		}
	return value;
	}
};
	


var getWeekdaysInMonth = function(day,month,year){
	var theDay = day.toLowerCase();
	var theYear = parseInt(year);
	var theMonth = month.toLowerCase();
	
	var monthStartDayVal = startingDay(theMonth,theYear);
	var theUsersDayVal = getWeekdayVal(theDay);
	var difference;
	
	if(monthStartDayVal > theUsersDayVal){
	  	 difference = (theUsersDayVal +1);
	  	}
	else{
	  	difference = Math.abs(theUsersDayVal - monthStartDayVal);
	  	}

	var theDate = new Date();
	var setMonth = theDate.setMonth(numericalMonth(theMonth) -1);
	var setDay = theDate.setDate(1+difference);
	var setYear = theDate.setFullYear(theYear);
	
	
	
	var displayMonth = theDate.getMonth() + 1;
	var displayDay = theDate.getDate();
	var displayYear = theDate.getFullYear();

	

	var result = [];

	var theDaysInMonth = daysInMonth(month,year);

	while(displayDay <= theDaysInMonth){
		result.push(displayMonth.toString() + "/" + displayDay.toString() + "/" + displayYear.toString());
		displayDay += 7;
	}

	return result.join(" ");

	

	
};

	
	

$(document).ready(function(){
  $("#add").on('click', function(){
  	var inputInfo = $("#focusedInput").val();
  	$("#focusedInput").focus();
  	if(inputInfo.length > 0){
  	  var passedInfo = inputInfo.toLowerCase();
  	  var arr1 = passedInfo.split(" ");

  	  var day = arr1[0];
  	  var month = arr1[1];
  	  var year = arr1[2];
  	
  	  var checkDay = getWeekdayVal(day);
  	  var checkMonth = numericalMonth(month);
  	  var checkYear = reviewYear(year);

  	  if(checkDay === false || checkMonth === false || checkYear === false){
  		$("#focusedInput").val("");
  		$("#result2").show().hide().slideDown();
  		$("#result1").slideUp().hide();
  		}
  	  else{

  		
  	  	var theDates = getWeekdaysInMonth(day,month,year);
  	  	$(".record").text(inputInfo);
	  	$(".dates").text(theDates);
	  	$("#focusedInput").val("");
		$("#result1").show().hide().slideDown();
		$("#result2").slideUp().hide();
		
	  }
	 }

	 else{
	 	alert("Please Enter the Required Information")
	 }
	 

  });

  	 $("#focusedInput").on('keypress', function(e){
		if (e.keyCode == '13'){
		  $("#add").click();
			}
	  });

});	