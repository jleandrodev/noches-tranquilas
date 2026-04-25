import { cn } from "@/lib/utils";

interface AppHeaderProps {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  gradient?: boolean;
  className?: string;
}

export function AppHeader({
  title,
  subtitle,
  right,
  gradient = false,
  className,
}: AppHeaderProps) {
  return (
    <header
      className={cn(
        "px-5 pt-5 pb-7 text-white",
        gradient
          ? "bg-gradient-to-br from-[#217587] to-[#1a5e6e]"
          : "bg-[#217587]",
        "rounded-b-[24px]",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-nunito text-[22px] font-bold leading-tight">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-sm text-white/80">{subtitle}</p>
          )}
        </div>
        {right && <div>{right}</div>}
      </div>
    </header>
  );
}
