arr=[2,4,6,7]
min=arr[0];

for(i=0;i<arr.length;i++){
    if(arr[i]>min){
        min = arr[i];
    }
}
console.log(min)