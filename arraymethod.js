let numbers = [10,20,30,40,50];

//using map
let double = numbers.map((n)=> n*2);
console.log(double);

//filter
let filter = numbers.filter((n)=> n>25);
console.log(filter);

//reduce: ---> to reduse array as single value
let reduce = numbers.reduce((n,sum)=>sum+n,0);
console.log(reduce);