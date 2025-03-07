'use client'

import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <section className="relative w-full bg-black z-90">
      <nav className="fixed top-0 w-full z-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/join-the-team">
            <Image 
              src="/img/logo.svg" 
              alt="Advantage Agency" 
              width={180} 
              height={40} 
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="https://www.linkedin.com/company/advantage-agencyuk/" 
                  className="text-white/70 hover:text-red-500 transition-colors"
                  target="_blank">
              <Image src="/img/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="https://www.instagram.com/_advantage_agency_" 
                  className="text-white/70 hover:text-red-500 transition-colors"
                  target="_blank">
              <Image src="/img/instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://t.me/stepan_potichnyi" 
                  className="text-white/70 hover:text-red-500 transition-colors"
                  target="_blank">
              <Image src="/img/telegram.svg" alt="Telegram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
