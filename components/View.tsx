/* eslint-disable @next/next/no-img-element */
import { BorderBeam } from "./ui/Border";

export function Border() {
  return (
    <div className="relative rounded-xl">
      <img
        src="/hero.png"
        alt="Hero Image"
        className="hidden w-[700px] rounded-[inherit] border object-contain shadow-lg dark:block"
      />
      <img
        src="/hero.png"
        alt="Hero Image"
        className="block w-[700px] rounded-[inherit] border object-contain shadow-lg dark:hidden"
      />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
