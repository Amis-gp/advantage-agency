import Image from 'next/image';
import Link from 'next/link';

export default function AdBlockSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Image
                src="/img/media-buying/icon-disabled.webp"
                alt="Ad block demonstration"
                width={450}
                height={450}
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="space-y-8 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ad blocks are not a problem for us!
              </h2>
              <p className="text-gray-300 text-lg">
                We'll help you drive traffic to your offers - just fill out the application.
              </p>
              <div className="flex justify-center pt-4">
                <Link href="#form" className="transition-transform duration-300 hover:scale-105 focus:outline-none">
                  <Image
                    src="/img/media-buying/button-start.webp"
                    alt="Start button"
                    width={180}
                    height={180}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}