import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      // Customize AOS settings here
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return <div className='w-full'>{children}</div>;
};

export default Layout;
