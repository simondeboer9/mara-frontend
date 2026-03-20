import LoginCard from "@/components/auth/LoginCard";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a4a78]">
      {/* achtergrond placeholder */}
      <div className="absolute inset-0 bg-[#0a4a78]" />

      {/* decoratieve achtergrondlaag */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_#2b7db0,_transparent_35%),radial-gradient(circle_at_bottom_right,_#1b5f8f,_transparent_25%)]" />
      </div>

      {/* Mara placeholder rechts */}
      <div className="absolute bottom-0 right-6 hidden h-[70vh] w-[320px] rounded-t-[160px] rounded-b-none border-4 border-[#0f3550] bg-[#f4f1e8] shadow-2xl lg:block">
        <div className="flex h-full items-center justify-center px-6 text-center text-lg font-semibold text-[#0f3550]">
          Mara illustratie
        </div>
      </div>

      {/* Login card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <LoginCard />
      </div>
    </main>
  );
}
