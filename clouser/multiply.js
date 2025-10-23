function multiplyby(n){
    function print(num){
        return num * n;
    }
    return print;
}

let double = multiplyby(2);
console.log(double(5));
console.log(double(10));