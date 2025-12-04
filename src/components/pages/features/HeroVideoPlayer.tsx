import { Play } from 'lucide-react';
import { useState } from 'react';

import { AspectRatio } from '@/components/ui/react/shadcn/aspect-ratio';
import { Button } from '@/components/ui/react/shadcn/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/react/shadcn/dialog';

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailVideoSrc: string;
  thumbnailImageSrc: string;
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
        <p className="text-center text-xs font-medium text-gray-700 sm:text-sm md:text-lg">
          {ctaText}
        </p>
        <div className="relative w-full rounded-2xl border border-neutral-200 bg-neutral-50">
          <AspectRatio ratio={3.002666667 / 1} className="overflow-hidden">
            <div className="">
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
                className="focus:ring-primary-300 absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring ring-black/10 transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:bg-white focus:outline-none focus:ring-4 md:h-24 md:w-24"
                aria-label="Play full video"
              >
                <div className="m-auto aspect-square w-1/2">
                  {/* <Play className="h-full! w-full! fill-white stroke-white" /> */}
                  <Play className="fill-primary-500 h-full! w-full! stroke-0 md:h-12 md:w-12" />
                </div>
              </Button>
            </div>
          </AspectRatio>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          <DialogHeader>
            <DialogTitle className="text-center text-gray-700">{dialogTitle}</DialogTitle>
            <DialogDescription className="sr-only">
              Video player for {dialogTitle}
            </DialogDescription>
          </DialogHeader>
          <div>
            <video
              className="h-full w-full rounded-md"
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
