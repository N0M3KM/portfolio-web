import React, { useCallback, useState } from 'react';
import { BackgroundGradient } from '../../utils/background-gradient';
import Card from '../Card';
import useTimelineCarousel from '@/app/hooks/useTimelineCarousel';
import { ArrowButton, SecondaryTimeline, TimelineNode } from './Timeline.module';
import { educationCards } from '@/libs/info/educationCards';

const Timeline = () => {
  const [currentDate, setCurrentDate] = useState(educationCards[0].date);
  const [currentSchool, setCurrentSchool] = useState(educationCards[0].school);
  const [currentInfo, setCurrentInfo] = useState(educationCards[0].info);
  const [currentLink, setCurrentLink] = useState(educationCards[0].link);

  const updateContent = useCallback((index: number) => {
    if (index >= 0 && index < educationCards.length) {
      setCurrentDate(educationCards[index].date);
      setCurrentInfo(educationCards[index].info);
      setCurrentSchool(educationCards[index].school);
      setCurrentLink(educationCards[index].link);
    }
  }, []);

  const { emblaRef, scrollPrev, scrollNext } = useTimelineCarousel(updateContent);

  return (
    <div className='mx-auto mt-2 pt-4 place-items-center select-none'>
      <div className='relative mx-auto my-1 grid place-items-center'>
        <span className='font-semibold text-2xl text-white'>{currentDate}</span>
      </div>
      <div className='relative mx-auto mt-5 pt-8 grid place-items-center'>
        <SecondaryTimeline />
        <TimelineNode emblaRef={emblaRef} educationCards={educationCards} />
      </div>
      <div className='relative mx-auto mt-5 grid place-items-center'>
        <div className='flex items-center'>
          <ArrowButton direction="left" onClick={scrollPrev} />
          <BackgroundGradient 
            animate={false}
            customGradient='bg-gradient-to-t from-[#667EEA] to-[#f65afa]'
          >
            <Card
              title={currentSchool}
              description={currentInfo}
              date={currentDate}
              buttonWord="Go to website"
              link={currentLink}
            />
          </BackgroundGradient>
          <ArrowButton direction="right" onClick={scrollNext} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
