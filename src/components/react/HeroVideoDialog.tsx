import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@/components/ui/react/shadcn/dialog';
import { Play } from 'lucide-react';

// Props interface
interface HeroVideoDialogProps {
  url: string; // Full Loom/Tella embed URL (with parameters)
  thumbnailVideo: string; // Direct MP4/WebM URL for thumbnail preview (always present)
  title?: string;
  subtitle?: string;
  lang?: string;
}

const HeroVideoDialog = ({
  url,
  thumbnailVideo,
  title = "Got a Minute? That's All You Need to know Air360",
  subtitle = 'Watch the video!',
  lang,
}: HeroVideoDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card Preview with Play Icon Overlay, always shows video */}
      <div
        className="flex cursor-pointer items-center gap-6"
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
            className="aspect-video h-full w-64 rounded-lg object-cover opacity-60"
          />
          {/* Play Icon Overlay (always shown) */}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Play className="size-16 rounded-full fill-white stroke-0 p-2" />
          </span>
        </div>
        <div>
          <h3 className="mb-2 text-base font-semibold text-white sm:text-sm md:text-2xl">
            {title}
          </h3>
          <p className="text-sm font-medium text-white/60 sm:text-xs md:text-xl">{subtitle}</p>
        </div>
      </div>
      {/* Dialog Modal w/ Full Video Embed */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTitle className="text-mauve12 m-0 hidden text-[17px] font-medium">
          Watch the video
        </DialogTitle>
        <DialogContent className="border-none bg-transparent sm:max-w-[800px]">
          <div className="aspect-video w-full">
            {lang === 'fr' ? (
              <iframe
                className="h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/kijtGhQ9M00?cc_lang_pref=fr&cc_load_policy=1&autoplay=1"
                title="YouTube video player"
                allow=" autoplay; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <video className="h-full w-full rounded-md" controls autoPlay preload="metadata">
                <source src={url} type="video/mp4" />
                <source src={url.replace('.mp4', '.webm')} type="video/webm" />
                <p>Your browser doesn't support HTML5 video.</p>
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroVideoDialog;
