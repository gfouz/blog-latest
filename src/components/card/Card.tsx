import { PostCard } from 'types/types';

export default function Card({ post }: PostCard) {
  const _date = post.meta.date !== undefined ? post.meta.date : '';
  const date = new Date(_date).toDateString();
  return (
    <section className='rounded-xl shadow-xl w-[100%] bg-[#000000'>
      <div className='flex justify-center items-start p-4 rounded-xl text-left text-white bg-[#000000]'>
        <img
          className='w-[80px] height[60px] object-fill my-2'
          src={post.meta?.src}
          alt={post.meta?.alt}
        />

        <div className='px-2 text-[#E4DBC8] w-[100%]'>
          <h3 className='text-[18px] font-black'>{post.meta?.title}</h3>
          <p>{post.meta?.author}</p>
          <p>{date}</p>
        </div>
      </div>
    </section>
  );
}
