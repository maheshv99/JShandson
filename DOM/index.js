let div = document.getElementById("element")

let h2 = document.getElementsByTagName("h2")

let p = document.getElementsByClassName("box")


let h1 = document.getElementById("text")

let a= h1.innerText = "Hello World"
console.log(a) 


function execute()
{
    let button = document.getElementsByTagName("button")
    let div = document.getElementsByClassName("container")[0]
   
   
    div.style.flexDirection = "column"  

    
 }

 function fun(){
    let button = document.getElementsByTagName("button")
    let p = document.getElementsByClassName("text")[0]

    p.innerText = "Welcome to Elevation academy"
     p.style.color = "red"
 }


 function validate(){
    let emai=document.getElementById("email").value;
    let numb=document.getElementById("phone").value;
    let dob=document.getElementById("brithYear");
    if(emai.innerText!=""){
      let length=emai.length;
           let domain=emai.indexof("@");
           let domai1=emai.slice(domain,length);
           if(domai1!="prepbytes.com"){
            return false;
           alert("please enter the correct doamin name (prepbytes.com)");
           }
          
    }else{
      return false;
      alert("please enter the mailId");
    }

    if(numb.length==12){
      let code=numb.slice(0,2);
      if(code!=91){
         return false;
         alert("please enter the correct phone number");
      }

    }else{
      alert("please enter the correct number with code(91)");
      return false;
    }
    return true;
  }
 



