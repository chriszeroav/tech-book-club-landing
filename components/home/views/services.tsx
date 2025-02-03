import { FC } from "react";

interface ServicesProps {}

export const Services: FC<ServicesProps> = () => {
  const services = [
    "Monthly curated tech reads selected by industry experts",
    "Virtual and in-person meetups for deep-dive discussions",
    "Early access to new tech book releases",
    "Author Q&A sessions with tech thought leaders",
  ];

  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-preset2-mobile text-custom-neutral-900">
            Read together, grow together
          </h2>
          <ul className="flex flex-col gap-4">
            {services.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <img
                  className="size-7"
                  src="/icon-check.svg"
                  alt="icon-check"
                />
                <span className="text-preset-5 text-custom-neutral-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[12px] overflow-hidden">
          <img
            src="/image-read-together-mobile.webp"
            alt="image-read-together-mobile"
          />
        </div>
      </div>
    </section>
  );
};
