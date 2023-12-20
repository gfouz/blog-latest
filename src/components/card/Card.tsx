import { PostCard } from 'types/types';

export default function Card({ post }: PostCard) {
  const _date = post.meta.date !== undefined ? post.meta.date : '';
  const date = new Date(_date).toDateString();
  return (
    <section className='w-[100%] rounded-xl '>
      <div className='flex items-start justify-center rounded-xl  p-4 text-left border border-[#444444] hover:bg-[#222222]'>
        <img
          className='height[60px] my-2 w-[80px] object-fill'
          src={post.meta?.src}
          alt={post.meta?.alt}
        />

        <div className='w-[100%] px-2 text-[#E4DBC8]'>
          <h3 className='text-[18px] font-black'>{post.meta?.title}</h3>
          <p>{post.meta?.author}</p>
          <p>{date}</p>
        </div>
      </div>
    </section>
  );
}
