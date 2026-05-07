"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("00:00:00");
  const { data: session } = useSession();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("vi-VN", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Header Info Area (Fixed top right for desktop) */}
      <div className="fixed top-0 right-0 p-6 flex items-center gap-6 pointer-events-auto z-[60]">
        <div className="text-right hidden sm:block pointer-events-none">
          <div className="text-gray-300 font-mono text-xs uppercase tracking-widest">Đồng hành - Hỗ trợ - Tỏa sáng</div>
          <div id="clock" className="text-white font-bold mt-1 tracking-[0.2em] font-mono text-xs">
            {time}
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="text-white hover:text-pink-500 transition-colors focus:outline-none flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer ml-4"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-8 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[54] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Side Menu */}
      <nav
        className={`fixed top-0 right-0 h-screen w-[85vw] max-w-md bg-[#0a0a0a]/95 backdrop-blur-xl z-[55] flex flex-col justify-center px-8 sm:px-12 transform transition-transform duration-500 ease-out border-l border-white/10 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-12 border-b border-gray-800 pb-4 w-full">
          Sơ đồ trạm
        </div>
        <ul className="flex flex-col items-start gap-6 md:gap-8 w-full">
          <li><Link href="/" onClick={toggleMenu} className="menu-link font-display text-3xl md:text-4xl uppercase tracking-widest inline-block">Trang chủ</Link></li>
          <li><Link href="/gioi-thieu" onClick={toggleMenu} className="menu-link font-display text-3xl md:text-4xl uppercase tracking-widest inline-block">Giới thiệu</Link></li>
          <li><Link href="/linh-vuc-hoat-dong" onClick={toggleMenu} className="menu-link font-display text-3xl md:text-4xl uppercase tracking-widest inline-block">Lĩnh vực hoạt động</Link></li>
          <li><Link href="/blog" onClick={toggleMenu} className="menu-link font-display text-3xl md:text-4xl uppercase tracking-widest inline-block">Blog</Link></li>
          <li><Link href="/tin-tuc-su-kien" onClick={toggleMenu} className="menu-link font-display text-3xl md:text-4xl uppercase tracking-widest inline-block">Tin tức sự kiện</Link></li>
          <li><Link href="/lien-he" onClick={toggleMenu} className="menu-link font-display text-3xl md:text-4xl uppercase tracking-widest inline-block">Liên hệ</Link></li>
          <li><Link href="/tuyen-dung" onClick={toggleMenu} className="menu-link font-display text-3xl md:text-4xl uppercase tracking-widest inline-block">Tuyển dụng</Link></li>
          <li><Link href="/workspace" onClick={toggleMenu} className="menu-link font-display text-3xl md:text-4xl uppercase tracking-widest inline-block text-accent">Workspace</Link></li>
        </ul>

        {/* Auth Section */}
        <div className="mt-12 pt-6 border-t border-gray-800 w-full">
          {session?.user ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center">
                  <span className="text-pink-500 text-xs font-bold font-mono uppercase">{(session.user as any).role === 'admin' ? 'A' : 'C'}</span>
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{session.user.name}</p>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{(session.user as any).role === 'admin' ? 'Quản trị viên' : 'Biên tập viên'}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full mt-2 bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 hover:border-red-500/30 font-mono text-xs uppercase tracking-widest py-2.5 rounded-lg transition-all"
              >
                Đăng Xuất
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={toggleMenu}
              className="block w-full text-center bg-brand-gradient text-black font-display uppercase tracking-widest py-3 rounded-lg hover:opacity-90 transition-opacity text-sm font-bold"
            >
              Đăng Nhập
            </Link>
          )}
        </div>

        <div className="mt-6 text-xs font-mono text-gray-500">
          <span className="block text-brand-gradient mb-2">Truyền tín hiệu:</span>
          <a href="mailto:heliostalentofficial@gmail.com" className="hover:text-white transition-colors">
            heliostalentofficial@gmail.com
          </a>
        </div>
      </nav>
    </>
  );
}
