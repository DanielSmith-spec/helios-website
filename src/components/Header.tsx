import Link from "next/link";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-start md:items-center text-xs tracking-widest font-mono uppercase bg-gradient-to-b from-black/90 to-transparent z-[60] pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/" className="block">
            <div className="text-2xl font-display tracking-widest text-brand-gradient drop-shadow-md">
              HELIOS TALENT TCN
            </div>
            <div className="mt-1 text-gray-400 font-mono">TikTok Channel Network</div>
          </Link>
        </div>
      </header>
      
      {/* Navigation Menu contains the interactive right side */}
      <NavigationMenu />

      {/* Decorative Side Lines */}
      <div className="fixed top-1/2 left-6 transform -translate-y-1/2 hidden lg:block z-[40] pointer-events-none">
        <div className="w-px h-40 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-50"></div>
      </div>
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 hidden lg:block z-[40] pointer-events-none">
        <div className="w-px h-40 bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-50"></div>
      </div>
    </>
  );
}
