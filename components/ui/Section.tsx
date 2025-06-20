import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  sectionClassName?: string;
  className?: string;
  title: string;
  children?: React.ReactNode;
}

export default function Section({ id, sectionClassName, className, title, children }: SectionProps) {
  return (
    <section id={id} className={cn("w-full p-6 flex flex-col items-center justify-center", sectionClassName)}>
      <div className={cn("flex flex-col items-center justify-center w-full", className)}>
        <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
        {children}
      </div>
    </section>
  );
}