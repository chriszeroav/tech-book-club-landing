import { Starts } from "@/components/app";
import { Button } from "@/components/ui";
import { FC } from "react";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="bg-[url('/pattern-light-bg.svg')] bg-custom-neutral-100 pt-6 pb-20 px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        <img
          src="/logo.svg"
          className="w-[192.86px] h-[36px] object-contain"
          alt="Tech book club"
        />
        <section className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-preset1-mobile bg-text-gradient bg-clip-text text-transparent">
                Join the ultimate tech book club
              </h1>
              <p className="text-preset5 text-custom-neutral-700">
                Turn your reading time into learning time with fellow tech
                enthusiasts. Get curated recommendations, join vibrant
                discussions, and level up your skills one chapter at a time.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Button className="h-16">
                <span className="text-preset6-mobile relative top-0.5">
                  REVIEW MEMBERSHIP OPTIONS
                </span>
                <img
                  src="/icon-arrow-down.svg"
                  alt="icon-arrow-down"
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
                  <p className="text-preset7 text-custom-neutral-700">
                    200+ developers joined already
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[5px] overflow-hidden">
            <img src="/image-hero-mobile.webp" alt="" />
          </div>
        </section>
      </div>
    </header>
  );
};
