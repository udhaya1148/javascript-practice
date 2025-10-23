// let nums = [5, 10, 15, 20, 25];
// let sum =0;
// let total = nums.filter((n)=>{
//     if(n % 2 === 0){
//         sum+=n;
//     }
// })
// console.log(sum);

// let nums = [5, 10, 15, 20, 25];
// let sum =0;
// for (let i=0; i<nums.length; i++){
//     if(nums[i] % 2 === 0){
//         sum+=nums[i];
//     }
// }
// console.log(sum)

let nums = [5, 11, 15, 21, 25];

let total = nums.reduce((total,n)=> {
    return (n % 2 === 0)? total+n : total

},0);
console.log(total)