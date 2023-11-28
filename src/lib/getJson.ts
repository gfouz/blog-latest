const fs = require('fs/promises');

//const postsDirectory = 'src/posts';

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export async function getJson() {
  const file = await fs.readFile('src/data/technologyNews.json', 'utf8');
  const data = JSON.parse(file);
  return data;
}
