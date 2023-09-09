// N traverse

var arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
// OP = 7 4 1 5 9 6 3

var n = arr.length;
var ans = [];

for(var i = n-1; i>=0; i--)
  {
    ans.push(arr[i][0])
  }

for(var i =1; i<n; i++)
  {
    ans.push(arr[i][i])
  }

for(var i = n-2; i>=0; i--)
  {
    ans.push(arr[i][n- 1])
  }

console.log(ans);