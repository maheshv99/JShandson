function callback(){
    let a= 40; 
    let b= 40;
    console.log(a+b)
}
callback()


setTimeout(()=>{
    console.log("1")
    
        setTimeout(()=>{
        console.log("2")
    
            setTimeout(()=>{
            console.log("3")
    
                setTimeout(()=>{
                console.log("4")
    
                    setTimeout(()=>{
                console.log("5")
    
                    setTimeout(()=>{
                    console.log("6")
    
                        setTimeout(()=>{
                        console.log("7")
                                       },7000)
                                 },6000)
                            },5000)
                    },4000)
             },3000)
       },2000)
},1000)

async function callback(){
    
let x= new Promise((resolve,reject)=>{
    let a= 99;
     if(a == 99){
        resolve ("resolved")
     } 
     else reject ("rejected")
})

await x.then((a)=>{console.log(a)}).catch((b)=>{console.log(b)})
console.log("async and await")
}

callback()


function OddorEven(number,callback){
    const result =(number%2 ==0) ? 'Even' : 'Odd';
    callback(number,result);
}
OddorEven(27,(number,result)=>{
    console.log(number+ 'is' + result);
})




setTimeout(() => {
    let a = new Promise((resolve,reject) => 
    {resolve(setTimeout(() => 
        {console.log('1')
            setTimeout(() => {
                console.log('2')
                setTimeout(() => {
                    console.log('3')
                    setTimeout(() => {
                        console.log('4')
                        setTimeout(() => {
                            console.log('5')
                            setTimeout(() => {
                                console.log('6')
                                setTimeout(() => {
                                    console.log('7')
                                }, 7000);
                            }, 6000);
                        }, 5000);
                    }, 4000);
                }, 3000);
            }, 2000);
        }, 1000));
    })
    a.then().catch();
});





let a = true;
let b = new Promise((resolve, reject) => {
    let x = 100
    if(x > 10){
        resolve("Resolved")
    }
    else{
        reject("Rejected")
    }
});

Promise.all([a,b]).then((a) => {
  console.log(a);
});