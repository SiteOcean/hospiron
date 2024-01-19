import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()
  const timer = useRef(null);
  const handleNav=()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenuOnBlur = () => {
    timer.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 300); 
  }

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolling(scrollPosition > 600); // Set the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full duration-700 bg-white text-[#a33cc2] sticky top-0 z-50 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-2 p-1 sm:p-0 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between min-h-[60px] ">
          <div className="flex-1  flex flex-col px-5 md:px-1 sm:flex-row md:items-center relative justify-between sm:items-stretch ">
            
            {/* icon */}
            <div  className="sm:hidden flex-shrink-0 absolute top-1 right-5 ">
            
           <button onClick={handleNav}  onBlur={closeMenuOnBlur} className='relative duration-300 text-[#a33cc2]'>
           <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isMenuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
           </button>
            </div>

            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-[23px] sm:hover:text-[#d366f5] tracking-widest font-serif text-[#b341d6] font-bold">Hospiron</span>
              </Link>
            </div>

            <div id='nav' className="hidden sm:block sm:ml-6 text-[#b341d6]">
              <div className="flex flex-col justify-around md:space-x-5 min-h-[150px]
               sm:min-h-0 sm:flex-row text-[19px] font-serif">
              <Link href="/">
                  <span style={{fontWeight:router.pathname === "/" ? "bold" : "normal"}} className={`  md:sm:hover:bg-[#a33cc2] duration-300 sm:hover:text-white px-3 py-2 rounded-md 
                   text-[#b341d6]`}>Home</span>
                </Link>
                <Link href="/app/about">
                  <span style={{fontWeight:router.pathname === "/app/about" ? "bold" : "normal"}} className={`  md:sm:hover:bg-[#a33cc2] duration-300 sm:hover:text-white px-3 py-2 rounded-md 
                   text-[#b341d6]`}>About</span>
                </Link>
                <Link href="/app/contact">
                  <span style={{fontWeight:router.pathname === "/app/contact" ? "bold" : "normal"}} className={` md:sm:hover:bg-[#a33cc2] duration-300 sm:hover:text-white px-3 py-2 rounded-md 
                   text-[#b341d6]`}>Contact</span>
                </Link>
              </div>
            </div>
         

            {isMenuOpen ? <div id='nav' className={`md:hidden border-t fixed transform-gpu transition-all text-center opacity-95 -z-10 left-0 min-h-[200px] font-bold right-0 py-3 duration-500 bg-white ${isMenuOpen ? "translate-y-14 top-2" : "translate-y-12 -top-[250px]"}`}>

              <div className="flex flex-col space-y-6 font-serif">
              <Link href="/" className=''>
              <span style={{fontWeight:router.pathname === "/" ? "bold" : "normal"}} className={` sm:hover:bg-[#a33cc2] sm:hover:text-white px-3 py-2 rounded-md 
                   text-[#b341d6]`}>Home</span>
                </Link>
                <Link href="/app/about">
                <span style={{fontWeight:router.pathname === "/app/about" ? "bold" : "normal"}} className={` sm:hover:bg-[#a33cc2] sm:hover:text-white px-3 py-2 rounded-md 
                   text-[#a33cc2]`}>About</span>
                 </Link>
                <Link href="/app/contact">
                <span style={{fontWeight:router.pathname === "/app/contact" ? "bold" : "normal"}} className={` sm:hover:bg-[#a33cc2] sm:hover:text-white px-3 py-2 rounded-md 
                   text-[#b341d6]`}>Contact</span>
                </Link>
              </div>
            </div> : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
