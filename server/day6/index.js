function findTM(n1, n2, n3) {
  return n1 + n2 + n3;
}
const a = {
  mark: { eng: 80, math: 90, phy: 80, chem: 90 },
  name: "Akshay",
  roll: 1,
  class: "12th",
  findtotalmarks: findTM,
};

console.log(a.name);
const totalmarks = a.findtotalmarks(a.mark.eng, a.mark.math, a.mark.phy);
console.log("Total Mark is ", totalmarks);
