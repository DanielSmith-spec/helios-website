"use client";

import { useState, useEffect } from "react";

type ServiceType = 'tiktok' | 'software' | 'multimedia' | 'system' | null;

export default function LinhVucHoatDong() {
  const [activeModal, setActiveModal] = useState<ServiceType>(null);
  const [modalOpacity, setModalOpacity] = useState(false);

  const serviceData = {
    tiktok: {
      title: <>TikTok Live <span className="text-[#ff1493]">Vietnam</span></>,
      glowColor: "linear-gradient(180deg, #ff1493 0%, transparent 100%)",
      content: (
        <>
          <p className="mb-4">Với tư cách là một trong những mạng lưới <strong>TikTok Channel Network (TCN)</strong> và <strong>Multi-Channel Network (MCN)</strong> tiên phong tại Việt Nam, lĩnh vực TikTok Live là mũi nhọn chiến lược của Helios Talent.</p>
          <p className="mb-4">Chúng tôi cung cấp một vòng lặp đào tạo và phát triển khép kín: từ việc định hướng phong cách cá nhân, xây dựng kịch bản nội dung sáng tạo (short-video), đến việc tối ưu hóa thuật toán phòng Live. Hàng tháng, Helios tổ chức hàng chục phiên <strong>Mega Livestream Thương Mại Điện Tử</strong>, mang lại doanh thu đột phá cho các nhãn hàng và thu nhập thụ động bền vững cho các Creators trực thuộc.</p>
          <p className="mb-4">Đặc quyền khi tham gia mảng này là quyền truy cập hệ thống phòng Live Studio đạt chuẩn quốc tế cùng sự đồng hành 1:1 từ đội ngũ quản lý tài năng (Talent Manager) giàu kinh nghiệm.</p>
        </>
      ),
      contact: (
        <>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ff1493]/10 text-[#ff1493] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            </div>
            <div><p className="text-xs text-gray-500 uppercase">Email Quản Lý</p><a href="mailto:live.talent@heliostalent.vn" className="text-white hover:text-[#ff1493] transition-colors">live.talent@heliostalent.vn</a></div>
          </div>
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <div className="w-10 h-10 rounded-full bg-[#ff1493]/10 text-[#ff1493] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.95l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            </div>
            <div><p className="text-xs text-gray-500 uppercase">Hotline Booking</p><a href="tel:0843157010" className="text-white hover:text-[#ff1493] transition-colors">0843 157 010</a></div>
          </div>
        </>
      )
    },
    software: {
      title: <>Software <span className="text-[#00e5ff]">Development</span></>,
      glowColor: "linear-gradient(180deg, #00e5ff 0%, transparent 100%)",
      content: (
        <>
          <p className="mb-4">Tại Helios Talent, chúng tôi tin rằng công nghệ là cốt lõi để duy trì sự phát triển bùng nổ bền vững. Đội ngũ <strong>Software Development</strong> của chúng tôi tập trung xây dựng các công cụ, ứng dụng và nền tảng số chuyên dụng phục vụ trực tiếp cho hệ sinh thái Creator Economy.</p>
          <p className="mb-4">Các sản phẩm tiêu biểu bao gồm: Hệ thống <strong>CRM quản trị Creator độc quyền</strong> giúp theo dõi lịch biểu, thanh toán và hợp đồng tự động; Công cụ <strong>AI Tracking Data</strong> giúp phân tích các xu hướng, giờ vàng, và luồng tương tác trên TikTok để đề xuất chiến lược tức thời.</p>
          <p className="mb-4">Ngoài ra, chúng tôi còn nhận tư vấn và gia công phần mềm (Outsourcing) cho các doanh nghiệp vừa và nhỏ (SME) có nhu cầu chuyển đổi số toàn diện các hoạt động tiếp thị truyền thông nội bộ.</p>
        </>
      ),
      contact: (
        <>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            </div>
            <div><p className="text-xs text-gray-500 uppercase">Email Kỹ Thuật</p><a href="mailto:tech@heliostalent.vn" className="text-white hover:text-[#00e5ff] transition-colors">tech@heliostalent.vn</a></div>
          </div>
        </>
      )
    },
    multimedia: {
      title: <>Multimedia <span className="text-[#ffcc00]">Production</span></>,
      glowColor: "linear-gradient(180deg, #ffcc00 0%, transparent 100%)",
      content: (
        <>
          <p className="mb-4">Phân ban <strong>Multimedia Production</strong> là trái tim sáng tạo nghệ thuật của Helios. Chúng tôi mang đến những giải pháp hình ảnh, video với chất lượng điện ảnh (Cinematic) dành riêng cho các chiến dịch quảng cáo và xây dựng thương hiệu cá nhân.</p>
          <p className="mb-4">Dịch vụ bao gồm: Sản xuất TVC quảng cáo, quay dựng MV âm nhạc, phim doanh nghiệp, dịch vụ nhiếp ảnh thương mại (Commercial Photography) và thiết kế đồ họa 2D/3D (Graphic Design). Chúng tôi kiểm soát toàn bộ quá trình từ khâu ý tưởng (Pre-production), thực thi (Production) đến hậu kỳ (Post-production) với kỹ xảo VFX hiện đại.</p>
          <p className="mb-4">Với hệ thống máy quay điện ảnh và studio linh hoạt, mọi khung hình được sản xuất tại Helios đều hướng tới mục tiêu tối thượng là: Bắt mắt, lan truyền và giữ chân người dùng trong 3 giây đầu tiên.</p>
        </>
      ),
      contact: (
        <>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ffcc00]/10 text-[#ffcc00] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            </div>
            <div><p className="text-xs text-gray-500 uppercase">Email Sản Xuất</p><a href="mailto:media@heliostalent.vn" className="text-white hover:text-[#ffcc00] transition-colors">media@heliostalent.vn</a></div>
          </div>
        </>
      )
    },
    system: {
      title: <>System <span className="text-[#ff3333]">Integrator</span></>,
      glowColor: "linear-gradient(180deg, #ff3333 0%, transparent 100%)",
      content: (
        <>
          <p className="mb-4">Lĩnh vực <strong>System Integrator (Tích hợp hệ thống)</strong> là sự kết tinh giữa kiến thức kỹ thuật truyền hình và thẩm mỹ thiết kế không gian. Chúng tôi cung cấp giải pháp chìa khóa trao tay (Turn-key) cho mọi nhu cầu thiết lập Studio Livestream, Phòng thu âm hay Sân khấu ảo.</p>
          <p className="mb-4">Đội ngũ chuyên gia của Helios trực tiếp tham gia tư vấn, vẽ bản vẽ 3D, thi công hệ thống cách âm - tiêu âm chuyên nghiệp. Đặc biệt, chúng tôi là đối tác tích hợp hệ thống <strong>Ánh sáng sân khấu (Lighting Setup)</strong> và Cấu hình máy tính, thiết bị máy ảnh chuẩn 4K, đảm bảo các phiên phát sóng mượt mà với chất lượng hình ảnh rực rỡ và nịnh mắt nhất.</p>
          <p className="mb-4">Dù là một Studio cá nhân tại nhà hay một phim trường Mega Live quy mô lớn cho nhãn hàng, Helios đều có giải pháp hạ tầng tối ưu ngân sách và công năng.</p>
        </>
      ),
      contact: (
        <>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ff3333]/10 text-[#ff3333] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            </div>
            <div><p className="text-xs text-gray-500 uppercase">Tư vấn hệ thống</p><a href="mailto:si@heliostalent.vn" className="text-white hover:text-[#ff3333] transition-colors">si@heliostalent.vn</a></div>
          </div>
        </>
      )
    }
  };

  const openModal = (type: ServiceType) => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
    setTimeout(() => setModalOpacity(true), 10);
  };

  const closeModal = () => {
    setModalOpacity(false);
    setTimeout(() => {
      setActiveModal(null);
      document.body.style.overflow = '';
    }, 300);
  };

  return (
    <>
      <main className="relative z-10 pt-32 pb-20 min-h-screen">
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-mono text-yellow-500 mb-4 tracking-[0.3em] uppercase">Hệ sinh thái dịch vụ</div>
            <h1 className="flex flex-col items-center justify-center font-display mb-6">
              <span className="text-gray-200 text-3xl md:text-5xl tracking-widest uppercase mb-1 font-bold">Các Lĩnh Vực</span>
              <span className="text-brand-gradient text-[4rem] md:text-[7rem] leading-tight uppercase drop-shadow-[0_0_20px_rgba(255,20,147,0.3)] mt-2 font-black text-center">
                HOẠT ĐỘNG CHÍNH
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Helios Talent không chỉ là một MCN, chúng tôi là tổ hợp giải pháp toàn diện từ đào tạo, công nghệ, truyền thông đến tích hợp hạ tầng kỹ thuật chuẩn quốc tế.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Card 1: TikTok Live */}
            <div onClick={() => openModal('tiktok')} className="group cursor-pointer bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 hover:border-[#ff1493]/50 rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,20,147,0.15)] flex flex-col justify-between h-full min-h-[320px]">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff1493]/10 blur-[80px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#ff1493]/20"></div>
              <div>
                <div className="w-14 h-14 rounded-full bg-[#ff1493]/10 border border-[#ff1493]/30 text-[#ff1493] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,20,147,0.2)] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                  </svg>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide mb-4">TikTok Live Vietnam</h3>
                <p className="text-gray-400 font-light leading-relaxed">Phát triển tài năng độc quyền, xây dựng kênh TikTok triệu view và tổ chức các phiên Mega Livestream thương mại điện tử.</p>
              </div>
              <div className="mt-8 flex items-center text-xs font-mono uppercase tracking-widest text-[#ff1493] group-hover:translate-x-2 transition-transform">
                <span>Khám phá chi tiết</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
              </div>
            </div>

            {/* Card 2: Software Development */}
            <div onClick={() => openModal('software')} className="group cursor-pointer bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 hover:border-[#00e5ff]/50 rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)] flex flex-col justify-between h-full min-h-[320px]">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00e5ff]/10 blur-[80px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#00e5ff]/20"></div>
              <div>
                <div className="w-14 h-14 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,229,255,0.2)] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide mb-4">Software Development</h3>
                <p className="text-gray-400 font-light leading-relaxed">Cung cấp giải pháp phần mềm chuyên biệt: Hệ thống quản trị CRM Creator, AI Tracking dữ liệu và tool hỗ trợ chuyển đổi số.</p>
              </div>
              <div className="mt-8 flex items-center text-xs font-mono uppercase tracking-widest text-[#00e5ff] group-hover:translate-x-2 transition-transform">
                <span>Khám phá chi tiết</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
              </div>
            </div>

            {/* Card 3: Multimedia */}
            <div onClick={() => openModal('multimedia')} className="group cursor-pointer bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 hover:border-[#ffcc00]/50 rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,204,0,0.15)] flex flex-col justify-between h-full min-h-[320px]">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#ffcc00]/10 blur-[80px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#ffcc00]/20"></div>
              <div>
                <div className="w-14 h-14 rounded-full bg-[#ffcc00]/10 border border-[#ffcc00]/30 text-[#ffcc00] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,204,0,0.2)] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125 1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25m0-5.25C18 5.004 17.496 4.5 16.875 4.5H7.125M18 10.875V18.375m0-7.5c0-.621-.504-1.125-1.125-1.125H7.125c-.621 0-1.125.504-1.125 1.125v7.5m10.875 0h-9.75M16.875 18.375c.621 0 1.125.504 1.125 1.125m-10.875 0c-.621 0-1.125.504-1.125 1.125" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide mb-4">Multimedia Production</h3>
                <p className="text-gray-400 font-light leading-relaxed">Sản xuất TVC, phim doanh nghiệp, quay dựng MV, chụp ảnh thương mại và thiết kế đồ họa 2D/3D chuyên nghiệp.</p>
              </div>
              <div className="mt-8 flex items-center text-xs font-mono uppercase tracking-widest text-[#ffcc00] group-hover:translate-x-2 transition-transform">
                <span>Khám phá chi tiết</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
              </div>
            </div>

            {/* Card 4: System Integrator */}
            <div onClick={() => openModal('system')} className="group cursor-pointer bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 hover:border-[#ff3333]/50 rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,51,51,0.15)] flex flex-col justify-between h-full min-h-[320px]">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#ff3333]/10 blur-[80px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#ff3333]/20"></div>
              <div>
                <div className="w-14 h-14 rounded-full bg-[#ff3333]/10 border border-[#ff3333]/30 text-[#ff3333] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,51,51,0.2)] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wide mb-4">System Integrator</h3>
                <p className="text-gray-400 font-light leading-relaxed">Tích hợp hệ thống Studio Livestream toàn diện: thi công cách âm, setup ánh sáng nghệ thuật và cấu hình thiết bị phát sóng chuẩn Quốc tế.</p>
              </div>
              <div className="mt-8 flex items-center text-xs font-mono uppercase tracking-widest text-[#ff3333] group-hover:translate-x-2 transition-transform">
                <span>Khám phá chi tiết</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SERVICE MODAL */}
      {activeModal && (
        <div 
          className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center transition-opacity duration-300 px-4 py-10 ${modalOpacity ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
        >
          {/* Khung Modal */}
          <div 
            className={`bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-full overflow-hidden relative transform transition-transform duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col ${modalOpacity ? 'scale-100' : 'scale-95'}`}
            onClick={e => e.stopPropagation()}
          >
            {/* Nút Đóng */}
            <button onClick={closeModal} className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-500 hover:text-white transition-colors focus:outline-none z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Lớp mờ trang trí phía trên */}
            <div className="absolute top-0 left-0 w-full h-32 opacity-20 pointer-events-none" style={{ background: serviceData[activeModal].glowColor }}></div>

            {/* Nội dung cuộn được */}
            <div className="p-8 md:p-12 overflow-y-auto modal-scroll relative">
              <h3 className="text-4xl md:text-6xl font-display mb-6 uppercase tracking-wide text-white">{serviceData[activeModal].title}</h3>
              
              <div className="text-gray-300 leading-relaxed space-y-5 font-light text-base md:text-lg mb-10">
                {serviceData[activeModal].content}
              </div>

              {/* Khối Liên hệ riêng */}
              <div className="border-t border-white/10 pt-8 mt-auto">
                <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Kết nối chuyên viên mảng này</h4>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  {serviceData[activeModal].contact}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .modal-scroll::-webkit-scrollbar { width: 6px; }
        .modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        .modal-scroll::-webkit-scrollbar-thumb:hover { background: #ff1493; }
      `}</style>
    </>
  );
}
