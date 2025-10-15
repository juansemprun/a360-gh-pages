import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/shadcn/dialog';
import { Play } from 'lucide-react';

// Props interface
interface HeroVideoDialogProps {
  url: string; // Full Loom embed URL (with parameters)
  thumbnailVideo: string; // Direct MP4/WebM URL for thumbnail preview (always present)
  title?: string;
  subtitle?: string;
}

const HeroVideoDialog = ({
  url,
  thumbnailVideo,
  title = "Got a Minute? That's All You Need to know Air360",
  subtitle = 'Watch the video!',
}: HeroVideoDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card Preview with Play Icon Overlay, always shows video */}
      <div
        className="flex h-28 cursor-pointer items-center gap-6"
        onClick={() => setIsOpen(true)}
        tabIndex={0}
        role="button"
        aria-label={`Show video: ${title}`}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(true)}
      >
        <div className="relative">
          <video
            src={thumbnailVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={`Video preview for: ${title}`}
            className="aspect-video h-16 w-28 rounded-lg object-cover md:h-28 md:w-48"
          />
          {/* Play Icon Overlay (always shown) */}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Play className="size-10 rounded-full bg-white fill-black p-2 text-slate-700 drop-shadow-lg hover:animate-bounce" />
          </span>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-white md:text-2xl">{title}</h3>
          <p className="text-xs font-medium text-white/60 md:text-xl">{subtitle}</p>
        </div>
      </div>
      {/* Dialog Modal w/ Full Video Embed */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="border-none bg-transparent sm:max-w-[800px]">
          <div className="aspect-video w-full">
            <iframe
              src={url}
              title={title}
              className="h-full w-full rounded-lg"
              allow="autoplay; clipboard-write"
              allowFullScreen
              frameBorder={0}
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroVideoDialog;
