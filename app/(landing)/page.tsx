import Container from "@/components/global/container";
import CTA from "@/components/landing/cta";
import Demo from "@/components/landing/demo";
import FAQ from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Separator className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <Demo />
      <Separator className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <Features />
      <Separator className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <FAQ />
      <Separator className="h-px bg-neutral-200 dark:bg-neutral-800" />
      <CTA />
      <Separator className="h-px bg-neutral-200 dark:bg-neutral-800" />
    </Container>
  );
}
