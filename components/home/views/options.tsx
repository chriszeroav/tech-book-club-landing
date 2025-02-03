import { FC } from "react";
import { Button } from "@/components/ui";
import { OptionItem } from "@/components/app";

interface OptionsProps {}

export const Options: FC<OptionsProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        <h2 className="text-preset2-mobile text-custom-neutral-900">
          Membership options
        </h2>
        <div className="grid gap-6">
          <OptionItem
            title="Starter"
            price={19}
            period="/month"
            advantages={["1 book/month", "Online forums"]}
          />

          <OptionItem
            title="Starter"
            price={29}
            period="/month"
            relevant={true}
            advantages={["2 books/month", "Virtual meetups"]}
          />

          <OptionItem
            title="Enterprise"
            price="Custom"
            advantages={["Team access", "Private sessions"]}
            buttonText="Talk to us"
          />
        </div>
      </div>
    </section>
  );
};
