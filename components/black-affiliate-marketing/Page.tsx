import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlackAffiliateMarketing() {
  return (
    <div className="min-h-screen bg-black text-white text-center px-4 py-16 overflow-hidden font-sans relative">

      <div 
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
        style={{ filter: 'blur(150px)' }}
      />
      
      <main className="max-w-6xl mx-auto relative z-10">

        <section className="">
          <h2 className="text-2xl uppercase tracking-wider">
          CRACK THE CODE OF BLACK AFFILIATE MARKETING
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
          Master Algorithm-Busting Strategies to Rule{' '}
          <span className="underline">The Market Unopposed!</span>
          </h1>

          <div className="text-2xl md:text-3xl mt-8">
          Enroll Today and{' '}
          <span className="text-red-600">
              Transform into a Marketing Specialist with Endless Opportunities
          </span>{' '}
          in the Modern Digital World
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8">
          Elevate Your Future: Master a Skill for Endless Earnings, Be Your Own Boss, or Join Forces with Fellow Hustlers from Our Course to 4X Your Income
          </p>

          <div className="mx-auto h-[360px] mt-8">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/PeUYZkd1KhU?si=4IKhZ4t5Jv0-leTR" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen={true} 
              className="mx-auto"
            />
          </div>

          <div className="mt-8 animate-bounce">
            <Link href="/black-affiliate-marketing/quiz" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
              SECURE YOUR SPOT NOW
            </Link>
          </div>
        </section>

        {/* Who is this course for? */}
        <section className="space-y-14 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-28 h-28 mx-auto">
                  <Image src="/img/black-affiliate-marketing/1.avif" alt="1" width={100} height={100} priority/>
              </div>
              <p className="">
              This course is for those who are fed up with their current life, and{' '}
              <span className="text-red-600">current 9-5 job</span> and want to make a change!
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-28 h-28 mx-auto">
              <Image src="/img/black-affiliate-marketing/2.png" alt="2" width={100} height={100} priority/>
              </div>
              <p className="">
              For those who are looking for a way to have an{' '}
              <span className="text-red-600">online income, which is not depended</span> on anything else but your skills, which I'm going to teach you in this course.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-28 h-28 mx-auto">
                  <Image src="/img/black-affiliate-marketing/3.avif" alt="3" width={100} height={100} priority/>
              </div>
              <p className="">
              For students, looking for additional streams of income, and start to live on their own terms,{' '}
              <span className="text-red-600">not depended on a job, boss, economical circumstances</span>, or parents.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-28 h-28 mx-auto">
              <Image src="/img/black-affiliate-marketing/4.avif" alt="4" width={100} height={100} priority/>
              </div>
              <p className="">
              For anyone who wants to establish their business, passive income, and turn it into an agency to run ads for the clients.{' '}
              <span className="text-red-600">The methods introduced in this course on by passing algorithms will pay</span>{' '}
              you off forever in the digital marketing world.
              </p>
            </div>
          </div>
          <div className="mt-20 space-y-10">
            <h2 className="text-3xl font-bold">
                Get free samples of pre-landers, ads and traffic sources!
            </h2>
            <div className="animate-bounce">
              <Link href="/black-affiliate-marketing/quiz" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
                TAKE A QUIZ NOW
              </Link>
            </div>
          </div>
        </section>

        {/* Who Am I Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 max-w-6xl mx-auto relative">
          <div
            className="absolute -right-[30%] -top-[30%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-red-600/30 blur-[150px] -z-10"
            style={{ filter: 'blur(150px)' }}
          />
          <div className="relative w-4/5 md:w-full mx-auto pl-2">
            <Image 
              src="/img/black-affiliate-marketing/foto-1.webp" 
              alt="Mentor" 
              width={500} 
              height={700} 
              className="rounded-lg object-cover"
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEB"
            />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-4xl font-bold">
              Who Am I <span className="underline">To Teach You?</span>
            </h2>

            <ul className="space-y-6 text-lg md:text-2xl font-bold list-disc pl-6">
              <li className="">
                <span className="text-red-600 font-bold">Over 5 years of experience in Affiliate Marketing, </span>
                <span>media buying agency marketing and performance marketing.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Consulted for over 2,000 businesses worldwide</span>
                <span>on behalf of industry giants like Google and Volume.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Extensive experience working</span>
                <span>with a diverse range of industries, from logistics and restaurants to IT and cutting-edge Web 3.0 projects.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Successfully scaled multiple clients</span>
                <span>from a $10,000 monthly ad spend to an $1,000,000 in monthly ad spend.</span>
              </li>

              <li className="">
                <span className="text-red-600 font-bold">Delivered more than 10 comprehensive</span>
                <span>Marketing Courses to empower professionals in the field.</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-6 mt-6 md:col-span-2">
              <a href="https://www.linkedin.com/in/stepan-potichnyi/" target="_blank" className="hover:scale-110 transition-all duration-300">
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
        </section>

        {/* Story Section */}
        <section className="space-y-12 mt-20 max-w-6xl mx-auto">
          {/* First Part */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[120%] space-y-8 text-left text-lg order-2 md:order-1">
              <p>
                "I hail from very humble beginnings, a life marked by relentless hard work 💪. There were no safety nets; I had to rely <span className="font-bold">solely on my own efforts</span>. My family, with four children, including me as the eldest, was always facing financial constraints, making it necessary for me to take on the <span className="text-red-600 font-bold">responsibility of supporting my siblings and retiring my parents</span> so they don't have to work so hard anymore. My journey took me from a small village in Ukraine to pursuing studies in Poland 🌍, all while juggling a series of low-paying, physically demanding jobs to make ends meet.
              </p>
              <p>
                These jobs ranged from working in kitchens, at McDonald's, in supermarkets, and in construction - any work that involved manual labor 🏗️. It was my only means of earning a meager income, and it still barely covered my modest bills. To make it all work, I often had to <span className="font-bold">juggle two jobs while attending university</span>. My life felt ascetic, dedicated to learning, completing various courses, and an <span className="text-red-600 font-bold">unending pursuit of self-improvement</span>. 📚
              </p>
            </div>

            <div className="w-4/5 mx-auto order-1 md:order-2 md:-mt-6">
              <Image 
                src="/img/black-affiliate-marketing/foto-2.avif" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                className="rounded-lg object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="md:w-[120%] space-y-8 text-left text-lg">
              <p>
                "My journey at Google marked the <span className="font-bold">beginning of my career as a digital marketer</span> 🚀. The story of how I secured this opportunity, the desperation that fueled my efforts, and how I managed to <span className="text-red-600 font-bold">stand out among 50 other candidates</span> is an incredible tale. Perhaps, I'll share it on my YouTube channel someday.
              </p>
              <p>
                The second photo captures a moment from a presentation I delivered to an audience of 200+ people 🎯. Googlers from the Dublin office had come to Poland for a 'pitch-off' event where I competed with five other top performers. I <span className="font-bold">proudly won this contest twice</span> out of 2 participations. Working for Google was a <span className="text-red-600 font-bold">significant achievement</span>, and I established myself as one of the best employees there. 🏆
              </p>
              <p>
                Back then, I thought I was earning a fortune. It was certainly an improvement from the less satisfying jobs, but it was still a far cry from my ultimate goals. Keep in mind, it is Poland, where the average salary was around $700 per month. I was earning <span className="font-bold">$1,500 per month</span> 💰, which was considered a substantial income. Saving was still challenging, but I managed to save $900 or $1k - don't ask me how I did it. I lived with six other people in a cramped room, and my ability to save was a result of <span className="text-red-600 font-bold">frugality</span>. I never dined out with friends, refrained from buying clothes or anything else, and essentially lived a minimalist lifestyle. It wasn't living; it was surviving. 🌱
              </p>
              <p>
                In the midst of it all, I embarked on the creation of <span className="font-bold">ten different e-commerce websites</span> to test various concepts 💻. However, I ended up losing all the money I had saved - a total of $10,000. In Poland, people might amass such savings after two or 3 years of work on a good job and if they save at least $500 per month, while earning $700, but I achieved it in just <span className="text-red-600 font-bold">seven months, at the age of 21</span>. It's important to note that as I'm an immigrant here, many times I faced discrimination due to my nationality. No one welcomed me here in Poland, rather the opposite. 💪
              </p>
            </div>
          </div>

          {/* Third Part */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-[120%] space-y-8 text-left text-lg order-2 md:order-1">
              <p>
                "After leaving Google, I ventured into freelancing, managing Google ads for clients, website development, and assisting businesses with their digital transformation 💼. It had its upsides - I had <span className="font-bold">many clients from word of mouth</span>. However, I was a one-person show, working tirelessly throughout the day, without the confines of a traditional 9-5 schedule. It was more like a <span className="text-red-600 font-bold">9 am to 9 pm routine</span>. 
              </p>
              <p>
                Around the six-month mark, I recognized the need for change. Freelancing wasn't providing the stability I desired, and the income was far from substantial, averaging between $1,500 to $2,000 💰. I decided to rent a room in a shared flat with 3 other people, a significant improvement from my previous situation. Subsequently, I dedicated an entire month to a <span className="font-bold">relentless job hunt, participating in over 27 job interviews</span> 🎯. I received numerous offers and chose to take on <span className="text-red-600 font-bold">two demanding corporate sales positions</span> ( Voluum and BenefitHub ), you can verify it on my <Link href="https://www.linkedin.com/in/stepan-potichnyi/" target="_blank" className="text-blue-500 font-bold">LinkedIn profile</Link>.
              </p>
              <p>
                Reflecting on that period, it was nothing short of a whirlwind 🌪️. Each day was filled with stress, as I bore the responsibility for the revenue in two IT SaaS companies. I sustained this lifestyle for <span className="font-bold">nearly three years</span>, which took a toll on my health, and life became synonymous with work. I had no days off, along with multiple side projects and tests conducted during my spare time. However, the income improved to a range of <span className="text-red-600 font-bold">$3,000 to $4,000 per month</span> from both jobs, and I managed to save. 💪
              </p>
            </div>

            <div className="w-4/5 mx-auto order-1 md:order-2 md:my-auto">
              <Image 
                src="/img/black-affiliate-marketing/foto-4.avif" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                src="/img/black-affiliate-marketing/foto-5.avif" 
                alt="Personal photo" 
                width={500} 
                height={700} 
                className="rounded-lg object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC0zLysvMy0/RD49QzQ3REVPS1NUV1pjZGR2foGDhY6NzaGur7L/2wBDARUXFx4aHR4eHbIuIi6ysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="md:w-[120%] space-y-8 text-left text-lg">
              <p>
                "In February 2022, a war broke out in my homeland, russia invaded. My family and loved ones were in danger, and the threat of missiles reaching anywhere in Ukraine persisted until today. This was the <span className="text-red-600 font-bold">turning point</span> that made me realize my current efforts were insufficient. 🔄 In addition to making donations to our army, I began investing $2,000 to $3,000 per month in online advertising, specifically affiliate marketing.
              </p>
              <p>
                I faced significant losses initially, but I soon realized I was approaching things the wrong way. With the budget I had, it seemed almost impossible to achieve profitability through conventional methods. So, I embarked on a journey of months, <span className="font-bold">sleepless nights, and weekends, tirelessly searching for answers</span>. Finally, I <span className="text-red-600 font-bold">cracked the code</span>. 🔑
              </p>
              <p>
                Since then, my life transformed into what you might see on Instagram - the 'high life,' as they call it. I generated nearly <span className="text-red-600 font-bold">$400,000 in net profit</span> 🎯, bought my dream car, customized it to my liking, and traveled to destinations like Ibiza, Mallorca, Marbella ( Spain ) then Portugal, Positano, Italy, and Croatia. Got tired of the sea and went to London many times, Amsterdam, Paris, Berlin and this all in just <span className="font-bold">6 months</span>. I enjoyed a life I never thought possible. Finally I quit my jobs, it felt so good. 🌟
              </p>
              <p>
                Subsequently, I established a digital marketing agency, <span className="font-bold">ADvantage</span> 
                <Link href="https://advantage-agency.co" target="_blank" className="text-blue-500 font-bold"> (here's the link)</Link>.
                I now have a team, and we're in the process of expanding. This journey led me to create a course where I aim not only to share my secrets and help others make money online but also to provide an opportunity to join my team. The <span className="text-red-600 font-bold">best-performing students from my course have the chance to earn $5,000</span>. So don't hesitate. This is a short part of my story, just to give you my background and to show that it wasn't easy at all. But if I made it, I'm totally confident that anyone can do it, and I am here to help. 💪
              </p>
            </div>
          </div>

          <div className="!mt-16 animate-bounce">
            <Link href="/black-affiliate-marketing/quiz" className="bg-red-800 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 uppercase">
              SECURE YOUR SPOT NOW
            </Link>
          </div>
        </section>


      </main>
    </div>
  );
}
