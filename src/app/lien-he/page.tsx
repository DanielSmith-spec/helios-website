"use client";

import Image from "next/image";

export default function LienHe() {
  return (
    <>
      <main className="relative z-10 pt-32 pb-20 min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-mono text-yellow-500 mb-4 tracking-[0.3em] uppercase">Mạng lưới kết nối</div>
            <h1 className="flex flex-col items-center justify-center font-display mb-6">
              <span className="text-gray-200 text-3xl md:text-5xl tracking-widest uppercase mb-1 font-bold">Gửi Tín Hiệu</span>
              <span className="text-brand-gradient text-[4rem] md:text-[7rem] leading-tight uppercase drop-shadow-[0_0_20px_rgba(255,20,147,0.3)] mt-2 font-black">
                ĐẾN HELIOS
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Dù bạn là một tài năng trẻ đang tìm kiếm bệ phóng hay một thương hiệu lớn cần giải pháp truyền thông, chúng tôi luôn sẵn sàng tiếp nhận tín hiệu.
            </p>
          </div>
        </div>

        {/* Marquee Văn Hóa & Không Gian */}
        <div className="w-full mb-32 relative">
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <h3 className="text-2xl font-display uppercase tracking-widest text-white border-l-4 border-pink-500 pl-4">Văn Hóa & Không Gian</h3>
          </div>
          
          <div className="marquee-container py-4">
            <div className="marquee-content">
              {/* Set 1 */}
              <div className="shrink-0 w-[280px] sm:w-[400px] md:w-[480px] aspect-video rounded-xl overflow-hidden group border border-white/10 relative">
                                <Image src="/images/contact/studio-01.svg" alt="Mega Studio" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="font-mono text-xs text-white uppercase tracking-wider">Mega Studio</span></div>
              </div>
              <div className="shrink-0 w-[280px] sm:w-[400px] md:w-[480px] aspect-video rounded-xl overflow-hidden group border border-white/10 relative">
                <Image src="/images/contact/studio-02.svg" alt="Setup Ánh Sáng" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="font-mono text-xs text-white uppercase tracking-wider">Setup Ánh Sáng</span></div>
              </div>
              <div className="shrink-0 w-[280px] sm:w-[400px] md:w-[480px] aspect-video rounded-xl overflow-hidden group border border-white/10 relative">
                <Image src="/images/contact/studio-03.svg" alt="Hậu trường Livestream" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="font-mono text-xs text-white uppercase tracking-wider">Hậu trường Livestream</span></div>
              </div>
              <div className="shrink-0 w-[280px] sm:w-[400px] md:w-[480px] aspect-video rounded-xl overflow-hidden group border border-white/10 relative">
                <Image src="/images/contact/studio-04.svg" alt="Đội Ngũ Sáng Tạo" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="font-mono text-xs text-white uppercase tracking-wider">Đội Ngũ Sáng Tạo</span></div>
              </div>
              {/* Set 2 */}
              <div className="shrink-0 w-[280px] sm:w-[400px] md:w-[480px] aspect-video rounded-xl overflow-hidden group border border-white/10 relative">
                                <Image src="/images/contact/studio-01.svg" alt="Mega Studio" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="font-mono text-xs text-white uppercase tracking-wider">Mega Studio</span></div>
              </div>
              <div className="shrink-0 w-[280px] sm:w-[400px] md:w-[480px] aspect-video rounded-xl overflow-hidden group border border-white/10 relative">
                <Image src="/images/contact/studio-02.svg" alt="Setup Ánh Sáng" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="font-mono text-xs text-white uppercase tracking-wider">Setup Ánh Sáng</span></div>
              </div>
              <div className="shrink-0 w-[280px] sm:w-[400px] md:w-[480px] aspect-video rounded-xl overflow-hidden group border border-white/10 relative">
                <Image src="/images/contact/studio-03.svg" alt="Hậu trường Livestream" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="font-mono text-xs text-white uppercase tracking-wider">Hậu trường Livestream</span></div>
              </div>
              <div className="shrink-0 w-[280px] sm:w-[400px] md:w-[480px] aspect-video rounded-xl overflow-hidden group border border-white/10 relative">
                <Image src="/images/contact/studio-04.svg" alt="Đội Ngũ Sáng Tạo" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"><span className="font-mono text-xs text-white uppercase tracking-wider">Đội Ngũ Sáng Tạo</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* THÔNG TIN LIÊN HỆ */}
            <div className="story-block p-8 md:p-12 rounded-2xl w-full relative overflow-hidden bg-[#0f0f0f]/70 border border-white/5 backdrop-blur-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              {/* Viền trái đỏ */}
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>

              <h2 className="text-3xl font-display uppercase tracking-wide text-white mb-8 border-b border-white/10 pb-6">Thông Tin Liên Hệ</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/30 text-red-500 shadow-[0_0_15px_rgba(255,51,51,0.2)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider font-display">Trụ sở chính</h4>
                    <p className="text-gray-400 mt-2 leading-relaxed">97A, Đường Bình Thới, Phường 11,<br/>Quận 11, TP. Hồ Chí Minh</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-500/30 text-yellow-500 shadow-[0_0_15px_rgba(255,204,0,0.2)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider font-display">Chi nhánh 2</h4>
                    <p className="text-gray-400 mt-2 leading-relaxed">Thành Phố Quy Nhơn<br/><span className="text-xs text-yellow-500 font-mono">(31, Đường Thanh Niên, Thành Phố Quy Nhơn, Tỉnh Gia Lai)</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0 border border-pink-500/30 text-pink-500 shadow-[0_0_15px_rgba(255,20,147,0.2)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.95l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider font-display">Hotline / Zalo</h4>
                    <a href="tel:0843157010" className="inline-block text-xl text-brand-gradient font-bold tracking-wider mt-2 hover:opacity-80 transition-opacity">0843 157 010</a>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/20 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider font-display">Hộp thư điện tử</h4>
                    <a href="mailto:heliostalentofficial@gmail.com" className="inline-block text-gray-400 mt-2 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">heliostalentofficial@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* MẠNG XÃ HỘI */}
            <div className="w-full">
              <div className="text-xs font-mono text-gray-500 mb-6 tracking-[0.3em] uppercase">Hệ sinh thái Media</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://www.tiktok.com/@helios.talent" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-8 bg-[#111] rounded-2xl border border-white/5 hover:bg-gradient-to-br hover:from-[#ff1493]/20 hover:to-transparent hover:border-[#ff1493]/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#ff1493] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-[#ff1493] group-hover:drop-shadow-[0_0_10px_rgba(255,20,147,0.8)]" fill="currentColor"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
                  <span className="font-display text-xl uppercase tracking-widest text-white relative z-10">TikTok</span>
                  <span className="text-xs text-gray-500 font-mono mt-2 relative z-10 group-hover:text-gray-300">@helios.talent</span>
                </a>
                <a href="https://www.facebook.com/helios.talents" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-8 bg-[#111] rounded-2xl border border-white/5 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-transparent hover:border-blue-600/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                  <span className="font-display text-xl uppercase tracking-widest text-white relative z-10">Facebook</span>
                  <span className="text-xs text-gray-500 font-mono mt-2 relative z-10 group-hover:text-gray-300">@helios.talents</span>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-8 bg-[#111] rounded-2xl border border-white/5 hover:bg-gradient-to-br hover:from-red-600/20 hover:to-transparent hover:border-red-600/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-red-600 group-hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                  <span className="font-display text-xl uppercase tracking-widest text-white relative z-10">YouTube</span>
                  <span className="text-xs text-gray-500 font-mono mt-2 relative z-10 group-hover:text-gray-300">Helios Channel</span>
                </a>
                <a href="tel:0843157010" className="flex flex-col items-center justify-center p-8 bg-[#111] rounded-2xl border border-white/5 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-transparent hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
                  <span className="font-display text-xl uppercase tracking-widest text-white relative z-10">Zalo OA</span>
                  <span className="text-xs text-gray-500 font-mono mt-2 relative z-10 group-hover:text-gray-300">Nhắn tin ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .marquee-container {
          overflow: hidden; display: flex; width: 100vw; position: relative;
          left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw;
        }
        .marquee-content {
          display: flex; gap: 1.5rem; padding-left: 1.5rem;
          animation: marqueeRight 40s linear infinite;
        }
        .marquee-container:hover .marquee-content { animation-play-state: paused; }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </>
  );
}
