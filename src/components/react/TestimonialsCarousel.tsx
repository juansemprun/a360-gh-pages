import { cn } from '@/lib/utils';
import { Marquee } from '@/components/ui/react/marquee';

// const reviews = [
//   {
//     name: 'Jack',
//     username: '@jack',
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: 'https://avatar.vercel.sh/jack',
//   },
//   {
//     name: 'Jill',
//     username: '@jill',
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: 'https://avatar.vercel.sh/jill',
//   },
//   {
//     name: 'John',
//     username: '@john',
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: 'https://avatar.vercel.sh/john',
//   },
//   {
//     name: 'Jane',
//     username: '@jane',
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: 'https://avatar.vercel.sh/jane',
//   },
//   {
//     name: 'Jenny',
//     username: '@jenny',
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: 'https://avatar.vercel.sh/jenny',
//   },
//   {
//     name: 'James',
//     username: '@james',
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: 'https://avatar.vercel.sh/james',
//   },
// ];

const reviews = [
  {
    id: 1,
    name: 'Alexandre Suon',
    client: 'Henkan & Partners',
    body: 'Very impressed by this new solution, which is innovative and very quick to implement. It’s a great alternative for e-commerce teams looking for an option different from the major players in the market.',
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    id: 2,
    name: 'Christophe Chaudet',
    client: 'Unnest',
    body: 'I can confidently say the team is responsive and attentive to feedback from clients and partners, constantly evolving the solution and adapting to users’ needs. Support is a major positive. It’s a tool nearly as powerful as ContentSquare (at least for basic features) but with pricing almost 10x lower.',
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    id: 3,
    name: 'Christophe Chaudet',
    client: 'Unnest',
    body: 'This tool is almost as powerful as ContentSquare (in its basic functions) but at nearly 10x lower pricing. The page analysis extension is also very powerful.',
    img: 'https://avatar.vercel.sh/john',
  },
  {
    id: 4,
    name: 'Christophe Chaudet',
    client: 'Unnest',
    body: 'A great alternative to Contentsquare, with a set of advanced features and a much cheaper license. It adapts to every company and sector. The license includes all future product updates at no extra cost, as well as ongoing team support throughout the contract. The tool is truly worth it.',
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    id: 5,
    name: 'Christophe Chaudet',
    client: 'Eskimoz',
    body: 'Thank you Robin Aubry ✔️ for introducing me to this fantastic tool :)\n\nThanks to this, I can now thoroughly audit websites and identify:\n- Why visitors aren’t buying\n- Opportunities for new conversions\n- How to improve visitor navigation experience\n\n...and much more.',
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    id: 6,
    name: 'Emma Lombard',
    client: 'Business & Decision',
    body: 'Our partnership with Air360 allows us to offer clients in-depth insights into their user journeys and activate high-impact optimization strategies. With Air360’s power and our CRO expertise, we turn data into strategic decisions and tangible results.',
    img: 'https://avatar.vercel.sh/james',
  },
  {
    id: 7,
    name: 'Fabrice Ruer',
    client: 'Business & Decision',
    body: 'We are glad to have chosen Air360 in 2023—it has become a trusted partner. The tool is simple and fast for UX analysis, highly appreciated by our teams.\n\nThe Air360 team listens and responds very quickly; it’s a pleasure working with them. I highly recommend it.',
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    id: 8,
    name: 'Guillaume Le Roux',
    client: 'D.CLICKS',
    body: 'Thank you so much to the whole team—Florent Defontis, Robin Aubry ✔️, Julien Zanni, Manuel LOPEZ—it’s a joy working alongside you!\nThis is a tool I use daily with my clients at DCLICX to understand user behavior and optimize journeys and conversions.\nReliable data and ease of use with a product that fits my needs—Air360 is essential for building and deploying a strong CRO strategy 💪',
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    id: 9,
    name: 'Jessica Lemeitour',
    client: 'Dorcel',
    body: 'This tool is essential for managing an e-commerce site. It allowed for continuous improvement, both with major upgrades and quick wins, always improving client experience, conversion rate, and user journeys.\n\nThe interface is easy to use, and the main strength is the highly involved and supportive professional team that supports us weekly.\n\nAdditionally, the platform is constantly evolving, enabling even deeper analysis. The roadmap is clear and the team welcomes our feedback. I highly recommend it.',
    img: 'https://avatar.vercel.sh/john',
  },
  {
    id: 10,
    name: 'Manon Hochard',
    client: 'Henkan & Partners',
    body: 'We work with Air360 to support shared clients, and we’re very pleased with this cooperation. The Air360 teams are always available and responsive, offering ongoing support that makes our daily work easier.\nAir360’s features allow us to provide clients with precise insights and continuously optimize user experience efficiently.\nWorking with Air360 is a real asset for our business and our clients’ satisfaction.',
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    id: 11,
    name: 'Manon Hochard',
    client: 'Henkan & Partners',
    body: 'Working with Air360 means being able to analyze user journeys on client sites, understand interactions on key pages, and provide relevant optimization recommendations. It’s also about working with a passionate team that’s always available to support us.',
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    id: 12,
    name: 'Manon Hochard',
    client: 'Henkan & Partners',
    body: 'Thanks to the Air360 team for their steady support and valuable advice for getting started with the tool.',
    img: 'https://avatar.vercel.sh/james',
  },
  {
    id: 13,
    name: 'Quentin Bernard',
    client: 'Arquen',
    body: 'Air360 lets us obtain reliable quantitative data flexibly to accurately analyze user behavior.',
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    id: 14,
    name: 'Quentin Bernard',
    client: 'Arquen',
    body: 'Air360 is a comprehensive UX analytics solution, with an interface allowing analysis of user journeys in just a few clicks. Thanks to advanced features like conversion funnels and sunbursts, it quickly identifies friction points and improvement opportunities. Its page analysis extension offers precise zoning, while session replays give concrete insight into user behavior. Thanks to its ability to provide retroactive, unsampled data, Air360 helps UX and digital teams, using social science methods, make informed decisions for ongoing online experience optimization.',
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    id: 15,
    name: 'Roman Tournier',
    client: 'Yuri & Neil',
    body: 'Thanks to our collaboration with Air360, we’ve raised our analysis and optimization abilities to a new level. Together, we combine sharp analytics insights with innovative and creative execution, ensuring highly effective optimization campaigns and innovative strategies.',
    img: 'https://avatar.vercel.sh/john',
  },
  {
    id: 16,
    name: 'Salomé Klein',
    client: 'Croix Rouge',
    body: 'A huge thanks to Robin Aubry ✔️ and Guillaume Le Roux for their valuable support, availability, and insightful discussions—it’s a pleasure working with you on this powerful tool! 🚀With Air360, I can explore data differently, going beyond classic metrics to better understand interactions and improve user experience every day ✨👩‍💻',
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    id: 17,
    name: 'Andre Maurer',
    client: 'Asendia',
    body: 'We needed a tool that could accelerate our digital transformation and help us understand our user journeys. Air360 is exactly what we were looking for.',
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    id: 18,
    name: 'Jonny Longden,',
    client: 'Journey Further',
    body: 'With Air360 we get faster insights, helping customers make a positive impact on CRO and revenue. The solution enables our team to capture all data points automatically so we can focus on improvements without needing to overhaul their site.',
    img: 'https://avatar.vercel.sh/james',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, body }: { img: string; name: string; body: string }) => {
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
        </div>
      </div>
      <blockquote className="mt-4 line-clamp-4 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative mt-16 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:80s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:80s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
