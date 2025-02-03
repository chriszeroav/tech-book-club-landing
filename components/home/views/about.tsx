import { FC } from "react";

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-preset2-mobile text-custom-neutral-900">
            Not your average book{" "}
            <span className="relative">
              club
              <img
                src="/pattern-circle.png"
                className="absolute scale-[1.3] top-0.5 left-1"
                alt="pattern-circle"
              />
            </span>
          </h2>
          <p className="text-preset5 text-custom-neutral-700">
            Connect with a community that speaks your language - from{" "}
            <span className="font-semibold">Python</span> to{" "}
            <span className="font-semibold">TypeScript</span> and everything in
            between. Our discussions blend technical depth with practical
            applications.
          </p>
        </div>
        <div className="rounded-[12px] overflow-hidden">
          <img
            src="/image-not-average-mobile.webp"
            alt="image-not-average-mobile"
          />
        </div>
      </div>
    </section>
  );
};
