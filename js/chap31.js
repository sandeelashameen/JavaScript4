//Question:1
var rightNow = new Date();
document.write(rightNow +"<br>");

//Question:2
var d = new Date();
var currentMonth = d.getMonth();
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var currentMonthName = monthNames[currentMonth];
alert("The current month is: " + currentMonthName);

//Question:3
var d = new Date();
var currentDay = d.getDay();
var dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
var currentDayName = dayNames[currentDay];
alert("The first three letters of the current day are: "+currentDayName);

//Question:4
var d = new Date();
var currentDay = d.getDay();
if(currentDay === 6 || currentDay === 0){
    alert("Its a fun day");
}

//Question:5
var date = new Date();
if(date.getDate()<16){
    var message = "First fifteen days of the month";
}
else{
    var message = "Last days of the month";
}
alert(message);

//Question:6
var date = new Date();
var minutes = Math.floor(date.getTime() / (1000 * 60));
document.write("Minutes since midnight, Jan. 1, 1970: " + minutes +"<br>");

//Question:7
var date = new Date();
if(date.getHours()<12){
    var message = "Its am ";
}
else{
    var message = "Its pm";
}
alert(message);

//Question:8
var doomsday = new Date(2020, 11, 31);
var LaterDate = doomsday;
document.write("LaterDate: "+LaterDate +"<br>");

//Question:9
var ramadanStartDate = new Date('June 18, 2015');
var currentDate = new Date();
var timeDiff = currentDate.getTime() - ramadanStartDate.getTime();
var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
alert("Number of days passed since 1st Ramadan: " + daysPassed);

//Question:10
var referenceDate = new Date();
referenceDate.setFullYear(2015, 0, 1);
referenceDate.setHours(0, 0, 0, 0);
var elapsedSeconds = (referenceDate.getTime() - new Date().getTime()) / 1000;
document.write("Seconds elapsed since the beginning of 2015: " + elapsedSeconds +"<br>");

//Question:11
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Updated date: " + currentDate +"<br>");

//Question:12
var currentDate = new Date();
var year = currentDate.getFullYear() - 100;
currentDate.setFullYear(year);
alert("Date 100 years back: " + currentDate);
 
//Question:13
var age = prompt("Enter your age: ");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear +"<br>" + "<br>");


















