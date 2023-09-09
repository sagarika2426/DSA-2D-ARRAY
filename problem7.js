// You have given a string, cut it into 2 equal parts and reverse it
// for example - varun (op - avrnu)
// for example  - Aman (op - mana)

// for even length
var str = "aman";
var mid = str.length/2
var str1 = ""
for(var i = mid-1; i>=0; i--)
  {
    str1 = str1 +str[i];
  }

var str2 = "";
for(var i = str.length-1; i>=mid; i--)
  {
    str2 = str2 + str[i];
  }
console.log(str1 + str2)

// for odd length
var new_str = "varun";
var n = new_str.length;
var mid2 = n/2;
console.log(mid2)

var new_str1 = "";
for(var i = Math.floor(mid2-1); i>=0; i--){
  new_str1 = new_str1  + new_str[i];
}

var new_str2 = "";
for(var i = n-1; i>mid2; i--)
  {
    new_str2 = new_str2 + new_str[i]
  }

var new_str3 = new_str[Math.floor(mid2)]
console.log(new_str1 + new_str3 + new_str2)


