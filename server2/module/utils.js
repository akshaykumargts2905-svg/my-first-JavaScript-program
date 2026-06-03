function searchbyterm(term, news) {
  const filterednews = [];
  for (let i = 0; i < news.length; i++) {
    if (news[i].news.toLowerCase().includes(term.toLowerCase())) {
      filterednews.push(news[i]);
    }
  }
  return filterednews;
}
function searchbycategory(category, news) {
  const filterednews = [];
  for (let i = 0; i < news.length; i++) {
    if (news[i].category.toLowerCase().includes(category.toLowerCase())) {
      filterednews.push(news[i]);
    }
  }
  return filterednews;
}
module.exports = { searchbyterm, searchbycategory };
