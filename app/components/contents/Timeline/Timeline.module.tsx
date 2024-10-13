import React from 'react';
import Image from 'next/image';
import { TimelineNodeProps, ArrowButtonProps } from '@/app/types';

export const ArrowButton = ({ direction, onClick }: ArrowButtonProps) => {
  return (
    <button 
      className={`border-2 border-[#f65afa] bg-transparent rounded-full shadow flex items-center justify-center w-12 h-12 ${direction === 'left' ? 'mr-2' : 'ml-2'}`}
      onClick={onClick}
    >
      <span className="text-xl text-white">{direction === 'left' ? '<' : '>'}</span>
    </button>
  );
};

export const SecondaryTimeline = () => {
  return (
    <div>
      <Image
        src="/images/BlurLine.png"
        alt="timeline"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1"
        width={300}
        height={300}
      />
      <Image
        src="/images/BlurLine.png"
        alt="timeline"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1 blur-sm"
        width={300}
        height={300}
      />
    </div>
  );
};

export const TimelineNode = ({ emblaRef, educationCards } : TimelineNodeProps) => {
  return (
    <section className='w-2/3 absolute top-1/2 transform -translate-y-1/2 z-1'>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {educationCards.map((item) => (
              <div className="embla__slide pl-5 flex" key={item.key}>
                <span className="block w-5 h-5 rounded-full border-2 border-[#f65afa] bg-black mx-auto"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
