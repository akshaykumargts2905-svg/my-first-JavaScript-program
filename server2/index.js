const news = require("./dataset/news");
const express = require("express");
const app = express();
const { searchbyterm, searchbycategory } = require("./module/utils");
app.get("/", (req, res) => {
  res.send("welcome to my news page");
});
app.get("/news", (req, res) => {
  const { search, category, limit } = req.query;
  let filterednews = news;
  if (search) {
    filterednews = searchbyterm(search, news);
  }
  if (category) {
    filterednews = searchbycategory(category, news);
  }
  if (limit) {
    filterednews = filterednews.slice(0, limit);
  }
  if (filterednews.length > 0) {
    return res.json(filterednews);
  } else {
    return res.json("no news found");
  }
});

app.listen(3000);
