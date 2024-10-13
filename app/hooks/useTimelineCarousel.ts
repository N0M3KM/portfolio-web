import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const useTimelineCarousel = (updateContent: (index: number) => void) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: false,
    dragFree: false,
  });

  const onSelect = useCallback(() => {
    if (emblaApi) {
      const index = emblaApi.selectedScrollSnap();
      updateContent(index);
    }
  }, [emblaApi, updateContent]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi, onSelect]);

  return { emblaRef, scrollPrev, scrollNext };
};

export default useTimelineCarousel;
