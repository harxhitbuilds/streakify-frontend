import { Badge } from "../ui/badge";

export default function SectionHeading({ heading }: { heading: string }) {
  return (
    <Badge className="relative rounded-full bg-green-500/10 px-4 py-1 text-[10px] text-green-500 md:text-xs">
      {heading}
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-linear-to-r from-transparent via-green-500 to-transparent" />
    </Badge>
  );
}
