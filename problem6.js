// square matrix Spiral Traverse

// OP - 1 5 9 13 14 15 16 12 8 4 3 2

var arr = [
  [1 ,2 ,3 ,4 ],
  [5 ,6 ,7 ,8 ],
  [9 ,10,11,12],
  [13,14,15,16]
  
]

var n = arr.length;

var top = 0;
var left = 0;
var right = n-1;
var bottom = n-1;

var bag = "";

// for 1 5 9 13
for(var i = top; i<=bottom; i++)
  {
    bag = bag + (arr[i][left]) + " ";
  }

// for 14 15 16
left = left + 1;
for(var i = left; i<=right; i++)
  {
    bag = bag + (arr[bottom][i]) + " "
  }

// for 12 8 4
bottom = bottom -1;
for(var i = bottom; i>=top; i--)
  {
    bag = bag + arr[i][right] + " ";
  }

// for 3 2 
right = right - 1;
for(var i = right; i>=left ; i--)
  {
    bag = bag + arr[top][i] + " "
  }
// for 6 10
top = top +1;
for(var i = top; i<=bottom; i++)
  {
    bag = bag + arr[i][left] + " "
  }

console.log(bag)


