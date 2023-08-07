/*Calculate area of a rectangle*/

let length = 6
let width = 1
let res = length*width
console.log("the area of the rectangle is:" + res);

/*The Temperature Converter*/

let celsius = 27
let conv1 = celsius*(9/5)+32
let CtoF = conv1
console.log(celsius + "°C is " + CtoF + "°F");
let fahrenheit = 92.3
let conv2 = (fahrenheit-32)*(5/9)
let FtoC = conv2
console.log(fahrenheit + "°F is " + FtoC + "°C");

/* Convert hours to seconds*/

let hours = 1
let conv3 = hours*3600
console.log(hours + " hours = " + conv3 + " sec" );

/*Leap year */

let year = 2016
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
   console.log("The year is leap"); 
} else {
    console.log("The year is not leap");
}

/* Find the a number is present in given range*/

let start = 1
let end = 10
let n = 0
if (n <= 10 && n >= 1) {
    console.log(true);
} else {
    console.log(false);
}

/*Factorial numbers */

let con = 1
let number = 4

    for (i = 1; i <= number; i++) {
        con *= i;
    }
    console.log("the Factorial number of " + number + " is = " + con);
