// Given a current day, we have to find out what day it will be after N days.

// Logic - if the current day is tuesday and N is 20 then the day will be 20%7 = 2 
// tuesday - wed, thursday (so ans is thursday)

var ob1 = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
}

var ob2 = {
  Sunday : 0 ,
  Monday : 1,
  Tuesday: 2,
  Wednesday : 3,
  Thursday : 4,
  Friday: 5,
  Saturday:6
}

var current = "Monday";
var N = 27;
var current_key = ob2[current];
var sum = current_key + N;
// console.log(sum)
var new_key = sum%7;
// console.log(new_key)

var new_day = ob1[new_key];
console.log({new_day});