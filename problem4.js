// Write the total number of times "Saba" appears in horizonally, vertically and diagonally.

var matrix = [
  ["r","s","a","b","s"],
  ["s","a","a","a","a"],
  ["a","a","b","b","b"],
  ["b","a","r","a","a"],
  ["a","o","n","a","s"]
]

var n = matrix.length;
var m = matrix[0].length;

var count = 0;
// Horizontal 
for(var i = 0; i<n; i++)
  {
    for(var j = 0; j<m; j++)
      {
        if(matrix[i][j] == "s")
        {
          // console.log(matrix[i]);
          if(matrix[i][j+1] == "a" && matrix[i][j+2] == "b" && matrix[i][j+3] == "a")
          {
            count = count + 1;
            console.log("H(L-R)", count);
          }
          if(matrix[i][j-1] == "a" && matrix[i][j-2] == "b" && matrix[i][j-3] == "a")
          {
            count = count + 1;
            console.log("H(R-L)", count);
          }
                 
        }
      }
  }

// Vertical
for(var col = 0; col<m; col++)
  {
    for(var row = 0; row<n; row++)
      {
        if(matrix[row][col] == "s" && row+3 < n)
        {
          if(matrix[row+1][col] == "a" && matrix[row+2][col] == "b" && matrix[row+3][col] == "a")
          {
            count = count + 1;
            console.log("V(U-D)", count);
          }
        }
        
        if(matrix[row][col] == "s" && row-3 >=0)
        {
          if(matrix[row-1][col] == "a" && matrix[row-2][col] == "b" && matrix[row-3][col] == "a")
          {
            count = count + 1;
            console.log("V(D-U)", count);
            
          }
          
        }
      }
  }

//left Diagonals
for(var i = 0; i<n; i++)
  {
    for(var j = 0; j<m; j++)
      {
        if(matrix[i][j] == "s" && i+3 < n && j+3 <m)
        {
          // // console.log(matrix[i]);
          if(matrix[i+1][j+1] == "a" && matrix[i+2][j+2] == "b" && matrix[i+3][j+3] == "a")
          {
            count = count + 1;
            console.log("LD1",count);
          }
        }
        if(matrix[i][j] == "s" && i-3 >=0 && j-3 >=0)
        {
          if(matrix[i-1][j-1] =="a" && matrix[i-2][j-2] == "b" && matrix[i-3][j-3] == "a")
          {
            count = count + 1;
            console.log("LD2",count);
            
          }
        }
        
        
      }
  }

// Right Diagonals
for(var i = 0; i<n; i++)
  {
    for(var j = m-1; j>=0; j++)
      {
        if(matrix[i][j] = "s" && i+3 < n )
        {
          if(matrix[i+1][j-1] == "a" && matrix[i+2][j-2] == "b" && matrix[i+3][j-3] == "a")
          {
            count = count + 1;
            console.log("RD1", count);
          }
        }
        if(matrix[i][j] == "s" && i-3 >=0)
        {
          
           if(matrix[i-1][j+1] == "a" && matrix[i-2][j+2] == "b" && matrix[i-3][j+3] == "a")
            {
            count = count + 1;
            console.log("RD2", count);
            }
        }
      }
  }

// console.log(count);