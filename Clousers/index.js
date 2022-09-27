let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

function counter()
{
  var counter = 0;

  function IncreaseCounter() {
      return counter += 1;
  };

  return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}



function counter(){
    var counter = 10;
  
    function IncreaseCounter() {
        return counter += 1;
    };
  
    return IncreaseCounter;
  }
  
  var counter = counter();
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
  
  
  
  function count(){
    let count = 0;
    function execute(){
      return count = count+1
    }
    return execute;
  }
  count = count();
  console.log(count())
  console.log(count())
  console.log(count())
  console.log(count())
  console.log(count())
  
  
  function rect(length)
  {
    let l = 20; l
    function area(breadth){
      let b = 30; b
      console.log(l*b)  
    }(30)
  }(20)
  