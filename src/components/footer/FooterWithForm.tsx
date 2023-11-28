import ContactForm from 'components/form/ContactForm';

function Footer() {
  return (
    <footer className='footer grid-footer p-10 bg-base-200 text-base-content'>
      <nav>
        <header className='footer-title'>Join me on</header>
        <a className='link link-hover' href='https://github.com/gfouz'>
          Github
        </a>
        <a className='link link-hover'>Portfolio</a>
        <a className='link link-hover'>About</a>
        <a className='link link-hover'>Contact</a>
      </nav>
      <nav>
        <header className='footer-title'>Services</header>
        <a className='link link-hover'>Branding</a>
        <a className='link link-hover'>Design</a>
        <a className='link link-hover'>Marketing</a>
        <a className='link link-hover'>Advertisement</a>
      </nav>

      <nav>
        <header className='footer-title'>Legal</header>
        <a className='link link-hover'>Terms of use</a>
        <a className='link link-hover'>Privacy policy</a>
        <a className='link link-hover'>Cookie policy</a>
      </nav>
      <ContactForm />
    </footer>
  );
}

export default Footer;
