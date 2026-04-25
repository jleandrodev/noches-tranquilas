import { BottomNav } from "@/components/layout/BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto min-h-screen max-w-[430px] bg-[#f0f5f7] pb-24 overflow-x-hidden">
      {children}
      <BottomNav />
    </div>
  );
}
