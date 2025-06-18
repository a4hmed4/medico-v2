import { useEffect, RefObject } from 'react';

export function useScrollTracker(
  ref: RefObject<HTMLElement>,
  eventName: string,
  eventCategory = 'scroll',
  eventLabel?: string
) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typeof gtag === 'function') {
            gtag('event', eventName, {
              event_category: eventCategory,
              event_label: eventLabel || eventName,
            });
            observer.disconnect(); // وقف التتبع بعد أول مرة
          }
        });
      },
      { threshold: 0.5 } // لما نص العنصر يظهر
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, eventName, eventCategory, eventLabel]);
}
function gtag(arg0: string, eventName: string, arg2: { event_category: string; event_label: string; }) {
    throw new Error('Function not implemented.');
}

