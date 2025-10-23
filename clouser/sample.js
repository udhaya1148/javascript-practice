// Q1: Write a function outer() that returns an inner function.

// The inner function should print "Hello from closure!" when called.

// Call the inner function after creating it.

function outer() {
  function inner() {
    console.log("Hello from closure!");
  }
  return inner;
}
let print = outer();
print();
