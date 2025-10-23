let str = "javascript";
vowels ="aeiouAEIOU";
count =0;
for (let char of str){
    if(vowels.includes(char)){
        count ++;
    }
}
console.log(count);