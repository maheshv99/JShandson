/* PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.
Note: You have to complete Minimal_Angle function. No need to take any input.*/

var Minimal_Angle = (h, m) => 
{
     let degree_per_minute=360/60;
          let degree_per_hour=360/12;
          let a=h*degree_per_hour+m*0.5;//hours
          let b=m*degree_per_minute//mins
          let angle=Math.abs(a-b);
          return Math.min(angle,360-angle)
};


/* Write a program which takes an year 
N as input from the user and find out whether the given year is a Leap Year or not.
Note: You have to complete Check_Leap function. No need to take any input.*/


var Check_Leap = (year) => 
{
 
  if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    return "Leap Year";
  }
  else{
    return "Non Leap Year";
  }

};

/*Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.
Now, You are given an integer N
, write a program to check whether the given number is a Perfect Number or not.
Note: You have to complete Perfect _Check function. No need to take any input. */


 
var Perfect_Check = (N) => 
{
        let sum=1;
            for(let i=1;i < N;i++) {
              if(N%i === 0)
              {
                sum+=i
              }
            }if (N == sum){
              return "YES"
            }else {
              return "NO"
            } 
        
};

/* Write a program which takes a numebr 
N as input from the user and You need to reverse the number.
Note: You have to complete Reverse_Number function. No need to take any input.*/

var Reverse_Number = (N) => 
{
  
let digit=0;
          let reverse=0;
          while(N!=0){
            digit=N%10;
            N=parseInt(N/10);
            reverse=reverse*10+digit;
          }
        return reverse
};

/* You are given two strings S1 and S2, you need to check whether the string S1 is a substring of string S2 or not.
Note: You have to complete Substring_Check function. No need to take any input*/

var Substring_Check = (S1, S2) => 
{
      let x=(S1.includes(S2));
               if(x==true){
                 return "YES"
               }else{
                 return "NO"
               }
};
 