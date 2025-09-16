import { useRef } from 'react';

import AutoScroll from 'embla-carousel-auto-scroll';

import { Avatar, AvatarImage } from '@/components/ui/shadcn/avatar';
import { Button } from '@/components/ui/shadcn/button';
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

const Testimonials = () => {
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
    <section className="container-custom pb-32" data-theme="dark">
      <div className="flex flex-col items-center gap-6">
        <h2 className="font-clash-display-bold mb-2 text-center text-2xl lg:text-5xl">
          <span className="block">What changed for the better</span>
          <span className="block">
            since you switched to <mark className="bg-primary-500 p-1 text-white">Air360</mark>?
          </span>
        </h2>
        <p className="text-muted-foreground lg:text-lg">
          Discover how <strong className="text-primary-500 font-bold">Air360</strong> is
          transforming workflows across industries
        </p>
        {/* <Button className="mt-6">Get started for free</Button> */}
        <div className="animate-rotate-border glow-border relative mt-5 w-80 max-w-sm cursor-pointer rounded-xl p-[4px] transition-all duration-500 ease-out hover:scale-[1.03]">
          <a
            href={`/en/request-demo`}
            className="block rounded-lg border border-black bg-white px-4 py-4 text-center text-lg text-black"
          >
            <span className="text-lg font-semibold">Get Started</span>
          </a>
        </div>
      </div>
      <div>
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
      </div>
    </section>
  );
};

export { Testimonials };
