'use client';
import React from 'react';
import Image from 'next/image';
import fouz_link from '../../../public/images/logo.png';
import arrow from '../../../public/images/arrow.png';

export default function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className='flex flex-wrap py-2 bg-[#2F5268] '>
        <div className='w-full px-2 bg-[#2F5268]'>
          <nav className='relative flex flex-wrap items-center justify-between px-0.5 py-1 bg-slate-900 rounded'>
            <div className='container  mx-auto flex flex-wrap items-center justify-between'>
              <div className='w-full relative flex justify-between items-center lg:w-auto  lg:static lg:block lg:justify-start'>
                <a
                  className='flex text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
                  href='https://github.com/gfouz'
                >
                  <Image
                    className='w-[30px] h-auto mx-1'
                    src={fouz_link}
                    alt='technical-stack'
                  />
                  <span>Technology blog</span>
                </a>
                <button
                  className='btn px-6 btn-active btn-link flex items-center text-white cursor-pointer text-xl leading-none  lg:hidden '
                  type='button'
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className=''>{menuOpen ? 'close' : 'open'}</span>
                </button>
              </div>
              <div
                className={
                  'lg:flex flex-grow items-center' +
                  (menuOpen ? ' flex' : ' hidden')
                }
                id='example-navbar-info'
              >
                <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                  <li className='nav-item'>
                    <a
                      className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                      href='#pablo'
                    >
                      About
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                      href='#pablo'
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                      href='#pablo'
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

//linear-gradient(90deg, #200122 0%, #6f0000 100%)
