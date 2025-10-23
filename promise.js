function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Not a number"));
    } else {
      setTimeout(() => {
        resolve(a + b);
      }, 1000);
    }
  });
}
add(2, "2")
  .then((result1) => {
    console.log("result is", result1);
    return add(result1, 2);
  })
  .then((result2) => {
    console.log("result is", result2);
  })
  .catch((error)=> console.log(error.message))
