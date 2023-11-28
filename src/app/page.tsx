//@ts-nocheck
import localFont from 'next/font/local';
import Image from 'next/image';
import Posts from 'components/posts/Posts';
import primary_image from '../../public/images/welcome.jpg';
import PhoneIcon from 'components/icons/PhoneIcon';
import MarkdownToHtml from 'components/markdowntohtml/MarkdownToHtml';
import Menu from 'components/menu/Menu';
import Footer from 'components/footer/FooterWithForm';
import fouz_link from '../../public/images/logo.png';
import final_words from '../../public/images/finalwords.jpg';


export default async function Blog() {
  return (
    <main className='bg-[#110D0C]'>
      <Menu />
      <Image
        className='responsive-img'
        src={primary_image}
        alt='blog-background'
      />
      <article className='flex justify-center text-[#f9e9ac] text-justify px-4 py-[2rem]'>
        <MarkdownToHtml
          className='markdown'
          title='welcome-words'
        />
      </article>
      <Image
        className='w-[80px] h-auto mx-auto my-4'
        src={fouz_link}
        alt='technical-stack'
      />
      <h1>Published Posts</h1>
      <article className='p-3 py-[2rem]'>
        <Posts />
      </article>
      <article className='md:flex'>
      <section className='flex-1'>
        <Image
        className='responsive-img '
        src={final_words}
        alt='final_words'
      />
      </section>
          
      <section  className='flex-1 p-3 text-left text-[#f9e9ac]'>
        <MarkdownToHtml
          className='markdown'
          title='welcome-words'
        />
      <div className='flex justify-center items-center'>
        <Image
        className='w-[80px] h-auto mx-auto my-4'
        src={fouz_link}
        alt='technical-stack'
      />
      </div>
      </section>
      
      
       </article>
      <Footer />
    </main>
  );
}


// Thank you so much for being interested in my work and the creation of my blog, it means so much to me!