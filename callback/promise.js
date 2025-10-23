function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("not a number"));
    } else {
      resolve(a + b);
    }
  });
}
add(5,5)
.then((result1)=>{
    console.log("result is",result1);
    return add(result1,"hai");
})
.then((result2)=>{
    console.log("result is",result2);
})
.catch((error)=> console.log(error.message));
