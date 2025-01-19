const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("ul > li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});

categories.forEach((category) => {
  category.classList.add("styled-item");

  const title = category.querySelector("h2");
  title.classList.add("styled-title");

  const items = category.querySelectorAll("ul > li");
  items.forEach((item) => {
    item.classList.add("styled-list-item");
  });

  const list = category.querySelectorAll("ul");
  list.forEach((lis) => {
    lis.classList.add("styled-list");
  });
});
