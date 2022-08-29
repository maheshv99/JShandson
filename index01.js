//Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.
switch(A)
	{
	  case '+' : 
	    var sum=B+C;
	     return sum;
	  
	  case '-' : 
	     var sub=B-C;
	   return sub;
	  
	  case '*' : 
	   var mul=B*C;
	   return mul;
	  
	  case '/' : 
	    var div=B/C;
	    return div;
	  
	}

 //Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.  
  
 if(N%6==0 && N%9==0)
  {
    var st="Divisible by both";
    return st;
  }
  else
  {
     var st=" Not Divisible by both";
    return st;
  }

  //You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not

  if(a>=18)
    {
      var st= "Eligible for Voting";
      return st;
    }
    else
    {
      var st1= " Not Eligible for Voting";
      return st1;
    }

 /* .PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values X and Y and asks you to find the relation between them. The relationships between integers X and Y are as follows: If X < Y , it means that X is smaller than Y . If X > Y , it means that X is greater than Y . If X = Y , it means that X is equal to Y */
 
 if(x<y)
 {
   return(x+" is smaller than "+y);
 }
 else if(x>y)
 {
    return(x+" is greater than "+y);
 }
 else
 {
    return(x+" is equal to "+y);
 }

 //Your school has the following grading system based upon the marks(M) obtained by a student: If M ≤ 10 , the grade will be E . If 11 ≥ M ≤ 20 , the grade will be D . If 21 ≥ M ≤ 30 , the grade will be C . If 31 ≥ M ≤ 40 , the grade will be B . If 41 ≥ M ≤ 50 , the grade will be A . Your friend will enter his marks out of 50 , and your task is to print his grades using a switch statement

 switch(true){
    case (a<=10) :{return "E"}
    case (a>=11 && a<=20) :{return "D"}
    case (a>=21 && a<=30) :{return "C"}
    case (a>=31 && a<=40) :{return "B"}
    case (a>=41 && a<=50) :{return "A"}                                                    
  }

  //You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it. | P or p - PrepBytes | | Z or z - Zenith | | E or e - Expert Coder | | D or d - Data Structure 

  if(a =='P' || a =='p'){return "PrepBytes";}
 if(a =='Z' || a =='z'){return  "Zenith";}
 if(a =='E' || a =='e'){return "Expert Coder";}
 if(a =='D' || a =='d'){return "Data Structure";}

 //Take three numbers and print the largest number among them if all of three are same print −1

 if (A>B && A>C) {return A;}
      else if (B>A && B>C) {return B;} 
      else if (C>A && C>B) {return C;}
      else {return ("-1");
      } 

//You are given 3 distinct integers X , Y , and Z , and your task is to find and return the second smallest integer among the three provided integers.

if(x>y && x>z)
{ if(y>z){return y;}

   else{ return z; }
 }
 
 else if(y>x && y>z)
 { if (x>z){return x;}
 
   else{return z;}
 }
 
 else if(z>x && z>y)
 { if(x>y){return x;}
 
   else{return y;}
 }

 //Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

 if(A>90 || B>90 || C>90)
 {	return ("obtuse");}
 else{ return ("acute");}
 
