//@ts-nocheck
import localFont from 'next/font/local';
import Image from 'next/image';
import Posts from 'components/posts/Posts';
import primary_image from '../../public/images/welcome.jpg';
import PhoneIcon from 'components/icons/PhoneIcon';
import MarkdownToHtml from 'components/markdowntohtml/MarkdownToHtml';
import Menu from 'components/menu/Menu';
import Footer from 'components/footer/Footer';
import fouz_link from '../../public/images/logo.png';
import join_me from '../../public/images/join-me.jpg';
import HamburgerMenu from 'components/menu/HamburgerMenu';
import FouzLogo from 'logo/FouzLogo'


export default async function Blog() {
  return (
    <main className='' data-theme='dracula'>
      <HamburgerMenu />
      <Image
        className='responsive-img'
        src={primary_image}
        alt='blog-background'
      />
      <article className='flex justify-center px-4 py-[2rem] text-justify'>
        <MarkdownToHtml className='markdown' title='welcome-words' />
      </article>
      <div className='flex items-center justify-center py-12'>
        <a 
              data-tip='Join me on Github!'
              className='tooltip tooltip-bottom tooltip-warning' 
              href='https://github.com/gfouz'>
            <FouzLogo size='50' color='#FF79C6' />
            </a>
      </div>
      <h1 className='font-black my-[1em]'>Published Posts</h1>
      <article className='p-3 py-[2rem]'>
        <Posts />
      </article>
      <article className='md:flex'>
        <section className='flex-1'>
          <Image
            className='w-[100%] h-[100%] object-fill'
            src={join_me}
            alt='join me'
          />
        </section>

        <section className='flex-1 p-3 text-left'>
          <MarkdownToHtml className='markdown' title='welcome-words' />
        </section>
      </article>
      <Footer />
    </main>
  );
}

// Thank you so much for being interested in my work and the creation of my blog, it means so much to me!
