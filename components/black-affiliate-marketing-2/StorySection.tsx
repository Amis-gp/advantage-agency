"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StorySection = () => {
  return (
    <section className="space-y-12 mt-20 max-w-6xl mx-auto">
      {/* First Part */}
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-[120%] space-y-8 text-left text-lg order-2 md:order-1 flex flex-col justify-center">
          <p>
            I come from humble beginnings — the oldest of four kids in a Ukrainian village, where hard work wasn't a choice, it was survival. With no safety nets, I took on the <span className="text-red-600 font-bold">responsibility of supporting my family</span> and working toward retiring my parents.
          </p>
          <p>
            I moved to Poland to study, while grinding through low-paying, physical jobs — kitchens, McDonald's, construction, supermarkets — whatever kept the lights on. At one point, I was <span className="font-bold">juggling two jobs and university</span>, living a disciplined, ascetic life focused on growth, learning, and <span className="text-red-600 font-bold">breaking the cycle</span>. 📚
          </p>
        </div>

        <div className="mx-auto order-1 md:order-2">
          <Image 
            src="/img/black-affiliate-marketing/foto-2.avif" 
            alt="Personal photo" 
            width={500} 
            height={700} 
            className="rounded-lg object-cover max-w-[330px] max-h-[400px]"
            loading="lazy"
            quality={90}
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB"
          />
        </div>
      </div>

      {/* Second Part */}
      <div className="flex flex-col md:flex-row gap-12 relative">
        <div
          className="absolute -left-[30%] -top-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
          style={{ filter: 'blur(150px)' }}
        />
        <div className="w-4/5 md:w-full mx-auto md:my-auto">
          <Image 
            src="/img/black-affiliate-marketing/foto-3.webp" 
            alt="Personal photo" 
            width={500} 
            height={700} 
            className="rounded-lg object-cover max-h-[650px]"
            loading="lazy"
            quality={90}
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <div className="md:w-[120%] space-y-8 text-left text-lg flex flex-col justify-center">
          <p>
            My break came when I landed a role at Google — <span className="text-red-600 font-bold">beating out over 50 candidates</span>. I'll share the full story on YouTube one day, but it started with pure hunger and zero excuses.
          </p>
          <p>
            Soon, I was presenting to crowds of 200+, winning company-wide pitch competitions in front of the top Googlers from Dublin. I <span className="font-bold">won twice out of two appearances</span> — and earned a reputation as one of the top performers in the office.
          </p>
          <p>
            At the time, €1,500/month felt like a fortune, especially in Poland, where the average was €700. But it still wasn't freedom. I lived in a cramped apartment with six others, didn't eat out, didn't buy clothes — just <span className="text-red-600 font-bold">saved like a machine</span>. I managed to put away €10,000 in seven months at age 21.
          </p>
          <p>
            Then I lost all of it — testing 10 e-commerce projects that flopped. That pain taught me more than any win ever could. As a foreigner in Poland, I faced discrimination and exclusion. No one rolled out a red carpet. But that only made me <span className="font-bold">more determined to carve my own path</span> — by any means necessary.
          </p>
        </div>
      </div>

      {/* Third Part */}
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-[120%] space-y-8 text-left text-lg order-2 md:order-1 flex flex-col justify-center">
          <p>
            After Google, I went all-in on freelancing — running Google Ads, building websites, and helping small businesses go digital. It was just me, grinding <span className="text-red-600 font-bold">9 AM to 9 PM, every day</span>. No team, no safety net — just hustle and referrals.
          </p>
          <p>
            Six months in, I hit a wall. Freelancing wasn't stable, and the income (€1.5k–€2k/month) wasn't enough for the life I wanted. So I made a move — rented a shared flat, and spent an entire month doing nothing but job interviews. <span className="font-bold">27 of them</span>, to be exact.
          </p>
          <p>
            The result? I landed <span className="text-red-600 font-bold">two high-pressure corporate roles at once</span> — Voluum and BenefitHub — both in SaaS sales. You can verify that on my <Link href="https://www.linkedin.com/in/stepan-potichnyi/" target="_blank" className="text-blue-500 font-bold">LinkedIn profile</Link>. For nearly three years, I carried the revenue of two tech companies on my back. No weekends. No balance. Just pure output. My income jumped to €3k–€4k/month. I finally started saving — but my health, energy, and freedom were running low.
          </p>
        </div>

        <div className="w-4/5 mx-auto order-1 md:order-2 md:my-auto">
          <Image 
            src="/img/black-affiliate-marketing/foto-4.avif" 
            alt="Personal photo" 
            width={500} 
            height={700} 
            className="rounded-lg object-cover"
            loading="lazy"
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
      </div>

      {/* Fourth Part */}
      <div className="flex flex-col md:flex-row gap-12 relative">
        <div
          className="absolute -right-[30%] -top-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
          style={{ filter: 'blur(150px)' }}
        />
        <div className="w-4/5 md:w-full mx-auto md:my-auto">
          <Image 
            src="/img/black-affiliate-marketing/foto-5.webp" 
            alt="Personal photo" 
            width={500} 
            height={700} 
            className="rounded-lg object-cover"
            loading="lazy"
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <div className="md:w-[120%] space-y-8 text-left text-lg flex flex-col justify-center">
          <p>
            In February 2022, war broke out in my homeland. Russia invaded Ukraine. My family was in danger, missiles were flying, and everything I thought mattered suddenly didn't. That moment hit hard — I realized that the life I had built wasn't enough. I needed to create <span className="text-red-600 font-bold">real freedom</span>.
          </p>
          <p>
            So I went all-in. I started donating to our army and investing €2,000–€3,000/month into affiliate marketing. At first, I lost money. A lot. I was doing it the "standard" way — and failing. So I went dark. <span className="font-bold">Locked in. Spent months testing, studying, building</span>. Sleepless nights, no weekends, just work. Eventually, I <span className="text-red-600 font-bold">cracked the code</span>.
          </p>
          <p>
            Everything changed. Over the next six months, I pulled nearly <span className="text-red-600 font-bold">€400,000 in net profit</span>. I bought my dream car, traveled across Europe — Ibiza, Marbella, Positano, Amsterdam, London, Berlin. I quit both jobs. For the first time ever, I had full control of my time and income.
          </p>
          <p>
            That success led to my agency — <span className="font-bold">ADvantage</span> 
            <Link href="https://advantage-agency.co" target="_blank" className="text-blue-500 font-bold"> (here's the link)</Link> —
            and now, this course. I'm not here to sell dreams. I'm here to show you the path, and if you're serious, even offer you a seat at the table. My <span className="text-red-600 font-bold">top students now earn up to €5,000/month</span> working with us. This is just a part of my story. Nothing about it was easy. But if I did it — so can you. And I'll show you how.
          </p>
        </div>
      </div>

      <div className="animate-bounce pt-8">
        <Link href="/black-affiliate-marketing-2/form" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
          SECURE YOUR SPOT NOW
        </Link>
      </div>
    </section>
  );
};

export default StorySection;
