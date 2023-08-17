//Question#1
function displayCurrentDateAndTime() {
    var currentDate = new Date();
    var date = currentDate.toLocaleDateString();
    var time = currentDate.toLocaleTimeString();
    document.write("Current Date: " + date + "<br>");
    document.write("Current Time: " + time);
  }
  displayCurrentDateAndTime();
  document.write("<br>");

  //Question#2
  function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "! Welcome!" +"<br>");
  }
  var firstName = prompt("Enter your first name: ");
  var lastName = prompt("Enter your last name: ");
  greetUser(firstName, lastName);
  document.write("<br>");

  //Question#3
  function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number: "));
    var num2 = parseFloat(prompt("Enter the second number: "));
    var sum = num1 + num2;
    return sum;
  }
    var result = addNumbers();
  document.write("The sum is: " + result);
  document.write("<br>");

  //Question#4
  function performOperation(num1, num2, operator) {
    var result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        return "Invalid operator";
    }
    return result;
  }
  var num1 = parseFloat(prompt("Enter the first number: "));
  var num2 = parseFloat(prompt("Enter the second number: "));
  var operator = prompt("Enter the operator (+, -, *, /, %): ")
  var result = performOperation(num1, num2, operator);
  document.write("The result is: " + result);
  document.write("<br>");

  //Question#5
  function squareNumber(num) {
    var result = num * num;
    return result;
  }
  var number = parseFloat(prompt("Enter a number: "));
  var squaredNumber = squareNumber(number);
  document.write("The square of " + number + " is: " + squaredNumber);
  document.write("<br>");

  //Question#6
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
     else {
      var result = 1;
      for (var i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }
  var number = parseInt(prompt("Enter a number: "));
  var factorialResult = factorial(number);
  document.write("The factorial of " + number + " is: " + factorialResult);
  document.write("<br>");

  //Question#7
  function countNumbers(start, end) {
    if (start <= end) {
      for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
      }
    } else {
      for (var j = start; j >= end; j--) {
        document.write(j + "<br>");
      }
    }
  }
  var startNumber = parseInt(prompt("Enter the start number: "));
  var endNumber = parseInt(prompt("Enter the end number: "));
  countNumbers(startNumber, endNumber);
  document.write("<br>");

  //Question#8
  function computeHypotenuse(base, height) {
    function square(number) {
      return number * number;
    }
    var baseSquared = square(base);
    var heightSquared = square(height);
    var hypotenuseSquared = baseSquared + heightSquared;
    var hypotenuse = Math.sqrt(hypotenuseSquared);
   return hypotenuse;
  }
  document.write("<br>");
  
  //Question#9(a)
  var baseLength = parseFloat(prompt("Enter the length of the base: "));
  var heightLength = parseFloat(prompt("Enter the length of the height: "));
  var hypotenuseLength = computeHypotenuse(baseLength, heightLength);
  
  document.write("The length of the hypotenuse is: " + hypotenuseLength);
  
  function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
  }

  // Example usage:
  var area1 = calculateRectangleArea(5, 10);
  document.write("Area 1: " + area1);
  document.write("<br>");

  //(b)
  function calculateRectangleArea(width, height) {
    var area = width * height;
    return area;
  }
  
  // Example usage:
  var width = parseFloat(prompt("Enter the width: "));
  var height = parseFloat(prompt("Enter the height: "));
  
  var area2 = calculateRectangleArea(width, height);
  document.write("Area 2: " + area2);
  document.write("<br>");

  //Question#10
  function isPalindrome(str) {
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  var inputString = prompt("Enter a string: ");
  var isPalindromeResult = isPalindrome(inputString);
  if (isPalindromeResult) {
    document.write("The string is a palindrome.");
  } else {
    document.write("The string is not a palindrome.");
  }
    document.write("<br>");

//Question#11
  function capitalizeFirstLetter(str) {
    var words = str.split(' ');
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      words[i] = capitalizedWord;
    }
    var result = words.join(' ');
    return result;
  }
  
  // Example usage:
  var inputString = 'the quick brown fox';
  var capitalizedString = capitalizeFirstLetter(inputString);
  document.write("Original string: " + inputString + "<br>");
  document.write("Capitalized string: " + capitalizedString);
  document.write("<br>");

  //Question#12
  function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  var inputString = 'Web Development Tutorial';
  var longestWord = findLongestWord(inputString);
  document.write("Original string: " + inputString + "<br>");
  document.write("Longest word: " + longestWord);
  document.write("<br>");

  //Question#13
  function countOccurrences(str, letter) {
    var count = 0;
  for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  var inputString = 'JSResourceS.com';
  var targetLetter = 'o';
  var occurrences = countOccurrences(inputString, targetLetter);
  document.write("Original string: " + inputString + "<br>");
  document.write("Occurrences of letter '" + targetLetter + "': " + occurrences);
  document.write("<br>");
  

  
  
  
  
  