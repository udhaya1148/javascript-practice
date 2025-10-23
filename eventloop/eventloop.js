console.log("start");

Promise.resolve()
.then(()=>console.log("promise 1"));

let time = setTimeout(()=>{
    console.log("timeout");
},2000);

Promise.resolve()
.then(()=> console.log("promise 2"))

console.log("End");