import Link from 'next/link';
import getPosts from 'lib/get-post';
import Card from 'components/card/Card';

export default async function Posts() {
  const posts = await getPosts();
  return (
    <ul className='blog__post-list'>
      {posts.map((post) => (
        <li className='list-none' key={post.meta?.title}>
          <Link className='no-underline' href={`/post/${post?.slug}`}>
            <Card post={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
