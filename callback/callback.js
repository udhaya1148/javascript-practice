function add(a, b, callback) {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      callback(new Error("not a number"),null);
    } else {
      let result = a + b;
      callback(null,result);
    }
  }, 1000);
}

add(5, 5, (err, result1) => {
  if (err) {
    return console.log(err.message);
  }
  console.log("result is", result1);
  add(result1, 5, (err, result2) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("result is", result2);
    add(result2, "sum", (err, result3) => {
      if (err) {
        return console.log(err.message);
      }
      console.log("result is", result3);
    });
  });
});
