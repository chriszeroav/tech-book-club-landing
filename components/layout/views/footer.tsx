import { FC } from "react";
import { Button } from "@/components/ui";
import { Starts } from "@/components/app";
import { cn } from "@/lib/utils";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer
      className={cn(
        "pt-12 px-4 rounded-t-2xl",
        "bg-[url('/pattern-dark-bg.svg')] bg-custom-neutral-900"
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        <div className="flex flex-col gap-10">
          <h2 className="text-custom-neutral-100 text-preset2-mobile">
            Ready to debug your reading list?
          </h2>
          <div className="flex flex-col gap-6">
            <Button variant="outline" className="h-16 rounded-lg">
              <span className="text-preset6-mobile relative top-0.5">
                REVIEW MEMBERSHIP OPTIONS
              </span>
              <img
                src="/icon-arrow-up.svg"
                alt="icon-arrow-up"
                className="w-6 h-6"
              />
            </Button>
            <div className="flex gap-3 items-center">
              <img
                src="/image-avatars.webp"
                alt="image-avatars"
                className="w-[110px] h-[40px] object-contain"
              />
              <div className="flex flex-col gap-1">
                <Starts number={5} />
                <p className="text-preset7 text-custom-neutral-0">
                  200+ developers joined already
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col gap-4 items-center",
            "py-6 px-8 border-t",
            "border-custom-neutral-700"
          )}
        >
          <p className="text-preset7 text-custom-neutral-0">
            © 2024 – Tech Book Club
          </p>
          <div className="flex gap-6">
            <img src="/logo-bluesky.svg" className="size-6" alt="" />
            <img src="/logo-linkedin.svg" className="size-6" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
