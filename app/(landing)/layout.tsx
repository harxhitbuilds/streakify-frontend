import Footer from "@/components/navigations/footer";
import Navbar from "@/components/navigations/nav";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Separator className="h-px bg-neutral-200 dark:bg-neutral-800" />
      {children}
      <Footer />
    </>
  );
}
