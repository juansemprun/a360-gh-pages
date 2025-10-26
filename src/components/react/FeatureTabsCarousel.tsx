import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/react/shadcn/tabs';

interface Feature {
  id: string;
  heading: string;
  video: string;
  poster?: string;
  isDefault: boolean;
}

interface FeatureTabsCarouselProps {
  features: Feature[];
  autoRotateInterval?: number;
}

const FeatureTabsCarousel = ({ features, autoRotateInterval = 5000 }: FeatureTabsCarouselProps) => {
  const defaultTab = features.find((tab) => tab.isDefault)?.id || features[0].id;
  const [activeTab, setActiveTab] = useState(defaultTab);
  const intervalRef = useRef<number | null>(null);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  // Function to clear and restart the interval
  const resetInterval = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    if (features.length < 2) return;

    intervalRef.current = window.setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = features.findIndex((f) => f.id === currentTab);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, autoRotateInterval);
  };

  // Auto-rotate tabs
  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [autoRotateInterval, features]);

  // Handle video playback when tab changes
  useEffect(() => {
    videoRefs.current.forEach((video, id) => {
      if (id === activeTab) {
        // Load and play the active video
        video.load(); // Force reload to ensure video is loaded
        video.currentTime = 0;
        video.play().catch((error) => {
          console.warn('Video play failed:', error);
        });
      } else {
        // Pause and reset inactive videos
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeTab]);

  // Handle manual tab change (reset interval)
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    resetInterval(); // Reset the interval when user manually changes tab
  };

  const handleVideoRef = (element: HTMLVideoElement | null, tabId: string) => {
    if (element) {
      videoRefs.current.set(tabId, element);
    } else {
      videoRefs.current.delete(tabId);
    }
  };

  if (!features?.length) {
    return <p className="text-red-500">No features available.</p>;
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="items-center gap-10">
      <TabsList className="flex h-auto flex-row gap-2 bg-transparent md:w-[360px] md:gap-20">
        {features.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="group flex cursor-pointer items-start justify-start gap-4 rounded-full p-8 px-4 py-1 text-left text-sm font-semibold text-white/50 transition duration-200 hover:text-white data-[state=active]:bg-white/20 data-[state=active]:text-white md:text-base"
          >
            {tab.heading}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="relative w-full">
        {features.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <TabsContent
              key={tab.id}
              value={tab.id}
              forceMount
              className={`aspect-video transition-opacity duration-500 ${
                isActive
                  ? 'relative z-10 opacity-100'
                  : 'pointer-events-none absolute inset-0 z-0 opacity-0'
              }`}
            >
              <video
                ref={(el) => handleVideoRef(el, tab.id)}
                src={tab.video}
                poster={tab.poster}
                loop
                muted
                playsInline
                preload={isActive ? 'auto' : 'metadata'}
                aria-label={`Preview of ${tab.heading}`}
                className="aspect-video h-auto w-full rounded-2xl object-cover shadow-lg"
              >
                Your browser does not support the video tag.
              </video>
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
};

export default FeatureTabsCarousel;
