function add(a,b,callback){
    setTimeout(()=>{
        let result= a+b;
        callback(result);
    },1000)
}

// function print(result){
//     console.log("result is ",result)
// }

add(2,3,(result1)=>{
    console.log("result is ",result1)
    add(result1,5,(result2)=>{
        console.log("result is ",result2)
        add(result2,5,(result3)=>{
            console.log("result is ",result3)
        })
        
    })
});

