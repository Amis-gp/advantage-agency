    "use client"

    import { NextPage } from 'next';
    import { useEffect } from 'react';
    import Image from 'next/image';
    import '@/app/styles.css'
    import MessengerButton from '@/components/cases/MessengerButton';
    import Formspree from '@/components/cases/Formspree';
    import CasesFooter from '@/components/cases/Footer';
    import LanguageSwitcher from '@/components/cases/LanguageSwitcher';

    const V14Page: NextPage = () => {
      useEffect(() => {
        document.title = "10,739 Emails for Crypto Project | Case Study";
      }, []);
    return (    
      <div className="text-black bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <LanguageSwitcher />
        <section className="mt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
              Case Study: How We Achieved <span className='highlight highlight-red-300 highlight-variant-5'>5% Reply Rate</span> 🎯 
              in Crypto Niches for Justin through Cold Email ✨
          </h1>

          <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Background 🚀
              </h2>
              <p className="mb-4 text-xl leading-relaxed text-gray-800">
                  Justin came to us with a request to test different offers in the crypto niche through Cold Email. The cryptocurrency market is challenging, with high competition, skepticism, and a significant percentage of emails ending up in spam. Therefore, our task was not just to do mass mailing, but to find an effective approach that would bring responses and leads.
              </p>
              
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold mb-4 mt-8">💡 Goal:</h3>
                <ul className="space-y-2 text-xl leading-relaxed text-gray-800">
                  <li>✔️ Test 10,000 emails</li>
                  <li>✔️ Find perfect offers for crypto audience</li>
                  <li>✔️ Test different copywriting techniques</li>
                  <li>✔️ Research effectiveness of different Subject lines</li>
                  <li>✔️ Increase reply rate to 5%</li>
                </ul>
              </div>
              <div className="relative h-[300px]">
                <Image 
                  src="/img/v14/hero.webp"
                  alt="Email Marketing Challenges"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
      </section>

      <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
              Get Free Consultation Now
          </a>
      </div>

      <section className="mb-16">
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-10 text-center">
              Why Was This a Challenge? 🤔
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-xl font-bold">Hard to Reach Inbox</h3>
                </div>
                <p className="text-gray-700">
                  Crypto niche is under special control of email services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💡</span>
                  <h3 className="text-xl font-bold">Right Offer</h3>
                </div>
                <p className="text-gray-700">
                  Most offers are ignored or perceived as spam.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🤝</span>
                  <h3 className="text-xl font-bold">Trust</h3>
                </div>
                <p className="text-gray-700">
                  Few offers in the market that inspire user trust
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">⚔️</span>
                      <h3 className="text-xl font-bold">Competition</h3>
                  </div>
                  <p className="text-gray-700">
                      Companies compete for every potential client's attention.
                  </p>
              </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center">
            How Did We Solve It? 🎯
          </h2>

          <p className="text-xl text-gray-700 mb-8">
            Instead of a standard approach, we developed a strategic plan that included:
          </p>

          <h3 className="text-2xl font-bold mb-4">
            1. Creating a Unique Lead Database
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Instead of buying ready-made lists, we scraped the database ourselves using our internal tool. 
            This allowed us to get relevant leads from verified sources, 
            rather than random people who have no interest in our offers.
          </p>
          <div className="flex gap-3">
            <span className="text-green-600 text-xl">✓</span>
            <p className="text-lg text-gray-700">Verified email validity – removed invalid addresses, reducing bounce rate.</p>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
              Get Free Consultation Now
          </a>
      </div>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">
          2. Launch 10,000 emails with different sequences
        </h2>

        <p className="text-xl mb-8">
          To find the most effective approach, we created several sequences (chains of emails), in which we tested:
        </p>

        <div className="space-y-6 mb-10">
          <div className="flex items-start gap-4 p-6 border-l-4 border-blue-400 bg-blue-50">
            <span className="text-blue-600 text-2xl">🔹</span>
            <div>
              <p className="text-lg font-medium">
                Different copywriting styles
              </p>
              <p className="text-gray-600 mt-2">
                direct, intriguing, emotional, case-oriented
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 border-l-4 border-blue-400 bg-blue-50">
            <span className="text-blue-600 text-2xl">🔹</span>
            <div>
              <p className="text-lg font-medium">
                Different CTA
              </p>
              <p className="text-gray-600 mt-2">
                call, get additional information, offer a test version
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 border-l-4 border-blue-400 bg-blue-50">
            <span className="text-blue-600 text-2xl">🔹</span>
            <div>
              <p className="text-lg font-medium">
                Different email themes (Subject line)
              </p>
              <p className="text-gray-600 mt-2">
                tested 30 variants
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-100 pt-6">
          <p className="text-lg font-medium mb-2">
            We found that the most effective were intriguing headlines that caught attention:
          </p>
          <ul className="space-y-2 text-gray-600 pl-4">
            <li>• "Will you catch the cryptocurrency market downturn?."</li>
            <li>• "Grab 4x profit from the listing"</li>
            <li>• "Is this your investment?"</li>
          </ul>
          
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">
          3. Optimize campaign after the first 2,000 emails
        </h2>

        <p className="text-xl mb-8">
          For the results we do not just send out the mailing, we constantly conduct detailed analysis and planning
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-4 border-b border-gray-100 pb-8">
            <span className="text-red-500 text-2xl shrink-0">📌</span>
            <div>
              <p className="text-lg">
                Removed irrelevant offers and improved texts
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-gray-100 pb-8">
            <span className="text-red-500 text-2xl shrink-0">📌</span>
            <div>
              <p className="text-lg">
                Selected relevant Subject lines that caught our target audience's attention
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-red-500 text-2xl shrink-0">📌</span>
            <div>
              <p className="text-lg">
                Tested different variations of follow-ups, added additional variables for personalization
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mt-14 mb-8 text-center">
          <a href="#form" className="bg-[#ff6315] text-white px-8 py-4 text-2xl font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out animate-bounce">
              Get Free Consultation Now
          </a>
      </div>

      <section className="my-16">
        <h2 className="text-3xl font-bold mb-12">
          Results We Achieved
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="border-l-4 border-blue-400 pl-6 py-4">
            <div className="text-4xl font-bold text-gray-800 mb-2">20,000</div>
            <div className="text-gray-600">emails sent</div>
          </div>

          <div className="border-l-4 border-orange-400 pl-6 py-4">
            <div className="text-4xl font-bold text-gray-800 mb-2">5%</div>
            <div className="text-gray-600">Reply Rate in crypto niche</div>
          </div>

          <div className="border-l-4 border-purple-400 pl-6 py-4">
            <div className="text-4xl font-bold text-gray-800 mb-2">65%</div>
            <div className="text-gray-600">Open Rate</div>
          </div>

          <div className="border-l-4 border-cyan-400 pl-6 py-4">
            <div className="text-4xl font-bold text-gray-800 mb-2">+1.5%</div>
            <div className="text-gray-600">Additional Reply Rate from follow-ups</div>
          </div>

          <div className="border-l-4 border-pink-400 pl-6 py-4">
            <div className="text-4xl font-bold text-gray-800 mb-2">300%</div>
            <div className="text-gray-600">ROI of the best offers</div>
          </div>
        </div>

        <div className="space-y-12 my-16">
          <div>
            <div className="relative w-full h-full">
              <Image 
                src="/img/cold-email/results.webp"
                alt="Email Campaign Statistics"
                className="object-cover"
                priority
                width={1400}
                height={773}
              />
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Screenshot of statistics from our tracking system
            </p>
          </div>
          
          <div className="max-w-[300px] mx-auto">
            <div className="relative">
              <div className="relative aspect-[9/16] bg-gray-900">
                <video 
                  id="testimonial-video"
                  className="w-full h-full object-cover"
                  poster="/img/cold-email/video-testimonial-poster.webp"
                  playsInline
                  onClick={(e) => {
                    const video = e.currentTarget;
                    const button = document.getElementById('play-button');
                    if (video.paused) {
                      video.play();
                      button?.classList.add('hidden');
                    } else {
                      video.pause();
                      button?.classList.remove('hidden');
                    }
                  }}
                  onPause={() => {
                    const button = document.getElementById('play-button');
                    button?.classList.remove('hidden');
                  }}
                  onPlay={() => {
                    const button = document.getElementById('play-button');
                    button?.classList.add('hidden');
                  }}
                >
                  <source src="/img/cold-email/video-testimonial.mp4" type="video/mp4" />
                </video>
                
                <button 
                  id="play-button"
                  className="absolute inset-0 w-full h-full flex items-center justify-center group"
                  onClick={() => {
                    const video = document.getElementById('testimonial-video') as HTMLVideoElement;
                    if (video.paused) {
                      video.play();
                    }
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center transition-transform group-hover:scale-110">
                    <div className="play-icon w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-gray-900 ml-1"></div>
                  </div>
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Testimonial from Justin about the results
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-100 pt-12">
          <h2 className="text-3xl font-bold mb-8">What's Next?</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-blue-500 text-2xl">→</span>
              <p className="text-lg">
                Scaling – increasing the volume of emails with verified offers
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-blue-500 text-2xl">→</span>
              <p className="text-lg">
                New approaches to personalization – to make emails even more effective
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-blue-500 text-2xl">→</span>
              <p className="text-lg">
                Testing other formats of follow-ups
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="my-16">
        <div className="mx-auto space-y-8">
          <h2 className="text-3xl font-bold">
            Want the Same Results for Your Business? 🚀
          </h2>
          
          <p className="text-xl text-gray-700">
            Leave a request for a free consultation. We will analyze your niche and propose a strategy that will work specifically for you.
          </p>
        </div>

        <div className="w-fit mx-auto mt-8">
          <Formspree />
        </div>

        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-sm text-gray-500">
            *Consultation is free and does not obligate to cooperation
          </p>
        </div>
      </section>

      <CasesFooter />

      <MessengerButton
        link="https://m.me/100006500822716"
        text="Chat with us on Messenger"
      />

      </div>
      );
    };

    export default V14Page;