"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HOME PAGE SPECIFIC SCROLL LOGIC
    let rafId: number;
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let cleanupFunction: (() => void) | null = null;

    const initHomeScrollLogic = () => {
      const chapters = document.querySelectorAll(".chapter-container");
      if (chapters.length === 0) return null;

      let chapterData: any[] = [];

      const updateMeasurements = () => {
        chapterData = Array.from(chapters).map((chapter: any, index) => {
          const visual = chapter.querySelector(".chapter-visual");
          const zoomLayer = chapter.querySelector(".zoom-layer");
          const targetEl = document.getElementById(`target-${index}`);
          const vignette = chapter.querySelector(".vignette-overlay");

          if (visual) {
            visual.style.zIndex = (20 - index).toString();
          }

          let cx = 0, cy = 0, radius = 0;
          if (targetEl && zoomLayer) {
            const oldTransform = zoomLayer.style.transform;
            const oldOrigin = zoomLayer.style.transformOrigin;

            zoomLayer.style.transform = "translate3d(0px, 0px, 0px) scale(1)";
            zoomLayer.style.transformOrigin = "50% 50%";

            const rect = targetEl.getBoundingClientRect();
            cx = rect.left + rect.width / 2;
            cy = rect.top + rect.height / 2;
            radius = Math.max(rect.width, rect.height) / 2 + 10;

            zoomLayer.style.transform = oldTransform;
            zoomLayer.style.transformOrigin = oldOrigin;
          }

          return {
            top: chapter.offsetTop,
            height: chapter.offsetHeight,
            visual,
            zoomLayer,
            targetEl,
            vignette,
            cx,
            cy,
            radius,
            ww: window.innerWidth,
            wh: window.innerHeight,
            originSet: false,
          };
        });
      };

      updateMeasurements();
      setTimeout(updateMeasurements, 500);

      const resizeListener = () => updateMeasurements();
      window.addEventListener("resize", resizeListener);

      targetScrollY = window.scrollY;
      currentScrollY = window.scrollY;

      const handleScrollZoom = (scrollY: number) => {
        chapterData.forEach((data, index) => {
          let progress = (scrollY - data.top) / data.height;

          if (progress > 0.33 && progress <= 0.66) {
            if (data.targetEl && data.zoomLayer && data.vignette && !data.originSet) {
              data.zoomLayer.style.transformOrigin = `${(data.cx / data.ww) * 100}% ${(data.cy / data.wh) * 100}%`;
              data.vignette.style.background = `radial-gradient(circle at ${data.cx}px ${data.cy}px, transparent ${data.radius}px, #050505 ${data.radius + 30}px)`;
              data.originSet = true;
            }
          }

          if (progress >= -0.5 && progress <= 1.5) {
            let opacity = 0, scale = 1, vigOpacity = 0, translateX = 0, translateY = 0;

            if (progress <= 0) {
              opacity = index === 0 ? 1 : 0;
              scale = index === 0 ? 1 : 2.5;
              if (data.zoomLayer && index !== 0) data.zoomLayer.style.transformOrigin = "50% 50%";
            } else if (progress > 0 && progress <= 0.33) {
              let fadeInProgress = Math.min(1, Math.max(0, progress / 0.15));
              opacity = index === 0 ? 1 : fadeInProgress;
              const zoomOutProgress = 1 - progress / 0.33;
              scale = index === 0 ? 1 : 1 + Math.pow(zoomOutProgress, 3) * 1.5;
              if (data.zoomLayer && index !== 0) data.zoomLayer.style.transformOrigin = "50% 50%";
            } else if (progress > 0.33 && progress <= 0.66) {
              opacity = 1;
              scale = 1;
            } else if (progress > 0.66 && progress <= 1) {
              opacity = index === chapters.length - 1 ? 1 : 1 - Math.max(0, (progress - 0.85) / 0.15);

              if (index !== chapters.length - 1) {
                const zoomProgress = (progress - 0.66) / 0.34;
                vigOpacity = Math.min(1, zoomProgress / 0.15);

                if (index === 2 && data.targetEl && data.cx) {
                  const cx = data.cx, cy = data.cy;
                  const destX = data.ww / 2, destY = data.wh / 2;
                  const moveProgress = Math.min(1, zoomProgress / 0.3);
                  const easeMove = 1 - Math.pow(1 - moveProgress, 3);
                  translateX = (destX - cx) * easeMove;
                  translateY = (destY - cy) * easeMove;

                  if (zoomProgress > 0.3) {
                    const easeZoom = Math.pow((zoomProgress - 0.3) / 0.7, 3);
                    scale = 1.5 + easeZoom * 20;
                  } else {
                    scale = 1 + easeMove * 0.5;
                  }
                } else {
                  scale = 1 + Math.pow(zoomProgress, 3) * 20;
                  if (data.targetEl && data.cx) {
                    const cx = data.cx, cy = data.cy;
                    const destX = data.ww / 2, destY = data.wh / 2;
                    const easeTranslate = zoomProgress * zoomProgress;
                    translateX = (destX - cx) * easeTranslate;
                    translateY = (destY - cy) * easeTranslate;
                  }
                }
              }
            } else if (progress > 1) {
              opacity = index === chapters.length - 1 ? 1 : 0;
            }

            if (data.visual) {
              const newOpacity = Math.max(0, Math.min(1, opacity)).toFixed(3);
              data.visual.style.opacity = newOpacity;
              let pointerEvts = opacity > 0.1 ? "auto" : "none";
              if (data.visual.style.pointerEvents !== pointerEvts) {
                data.visual.style.pointerEvents = pointerEvts;
              }
            }
            if (data.zoomLayer) {
              data.zoomLayer.style.transform = `translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
            }
            if (data.vignette) {
              data.vignette.style.opacity = vigOpacity.toFixed(3);
            }
          } else {
            if (data.visual && data.visual.style.opacity !== "0") {
              data.visual.style.opacity = "0";
              data.visual.style.pointerEvents = "none";
            }
          }
        });
      };

      const scrollListener = () => {
        targetScrollY = window.scrollY;
      };
      window.addEventListener("scroll", scrollListener, { passive: true });

      const renderLoop = () => {
        currentScrollY = currentScrollY + (targetScrollY - currentScrollY) * 0.08;
        if (Math.abs(currentScrollY - targetScrollY) > 0.5 || currentScrollY === 0) {
          handleScrollZoom(currentScrollY);
        } else {
          currentScrollY = targetScrollY;
          handleScrollZoom(currentScrollY);
        }
        rafId = requestAnimationFrame(renderLoop);
      };
      renderLoop();

      return () => {
        window.removeEventListener("scroll", scrollListener);
        window.removeEventListener("resize", resizeListener);
        cancelAnimationFrame(rafId);
      };
    };

    cleanupFunction = initHomeScrollLogic() || null;

    return () => {
      if (cleanupFunction) cleanupFunction();
    };
  }, []);

  return (
    <div ref={containerRef} className="home-scroll-wrapper">
      {/* CHAPTER 0: HERO */}
      <section className="chapter-container h-[150vh] relative w-full">
        <div className="chapter-visual fixed top-0 left-0 h-screen w-full flex items-center justify-center overflow-hidden opacity-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="zoom-layer w-full h-full absolute inset-0 flex items-center justify-center px-6 z-10">
            <div className="vignette-overlay absolute inset-0 z-50 pointer-events-none opacity-0"></div>
            <div className="absolute inset-0 z-0 overflow-hidden opacity-40 mix-blend-screen pointer-events-none">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-stage-lights-illuminating-a-dark-background-4076-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]"></div>
            </div>

            <div className="fade-layer max-w-5xl mx-auto text-center relative z-10 w-full pt-16">
              <div className="text-xs font-mono text-gray-400 mb-6 tracking-[0.3em] uppercase flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-brand-gradient opacity-80"></span> Chương 0 - Khởi Nguồn <span className="w-12 h-px bg-brand-gradient opacity-80"></span>
              </div>
              <h1 className="flex flex-col items-center justify-center font-display mb-12">
                <span className="text-gray-200 text-2xl md:text-4xl tracking-widest uppercase mb-1">Đào tạo tài năng trẻ</span>
                <span className="text-brand-gradient text-3xl md:text-5xl uppercase mb-2">Trên nền tảng</span>
                <span id="target-0" className="inline-block relative whitespace-nowrap text-white text-[5rem] md:text-[11rem] leading-none uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mt-2">
                  TIKTOK
                </span>
              </h1>
              <div className="p-8 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-md max-w-4xl mx-auto">
                <h3 className="text-2xl text-brand-gradient mb-4 uppercase font-display tracking-widest">Giá Trị Cốt Lõi</h3>
                <p className="text-base md:text-lg text-gray-300 font-normal leading-relaxed">
                  Tại Helios Talent, chúng tôi tin rằng mỗi cá nhân đều mang một tần số ánh sáng riêng biệt. Nhiệm vụ của chúng tôi là thu thập những "tín hiệu" đó, kết hợp cùng hệ sinh thái thiết bị livestream chuẩn quốc tế và tư duy chiến lược nội dung sắc bén. Chúng tôi không chỉ định hướng mà còn là bệ phóng vững chắc, giúp các tài năng trẻ bứt phá mọi giới hạn, kiến tạo xu hướng và tỏa sáng rực rỡ trong kỷ nguyên số.
                </p>
              </div>
              <div className="mt-16 text-gray-500 font-mono text-xs uppercase tracking-widest flex flex-col items-center gap-2">
                <span className="animate-bounce text-pink-500">↓</span> Cuộn để Khám phá
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 1: DISCOVERY */}
      <section className="chapter-container h-[150vh] relative w-full -mt-[50vh]">
        <div className="chapter-visual fixed top-0 left-0 h-screen w-full flex items-center justify-center overflow-hidden opacity-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#080808]/90 backdrop-blur-sm z-0"></div>
          <div className="zoom-layer w-full h-full absolute inset-0 flex items-center justify-center px-6 z-10">
            <div className="vignette-overlay absolute inset-0 z-50 pointer-events-none opacity-0"></div>
            <div className="fade-layer max-w-4xl mx-auto w-full">
              <div className="text-xs font-mono text-gray-400 mb-12 tracking-[0.3em] uppercase flex items-center gap-4">
                <span className="w-8 h-px bg-red-500"></span> Chương I - Phát hiện Tín hiệu
              </div>
              <div className="space-y-10">
                <div className="story-block block-1 p-6 md:p-8 rounded-xl border-l-2 border-l-yellow-400">
                  <div className="flex justify-between items-start font-mono text-xs mb-6 border-b border-gray-800 pb-4">
                    <div><span className="text-gray-500">Từ:</span> <span className="text-red-400 break-all">scout.team@heliostalent.vn</span></div>
                    <div className="text-right ml-2"><span className="text-gray-500">Đến:</span> <span className="text-white break-all">board.directors@heliostalent.vn</span></div>
                  </div>
                  <div className="font-mono text-[10px] md:text-xs text-gray-400 mb-5 flex flex-col md:flex-row justify-between gap-2">
                    <span className="text-pink-400">Mã tín hiệu: TCN-882 // Cấp độ: Đột phá</span><span>Thời gian thực</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                    Chào Ban Giám Đốc,<br/><br/>Hệ thống AI quét xu hướng vừa bắt được một tín hiệu dị thường. Một kênh TikTok mảng Tech Review/Setup vừa tăng trưởng 500% traffic tự nhiên chỉ trong 24 giờ qua mà không hề có dấu hiệu bơm ads.<br/><br/>Nội dung được đầu tư mang đậm chất điện ảnh, nhịp độ lôi cuốn nhưng cách setup ánh sáng cá nhân của bạn ấy vẫn còn khá thô sơ. Tiềm năng khai thác Mega 
                    <span id="target-1" className="inline-block font-display text-brand-gradient text-2xl md:text-4xl relative whitespace-nowrap uppercase tracking-wider mx-1 drop-shadow-[0_0_10px_rgba(255,20,147,0.4)] transform translate-y-1">LIVESTREAM</span> 
                    cực kỳ lớn.<br/><br/>Xin chỉ thị tiếp cận.
                  </p>
                </div>
                <div className="story-block block-2 p-6 md:p-8 rounded-xl ml-auto md:w-5/6">
                  <div className="flex justify-between items-start font-mono text-xs mb-6 border-b border-gray-800 pb-4">
                    <div><span className="text-gray-500">Từ:</span> <span className="text-yellow-400 break-all">board.directors@heliostalent.vn</span></div>
                    <div className="text-right ml-2"><span className="text-gray-500">Đến:</span> <span className="text-red-400 break-all">scout.team@heliostalent.vn</span></div>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                    Tuyệt vời! Những "viên ngọc thô" như thế này chính là thứ chúng ta tìm kiếm.<br/><br/>Kích hoạt ngay Quy trình Onboarding hạng A. Sắp xếp cho bạn ấy một buổi tham quan và trải nghiệm trực tiếp Studio 500m2 tại Trụ sở TP.HCM của chúng ta vào cuối tuần này. Chuẩn bị sẵn ekip ánh sáng và kịch bản demo.<br/><br/>Đừng để lọt mất tín hiệu này.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 2: STRENGTHS */}
      <section className="chapter-container h-[150vh] relative w-full -mt-[50vh]">
        <div className="chapter-visual fixed top-0 left-0 h-screen w-full flex items-center justify-center overflow-hidden opacity-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm z-0"></div>
          <div className="zoom-layer w-full h-full absolute inset-0 flex items-center justify-center px-6 z-10">
            <div className="vignette-overlay absolute inset-0 z-50 pointer-events-none opacity-0"></div>
            <div className="fade-layer max-w-6xl mx-auto w-full">
              <div className="text-xs font-mono text-gray-400 mb-16 tracking-[0.3em] uppercase flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-yellow-500"></span> Chương II - Nền tảng Kỹ thuật & Hạ tầng <span className="w-8 h-px bg-yellow-500"></span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="flex flex-col font-display leading-none mb-10">
                    <span className="text-gray-400 text-3xl md:text-5xl uppercase tracking-wider mb-2">Hệ Sinh Thái</span>
                    <span id="target-2" className="text-brand-gradient text-[4rem] md:text-[7rem] uppercase inline-block relative whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,20,147,0.3)]">TOÀN DIỆN</span>
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed font-normal">Với phương châm "Đồng hành - Hỗ trợ - Tỏa sáng", Helios Talent đầu tư mạnh mẽ vào con người và cơ sở vật chất, tạo ra môi trường lý tưởng nhất cho các nhà sáng tạo nội dung phát triển bền vững.</p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/50 text-red-500 font-mono text-sm">01</div>
                      <div><h4 className="text-white text-xl tracking-wide uppercase font-display">Tiên phong Livestream</h4><p className="text-gray-500 text-sm mt-1">Hơn 5+ năm kinh nghiệm dẫn đầu xu hướng trực tuyến.</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 border border-pink-500/50 text-pink-500 font-mono text-sm">02</div>
                      <div><h4 className="text-white text-xl tracking-wide uppercase font-display">Đội ngũ Chuyên ngành</h4><p className="text-gray-500 text-sm mt-1">Nhân sự chuyên môn cao từ đạo diễn hình ảnh đến chuyên gia nội dung.</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 border border-yellow-500/50 text-yellow-500 font-mono text-sm">03</div>
                      <div><h4 className="text-white text-xl tracking-wide uppercase font-display">Studio Chuẩn Quốc Tế</h4><p className="text-gray-500 text-sm mt-1">Quy mô hơn 500m2 với trang thiết bị tối tân nhất.</p></div>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[4/5] bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 p-6 hidden md:flex flex-col justify-between">
                  <div className="flex justify-between items-center font-mono text-[10px] text-gray-500 border-b border-gray-800 pb-2"><span>SYS.STATUS: ONLINE</span><span className="text-green-500 animate-pulse">● REC</span></div>
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
                    <div className="w-48 h-48 rounded-full border border-gray-700 relative flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-dashed border-gray-500 animate-[spin_20s_linear_infinite]"></div>
                      <div className="w-16 h-16 rounded-full bg-brand-gradient blur-xl opacity-40 animate-pulse absolute"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: MEDIA */}
      <section className="chapter-container h-[150vh] relative w-full -mt-[50vh]">
        <div className="chapter-visual fixed top-0 left-0 h-screen w-full flex items-center justify-center overflow-hidden opacity-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-sm z-0"></div>
          <div className="zoom-layer w-full h-full absolute inset-0 flex items-center justify-center px-6 z-10">
            <div className="vignette-overlay absolute inset-0 z-50 pointer-events-none opacity-0"></div>
            <div className="fade-layer max-w-7xl mx-auto w-full">
              <div className="text-xs font-mono text-gray-400 mb-12 tracking-[0.3em] uppercase flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-pink-500"></span> Chương III - Nền Tảng Media & Hậu Trường <span className="w-8 h-px bg-pink-500"></span>
              </div>
              <h3 className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 font-display mb-16 text-center w-full">
                <span className="text-gray-300 text-4xl md:text-6xl uppercase tracking-widest">BEHIND THE</span>
                <span id="target-3" className="text-brand-gradient text-[5rem] md:text-[8rem] uppercase inline-block relative whitespace-nowrap leading-none drop-shadow-[0_0_20px_rgba(255,20,147,0.4)]">SCENES</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <a href="https://www.facebook.com/helios.talents" target="_blank" className="block p-6 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors group">
                  <h4 className="text-2xl font-display tracking-widest uppercase text-white mb-2 group-hover:text-blue-500 transition-colors">Facebook</h4>
                  <p className="text-sm text-gray-500 font-mono">@helios.talents</p>
                </a>
                <a href="https://www.tiktok.com/@helios.talent" target="_blank" className="block p-6 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-pink-500 transition-colors group">
                  <h4 className="text-2xl font-display tracking-widest uppercase text-white mb-2 group-hover:text-pink-500 transition-colors">TikTok</h4>
                  <p className="text-sm text-gray-500 font-mono">@helios.talent</p>
                </a>
                <div className="block p-6 bg-brand-gradient rounded-xl text-black">
                  <h4 className="text-2xl font-display tracking-widest uppercase mb-2">Hotline Liên Hệ</h4>
                  <p className="text-2xl font-bold font-mono tracking-wider">0843 157 010</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group"><img src="https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" /></div>
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group"><img src="https://images.unsplash.com/photo-1516280440502-12726615b13c?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" /></div>
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden relative group"><img src="https://images.unsplash.com/photo-1518130835016-8d655f284bb8?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" /></div>
                <div className="aspect-[4/3] md:aspect-square bg-gray-900 rounded-lg border border-dashed border-gray-700 flex items-center justify-center p-4 text-center">
                  <span className="font-mono text-xs text-gray-500">Khu vực bổ sung<br/>hình ảnh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 4: CONTACT */}
      <section className="py-24 px-6 relative border-t border-white/10 bg-black z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="flex flex-col text-5xl md:text-7xl font-bold uppercase font-display mb-6 leading-none gap-2">
              <span>Liên Hệ</span>
              <span className="text-brand-gradient">Hợp Tác</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-md">Hãy gửi tín hiệu cho chúng tôi. Đội ngũ Helios Talent luôn sẵn sàng kết nối và đưa kênh của bạn lên một tầm cao mới.</p>
            <div className="space-y-6 font-sans text-sm text-gray-300">
              <div><strong className="text-white block mb-1 uppercase font-sans">Trụ sở chính:</strong>97A, Đường Bình Thới, Phường 11,<br/> Quận 11, Thành Phố Hồ Chí Minh</div>
              <div><strong className="text-white block mb-1 uppercase font-sans">Chi nhánh 2:</strong>Thành Phố Quy Nhơn<br/><span className="text-xs text-yellow-500 font-mono">(31, Đường Thanh Niên, Thành Phố Quy Nhơn, Tỉnh Gia Lai)</span></div>
              <div><strong className="text-white block mb-1 uppercase font-sans">Email:</strong><a href="mailto:heliostalentofficial@gmail.com" className="text-red-400 hover:text-white transition-colors ml-1">heliostalentofficial@gmail.com</a></div>
            </div>
          </div>
          <div className="flex-1">
            <form onSubmit={async (e) => { 
                e.preventDefault(); 
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                try {
                  const res = await fetch('/api/contacts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name: formData.get('name'),
                      socialLink: formData.get('socialLink'),
                      phone: formData.get('phone'),
                      purpose: formData.get('purpose'),
                      source: 'contact',
                    }),
                  });
                  const json = await res.json();
                  if (json.success) {
                    alert("Cảm ơn bạn đã liên hệ! Tín hiệu đã được truyền đi thành công.");
                    form.reset();
                  } else {
                    alert("Đã xảy ra lỗi: " + json.error);
                  }
                } catch { alert("Lỗi kết nối. Vui lòng thử lại."); }
              }} className="story-block p-8 rounded-xl space-y-6">
              <div className="font-mono text-xs text-gray-500 uppercase mb-4 border-b border-gray-800 pb-2">Kênh Liên Lạc Trực Tiếp</div>
              <div><input name="name" type="text" placeholder="Tên / Nghệ danh của bạn" required className="w-full bg-transparent border-b border-gray-700 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors text-white font-mono placeholder-gray-600" /></div>
              <div><input name="socialLink" type="text" placeholder="Link kênh TikTok / Mạng xã hội" required className="w-full bg-transparent border-b border-gray-700 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors text-white font-mono placeholder-gray-600" /></div>
              <div><input name="phone" type="tel" placeholder="Số điện thoại liên hệ" required className="w-full bg-transparent border-b border-gray-700 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors text-white font-mono placeholder-gray-600" /></div>
              <div>
                <select name="purpose" className="w-full bg-transparent border-b border-gray-700 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors text-gray-400 font-mono appearance-none cursor-pointer">
                  <option value="" disabled selected>Nhu cầu hợp tác</option>
                  <option value="talent" className="bg-black text-white">Đăng ký làm Talent / Creator</option>
                  <option value="booking" className="bg-black text-white">Booking Quảng cáo / Livestream</option>
                  <option value="other" className="bg-black text-white">Hợp tác khác</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-gradient text-black py-4 font-display text-xl uppercase tracking-widest hover:opacity-90 transition-all mt-4 cursor-pointer">Gửi Yêu Cầu</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
