import Link from "next/link";
import BoxReveal from "./ui/box-reval";

import { Button } from "@/components/ui/button";

export async function Landing() {
  return (
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Amazing Portfolio<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
         Developer{" "}
          <span className="text-[#5046e6]">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; 
            <Link href={'/'} className="font-semibold text-[#5046e6]"> React</Link>,
            <Link href={'/'} className="font-semibold text-[#5046e6]"> Typescript</Link>,
            <Link href={'/'} className="font-semibold text-[#5046e6]"> Tailwind CSS</Link>,
            and
            <Link href={'/'} className="font-semibold text-[#5046e6]"> Framer Motion</Link>
            . <br />
            -&gt; <Link href={''}>GitHub</Link> <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal>
    </div>
  );
}
