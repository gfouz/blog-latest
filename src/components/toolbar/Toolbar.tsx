'use client';
import React from 'react';
import Link from 'next/link';

function Toolbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between bg-slate-900 px-2 py-3'>
        <div className='container mx-auto flex flex-wrap items-center justify-between px-4'>
          <div className='relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start'>
            <a
              className='mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white'
              href='#pablo'
            >
              fouzJs portfolio
            </a>
            <button
              className='block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              navbarOpen
            </button>
          </div>
          <div
            className={
              'flex-grow items-center lg:flex' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex list-none flex-col lg:ml-auto lg:flex-row'>
              <li className='nav-item'>
                <a
                  className='flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75'
                  href='#pablo'
                >
                  <i className='fab fa-facebook-square leading-lg text-lg text-white opacity-75'></i>
                  <span className='ml-2'>Share</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75'
                  href='#pablo'
                >
                  <i className='fab fa-twitter leading-lg text-lg text-white opacity-75'></i>
                  <span className='ml-2'>Tweet</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75'
                  href='#pablo'
                >
                  <i className='fab fa-pinterest leading-lg text-lg text-white opacity-75'></i>
                  <span className='ml-2'>Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Toolbar;
