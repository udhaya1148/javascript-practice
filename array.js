let nums = [5,10,15,20,25];
nums.push(30);
console.log(nums)

nums.pop();
console.log(nums);

nums.unshift(0);
console.log(nums);

nums.shift();
console.log(nums)

//remove
nums.splice(1,2);
console.log(nums);

//add
nums.splice(1,0,12,13);
console.log(nums);
//replace
nums.splice(1,2,20,29);
console.log(nums);

//concat
arr1=[1,2,3];
arr2=nums.concat(arr1);
console.log(arr2);

delete arr1[1]
console.log(arr1);

console.log(nums);
console.log(nums[2]);
// at --> able to acess negative value
console.log(nums.at(-2));

//arr to str 
str=nums.toString();
console.log(str);

//join covert as string
joins=nums.join("#");
console.log(joins);
