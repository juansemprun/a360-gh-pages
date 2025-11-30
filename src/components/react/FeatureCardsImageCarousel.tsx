// Start - src/components/react/FeatureCardsImageCarousel.tsx

import { useState, useEffect, useRef } from 'react';
import { Lightbulb, Route, Sparkles, ChartLine } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/react/shadcn/tabs';

interface Feature {
  id: string;
  icon: string;
  heading: string;
  description: string;
  video?: string;
  poster?: string;
  url: string;
  isDefault: boolean;
}

interface FeatureCardsCarouselProps {
  features: Feature[];
  autoRotateInterval?: number;
}

const iconMap = {
  Route,
  Sparkles,
  ChartLine,
} as const;

const FeatureCardsImagesCarousel = ({
  features,
  autoRotateInterval = 5000,
}: FeatureCardsCarouselProps) => {
  const defaultTab = features.find((tab) => tab.isDefault)?.id || features[0].id;
  const [activeTab, setActiveTab] = useState(defaultTab);
  const intervalRef = useRef<number | null>(null);

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

  // Cleanup interval on unmount
  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [features, autoRotateInterval]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    resetInterval();
  };

  // Optional logging for development
  const getIconComponent = (iconName: string) => {
    const icon = iconMap[iconName as keyof typeof iconMap];

    if (!icon && import.meta.env.DEV) {
      console.warn(`Icon "${iconName}" not found in iconMap. Using fallback (Lightbulb).`);
    }

    return icon || Lightbulb;
  };

  if (!features?.length) {
    return <p className="text-red-500">No features available.</p>;
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="gap-5">
      <TabsList className="bg-background flex h-auto w-full flex-row gap-20">
        {features.map((tab) => {
          const IconComponent = getIconComponent(tab.icon);
          const isActive = activeTab === tab.id;

          return (
            <div key={tab.id} className="relative flex-1">
              <TabsTrigger
                value={tab.id}
                className="group flex w-full cursor-pointer flex-col items-start justify-start gap-4 whitespace-normal rounded-3xl border-0 p-8 text-left opacity-50 !shadow-none transition-opacity duration-300 hover:opacity-100 data-[state=active]:bg-[#f7f8f8] data-[state=active]:opacity-100"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex items-center text-slate-500"
                    aria-label={`${tab.heading} icon`}
                    role="img"
                  >
                    <IconComponent className="text-s size-6" />
                  </span>
                  <p className="text-xl font-semibold text-slate-800">{tab.heading}</p>
                </div>
                <p className="text-base font-medium text-slate-600">{tab.description}</p>

                {/* Progress bar */}
                <div
                  className={`h-1 w-11 overflow-hidden rounded-full bg-slate-200 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  aria-hidden="true"
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

      {/* Image content area */}
      <div className="relative w-full" role="region" aria-live="polite">
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
              <img
                src={tab.video}
                alt={`${tab.heading} - ${tab.description}`}
                loading={isActive ? 'eager' : 'lazy'}
                decoding="async"
                className="aspect-video h-auto w-full rounded-3xl object-cover shadow-lg"
              />
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
};

export default FeatureCardsImagesCarousel;
