'use client';
import ContactForm from './ContactForm';


function Footer() {
  return (
    <footer className='footer bg-base-200 p-10 text-base-content' data-theme='coffee'>
      <nav>
        <header className='footer-title'>Join me on</header>
        <a className='link-hover link' href='https://github.com/gfouz'>
          Github
        </a>
        <a href='https://dev.to/gfouz' className='link-hover link'>DEV TO</a>
        <a href='https://fouz-dev.vercel.app' className='link-hover link'>Portfolio</a>
        <a className='link-hover link'>About</a>
      </nav>

      <ContactForm />
    </footer>
  );
}

export default Footer;
