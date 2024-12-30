function nameShuffler(str){
    // first split to convert to an array / speparte elements 
    // reverse the order backwards
    // join them to make the array a string. 
     const name = str.split(' ')
     const result = name.reverse().join(' ')
     
     return result
   }
   
   
   console.log(nameShuffler('Millie Cali Garcia')) //Garcia Cali Millie