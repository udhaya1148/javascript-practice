//function declaration
function sumNumbers(a,b){
    return a+b;
}

console.log(sumNumbers(3,6));

//function expression
let square = function(n){
    return n*n
}

console.log(square(5));

//arrow function

let isEven = ((num) => num%2 ==0)
console.log(isEven(5));
console.log(isEven(6));


let double = ((num)=> num*2)
console.log(double(15))



let greet = ((name)=> console.log("Hello",name));
greet("ram");

let sumoftwonum = ((x,y)=> x+y);
console.log(sumoftwonum(2,8))


arr=[1,2,3,4]
let squareArray = ((arr)=> arr.map(num => num*num));
console.log(squareArray(arr))

let filter = ((arr,n)=> arr.filter(num=> num>n));
console.log(filter(arr,2))

let sumarr = ((arr)=> arr.reduce((sum,n)=> sum+n,0));
console.log(sumarr(arr))

let sum2num = ((a,b) => a+b);
console.log(sum2num(2,3));