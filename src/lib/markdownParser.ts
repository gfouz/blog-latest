import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';

const markdownDirectory = 'src/content';

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
const markdownParser = cache(async () => {
  const allMarkdownFiles = await fs.readdir(markdownDirectory);

  return Promise.all(
    allMarkdownFiles
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `${markdownDirectory}/${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        //const slug = file.replace('.mdx', '');
        const { data: meta, content } = matter(postContent);
        return { meta, content };
      }),
  );
});

export default markdownParser;
