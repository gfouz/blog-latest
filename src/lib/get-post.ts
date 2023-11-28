import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';
import fsx from 'fs';
import { createModuleResolutionCache } from 'typescript';

const postsDirectory = 'src/posts';

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
const getPosts = cache(async () => {
  const posts = await fs.readdir(postsDirectory);

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `${postsDirectory}/${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        const slug = file.replace('.mdx', '');

        const { data: meta, content } = matter(postContent);

        return { meta, content, slug };
      }),
  );
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
export async function getPostnames() {
  const posts = await getPosts();
  return posts.map((post) => post.slug);
}
export default getPosts;

/*Usage:
const posts = await getPosts()
const post = await getPost('my-post')*/
