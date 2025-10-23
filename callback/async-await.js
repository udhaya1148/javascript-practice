function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("not a number"));
    } else {
      resolve(a + b);
    }
  });
}

async function addition() {
  try {
    let result1 = await add(2, 3);
    console.log("result is", result1);

    let result2 = await add(result1, 1);
    console.log("result is", result2);
  } catch (err) {
    console.log(err.message);
  }
}

addition()
