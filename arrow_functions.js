//Do the below programs in Arrow Function 

//a)print odd numbers using arrow function

var one=(arr) => {
  var filrarr=[];
  for(var i=0; i<arr.length; i++){
      if(arr[i]%2===1)
       {
      filrarr.push(arr[i]);
       }
    }
    console.log(filrarr);
  }
  one([1,2,3,4,5,6,7,8,9]);
  
  //----------------------------------------------------------------------------------------------------
  
  //b)Convert all the strings to title caps in a string array using arrow function
  
  var one=(arr)=>{
    for(var i=0; i<arr.length; i++){
      arr[i]=arr[i].toLowerCase();
      console.log(arr[i].charAt(0).toUpperCase()+arr[i].substring(1));
    }
  }
  one(['i', 'aM', 'a', 'leaRNER']);
  
  //----------------------------------------------------------------------------------------------------
  
  //c)Sum of all numbers in an array using arrow function
  
  
  var one=(arr)=>{
    var sum=0;
    for(var i=0; i<arr.length; i++){
      sum+=arr[i];
    }
    console.log(sum);
  }
  one([1,2,3,4,5,6,7,8,9]);
  
  //----------------------------------------------------------------------------------------------------
  
  //d)Return all the prime numbers in an array using arrow fucntion
  
  var one=(arr)=>{
    var primearr=[];
    for(var i=0; i<arr.length; i++){
      var count=0;
      for( var j=1; j<=arr[i]; j++){
        if(arr[i]%j===0){
          count++;
        }
      }
      if(count===2){
        primearr.push(arr[i]);
      }
    }
  console.log(primearr);
  }
  one([1,2,3,4,5,6,7,8,9]);
  
  //----------------------------------------------------------------------------------------------------
  
  //e)Return all the palindromes in an array using arrow function
  
  var one=(arr)=>{
    var palimarr=[];
    for(var i=0; i<arr.length; i++){
      var splitarr=arr[i].split('');
      var comparr=splitarr.reverse().join('');
      if(comparr===arr[i]){
        palimarr.push(arr[i]);
      }
    }
    console.log(palimarr);
  }
  one(["mom", "abc","dad", "madam", "teacher", "sapas","mother","zooz"]);
  //----------------------------------------------------------------------------------------------------
  