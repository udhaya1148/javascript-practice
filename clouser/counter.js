function outer(){
    let count =0;
    function inner(){
        count ++;
        console.log(count);
    }
    // return inner;
    inner();
}
// let innercount = outer();
// innercount();
// innercount();

outer();
outer();