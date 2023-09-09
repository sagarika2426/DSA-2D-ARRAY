var matrix = 
  [
    ["x", "o", "o"],
    ["o", "o", "x"],
    ["o", "x", "x"]
  ];

var N = matrix.length;
var M = matrix[0].length;

{
// var el_1 = matrix[2][0];
// var el_2 = matrix[2][1];
// var el_3 = matrix[2][2];

// if(el_1 == el_2 == el_3)
// {
//   console.log(true);
// }
// else
// {
//   console.log(false);
// }
}
console.log(matrix);

// For horizontal elements
// var is_equal = false;
var winner = "tie";
for(var i = 0; i<N; i++)
  {
    if(matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2])
    {
      // is_equal = true;
      winner = matrix[i][0];
      break;
    }
    else if(matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i])
    {
      winner = matrix[0][i];
      break;
    }
  
  }
// console.log(winner);
if(winner == "tie")
{
  if(matrix[0][0] === matrix[1][1] && matrix[1][1] == matrix[2][2])
  {
    winner = matrix[0][0];
  
  }
  else if(matrix[0][2] === matrix[1][1] && matrix[1][1] == matrix[2][0])
  {
   winner = matrix[0][2];
  }  
  
}

console.log(winner);