import { Starts } from "@/components/app";
import { FC } from "react";

interface TestimonialsProps {}

export const Testimonials: FC<TestimonialsProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        <Starts number={5} startWidth={28} className="gap-1" />
        <p className="text-preset3-mobile text-custom-neutral-900">
          "This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!"
        </p>
        <p className="text-preset5 text-custom-neutral-700">
          Sarah Chen, Software Architect
        </p>
      </div>
    </section>
  );
};
