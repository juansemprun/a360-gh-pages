import { FileText } from 'lucide-react';

import { Separator } from '@/components/ui/shadcn/separator';
import { Avatar, AvatarImage } from '@/components/ui/shadcn/avatar';
import { Badge } from '@/components/ui/shadcn/badge';

const blogs = [
  {
    title: 'How to design a website from scratch',
    image:
      'https://www.air360.io/blog/conversion-rate-optimization/nextImageExportOptimizer/hero-opt-1080.WEBP',
    date: 'May 20, 2024',
    tag: 'Marketing',
  },
  {
    title: 'The best tools for web development and design',
    image: 'https://www.air360.io/blog/data-processing/nextImageExportOptimizer/1-opt-1080.WEBP',
    date: 'June 12, 2024',
    tag: 'UX',
  },
  {
    title: 'How to market your website and get more traffic',
    image: 'https://www.air360.io/blog/what-is-utm/nextImageExportOptimizer/1-opt-1080.WEBP',
    date: 'July 5, 2024',
    tag: 'E-Commerce',
  },
  {
    title: 'The future of web development and design',
    image:
      'https://www.air360.io/blog/how_to_effectively_use_heatmaps/nextImageExportOptimizer/1-opt-1920.WEBP',
    date: 'August 18, 2024',
    tag: 'Data',
  },
  {
    title: 'How to design a website from scratch',
    image:
      'https://www.air360.io/blog/conversion-rate-optimization/nextImageExportOptimizer/hero-opt-1080.WEBP',
    date: 'May 20, 2024',
    tag: 'Marketing',
  },
  {
    title: 'The best tools for web development and design',
    image: 'https://www.air360.io/blog/data-processing/nextImageExportOptimizer/1-opt-1080.WEBP',
    date: 'June 12, 2024',
    tag: 'UX',
  },
  {
    title: 'How to market your website and get more traffic',
    image: 'https://www.air360.io/blog/what-is-utm/nextImageExportOptimizer/1-opt-1080.WEBP',
    date: 'July 5, 2024',
    tag: 'E-Commerce',
  },
  {
    title: 'The future of web development and design',
    image:
      'https://images.unsplash.com/photo-1546414701-81cc6963c67f?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'August 18, 2024',
    tag: 'Data',
  },
];

const Blog = () => {
  return (
    <section className="bg-muted/60 py-32" data-theme="dark">
      <div className="container-custom">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-20 lg:flex-row">
          <header className="top-10 flex h-fit flex-col items-center gap-5 text-center lg:sticky lg:max-w-80 lg:items-start lg:gap-8 lg:text-left">
            <FileText className="invisible h-5 w-14" strokeWidth={1} />
            <h1 className="font-clash-display-bold text-4xl lg:text-5xl">Blog Posts</h1>
            <p className="text-muted-foreground lg:text-xl">
              Our experts share their knowledge to help you build better applications.
            </p>
            <Separator />
            <nav>
              <ul className="flex flex-wrap items-center justify-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                <li className="font-medium">
                  <a href="#">All</a>
                </li>
                <li className="text-muted-foreground hover:text-primary">
                  <a href="#">Design</a>
                </li>
                <li className="text-muted-foreground hover:text-primary">
                  <a href="#">Development</a>
                </li>
                <li className="text-muted-foreground hover:text-primary">
                  <a href="#">Marketing</a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            {blogs.map(({ title, date, image, tag }, index) => (
              <a className="rounded-xl border" href="#" key={index}>
                <div className="relative p-2">
                  <img
                    src={image}
                    alt="placeholder"
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                  <Badge
                    variant="secondary"
                    className="bg-background/70 absolute right-4 top-4 px-3 py-1 text-sm backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                </div>
                <div className="px-3 pb-4 pt-2">
                  <h2 className="mb-1 font-medium">{title}</h2>
                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Separator className="my-5" />
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="ring-input size-9 rounded-full">
                        <AvatarImage
                          src="https://www.air360.io/nextImageExportOptimizer/favicon2-opt-96.WEBP"
                          className="object-contain"
                          alt="placeholder"
                        />
                      </Avatar>
                      <span className="text-sm font-medium">Air360 Team</span>
                    </div>
                    <Badge variant="secondary" className="h-fit">
                      10 Min Read
                    </Badge>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Blog };
