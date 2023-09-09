// Write the total number of times "Saba" appears in horizonally, vertically and diagonally.

var matrix = [
["r","s","a","b","a"],
["a","a","j","a","d"],
["b","a","b","o","l"],
["a","a","r","a","n"],
["s","o","n","g","s"]
]

var N = matrix.length;
var M = matrix[0].length;

var count = 0;
// for horizontal 
  for(var i = 0; i<N; i++)
    {
      var bag = ""
      for(var j = 0; j<M; j++)
        {
          bag = bag + matrix[i][j];
          // console.log(bag);
          if(bag == "saba")
          {
            count = count + 1;
            // console.log(count);
          }         
        }
    }

// for vertical 
for(var i = 0; i<M; i++)
  {
    var bag = "";
    for(var j = 0; j<N; j++)
      {
        bag = bag + matrix[j][i];
        if(bag == "saba")
          {
            count = count + 1;
            // console.log(count);
          }
      }
  }

// for Diagonals 

var bag_left = "";
var bag_right = "";
for (var i = 0; i<N; i++)
  {
    
    for(var j = 0; j<M; j++)
      {
        if(i==j)
        {
          bag_left = bag_left + matrix[i][j];
          
        }
        if(i+j == N-1)
        {
          bag_right = bag_right+ matrix[i][j];
        }
      }
    // console.log({bag_left});
    // console.log({bag_right})
    if(bag_left == "saba")
    {
      count = count + 1;
      // console.log(count)
    }

    if(bag_right == "saba")
    {
      count = count + 1;
      // console.log(count)
    }
    
    
  }

console.log(count);





