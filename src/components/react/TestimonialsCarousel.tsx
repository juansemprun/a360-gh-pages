import { Marquee } from '@/components/ui/react/marquee';

interface Testimonial {
  id: number;
  name: string;
  client: string;
  body: string;
  img: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  scrollSpeed?: number;
}

const ReviewCard = ({
  img,
  name,
  client,
  body,
}: {
  img: string;
  name: string;
  client: string;
  body: string;
}) => {
  return (
    <figure className="relative h-full max-w-96 cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-6 hover:bg-gray-950/[.05]">
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={`${name}'s review of Air360`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <span className="text-xs text-gray-500">{client}</span>
        </div>
      </div>
      <blockquote className="mt-4 line-clamp-4 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsCarousel({
  testimonials,
  scrollSpeed = 80,
}: TestimonialsCarouselProps) {
  if (!testimonials?.length) {
    return <p className="text-red-500">No testimonials available.</p>;
  }

  // Automatically split testimonials into two equal carousels
  const midpoint = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, midpoint);
  const secondRow = testimonials.slice(midpoint);

  return (
    <div className="relative mt-16 flex w-full flex-col items-center justify-center gap-4 overflow-hidden">
      {/* First Marquee - Scrolls Right */}
      <Marquee pauseOnHover className={`[--duration:${scrollSpeed}s]`}>
        {firstRow.map((review) => (
          <ReviewCard key={`carousel1-${review.id}`} {...review} />
        ))}
      </Marquee>

      {/* Second Marquee - Scrolls Left */}
      <Marquee reverse pauseOnHover className={`[--duration:${scrollSpeed}s]`}>
        {secondRow.map((review) => (
          <ReviewCard key={`carousel2-${review.id}`} {...review} />
        ))}
      </Marquee>

      {/* Gradient Fades */}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
