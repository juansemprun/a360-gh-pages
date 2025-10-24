import { useState, useEffect, useRef } from 'react';
import { Cog, Lightbulb, ListChecks } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs';

interface Feature {
  id: string;
  iconName: keyof typeof iconMap;
  heading: string;
  description: string;
  video: string;
  poster?: string;
  url: string;
  isDefault: boolean;
}

interface FeatureCardsCarouselProps {
  features: Feature[];
  autoRotateInterval?: number;
}

const iconMap = {
  Lightbulb,
  ListChecks,
  Cog,
} as const;

const FeatureCardsCarousel = ({
  features,
  autoRotateInterval = 5000,
}: FeatureCardsCarouselProps) => {
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
    <Tabs value={activeTab} onValueChange={handleTabChange} className="gap-5">
      <TabsList className="bg-background flex h-auto w-full flex-row gap-20">
        {features.map((tab) => {
          const IconComponent = iconMap[tab.iconName] || Lightbulb;
          const isActive = activeTab === tab.id;

          return (
            <div key={tab.id} className="relative flex-1">
              <TabsTrigger
                value={tab.id}
                className="group flex w-full cursor-pointer flex-col items-start justify-start gap-4 whitespace-normal rounded-3xl border-0 p-8 text-left opacity-50 !shadow-none transition-opacity duration-300 hover:opacity-100 data-[state=active]:bg-[#f7f8f8] data-[state=active]:opacity-100"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center text-slate-500">
                    <IconComponent className="text-s size-6" />
                  </span>
                  <p className="text-xl font-semibold text-slate-800">{tab.heading}</p>
                </div>
                <p className="text-base font-medium text-slate-600">{tab.description}</p>

                {/* Progress bar - always rendered, opacity controls visibility */}
                <div
                  className={`h-1 w-11 overflow-hidden rounded-full bg-slate-200 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                >
                  {isActive && (
                    <div key={activeTab} className="animate-fill-progress h-full bg-slate-400" />
                  )}
                </div>
              </TabsTrigger>
            </div>
          );
        })}
      </TabsList>

      {/* Video content area */}
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
                className="aspect-video h-auto w-full rounded-3xl object-cover shadow-lg"
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

export default FeatureCardsCarousel;
