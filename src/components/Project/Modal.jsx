import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline, IoCloseCircleOutline } from 'react-icons/io5';
import getImageUrl from '../../assets';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [getImageUrl('krai.png'), getImageUrl('krai2.jpg')];

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Open Modal
      </button>

      {isOpen && (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>

          {/* Modal content */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="relative max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Close Button */}
              <button onClick={closeModal} className="scale-150 absolute text-red-700 top-4 right-4 hover:text-red-900 focus:outline-none">
                <IoCloseCircleOutline />
              </button>

              <div className="grid md:grid-cols-2 grid-cols-1">
                {/* Image Carousel Section */}
                <div className="relative max-w-3xl md:w-96 aspect-square md:h-auto mx-auto group">
                  <img src={images[currentImage]} alt={`Carousel ${currentImage + 1}`} className="w-full h-full object-cover" />

                  {/* Carousel Navigation */}
                  <button
                    onClick={prevImage}
                    className="opacity-0 group-hover:opacity-80 transition-all ease-in-out duration-500 absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 p-1 rounded-full hover:bg-opacity-100 focus:outline-none"
                  >
                    <IoChevronBackCircleOutline className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="opacity-0 group-hover:opacity-80 transition-all ease-in-out duration-500 absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 p-1 rounded-full hover:bg-opacity-100 focus:outline-none"
                  >
                    <IoChevronForwardCircleOutline className="h-6 w-6 text-gray-800" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-center">
                  <Dialog.Title className="text-2xl font-bold mb-4">Modal Title</Dialog.Title>
                  <p className="text-gray-600 mb-4">This is an example of a responsive modal with an image carousel. The modal layout is built using Tailwind CSS and includes a dynamic image slider on the left.</p>
                  <p className="text-gray-600">You can navigate between the images using the arrows, and the layout remains responsive across different screen sizes.</p>

                  <div className="mt-6">
                    <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded-lg">
                      Close
                    </button>
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
