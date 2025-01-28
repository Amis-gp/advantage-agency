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
          <a href="https://www.instagram.com/stepan_knows" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/linkedin.avif" alt="LinkedIn" width={40} height={40} />
          </a>
          <a href="https://www.instagram.com/steve_4_real/" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/instagram.avif" alt="Instagram" width={40} height={40} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006500822716&locale=uk_UA" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/facebook.avif" alt="Facebook" width={40} height={40} />
          </a>
          <a href="https://www.youtube.com/@Stepan_Knows" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/youtube.avif" alt="YouTube" width={40} height={40} />
          </a>
          <a href="https://www.tiktok.com/@steve_4_real" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/tiktok.avif" alt="TikTok" width={40} height={40} />
          </a>
        </div>

        <div className="mt-12 text-center space-y-6">
          <p className="text-lg">2025 © Copyrights by Advantage Agency. All Rights Reserved.</p>
          
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
          href="https://t.me/@stepan_potichnyi"
          className="group fixed bottom-8 right-8 z-50 transition-all duration-300"
        >
          <div className="absolute -inset-2 bg-[#0088CC] rounded-full blur-md opacity-30 animate-pulse-slow"></div>
          
          <div className="relative bg-[#0088CC] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#0077B5] transition-all duration-300 shadow-lg animate-pulse-slow">
            <Image 
              src="/img/black-affiliate-marketing/telegram.svg" 
              alt="Telegram" 
              width={24} 
              height={24} 
            />
            <span>Talk to me!</span>
          </div>
        </a>
      )}
    </footer>
  );
};

export default Footer;
