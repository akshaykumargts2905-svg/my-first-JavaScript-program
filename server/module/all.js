function iseven(num) {
  if (num % 2 == 0) {
    console.log(num, "is an even number");
  } else {
    console.log(num, "is an odd number");
  }
}
function isodd(num) {
  if (num % 2 != 0) {
    console.log(num, "is an odd number");
  } else {
    console.log(num, "is not an odd number");
  }
}
function prime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
    if (count == 2) {
      console.log(num, "is a prime number");
    }
  }
}
module.exports = { feven: iseven, fodd: isodd, fprime: prime };
