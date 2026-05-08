"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TinTucSuKien() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Chuyển đổi màu sắc vầng hào quang mượt mà theo thao tác cuộn (Scrub)
      const glowBase = document.getElementById('glow-base');
      const glowAwards = document.getElementById('glow-awards');
      const glowCulture = document.getElementById('glow-culture');

      // Fade sang Vàng khi cuộn vào vùng Giải thưởng
      gsap.timeline({
        scrollTrigger: {
          trigger: "#awards-section",
          start: "top 80%",
          end: "top 20%",
          scrub: true
        }
      })
      .to(glowBase, { opacity: 0, duration: 1 }, 0)
      .to(glowAwards, { opacity: 1, duration: 1 }, 0);

      // Fade sang Hồng khi cuộn vào vùng Văn hóa
      gsap.timeline({
        scrollTrigger: {
          trigger: "#culture-section",
          start: "top 80%",
          end: "top 20%",
          scrub: true
        }
      })
      .to(glowAwards, { opacity: 0, duration: 1 }, 0)
      .to(glowCulture, { opacity: 1, duration: 1 }, 0);

      // Fade về lại Đỏ khi cuộn vào vùng Video (On Air)
      gsap.timeline({
        scrollTrigger: {
          trigger: "#video-section",
          start: "top 80%",
          end: "top 20%",
          scrub: true
        }
      })
      .to(glowCulture, { opacity: 0, duration: 1 }, 0)
      .to(glowBase, { opacity: 1, duration: 1 }, 0);

      // 2. Logic Cuộn Ngang (Horizontal Pinning)
      const horizontalSections = gsap.utils.toArray<HTMLElement>('.horizontal-section');

      horizontalSections.forEach((sec) => {
        const wrapper = sec.querySelector('.horizontal-scroll-wrapper') as HTMLElement;
        if (!wrapper) return;
        
        const getScrollAmount = () => -(wrapper.scrollWidth - window.innerWidth);

        gsap.to(wrapper, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            pin: true,           // CHỐT TRANG!
            scrub: 1,            // Di chuyển mượt mà bám sát độ lăn chuột
            end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Nền Hào quang đổi màu */}
      <div id="glow-base" className="global-glow" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 51, 51, 0.1), transparent 70%)" }}></div>
      <div id="glow-awards" className="global-glow opacity-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 204, 0, 0.15), transparent 70%)" }}></div>
      <div id="glow-culture" className="global-glow opacity-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 20, 147, 0.15), transparent 70%)" }}></div>

      <main className="relative z-10 overflow-x-clip">
        
        {/* HERO SECTION */}
        <section className="h-screen w-full flex flex-col justify-center items-center px-6 relative">
          <div className="text-xs font-mono text-pink-500 mb-4 tracking-[0.3em] uppercase animate-pulse">Cuộn để dấn thân</div>
          <h1 className="flex flex-col font-display mb-6 items-center justify-center text-center">
            <span className="text-gray-200 text-3xl md:text-5xl tracking-widest uppercase mb-1 font-bold">Dấu ấn</span>
            <span className="text-brand-gradient text-[5rem] md:text-[8rem] leading-none uppercase drop-shadow-[0_0_30px_rgba(255,20,147,0.4)] font-black">
              THỜI GIAN
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl text-center">
            Không click. Không chờ đợi. Lăn chuột để trôi theo những kỷ nguyên phát triển, giải thưởng danh giá và khoảnh khắc rực rỡ nhất của Helios.
          </p>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-[1px] h-24 bg-gradient-to-b from-pink-500 to-transparent"></div>
          </div>
        </section>

        {/* CHƯƠNG 1: GIẢI THƯỞNG */}
        <section id="awards-section" className="horizontal-section relative z-20">
          <div className="horizontal-scroll-wrapper">
            {/* Title Block */}
            <div className="w-[80vw] md:w-[40vw] h-full flex flex-col justify-center flex-shrink-0 pr-10">
              <div className="text-xs font-mono text-yellow-500 mb-4 tracking-[0.3em] uppercase">01 / Tự Hào</div>
              <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-6 leading-none">Bảng Vàng <br/><span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(255,204,0,0.5)]">Danh Vọng</span></h2>
              <p className="text-gray-400 font-light leading-relaxed">Những chiếc cúp danh giá từ TikTok và các đối tác truyền thông minh chứng cho sự nỗ lực không ngừng nghỉ của hệ sinh thái Helios Talent.</p>
            </div>

            <div className="h-card group">
              <Image src="/images/events/awards/award-01.svg" alt="Top 10 MCN" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl text-yellow-400 uppercase tracking-wide">Top 10 MCN Xuất Sắc 2026</h3>
                <p className="text-gray-300 mt-2 font-mono text-sm">Gala TikTok Việt Nam</p>
              </div>
            </div>

            <div className="h-card group">
              <Image src="/images/events/awards/award-02.svg" alt="Mega Live" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl text-yellow-400 uppercase tracking-wide">Mega Live Đột Phá Doanh Thu</h3>
                <p className="text-gray-300 mt-2 font-mono text-sm">E-commerce Awards</p>
              </div>
            </div>

            <div className="h-card group">
              <Image src="/images/events/awards/award-03.svg" alt="Creator" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl text-yellow-400 uppercase tracking-wide">Creator Có Sức Ảnh Hưởng</h3>
                <p className="text-gray-300 mt-2 font-mono text-sm">Mạng lưới Helios Talent</p>
              </div>
            </div>
          </div>
        </section>

        {/* CHƯƠNG 2: VĂN HÓA */}
        <section id="culture-section" className="horizontal-section relative z-20">
          <div className="horizontal-scroll-wrapper">
            <div className="w-[80vw] md:w-[40vw] h-full flex flex-col justify-center flex-shrink-0 pr-10">
              <div className="text-xs font-mono text-pink-500 mb-4 tracking-[0.3em] uppercase">02 / Gắn Kết</div>
              <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-6 leading-none">Văn Hóa <br/><span className="text-pink-500 drop-shadow-[0_0_15px_rgba(255,20,147,0.5)]">Độc Bản</span></h2>
              <p className="text-gray-400 font-light leading-relaxed">Chúng tôi không chỉ là đồng nghiệp, chúng tôi là những người đồng đội cùng tạo nên một thanh xuân rực rỡ và những chiến dịch cuồng nhiệt nhất.</p>
            </div>

            <div className="h-card group">
              <Image src="/images/events/culture/trip-01.svg" alt="Company Trip" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl text-pink-400 uppercase tracking-wide">Company Trip Phú Quốc</h3>
                <p className="text-gray-300 mt-2 font-mono text-sm">Cháy hết mình cùng đồng đội</p>
              </div>
            </div>

            <div className="h-card group">
              <Image src="/images/events/culture/workshop-01.svg" alt="Workshop" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl text-pink-400 uppercase tracking-wide">Workshop: Đánh thức tiềm năng</h3>
                <p className="text-gray-300 mt-2 font-mono text-sm">Đào tạo nâng cấp kỹ năng định kỳ</p>
              </div>
            </div>

            <div className="h-card group">
              <Image src="/images/events/culture/party-01.svg" alt="Year End Party" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl text-pink-400 uppercase tracking-wide">Year End Party Đẳng Cấp</h3>
                <p className="text-gray-300 mt-2 font-mono text-sm">Dạ tiệc tri ân cuối năm</p>
              </div>
            </div>
          </div>
        </section>

        {/* CHƯƠNG 3: HELIOS ON AIR */}
        <section id="video-section" className="py-32 px-6 max-w-5xl mx-auto relative z-30">
          <div className="text-center mb-24">
            <div className="text-xs font-mono text-brand-gradient mb-4 tracking-[0.3em] uppercase">03 / Thư viện Video</div>
            <h2 className="font-display text-5xl md:text-6xl uppercase text-white">Helios <span className="text-transparent bg-clip-text bg-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>On Air</span></h2>
          </div>

          <div className="relative pb-32">
            
            <div className="sticky top-24 w-full bg-[#111] border border-white/10 rounded-3xl p-4 md:p-8 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] mb-24 transition-transform duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-3/5 aspect-video rounded-xl overflow-hidden shadow-2xl relative bg-black/50">
                  <iframe className="w-full h-full absolute inset-0" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" title="Toàn cảnh Mega Studio" frameBorder="0" allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="w-full md:w-2/5 pr-4">
                  <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-4">Toàn cảnh Mega Studio 500m2</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">Cùng dạo quanh một vòng không gian làm việc và hệ thống thiết bị phòng Live đẳng cấp của chúng tôi, nơi khai sinh ra hàng loạt phiên live triệu đô.</p>
                  <span className="text-xs font-mono bg-white/10 px-3 py-1.5 rounded-full text-white">🎬 Behind The Scenes</span>
                </div>
              </div>
            </div>

            <div className="sticky top-32 w-full bg-[#151515] border border-white/10 rounded-3xl p-4 md:p-8 shadow-[0_-15px_40px_rgba(0,0,0,0.8)] mb-24 transition-transform duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-3/5 aspect-video rounded-xl overflow-hidden shadow-2xl relative bg-black/50">
                  <iframe className="w-full h-full absolute inset-0" src="https://www.youtube.com/embed/jNQXAC9IVRw?rel=0&modestbranding=1" title="Team Building Vlog" frameBorder="0" allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="w-full md:w-2/5 pr-4">
                  <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-4">Nhìn lại Company Trip 2026</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">Vlog ghi lại những nụ cười, mồ hôi và kỷ niệm khó quên của team Helios trong chuyến đi mùa hè rực rỡ tại vùng biển xanh nắng vàng.</p>
                  <span className="text-xs font-mono bg-pink-500/20 text-pink-400 border border-pink-500/30 px-3 py-1.5 rounded-full">🏖️ Văn hóa nội bộ</span>
                </div>
              </div>
            </div>

            <div className="sticky top-40 w-full bg-[#1a1a1a] border border-white/10 rounded-3xl p-4 md:p-8 shadow-[0_-15px_40px_rgba(0,0,0,0.9)] transition-transform duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-3/5 aspect-video rounded-xl overflow-hidden shadow-2xl relative bg-black/50">
                  <iframe className="w-full h-full absolute inset-0" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" title="Hậu trường Mega Live" frameBorder="0" allowFullScreen loading="lazy"></iframe>
                </div>
                <div className="w-full md:w-2/5 pr-4">
                  <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-4">Hậu trường Mega Live Thế Kỷ</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">Đột nhập vào khu vực kỹ thuật để xem cách team đạo diễn hình ảnh và kỹ sư âm thanh điều khiển nhịp độ cho một phiên live 100.000 người xem cùng lúc.</p>
                  <span className="text-xs font-mono bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1.5 rounded-full">⚡ Livestream Tech</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CHƯƠNG 4: SOCIAL WALL */}
        <section className="py-20 relative overflow-hidden border-t border-white/5 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-black z-0"></div>
          
          <div className="relative z-10 text-center mb-10">
            <h3 className="font-display text-3xl uppercase tracking-widest text-gray-500">Trực Tiếp Từ Mạng Lưới TikTok</h3>
          </div>

          <div className="marquee-container z-10">
            <div className="marquee-content">
              {/* Dãy 1 */}
              <Image src="/images/events/social/tiktok-01.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-02.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-03.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-04.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-05.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-06.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              
              {/* Dãy 2 */}
              <Image src="/images/events/social/tiktok-01.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-02.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-03.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-04.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-05.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <Image src="/images/events/social/tiktok-06.svg" alt="TikTok" width={192} height={320} className="w-48 h-80 object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            </div>
          </div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
        </section>

      </main>

      <style jsx global>{`
        .global-glow {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          z-index: -1;
          pointer-events: none;
          will-change: opacity;
        }

        .horizontal-section {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden; 
        }

        .horizontal-scroll-wrapper {
          display: flex;
          gap: 4vw;
          padding: 0 6vw;
          width: fit-content;
          height: 70vh;
          align-items: center;
        }

        .h-card {
          width: 80vw;
          height: 100%;
          border-radius: 2rem;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.1);
        }

        @media (min-width: 768px) {
          .h-card { width: 50vw; }
        }

        .marquee-container {
          overflow: hidden; display: flex; width: 100vw; position: relative;
          left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw;
          padding: 2rem 0;
        }

        .marquee-content {
          display: flex; gap: 1.5rem; padding-left: 1.5rem;
          animation: marqueeLeft 30s linear infinite;
        }

        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
