import { useRef } from 'react';

import AutoScroll from 'embla-carousel-auto-scroll';

import { Avatar, AvatarImage } from '@/components/ui/shadcn/avatar';
import { Card } from '@/components/ui/shadcn/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/shadcn/carousel';

const testimonials1 = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'Jane Doe',
    role: 'CTO',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'John Smith',
    role: 'COO',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'Jane Smith',
    role: 'Tech Lead',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'Richard Doe',
    role: 'Designer',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'Gordon Doe',
    role: 'Developer',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
];
const testimonials2 = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'Jane Doe',
    role: 'CTO',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'John Smith',
    role: 'COO',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'Jane Smith',
    role: 'Tech Lead',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'Richard Doe',
    role: 'Designer',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
  {
    name: 'Gordon Doe',
    role: 'Developer',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp',
    content:
      'Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.',
  },
];

const TestimonialsCarousel = () => {
  const plugin1 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    }),
  );

  const plugin2 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
      direction: 'backward',
    }),
  );
  return (
    <div className="before:bg-linear-to-r before:from-background after:bg-linear-to-l after:from-background relative mt-16 space-y-4 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-36 before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-36 after:to-transparent">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin1.current]}
        onMouseLeave={() => plugin1.current.play()}
      >
        <CarouselContent>
          {testimonials1.map((testimonial, index) => (
            <CarouselItem key={index} className="basis-auto">
              <Card className="max-w-96 select-none p-6">
                <div className="mb-4 flex gap-4">
                  <Avatar className="ring-input size-9 rounded-full ring-1">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <q>{testimonial.content}</q>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin2.current]}
        onMouseLeave={() => plugin2.current.play()}
      >
        <CarouselContent>
          {testimonials2.map((testimonial, index) => (
            <CarouselItem key={index} className="basis-auto">
              <Card className="max-w-96 select-none p-6">
                <div className="mb-4 flex gap-4">
                  <Avatar className="ring-input size-9 rounded-full ring-1">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <q>{testimonial.content}</q>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export { TestimonialsCarousel };
