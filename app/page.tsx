import { Button } from "@/components/ui";

export default function Home() {
  const services = [
    "Monthly curated tech reads selected by industry experts",
    "Virtual and in-person meetups for deep-dive discussions",
    "Early access to new tech book releases",
    "Author Q&A sessions with tech thought leaders",
  ];

  const steps = [
    "Choose your membership tier",
    "Get your monthly book selection",
    "Join our discussion forums",
    "Attend exclusive meetups",
  ];

  return (
    <main className="flex flex-col gap-16">
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
                    <div className="flex">
                      {Array.from({ length: 5 }).map((item, index) => (
                        <img
                          key={index}
                          src="/icon-star.svg"
                          alt="icon-start"
                          className="size-6"
                        />
                      ))}
                    </div>
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
                  alt=""
                />
              </span>
            </h2>
            <p className="text-preset5 text-custom-neutral-700">
              Connect with a community that speaks your language - from{" "}
              <span className="font-semibold">Python</span> to{" "}
              <span className="font-semibold">TypeScript</span> and everything
              in between. Our discussions blend technical depth with practical
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

      <section className="px-4">
        <div className="max-w-7xl mx-auto w-full bg-[url('/pattern-light-bg.svg')] bg-custom-neutral-100 py-14 px-4 rounded-[12px] relative overflow-hidden">
          <div className="flex flex-col gap-8 relative z-10">
            <h2 className="text-preset2-mobile text-custom-neutral-900">
              Your tech reading journey
            </h2>
            <ul className="flex flex-col gap-8">
              {steps.map((item, index) => (
                <li key={index} className="flex flex-col gap-5">
                  <p className="size-8 border-2 border-custom-neutral-900 rounded-[4px] text-preset6-mobile flex items-center justify-center">
                    <span className="relative top-0.5">{index + 1}</span>
                  </p>
                  <p className="text-preset6-mobile text-custom-neutral-900">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/pattern-glow.svg"
            className="absolute -bottom-16 -right-32 scale-150"
            alt="pattern-glow"
          />
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
          <h2 className="text-preset2-mobile text-custom-neutral-900">
            Membership options
          </h2>
          <div className="grid gap-6">
            <div className="bg-custom-neutral-0 rounded-[8px] border border-custom-neutral-200 p-6 relative">
              <div className="flex flex-col gap-8 relative">
                <div className="flex flex-col gap-6">
                  <h3 className="text-preset4 text-custom-neutral-900">
                    Starter
                  </h3>
                  <p className="text-preset3 text-custom-neutral-900 inline-flex gap-2 items-center">
                    $19
                    <span className="text-preset5 text-custom-neutral-700">
                      /month
                    </span>
                  </p>
                  <div className="h-[1px] bg-custom-neutral-200" />
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-3">
                      <img
                        className="size-6"
                        src="/icon-check.svg"
                        alt="icon-check"
                      />
                      <span className="text-preset-5 text-custom-neutral-700">
                        1 book/month
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img
                        className="size-6"
                        src="/icon-check.svg"
                        alt="icon-check"
                      />
                      <span className="text-preset-5 text-custom-neutral-700">
                        Online forums
                      </span>
                    </li>
                  </ul>
                </div>
                <Button className="h-14 rounded-[8px]">
                  <span className="text-preset6-mobile text-custom-neutral-900">
                    SUBSCRIBE NOW
                  </span>
                </Button>
              </div>
            </div>

            <div className="bg-custom-neutral-100 rounded-[8px] border border-custom-neutral-200 p-6 relative overflow-hidden">
              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex flex-col gap-6">
                  <h3 className="text-preset4 text-custom-neutral-900">Pro</h3>
                  <p className="text-preset3 text-custom-neutral-900 inline-flex gap-2 items-center">
                    $29
                    <span className="text-preset5 text-custom-neutral-700">
                      /month
                    </span>
                  </p>
                  <div className="h-[1px] bg-custom-neutral-200" />
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-3">
                      <img
                        className="size-6"
                        src="/icon-check.svg"
                        alt="icon-check"
                      />
                      <span className="text-preset-5 text-custom-neutral-700">
                        2 book/month
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img
                        className="size-6"
                        src="/icon-check.svg"
                        alt="icon-check"
                      />
                      <span className="text-preset-5 text-custom-neutral-700">
                        Virtual meetups
                      </span>
                    </li>
                  </ul>
                </div>
                <Button className="h-14 rounded-[8px]">
                  <span className="text-preset6-mobile text-custom-neutral-900">
                    SUBSCRIBE NOW
                  </span>
                </Button>
              </div>
              <img
                src="/pattern-glow.svg"
                className="absolute -bottom-40 -right-32 scale-150"
                alt="pattern-glow"
              />
            </div>

            <div className="bg-custom-neutral-0 rounded-[8px] border border-custom-neutral-200 p-6 relative">
              <div className="flex flex-col gap-8 relative">
                <div className="flex flex-col gap-6">
                  <h3 className="text-preset4 text-custom-neutral-900">
                    Enterprise
                  </h3>
                  <p className="text-preset3 text-custom-neutral-900 inline-flex gap-2 items-center">
                    Custom
                  </p>
                  <div className="h-[1px] bg-custom-neutral-200" />
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-3">
                      <img
                        className="size-6"
                        src="/icon-check.svg"
                        alt="icon-check"
                      />
                      <span className="text-preset-5 text-custom-neutral-700">
                        Team access
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <img
                        className="size-6"
                        src="/icon-check.svg"
                        alt="icon-check"
                      />
                      <span className="text-preset-5 text-custom-neutral-700">
                        Private sessions
                      </span>
                    </li>
                  </ul>
                </div>
                <Button className="h-14 rounded-[8px]">
                  <span className="text-preset6-mobile text-custom-neutral-900">
                    TALK TO US
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src="/icon-star.svg"
                alt="icon-start"
                className="size-7"
              />
            ))}
          </div>
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

      <footer className="bg-[url('/pattern-dark-bg.svg')] bg-custom-neutral-900 pt-12 px-4 rounded-t-[16px]">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
          <div className="flex flex-col gap-10">
            <h2 className="text-custom-neutral-100 text-preset2-mobile">
              Ready to debug your reading list?
            </h2>
            <div className="flex flex-col gap-6">
              <Button variant="outline" className="h-16 rounded-[8px]">
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
                  <div className="flex">
                    {Array.from({ length: 5 }).map((item, index) => (
                      <img
                        key={index}
                        src="/icon-star.svg"
                        alt="icon-start"
                        className="size-6"
                      />
                    ))}
                  </div>
                  <p className="text-preset7 text-custom-neutral-0">
                    200+ developers joined already
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-8 border-t border-custom-neutral-700 flex flex-col gap-4 items-center">
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
    </main>
  );
}
