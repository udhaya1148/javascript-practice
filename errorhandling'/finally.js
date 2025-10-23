let timmer = setInterval(()=> {
    console.log("Timmer..");
},1000);

try{
    let result = 10/0;
    if(!isFinite(result)){
        throw new Error("not divide by 0")
    }
    return result;
}
catch(error){
    console.log(error.message);
    clearInterval(timmer);
}
// finally{
//     clearInterval(timmer);
// }