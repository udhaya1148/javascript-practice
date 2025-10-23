// num = [10,15,20,25,30];
// even=[];
// for(values of num){
//     if(values % 2 === 0){
//         even.push(values)
//     }
// }

// console.log(even);


number=[10,15,20,25,30];
even1=[];
odd=[];
for(let i=0;i<number.length;i++){
    (number[i]%2 === 0)?even1.push(number[i]):odd.push(number[i]);
}
console.log(even1)
console.log(odd)

// number =[10,15,20,25,30];
// even1=[];
// odd=[];
// for(values of number){
//     (values % 2 ===0)?even1.push(values):odd.push(values);
// }
// console.log(even1);
// console.log(odd);