//Count Characters


const countCharacters = (S) => 
{
  let upperA=0,upperD=0;
    for(let i=0;i<S.length;i++){
      if(S[i]=="A"){
        upperA++;
      }
      if(S[i]=="D"){
        upperD++;
      }
    }
    let B=[upperA,upperD]
    return B;
};

//Count the Heads

var Count_Occ = (s) => 
{
      let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      z.push(key + "" + value);
    }
    
    });
    return (z.join(""));
};

//Count the Vowels

var Count_Vowels= (S) => 
{
  let count=0;
   for(let i=0;i<S.length;i++){
     if(S[i]=="a" || S[i]=="A" || S[i]=="e" || S[i]=="E" || S[i]=="i" || S[i]=="I" || S[i]=="o" || S[i]=="O" || S[i]=="u" || S[i]=="U"){
       count++;
     }
   }  
   return count;
};

//Concatenate the Strings

var Concatenate_Strings = (S1, S2) => 
{
      let S3=S1+S2;
      return S3;
};

//Find Length

const findLength = (S) => 
{
    return S.length;
};

//Find the Winner

var Game_Winner = (S) => 
{
  let a=0,d=0;
  for(let i=0;i<S.length;i++){
    if(S[i]=="A"){
      a++;
    }else{
      d++;
    }
  }
  if(a>d){
    return "Aditya";
  }
  else if(d>a){
    return "Danish";
  }
  else{
    return "Draw";
  }
}

//Join Strings

const joinStrings = (S, P) => 
{
    return S+P;
};

//Plaindrome Check

var Palin_Check = (str) =>
{
	 let i =0  , j = str.length - 1 
let palindrome = true ;
while(i < j) {
   if(str[i] != str[j]) {
      palindrome = false 
      break ;
   }
   i++ ; j-- 
}
if(palindrome === true) {
   return "True";
}
else {
   return "False";
}
}

//Reverse the String


var Reverse_String = (str) => 
{
    return str.split('').reverse().join('')
};
 

//Match the Strings

var String_Match = (S1,S2) => 
{
    if(S1===S2){
      return "YES";
    }  else{
      return "NO";
    }
};

//String Replace


var Replace = (S, pattern , text) => 
{
  let s=S.replace(pattern,text);
  return s;
};

//Split the String

var Split_the_string = (S) => 
{
  let array=S.split(" ");
  return array;
        
};

//Count the Vowels and Consonants


var Count_Vowels= (S) => 
{
    let count=0;
   for(let i=0;i<S.length;i++){
     if(S[i]=="a" || S[i]=="A" || S[i]=="e" || S[i]=="E" || S[i]=="i" || S[i]=="I" || S[i]=="o" || S[i]=="O" || S[i]=="u" || S[i]=="U"){
       count++;
     }
   }  
   return count;  
};
var Count_Consonants= (S) => 
{
      let count=0;
   for(let i=0;i<S.length;i++){
     if(S[i]=="a" || S[i]=="A" || S[i]=="e" || S[i]=="E" || S[i]=="i" || S[i]=="I" || S[i]=="o" || S[i]=="O" || S[i]=="u" || S[i]=="U"){
       count++;
     }
   }  
   return S.length-count; 
};
