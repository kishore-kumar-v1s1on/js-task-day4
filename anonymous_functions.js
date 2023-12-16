//Do the below programs in Anonymous Function

//a)print odd numbers using anonymous function

arr=[1,2,3,4,5,6,7,8,9];
var filrarr=[];
var one = function (arr) {
	for(var i=0; i<arr.length; i++){
		if(arr[i]%2===1)
	   {
		filrarr.push(arr[i]);
	   }
	}
	console.log(filrarr);
}
one(arr);

//----------------------------------------------------------------------------------------------------

//b)Convert all the strings to title caps in a string array using anonymous function

str=['i', 'aM', 'a', 'leaRNER'];
var strprnt= function () {
	for(var i=0; i<str.length; i++){
		str[i]=str[i].toLowerCase();
		str[i]=str[i].charAt(0).toUpperCase() + str[i].substring(1);
	}
	console.log(str.join(' '));
} 
strprnt();

//----------------------------------------------------------------------------------------------------

//c)Sum of all numbers in an array using anonymous function

arr=[1,2,3,4,5,6,7,8,9]
var sum=0;
var fnexec=function (){
for(var i=0; i<arr.length; i++){
	sum+=arr[i];
}
console.log(sum);
}
fnexec()

//----------------------------------------------------------------------------------------------------

//d)Return all the prime numbers in an array using anonymous fucntion

var arr=[1,2,3,4,5,6,7,8,9];
var primearr=[];
var primeNum=function (){
  for(var i=0; i<arr.length; i++){
		var count=0;
    for(var j=1; j<=arr[i]; j++){
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
primeNum(arr);

//----------------------------------------------------------------------------------------------------

//e)Return all the palindromes in an array using anonymous function

var palindrome=function(arr){
var outarr=[];
for(i=0;i<arr.length; i++){
var compstr=arr[i];
var revstr=compstr.split('').reverse().join('');
if(revstr===arr[i]){
outarr.push(arr[i]);
}
}
console.log(outarr);
}
var arr =[ "mom", "abc","dad", "madam", "teacher", "sapas","mother","zooz"];
palindrome(arr);

//----------------------------------------------------------------------------------------------------

//f)Return median of two sorted arrays of the same size using anonymous function
let median = function (arr1,arr2){
    let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
median(arr1,arr2);

//----------------------------------------------------------------------------------------------------

//g)Remove duplicates from an array using anonymous function

var one= function(arr){
	var outarr=[];
  for(var i=0; i<arr.length; i++){
  	var count=0;
		for(var j=0; j<arr.length; j++){
    	if(arr[i]===arr[j]){
      	count++;
      }
    }
    if(count===1){
    	outarr.push(arr[i]);
    }
  }
  console.log(outarr);
}
one([1,2,3,4,3,4,5,6,7,8,9,8,9]);

//----------------------------------------------------------------------------------------------------

//h)Rotate an array by k times using anonymous function
let rotation = function (arr,n,d)
{
    let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
           out.push(arr[i]);
            
        }
        console.log(out);
};
var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

rotation(arr, n,k);
