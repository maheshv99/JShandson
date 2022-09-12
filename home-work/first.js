//"Problem:
//You are given a string (STR) of length N, consisting of only the lower case English alphabet.
//Your task is to remove all the duplicate occurrences of characters in the string.

function show(st){
    let n=new Set(st);
   console.log(n);
}

show("abcadeecfb");

//"Problem:
//You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
let m2=new Map();
function mp(st1){
   let l=st1.length;
   let s1=new Set(st1);
   for(let i of s1){
    let count=0;
    for(let j of st1){
        if(i==j){
            count++;
        }
    }
    m2.set(i,count);
   }
}
mp("abcadeecfb");
for(let k of m2){
     console.log(k);
}
