import {
  About,
  Options,
  Services,
  Steps,
  Testimonials,
} from "@/components/home";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Services />
      <About />
      <Steps />
      <Options />
      <Testimonials />
    </main>
  );
}
