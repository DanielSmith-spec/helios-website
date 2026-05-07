"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        username: username.toLowerCase().trim(),
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.");
      } else {
        router.push("/workspace");
        router.refresh();
      }
    } catch {
      setError("Đã xảy ra lỗi hệ thống. Vui lòng thử lại.");
    }

    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,20,147,0.08)_0%,_transparent_70%)]"></div>
        <div className="absolute rounded-full blur-[150px] w-[500px] h-[500px] -top-[10%] -right-[10%] bg-pink-500/15 animate-pulse"></div>
        <div className="absolute rounded-full blur-[150px] w-[400px] h-[400px] bottom-[10%] -left-[10%] bg-red-500/10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div className="text-xs font-mono text-pink-500/70 mb-4 tracking-[0.3em] uppercase">Secure Access Portal</div>
          <h1 className="flex flex-col items-center font-display">
            <span className="text-gray-200 text-2xl tracking-widest uppercase mb-1 font-bold">Helios Talent</span>
            <span className="text-brand-gradient text-4xl md:text-5xl uppercase font-black">
              WORKSPACE
            </span>
          </h1>
        </div>

        {/* Card */}
        <div className="bg-[#0f0f0f]/80 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gradient"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-mono mb-2 uppercase tracking-widest text-gray-500">
                Tên Đăng Nhập
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black/60 border border-white/10 text-white rounded-xl px-4 py-3.5 text-sm font-mono focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all placeholder-gray-600"
                placeholder="username"
                required
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-xs font-mono mb-2 uppercase tracking-widest text-gray-500">
                Mật Khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/60 border border-white/10 text-white rounded-xl px-4 py-3.5 text-sm font-mono focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all placeholder-gray-600"
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                <p className="text-red-400 text-xs font-mono">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-gradient text-black font-display uppercase tracking-widest py-4 rounded-xl transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(255,20,147,0.3)] active:scale-[0.98] font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                  Đang Xác Thực...
                </span>
              ) : (
                "Đăng Nhập"
              )}
            </button>
          </form>

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs font-mono text-gray-600">
              Hệ thống quản trị nội bộ Helios Talent TCN
            </p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <span className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_6px_#22c55e]"></span>
                Hệ thống hoạt động
              </span>
              <span className="text-[10px] font-mono text-gray-600">v2.0</span>
            </div>
          </div>
        </div>

        {/* Account hints for testing */}
        <div className="mt-6 text-center">
          <p className="text-[10px] font-mono text-gray-600 leading-relaxed">
            Dev Mode: admin/admin123 • editor/editor123
          </p>
        </div>
      </div>
    </div>
  );
}
