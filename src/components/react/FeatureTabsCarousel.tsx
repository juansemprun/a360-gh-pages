import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs';

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
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Trigger slide-up animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (features.length < 2) return;

    intervalRef.current = window.setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = features.findIndex((f) => f.id === currentTab);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, autoRotateInterval);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [autoRotateInterval, features]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  if (!features?.length) {
    return <p className="text-red-500">No features available.</p>;
  }

  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ willChange: 'transform, opacity' }}
    >
      <Tabs value={activeTab} onValueChange={handleTabChange} className="items-center gap-10">
        <TabsList className="flex h-auto flex-row gap-2 bg-transparent md:w-[360px] md:gap-20">
          {features.map((tab) => {
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`group flex cursor-pointer items-start justify-start gap-4 whitespace-normal rounded-full p-8 px-4 py-1 text-left text-sm font-semibold text-white/50 transition duration-200 hover:text-white data-[state=active]:bg-white/20 data-[state=active]:text-white md:text-base`}
              >
                {tab.heading}
              </TabsTrigger>
            );
          })}
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
                    ? 'relative opacity-100'
                    : 'pointer-events-none absolute inset-0 opacity-0'
                }`}
              >
                <video
                  src={tab.video}
                  poster={tab.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={isActive ? 'auto' : 'none'}
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
    </div>
  );
};

export default FeatureTabsCarousel;
