function div(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("not divided by 0"));
    } else {
      setTimeout(() => {
        resolve(a / b);
      }, 1000);
    }
  });
}

async function division() {
  try {
    let result1 = await div(100, 2);
    console.log("result is", result1);

    let result2= await div(result1,0);
    console.log("result is",result2);
  } catch (error) {
    console.log(error.message);
  }
}

division();
