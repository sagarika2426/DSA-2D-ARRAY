// You are given a matrix of N rows and M cols. You are given a position(x,y) of ann element in the matrix. You have to print all the elements which lie on the same diagonal(both left and right) of the given element.

var matrix = [
  [1,2,3,4],
  [3,4,8,6],
  [4,5,2,3],
  
]
// Element = 8

var x = 1 
var y = 2

// X annd Y are the row,column index

var N = matrix.length;
var M = matrix[0].length;

// Let's print all the elememts on left diagonals

var diff= x-y;
for(var i = 0; i<N; i++)
  {
    for(var j = 0; j<M; j++)
      {
        if(i-j == diff)
        {
          console.log(matrix[i][j]);
        }
      }
  }

// Let's print all the elememts on right diagonals

var sum= x+y;
for(var i = 0; i<N; i++)
  {
    for(var j = 0; j<M; j++)
      {
        if(i+j == sum)
        {
          console.log(matrix[i][j]);
        }
      }
  }

