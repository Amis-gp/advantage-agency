"use client"

import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import dynamic from 'next/dynamic';

const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

import { Navigation, Pagination } from 'swiper/modules';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: string;
  images: string[];
}

const ImageModal = ({ isOpen, onClose, selectedImage, images }: ImageModalProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="relative max-w-4xl w-full">
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 text-white text-6xl hover:text-gray-300 transition-colors z-50"
              >
                ×
              </button>
              <div className="relative h-[80vh]">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  initialSlide={images.indexOf(selectedImage)}
                  className="h-full w-full"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={image}
                        alt={`Testimonial ${index + 1}`}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ImageModal;
