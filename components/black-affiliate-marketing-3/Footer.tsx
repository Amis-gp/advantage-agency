'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const cycleButton = () => {
      const showTimeout = setTimeout(() => {
        setShowButton(true);
      }, 8000);

      const hideTimeout = setTimeout(() => {
        setShowButton(false);
      }, 22000);

      const cycleTimeout = setTimeout(() => {
        cycleButton();
      }, 22000);

      return () => {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        clearTimeout(cycleTimeout);
      };
    };

    const cleanup = cycleButton();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <footer className="bg-black text-white">
      <div className='h-2 w-full bg-red-800'></div>
        <div className="mt-8 max-w-4xl mx-auto px-4 text-center">
          <p className="">
            Everything taught within The Black Affiliate Marketing is for education purposes only. It is up to each student to implement and do the work.
            The Black Affiliate Marketing team doesn't guarantee any profits or financial success.
          </p>
          <p className="mb-8">
            This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>

        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/company/advantage-a-uk/posts/?feedView=all" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/linkedin.avif" alt="LinkedIn" width={40} height={40} loading='lazy'/>
          </a>
          <a href="https://www.instagram.com/_advantage_agency_/" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/instagram.avif" alt="Instagram" width={40} height={40} loading='lazy'/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555001573035" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/facebook.avif" alt="Facebook" width={40} height={40} loading='lazy'/>
          </a>
        </div>

        <div className="mt-12 text-center space-y-6">
          <p className="text-lg">{new Date().getFullYear()} © Copyrights by Advantage Agency. All Rights Reserved.</p>
          
          <div className="flex justify-center gap-8">
            <a href="/privacy-policy" className="hover:text-red-500 transition-colors">Privacy Policy</a>
          </div>

          <p className="text-gray-400 pb-8">
            Design & Developed By{' '}
            <a href="https://advantage-agency.co" className="text-white hover:text-red-500 transition-colors">
              Advantage Agency
            </a>
          </p>
        </div>
      </div>

      {showButton && (
        <a 
          href="https://t.me/@Mar_ko_y"
          className="group fixed bottom-8 right-8 z-50 transition-all duration-300"
        >
          <div className="absolute -inset-2 bg-[#0088CC] rounded-full blur-md opacity-30 animate-pulse-slow"></div>
          
          <div className="relative bg-[#0088CC] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#0077B5] transition-all duration-300 shadow-lg animate-pulse-slow">
            <svg width="24" height="24" viewBox="0 0 512 512">
              <path 
                fill="white" 
                d="M369.73,153.6c-9.77,0.17-24.73,5.32-96.73,34.9c-25.23,10.35-75.65,31.77-151.23,64.3c-12.28,4.82-18.7,9.53-19.3,14.15c-1.13,8.85,11.78,11.6,28.03,16.8c13.25,4.25,31.05,9.23,40.3,9.42c8.4,0.18,17.77-3.25,28.13-10.25c70.62-47.07,107.1-70.85,109.37-71.37l5.38,0.52l1.2,4.53c-1.27,5.4-67.63,64.98-71.45,68.9l-1.82,1.83c-14.08,13.9-28.3,22.97-3.75,38.92c22.15,14.42,35.05,23.63,57.85,38.38c14.6,9.45,26.02,20.65,41.07,19.27c6.95-0.63,14.1-7.07,17.73-26.25c8.6-45.32,25.48-143.57,29.38-184.05c0.35-3.55-0.08-8.08-0.42-10.08c-0.35-2-1.08-4.82-3.7-6.92C376.65,154.1,371.85,153.57,369.73,153.6z"
              />
            </svg>
            <span>Talk to me!</span>
          </div>
        </a>
      )}
    </footer>
  );
};

export default Footer;
