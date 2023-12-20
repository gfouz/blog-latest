const VerticalNavbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>Technology Blog</a>
      </div>
      <div className='flex-none'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='avatar btn btn-circle btn-ghost'>
            <div className='w-8 rounded-full'>
              <img alt='Tailwind CSS Navbar component' src='/images/logo.png' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
          >
            <li>
              <a href='https://github.com/gfouz'>Github</a>
            </li>
            <li>
              <a href='https://github.com/gfouz'>Portfolio</a>
            </li>
            <li>
              <a href='https://github.com/gfouz' className='justify-between'>
                Download
                <span className='badge'>Curriculum</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default VerticalNavbar;
