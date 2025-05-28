"use client"

import Image from 'next/image';
import Link from 'next/link';

const MentorSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 sm:mt-16 max-w-6xl mx-auto relative">
      <div
        className="absolute -right-[30%] -top-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
        style={{ filter: 'blur(150px)' }}
      />
      <div className="relative w-4/5 md:w-full mx-auto pl-2">
        <Image 
          src="/img/black-affiliate-marketing/foto-1.webp" 
          alt="Mentor" 
          width={1080} 
          height={1616} 
          className="rounded-lg  max-h-[700px] w-auto"
          quality={100}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB"
        />
      </div>

      <div className="space-y-6 text-left flex flex-col justify-center">
        <h2 className="text-4xl font-bold">
          Meet Your <span className="underline">Growth</span> Partner
        </h2>

        <ul className="space-y-6 text-lg md:text-2xl font-bold list-disc pl-6">
          <li className="">
            <span className="text-red-600 font-bold">Over 5 years of experience in Affiliate Marketing, </span>
            <span>media buying agency marketing and performance marketing.</span>
          </li>

          <li className="">
            <span className="text-red-600 font-bold">Consulted for over 2,000 businesses worldwide </span>
            <span>on behalf of industry giants like Google and Voluum.</span>
          </li>

          <li className="">
            <span className="text-red-600 font-bold">Extensive experience worked across all big verticals : </span>
            <span>from ecommerce and nutra to igaming, crypto and search arbitrage.</span>
          </li>

          <li className="">
            <span className="text-red-600 font-bold">Successfully scaled multiple clients </span>
            <span>from a €10,000 monthly ad spend to an €1,000,000 in monthly ad spend.</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-6 mt-6 md:col-span-2">
          <a href="https://www.linkedin.com/in/stepan-potichnyi/" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/linkedin.avif" alt="LinkedIn" width={40} height={40} loading="lazy" 
              sizes="40px"
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB"
            />
          </a>
          <a href="https://www.instagram.com/stepan_knows" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/instagram.avif" alt="Instagram" width={40} height={40} loading="lazy"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006500822716&locale=uk_UA" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/facebook.avif" alt="Facebook" width={40} height={40} loading="lazy"/>
          </a>
          <a href="https://www.youtube.com/@Stepan_Knows" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/youtube.avif" alt="YouTube" width={40} height={40} loading="lazy"/>
          </a>
          <a href="https://www.tiktok.com/@steve_4_real" target="_blank" className="hover:scale-110 transition-all duration-300">
            <Image src="/img/black-affiliate-marketing/tiktok.avif" alt="TikTok" width={40} height={40} loading="lazy"/>
          </a>
        </div>
    </section>
  );
};

export default MentorSection;
