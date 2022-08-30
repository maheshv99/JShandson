//Take a number from the user and print the count of digits in that number.
// Note: You have to complete Find_Digits. No need to take any input.

const Find_Digits = (N) => 
{ 
  let count=0;
	 while (N !== 0){
    count++;
    N=parseInt(N/10);
  }
	 return count;
};

// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.
// Note: You have to complete Find_Five. No need to take any input.

const Find_Five = (N) => 
{
  let count=0;
	 while(N!==0){
	   let currentdigit=N%10;
     N=parseInt(N/10)	
     if(currentdigit==5){
        count++; 
     }
	 }
	 return count;
};

// You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).
// Note: You have to complete findSum function. No need to take any input

const findSum = (n) => {
    let sum=0;
      for(let i=1;i<=n;i++){
        if(i%2===0){
          sum+=i;
        }
      }
      return sum;
  };

  // Write a program that takes a number from the user and get the sum of the digits present in the number.
// Note: You have to complete Number_Sum. No need to take any input

const Number_Sum = (N) => 
{
  let sum=0;
 while(N!==0){
  let currentdigit=N%10;
  sum+=currentdigit;
  N=parseInt(N/10);
  }
  return sum;
};

// Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.
// Note: You have to complete Print_Odd. No need to take any input.

const Print_Odd = (N) => 
{
   console.log('2');
	  for(let i=2;i<=N;i++){
	   if(i%2===1){
	     console.log(i);
	   }
	 }
};

// Write a program which ask user for no of lines and print a pattern using an asterik .
// Note: You have to complete Print_pattern. No need to take any input.

const Print_pattern = (N) => 
{
  for(let i=1;i<=N;i++){
    let star="";
    for(let j=1;j<=i;j++){
      star+="*";
    }
    console.log(star);
  }
};


// Write a program which takes  a number from user and check whether number is prime number or not a prime number.
// Note: You have to complete Prime_Check. No need to take any input.

const Prime_Check = (n) => 
{
  let flag=0;
	  if (n === 0 || n == 1){
	    flag = 1;
	  }
    for (i = 2; i <= n / 2; ++i) {
    if (n % i === 0) {
      flag = 1;
      break;
    }
  }
  if (flag === 0){
    let re="YES";
    return re;
  } else{
    let r1="NO";
    return r1;
  }
    
};


// You are given an integer N, and your task is to print all the integers starting from 1 till N(N inclusive).
// Note: You have to complete printNumbers function. No need to take any input


const printNumbers = (n) => {
    for(let i=1;i<=n;i++){
      console.log(i);
    }
};

// Write a program which takes a number from user and print the table.
// Note: You have to complete Print_Table. No need to take any input.

const Print_Table = (N) => 
{
	for(let i=1;i<=10;i++){
	  console.log(N+" * "+i+" = "+N*i);
	}
};

