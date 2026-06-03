// const iseven = require("./module/iseven");
// iseven(4);
// const isodd = require("./module/isodd");
// isodd(5);
// const prime = require("./module/prime");
// prime(7);
// const M = require("./module/all");
// M.feven(16);
// M.fodd(17);
// M.fprime(19);
const http = require("http");
const server = http.createServer((req, res) => {
  res.write("i am a full stack developer");
  res.end();
});
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
