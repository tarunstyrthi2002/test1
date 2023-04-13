const func = (number) =>{
    var sum=number.toString().split('').map(Number).reduce(function(a,b){
        return a+b;
    },0)
    
    var x=1;
    while(x<=sum){
        if(x%4==0 && x%5==0) document.write("FizzBuzz");
        else if(x%4==0) document.write("Fizz");
        else if(x%5==0)  document.write("Buzz");
        else document.write(x);
        x++;
    }
}

let number = prompt("please enter your number");
func(number);
