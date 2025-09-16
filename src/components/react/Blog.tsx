import { ArrowRight, FileText, Calendar, ChevronRight } from 'lucide-react';

import { Avatar, AvatarImage } from '@/components/ui/shadcn/avatar';
import { Badge } from '@/components/ui/shadcn/badge';
import { Button } from '@/components/ui/shadcn/button';
import { Separator } from '@/components/ui/shadcn/separator';

const Blog = () => {
  return (
    <section className="container-custom py-32" data-theme="dark">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h1 className="font-clash-display-bold text-balance text-4xl md:text-6xl">Air360 Blog</h1>
        <p className="text-muted-foreground text-sm md:text-xl">
          Explore our blog for insightful articles, personal reflections and ideas that inspire
          action on the topics you care about.
        </p>
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-4 lg:gap-2">
            <li className="font-medium">
              <a href="#">
                <Badge className="bg-primary-500 h-fit px-3 py-1">All</Badge>
              </a>
            </li>
            <li className="text-muted-foreground hover:text-primary">
              <a href="#">
                <Badge variant="outline" className="h-fit px-3 py-1">
                  Design
                </Badge>
              </a>
            </li>
            <li className="text-muted-foreground hover:text-primary">
              <a href="#">
                <Badge variant="outline" className="h-fit px-3 py-1">
                  Development
                </Badge>
              </a>
            </li>
            <li className="text-muted-foreground hover:text-primary">
              <a href="#">
                <Badge variant="outline" className="h-fit px-3 py-1">
                  Marketing
                </Badge>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-20 grid gap-10 md:grid-cols-2">
        <a className="rounded-xl border" href="#">
          <div className="relative p-2">
            <img
              src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="placeholder"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <Badge
              variant="secondary"
              className="bg-background/70 absolute right-4 top-4 px-3 py-1 text-sm backdrop-blur-sm"
            >
              Marketing
            </Badge>
          </div>
          <div className="px-3 pb-4 pt-2">
            <h2 className="mb-1 font-medium">
              How to build a successful brand and business online in 2024
            </h2>
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
                <span className="text-sm font-medium">John Doe</span>
              </div>
              <Badge variant="secondary" className="h-fit">
                10 Min Read
              </Badge>
            </div>
          </div>
        </a>
        <a className="rounded-xl border" href="#">
          <div className="relative p-2">
            <img
              src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <Badge
              variant="secondary"
              className="bg-background/70 absolute right-4 top-4 px-3 py-1 text-sm backdrop-blur-sm"
            >
              E-Commerce
            </Badge>
          </div>
          <div className="px-3 pb-4 pt-2">
            <h2 className="mb-1 font-medium">
              The difference between UI and UX and how to design for both
            </h2>
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
                <span className="text-sm font-medium">Jane Doe</span>
              </div>
              <Badge variant="secondary" className="h-fit">
                14 Min Read
              </Badge>
            </div>
          </div>
        </a>
        <a className="rounded-xl border" href="#">
          <div className="relative p-2">
            <img
              src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <Badge
              variant="secondary"
              className="bg-background/70 absolute right-4 top-4 px-3 py-1 text-sm backdrop-blur-sm"
            >
              UX
            </Badge>
          </div>
          <div className="px-3 pb-4 pt-2">
            <h2 className="mb-1 font-medium">
              Optimizing your website for SEO and getting more traffic
            </h2>
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
                <span className="text-sm font-medium">Jane Smith</span>
              </div>
              <Badge variant="secondary" className="h-fit">
                9 Min Read
              </Badge>
            </div>
          </div>
        </a>
        <a className="rounded-xl border" href="#">
          <div className="relative p-2">
            <img
              src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <Badge
              variant="secondary"
              className="bg-background/70 absolute right-4 top-4 px-3 py-1 text-sm backdrop-blur-sm"
            >
              UX
            </Badge>
          </div>
          <div className="px-3 pb-4 pt-2">
            <h2 className="mb-1 font-medium">
              Optimizing your website for SEO and getting more traffic
            </h2>
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
                <span className="text-sm font-medium">Jane Smith</span>
              </div>
              <Badge variant="secondary" className="h-fit">
                9 Min Read
              </Badge>
            </div>
          </div>
        </a>
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <Badge
              variant="secondary"
              className="bg-background/70 absolute right-4 top-4 px-3 py-1 text-sm backdrop-blur-sm"
            >
              Design
            </Badge>
          </div>
          <div className="flex h-full flex-col justify-between p-4">
            <h2 className="mb-5 text-xl font-semibold">The difference between UI and UX</h2>
            <div className="flex justify-between gap-6 text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                April, 07, 2024
              </span>
              <a href="#" className="flex items-center gap-1">
                Read more
                <ChevronRight className="h-full w-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <Badge
              variant="secondary"
              className="bg-background/70 absolute right-4 top-4 px-3 py-1 text-sm backdrop-blur-sm"
            >
              Design
            </Badge>
          </div>
          <div className="flex h-full flex-col justify-between p-4">
            <h2 className="mb-5 text-xl font-semibold">The difference between UI and UX</h2>
            <div className="flex justify-between gap-6 text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                April, 07, 2024
              </span>
              <a href="#" className="flex items-center gap-1">
                Read more
                <ChevronRight className="h-full w-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <Badge
              variant="secondary"
              className="bg-background/70 absolute right-4 top-4 px-3 py-1 text-sm backdrop-blur-sm"
            >
              Design
            </Badge>
          </div>
          <div className="flex h-full flex-col justify-between p-4">
            <h2 className="mb-5 text-xl font-semibold">The difference between UI and UX</h2>
            <div className="flex justify-between gap-6 text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                April, 07, 2024
              </span>
              <a href="#" className="flex items-center gap-1">
                Read more
                <ChevronRight className="h-full w-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <Badge
              variant="secondary"
              className="bg-background/70 absolute right-4 top-4 px-3 py-1 text-sm backdrop-blur-sm"
            >
              Design
            </Badge>
          </div>
          <div className="flex h-full flex-col justify-between p-4">
            <h2 className="mb-5 text-xl font-semibold">The difference between UI and UX</h2>
            <div className="flex justify-between gap-6 text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                April, 07, 2024
              </span>
              <a href="#" className="flex items-center gap-1">
                Read more
                <ChevronRight className="h-full w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Blog };
