function div(a, b) {
    if (b === 0) {
      throw new Error("Cannot divisible by 0");
    } else {
      return a / b;
    }
  }
try {
  console.log(div(10,0))
} catch(error) {
    console.log(error.message)
}
