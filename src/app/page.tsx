'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

interface GalleryPosition {
  angle: number;
  offset: number;
  top: string;
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showInvitation, setShowInvitation] = useState(false);
  const [email, setEmail] = useState('');

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!showInvitation) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const button = document.getElementById('noButton');
      if (button) {
        const rect = button.getBoundingClientRect();
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(mouseX - buttonX, 2) +
          Math.pow(mouseY - buttonY, 2)
        );

        if (distance < 75) {
          const angle = Math.random() * Math.PI * 2;
          const newX = Math.cos(angle) * 150;
          const newY = Math.sin(angle) * 150;
          setNoButtonPosition({ x: newX, y: newY });
        }
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Invitation will be sent to: ${email}`);
  };

  const galleryImages = [
    '/IMG_1074.png',
    '/IMG_1076.png',
    '/IMG_1903.png',
    '/IMG_2265.png',
    '/IMG_4398.png',
    '/IMG_9147.png'
  ];

  const galleryPositions: GalleryPosition[] = [
    { angle: -5, offset: -20, top: '15%' },
    { angle: 3, offset: -10, top: '40%' },
    { angle: -4, offset: -15, top: '65%' },
    { angle: 4, offset: 10, top: '15%' },
    { angle: -3, offset: 20, top: '40%' },
    { angle: 5, offset: 15, top: '65%' },
  ];

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen relative">
      <main className={`min-h-screen p-8 ${showInvitation ? 'bg-gray-800' : 'bg-[#f5f5dc]'}`}>
        {!showInvitation ? (
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-dancing text-pink-500 font-bold mb-8">
              Anusri, my baby, will you be my Valentine? <FaHeart className="inline text-red-500" />
            </h1>

            <div className="relative w-[300px] h-[300px] mx-auto mb-8 rounded-lg overflow-hidden">
              <Image
                src="/cutecats.png"
                alt="Valentine"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col items-center space-y-4 relative h-40">
              <button
                onClick={() => setShowInvitation(true)}
                className="px-12 py-6 text-3xl font-dancing bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Yes, you are the love of my life, Colin! 💖
              </button>

              <button
                id="noButton"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: 'transform 0.1s'
                }}
                className="px-8 py-3 text-xl font-dancing bg-gray-500 text-white rounded-full"
              >
                WTF, ewwww, hell nah
              </button>
            </div>

            {/* Left Side Gallery */}
            <div className="fixed left-0 top-0 bottom-0 w-1/4">
              {[0, 1, 2].map((index) => (
                <div
                  key={`left-${index}`}
                  className="absolute left-8"
                  style={{
                    transform: `rotate(${galleryPositions[index].angle}deg) translateX(${galleryPositions[index].offset}px)`,
                    top: galleryPositions[index].top,
                    width: '200px',
                    height: '200px',
                  }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={galleryImages[index]}
                      alt={`Memory ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Gallery */}
            <div className="fixed right-0 top-0 bottom-0 w-1/4">
              {[3, 4, 5].map((index) => (
                <div
                  key={`right-${index}`}
                  className="absolute right-8"
                  style={{
                    transform: `rotate(${galleryPositions[index].angle}deg) translateX(${galleryPositions[index].offset}px)`,
                    top: galleryPositions[index].top,
                    width: '200px',
                    height: '200px',
                  }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={galleryImages[index]}
                      alt={`Memory ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-gray-800 p-12 rounded-3xl shadow-2xl">
            <div className="border-4 border-white p-8 rounded-2xl">
              <div className="relative">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-serif text-white mb-4">
                    My Valentine,
                  </h2>
                  <h2 className="text-4xl font-serif text-white mb-4 italic">
                    Anusri Vurity
                  </h2>
                  <p className="text-2xl font-serif text-white mt-8">
                    are cordially invited to an unforgettable evening
                  </p>
                </div>
                
                <div className="text-center mb-16">
                  <h3 className="text-3xl font-serif text-white mb-8">Venue</h3>
                  <div className="flex justify-center items-center space-x-12">
                    <div className="text-right">
                      <p className="text-2xl text-white font-serif">February 14th, 2025</p>
                      <p className="text-xl text-white mt-2 italic">7 o'clock in the evening</p>
                    </div>
                    <div className="h-16 w-px bg-white"></div>
                    <div className="text-left">
                      <p className="text-2xl text-white font-light">Cocina Chiwas</p>
                      <p className="text-xl text-white mt-2 italic">2001 E Apache Blvd. Tempe, AZ, 85281</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-16">
                  <div className="h-px bg-white w-1/4"></div>
                  <div className="mx-4">
                    <span className="text-white text-2xl">♥</span>
                  </div>
                  <div className="h-px bg-white w-1/4"></div>
                </div>

                <div className="text-center mb-12">
                  <h3 className="text-2xl font-serif text-white mb-4">
                    AN EVENING OF ROMANCE AWAITS
                  </h3>
                  <div className="w-24 h-px bg-white mx-auto mb-8"></div>
                  <p className="text-lg text-white italic">
                    Please join me for an intimate dinner filled with love, laughter, and cherished moments of beauty, my love.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-16">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for the invitation details"
                    className="w-full p-4 text-lg border border-white rounded-lg bg-transparent text-white placeholder-gray-400"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-4 w-full px-8 py-3 text-xl font-serif bg-white text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Confirm Your Presence
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}