import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';

const Modal = ({ title, longDesc, img, techStack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = img;

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(0);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={openModal} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
        Explore Project
      </button>

      {isOpen && (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true"></div>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="relative max-w-6xl w-[95vw] h-[85vh] bg-gradient-to-br from-dark2 to-dark3 text-light1 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <button onClick={closeModal} className="absolute top-4 right-4 z-20 p-2 hover:scale-110 transition-transform duration-200" aria-label="Close modal">
                <IoCloseCircleOutline className="text-red-400/90 text-4xl hover:text-red-300" />
              </button>

              <div className="grid lg:grid-cols-2 h-full">
                <div className="relative h-full w-full group bg-gradient-to-tr from-dark1/80 to-dark4/80">
                  <div className="relative h-full w-full flex items-center justify-center">
                    <img src={images[currentImage]} alt={`Project visual ${currentImage + 1}`} className="max-h-[70vh] max-w-full object-contain p-4 rounded-xl transition-transform duration-500 ease-in-out" />
                  </div>

                  <button onClick={prevImage} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg" aria-label="Previous image">
                    <IoChevronBackCircleOutline className="h-8 w-8 text-dark1" />
                  </button>
                  <button onClick={nextImage} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg" aria-label="Next image">
                    <IoChevronForwardCircleOutline className="h-8 w-8 text-dark1" />
                  </button>

                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 px-4 py-1 rounded-full text-sm font-medium text-light1 backdrop-blur-sm">
                    {currentImage + 1} / {images.length}
                  </div>
                </div>

                <div className="flex flex-col p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-light1/30 scrollbar-track-transparent">
                  <div className="space-y-6">
                    <div className="border-b border-light1/20 pb-4">
                      <Dialog.Title className="text-4xl font-bold font-serif bg-gradient-to-r from-light1 to-light2 bg-clip-text text-transparent">{title}</Dialog.Title>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-light2 flex items-center gap-2">
                        <span className="w-3 h-3 bg-accent rounded-full"></span>
                        Project Overview
                      </h3>
                      <p className="text-lg leading-relaxed text-light2/90 font-medium whitespace-pre-line">{longDesc}</p>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-light2 mb-4 flex items-center gap-2">
                        <span className="w-3 h-3 bg-accent rounded-full"></span>
                        Technologies Used
                      </h3>
                      <div className="grid grid-cols-4 gap-4">
                        {techStack.map((tech, index) => (
                          <div key={index} className="group relative aspect-square bg-dark1 rounded-xl p-3 hover:bg-accent/20 transition-all duration-300 cursor-help">
                            <img src={tech} alt="Technology logo" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark1 text-light2 text-xs font-medium px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap">
                              Technology {index + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Modal;
