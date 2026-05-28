const news = require("./DATASET/news");
//console.log(news);
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("welcome to my news page");
});
app.get("/news", (req, res) => {
  console.log(req.query);
  const limit = req.query.limit;
  const category = req.query.category;
  if (limit) {
    return res.json(news.slice(0, limit));
  } else if (category) {
    const finalnews = [];
    for (let i = 0; i < news.length; i++) {
      if (news[i].category == category) {
        finalnews.push(news[i]);
      }
    }
    return res.json(finalnews);
  } else {
    return res.json(news);
  }
  // return res.json(`only ${limit} news sent`);
});

// dinamicroute
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < news.length; i++) {
    if (news[i].id == id) {
      return res.json(news[i].news);
    }
  }
  return res.json("news not found");
});
app.listen(3000, () => {
  //console.log("server is running on localhost:3000");
});
