/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "./ui/Marque";
 
const reviews = [
  {
    name: "Liya",
    username: "@liyamassa",
    body: "MySQL offers a range of products and cloud services for data management, including MySQL HeatWave for real-time analytics and machine learning. Learn more about MySQL features",
    img: "https://th.bing.com/th?id=OSAAS.CF3B5EE8236922CF7C85C1745DE395A5&w=72&h=72&c=17&rs=1&o=6&dpr=1.3&pid=5.1",
  },
  {
    name: "Sardor",
    username: "@azimov",
    body: "Experienced programmers in any other language an pick up Python very quickly, and beginners find the clean syntax and indentation structure easy to learn",
    img: "/python.jpeg",
  },
  {
    name: "yoy",
    username: "@your",
    body: "Some platforms offer direct hardware support for Java; there are micro controllers that can run Java bytecode in hardware instead of a software Java virtual machine",
    img: "https://th.bing.com/th?id=OSK.92834ee17153d038e8702d8dafeca635&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=1.3&pid=SANGAM",
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
 
const MarqueeDemoVertical = () => {
  return (
    <div className="relative flex h-96 flex-row items-center justify-center overflow-hidden rounded-lg border bg-background sm:px-20 md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
};
 
export default MarqueeDemoVertical;
