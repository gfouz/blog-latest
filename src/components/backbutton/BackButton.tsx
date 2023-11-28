'use client';
import { useRouter } from 'next/navigation';

const isBrowser = () => typeof window !== 'undefined';

export default function BackButton() {
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const router = useRouter();
  return (
    <div className='fixed bottom-[2rem] right-[2rem] '>
      <button className='btn glass ' onClick={scrollToTop}>
        top
      </button>
      <button className='btn glass' onClick={() => router.replace('/')}>
        back
      </button>
    </div>
  );
}
