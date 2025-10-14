import { useState, useEffect, useRef } from 'react';

import { Cog, Lightbulb, ListChecks } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn/tabs';

interface Feature {
  id: string;
  iconName: string;
  heading: string;
  description: string;
  video: string;
  poster?: string;
  url: string;
  isDefault: boolean;
}

interface FeatureTabsCarouselProps {
  features: Feature[];
  autoRotateInterval?: number;
}

// Icon mapping
const iconMap = {
  Lightbulb: Lightbulb,
  ListChecks: ListChecks,
  Cog: Cog,
};

const FeatureTabsCarousel = ({ features, autoRotateInterval = 5000 }: FeatureTabsCarouselProps) => {
  const defaultTab = features.find((tab) => tab.isDefault)?.id || features[0].id;
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    // Set up the interval for auto-rotation
    intervalRef.current = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = features.findIndex((f) => f.id === currentTab);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, autoRotateInterval);

    // Cleanup function to clear interval when component unmounts or dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoRotating, autoRotateInterval, features]);

  // Handle manual tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsAutoRotating(false); // Stop auto-rotation when user manually changes tab

    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="gap-5">
      <TabsList className="bg-background flex h-auto w-full flex-row gap-20">
        {features.map((tab) => {
          const IconComponent = iconMap[tab.iconName as keyof typeof iconMap] || Lightbulb;

          return (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`group flex cursor-pointer flex-col items-start justify-start gap-4 whitespace-normal rounded-3xl border-0 p-8 text-left transition-opacity duration-200 data-[state=active]:bg-slate-50`}
            >
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground flex items-center transition-colors duration-200 group-hover:text-slate-800 group-data-[state=active]:text-slate-800">
                  <IconComponent className="size-4" />
                </span>
                <p className="text-muted-foreground text-xl font-semibold transition-colors duration-200 group-hover:text-slate-800 group-data-[state=active]:text-slate-800">
                  {tab.heading}
                </p>
              </div>
              <p className="text-muted-foreground text-base font-normal transition-colors duration-200 group-hover:text-slate-800 group-data-[state=active]:text-slate-800">
                {tab.description}
              </p>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {features.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="transition-opacity duration-300">
          <video
            ref={(el) => {
              videoRefs.current[tab.id] = el;
            }}
            src={tab.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="aspect-video h-auto w-full rounded-3xl object-cover shadow-lg transition-opacity duration-300"
          >
            Your browser does not support the video tag.
          </video>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default FeatureTabsCarousel;
