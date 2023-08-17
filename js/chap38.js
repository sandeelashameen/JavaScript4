//Question#1
function power(a, b) {
    var result = 1;
  
    for (var i = 0; i < b; i++) {
      result *= a;
    }
   return result;
  }
   // Example usage:
  var base = 2;
  var exponent = 3;
  var result = power(base, exponent);
  document.write(base + " raised to the power of " + exponent + " is: " + result);
  document.write("<br>");

 //Question#2
 function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  // Example usage:
  var inputYear = parseInt(prompt("Enter a year: "));
  var isLeap = isLeapYear(inputYear);
  if (isLeap) {
    document.write(inputYear + " is a leap year.");
  } else {
    document.write(inputYear + " is not a leap year.");
  }
  document.write("<br>");

  //Question#3
  function calculateS(a, b, c) {
    var s = (a + b + c) / 2;
    return s;
  }
  function calculateTriangleArea(a, b, c) {
    var s = calculateS(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  // Example usage:
  var sideA = 5;
  var sideB = 4;
  var sideC = 3;
  
  var area = calculateTriangleArea(sideA, sideB, sideC);
  document.write("The area of the triangle is: " + area);
  document.write("<br>");

  //Question#4
  function calculateAverage(subject1, subject2, subject3) {
    var sum = subject1 + subject2 + subject3;
    var average = sum / 3;
    return average;
  }
  function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = 300; 
    var obtainedMarks = subject1 + subject2 + subject3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    return percentage;
  }
  
  function mainFunction() {
    var subject1Marks = parseInt(prompt("Enter marks for subject 1: "));
    var subject2Marks = parseInt(prompt("Enter marks for subject 2: "));
    var subject3Marks = parseInt(prompt("Enter marks for subject 3: "));
  
    var average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
    var percentage = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);
  
    document.write("Marks obtained: Subject 1: " + subject1Marks + ", Subject 2: " + subject2Marks + ", Subject 3: " + subject3Marks + "<br>");
    document.write("Average marks: " + average + "<br>");
    document.write("Percentage: " + percentage + "%");
  }
  mainFunction();
  document.write("<br>");

  //Question#5
  function customIndexOf(string, character) {
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === character) {
        return i;
      }
    }
    return -1;
  }
  
  // Example usage:
  var inputString = "Hello, World!";
  var searchChar = "o";
  var index = customIndexOf(inputString, searchChar);
  if (index !== -1) {
    document.write("The character '" + searchChar + "' is found at index " + index);
  } else {
    document.write("The character '" + searchChar + "' is not found in the string");
  }
  document.write("<br>");

  //Question#6
  function removeVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var result = '';
  
    for (var i = 0; i < sentence.length; i++) {
      var char = sentence.charAt(i);
      if (vowels.indexOf(char) === -1) {
        result += char;
      }
    }
  
    return result;
  }
  // Example usage:
  var inputSentence = prompt("Enter a sentence (up to 25 characters): ");
  
  if (inputSentence.length > 25) {
    document.write("Error: Sentence is more than 25 characters long.");
  } else {
    var modifiedSentence = removeVowels(inputSentence);
    document.write("Modified sentence: " + modifiedSentence);
  }
  document.write("<br>");

  //Question#7
  function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
    for (var i = 0; i < text.length - 1; i++) {
      var char1 = text.charAt(i);
      var char2 = text.charAt(i + 1);
  
      switch (char1) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
          if (vowels.indexOf(char2) !== -1) {
            count++;
            document.write(char1 + char2 + ' ');
          }
          break;
        default:
          break;
      }
    }
  
    return count;
  }
  
  // Example usage:
  var inputText = "Pleases read this application and give me gratuity";
  var occurrences = countSuccessiveVowels(inputText);
  
  document.write("<br>");
  document.write("Number of occurrences: " + occurrences);
  document.write("<br>");

  //Question#8
function convertToMeters(distanceInKm) {
  return distanceInKm * 1000;
}
function convertToFeet(distanceInKm) {
  return distanceInKm * 3280.84;
}
function convertToInches(distanceInKm) {
  return distanceInKm * 39370.1;
}
function convertToCentimeters(distanceInKm) {
  return distanceInKm * 100000;
}
var distanceInKm = parseFloat(prompt("Enter the distance between two cities (in km):"));

// Converting and printing the distance in meters, feet, inches, and centimeters
var distanceInMeters = convertToMeters(distanceInKm);
var distanceInFeet = convertToFeet(distanceInKm);
var distanceInInches = convertToInches(distanceInKm);
var distanceInCentimeters = convertToCentimeters(distanceInKm);

console.log("Distance in meters: " + distanceInMeters);
console.log("Distance in feet: " + distanceInFeet);
console.log("Distance in inches: " + distanceInInches);
console.log("Distance in centimeters: " + distanceInCentimeters);

//Question#9
function calculateOvertimePay(hoursWorked) {
    const regularHours = 40; 
    const overtimeRate = 12; 
  
    if (hoursWorked <= regularHours) {
      return 0; 
    } else {
      const overtimeHours = hoursWorked - regularHours;
      const overtimePay = overtimeHours * overtimeRate;
      return overtimePay;
    }
  }
  var hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
  var overtimePay = calculateOvertimePay(hoursWorked);
  console.log("Overtime pay: Rs. " + overtimePay.toFixed(2));
  
  //Question#10
function calculateCurrencyNotes(amountInHundreds) {
    const note100 = 100;
    const note50 = 50;
    const note10 = 10;
    var notes100 = Math.floor(amountInHundreds); 
    var remainingAmount = amountInHundreds - notes100; 
  
    var notes50 = Math.floor(remainingAmount / (note50 / note100)); 
    remainingAmount -= notes50 * (note50 / note100);
    var notes10 = Math.floor(remainingAmount / (note10 / note100)); 
    var result = {
      note100: notes100,
      note50: notes50,
      note10: notes10
    };
  
    return result;
  }
  var amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
  var currencyNotes = calculateCurrencyNotes(amountInHundreds);
  console.log("Number of 100 notes: " + currencyNotes.note100);
  console.log("Number of 50 notes: " + currencyNotes.note50);
  console.log("Number of 10 notes: " + currencyNotes.note10);
