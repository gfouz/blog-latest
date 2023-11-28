'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PostList } from 'types/types';

export default function Postlink({ posts }: PostList) {
  const pathname = usePathname();
  const currentPath = pathname.slice(6);
  return (
    <ul className='text-left'>
      {posts.map((post) => (
        <li className='list-none' key={post.meta?.title}>
          <Link
            className={
              post?.slug === currentPath
                ? 'post-link text-indigo-600 '
                : 'post-link text-slate-500'
            }
            href={`/post/${post?.slug}`}
          >
            {post?.meta?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
