import { Play } from 'lucide-react';
import { useState } from 'react';

import { AspectRatio } from '@/components/ui/react/shadcn/aspect-ratio';
import { Button } from '@/components/ui/react/shadcn/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/react/shadcn/dialog';

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailVideoSrc: string;
  thumbnailImageSrc: string; // Poster image
  thumbnailAlt: string;
  ctaText?: string;
  dialogTitle?: string;
}

export const VideoPlayer = ({
  videoSrc,
  thumbnailVideoSrc,
  thumbnailImageSrc,
  thumbnailAlt,
  ctaText = 'Watch how we build an autonomous AI agent in only 5 minutes.',
  dialogTitle = 'Presentation Video',
}: VideoPlayerProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="mt-14 flex w-full flex-col items-center gap-5 rounded-2xl border border-neutral-200 bg-neutral-100 p-3">
        <p className="text-foreground text-center text-xs font-medium sm:text-sm md:text-lg">
          {ctaText}
        </p>
        <div className="relative w-full rounded-2xl border border-neutral-200 bg-neutral-50">
          <AspectRatio ratio={3.002666667 / 1} className="overflow-hidden">
            <div className="relative">
              {/* Animated thumbnail video with poster fallback */}
              <video
                className="w-full rounded-2xl object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={thumbnailImageSrc}
                aria-label={thumbnailAlt}
              >
                <source src={thumbnailVideoSrc} type="video/mp4" />
                <source src={thumbnailVideoSrc.replace('.mp4', '.webm')} type="video/webm" />
              </video>

              {/* Play button overlay */}
              <Button
                onClick={() => setIsVideoOpen(true)}
                size="icon"
                className="absolute left-1/2 top-1/2 z-30 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-500 shadow-[0_0_0_14px_var(--color-neutral-300)] transition-all hover:cursor-pointer hover:bg-neutral-600 hover:shadow-[0_0_0_0px_var(--color-neutral-300)] md:h-14 md:w-14 lg:h-20 lg:w-20"
                aria-label="Play full video"
              >
                <div className="m-auto aspect-square w-[45%]">
                  <Play className="h-full! w-full! fill-white stroke-white" />
                </div>
              </Button>
            </div>
          </AspectRatio>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <video
              className="h-full w-full"
              controls
              autoPlay
              poster={thumbnailImageSrc}
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
              <p>Your browser doesn't support HTML5 video.</p>
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
