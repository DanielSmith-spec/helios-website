"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function GioiThieu() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const faqs = [
    {
      question: "1. Helios Talent TCN là gì và hoạt động trong lĩnh vực nào?",
      answer: "Helios Talent TCN là mạng lưới MCN TikTok (Multi-Channel Network) Top đầu tại Việt Nam. Chúng tôi hoạt động trong 4 lĩnh vực chính: Đào tạo & Quản lý Livestream Talent, Phát triển phần mềm cho Creator Economy, Media Production (Quay dựng Cinematic), và System Integrator (Tích hợp, setup phòng Mega Livestream chuẩn quốc tế)."
    },
    {
      question: "2. Chưa có kinh nghiệm thì có thể trở thành Livestream Idol không?",
      answer: "Hoàn toàn có thể. Helios Talent sở hữu hệ sinh thái đào tạo từ con số 0. Ứng viên chưa có kinh nghiệm sẽ được hướng dẫn chuyên sâu về kỹ năng nói trước ống kính, cấu trúc kịch bản chốt sale, xử lý tình huống và xây dựng thương hiệu cá nhân trên nền tảng TikTok."
    },
    {
      question: "3. Dịch vụ Setup Studio (System Integrator) bao gồm những gì?",
      answer: "Chúng tôi cung cấp giải pháp chìa khóa trao tay (Turn-key) cho các Studio Livestream. Dịch vụ bao gồm: Thiết kế bản vẽ 3D, thi công cách âm/tiêu âm chuyên nghiệp, setup hệ thống ánh sáng nghệ thuật (Lighting RGB/Keylight), và cấu hình thiết bị máy ảnh/phần mềm OBS phát sóng chất lượng 4K."
    },
    {
      question: "4. Làm thế nào để hợp tác Booking Livestream / Media?",
      answer: "Nhãn hàng hoặc Doanh nghiệp có thể liên hệ trực tiếp với bộ phận Account của Helios qua Hotline (0843 157 010) hoặc Email (heliostalentofficial@gmail.com). Đội ngũ chiến lược của chúng tôi sẽ tư vấn chọn Talent phù hợp, lên kịch bản Mega Live và quy trình sản xuất Media tối ưu chuyển đổi nhất."
    },
    {
      question: "5. Chi phí & Cơ chế chia sẻ doanh thu khi gia nhập MCN?",
      answer: "Helios Talent áp dụng cơ chế chia sẻ doanh thu minh bạch và cạnh tranh hàng đầu thị trường. Tỷ lệ % commission sẽ phụ thuộc vào cấp độ của Creator, mức độ sử dụng tài nguyên Studio của công ty và hợp đồng độc quyền. Xin vui lòng ứng tuyển qua trang Tuyển Dụng để được Talent Manager tư vấn chi tiết."
    }
  ];

  const talents = [
    { id: 1, name: "Nguyễn Văn A", handle: "@nguyen_a", img: "/images/about/talents/talent-01.svg", glow: "rgba(255,51,51,0.5)" },
    { id: 2, name: "Lê Thị B", handle: "@le_thib", img: "/images/about/talents/talent-02.svg", glow: "rgba(255,20,147,0.5)" },
    { id: 3, name: "Trần Hoàng C", handle: "@hoang_c", img: "/images/about/talents/talent-03.svg", glow: "rgba(255,204,0,0.5)" },
    { id: 4, name: "Phạm D", handle: "@pham_d", img: "/images/about/talents/talent-04.svg", glow: "rgba(255,51,51,0.5)" },
    { id: 5, name: "Nguyễn E", handle: "@nguyen_e", img: "/images/about/talents/talent-05.svg", glow: "rgba(255,20,147,0.5)" },
    { id: 6, name: "Vũ F", handle: "@vu_f", img: "/images/about/talents/talent-06.svg", glow: "rgba(255,204,0,0.5)" },
    { id: 7, name: "Trần G", handle: "@tran_g", img: "/images/about/talents/talent-07.svg", glow: "rgba(255,51,51,0.5)" },
    { id: 8, name: "Hồ H", handle: "@ho_h", img: "/images/about/talents/talent-08.svg", glow: "rgba(255,20,147,0.5)" },
    { id: 9, name: "Ngô I", handle: "@ngo_i", img: "/images/about/talents/talent-09.svg", glow: "rgba(255,204,0,0.5)" },
  ];

  return (
    <main className="relative z-10 pt-32 pb-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* VỀ CHÚNG TÔI */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-xs font-mono text-pink-500 mb-4 tracking-[0.3em] uppercase">Về Chúng Tôi</div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase font-display mb-12">
            Định vị <span className="text-brand-gradient">Sự Khác Biệt</span>
          </h1>

          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Câu Chuyện Của Helios</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Helios Talent TCN được thành lập với mục tiêu trở thành mạng lưới dẫn đầu về sáng tạo nội dung và phát triển tài năng trẻ trên nền tảng TikTok tại Việt Nam. Xuyên suốt hơn 5 năm kinh nghiệm trong lĩnh vực Livestream và truyền thông số, chúng tôi hiểu rõ rào cản lớn nhất của một nhà sáng tạo không phải là thiếu ý tưởng, mà là thiếu một hệ sinh thái hỗ trợ chuyên nghiệp.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Sứ mệnh của chúng tôi là gỡ bỏ rào cản đó. Với Studio chuẩn quốc tế diện tích hơn 500m2 và đội ngũ kỹ thuật lành nghề, chúng tôi biến ý tưởng của bạn thành hình ảnh, biến hình ảnh thành giá trị.
            </p>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-12">
            <div className="text-xs font-mono text-yellow-500 mb-2 tracking-[0.3em] uppercase">Q&A Knowledge Base</div>
            <h2 className="text-3xl md:text-5xl font-display uppercase tracking-wide">
              Khám Phá <span className="text-brand-gradient">Thương Hiệu</span>
            </h2>
            <p className="text-gray-400 mt-4 font-light">Những câu hỏi phổ biến nhất về hệ sinh thái dịch vụ của Helios Talent.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className={`faq-item bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-colors duration-300 ${isActive ? 'border-[#ff1493]/40' : 'border-white/10 hover:border-white/30'}`}
                >
                  <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none">
                    <h3 className={`font-display text-xl md:text-2xl uppercase tracking-wide transition-colors pr-4 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {faq.question}
                    </h3>
                    <div className={`text-gray-500 transition-transform duration-500 shrink-0 ${isActive ? 'rotate-180 text-pink-500' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </div>
                  </button>
                  <div 
                    className="faq-answer transition-all duration-500 ease-in-out overflow-hidden" 
                    style={{ maxHeight: isActive ? '500px' : '0px', opacity: isActive ? 1 : 0 }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TALENT SHOWCASE SLIDER */}
        <div className="w-full mt-20 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-6">
            <div>
              <div className="text-xs font-mono text-gray-500 mb-2 tracking-[0.3em] uppercase">Gương mặt tiêu biểu của năm</div>
              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-wide">
                Helios <span className="text-brand-gradient drop-shadow-[0_0_15px_rgba(255,20,147,0.3)]">Talent</span>
              </h2>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button onClick={() => scrollSlider('left')} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:border-transparent hover:text-white transition-all group shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button onClick={() => scrollSlider('right')} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:border-transparent hover:text-white transition-all group shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          <div ref={sliderRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 hide-scrollbar">
            {talents.map((talent) => (
              <div key={talent.id} className="snap-start shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(16.666%-0.833rem)] aspect-[9/16] relative group rounded-xl overflow-hidden border border-white/10">
                <Image src={talent.img} alt={talent.name} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <a href="https://www.tiktok.com/@novix.ht" target="_blank" rel="noreferrer" className="self-end transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 text-white hover:text-pink-400 transition-colors" fill="currentColor">
                      <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                    </svg>
                  </a>
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                    <p className={`font-display text-brand-gradient text-xl md:text-2xl tracking-wide drop-shadow-[0_0_10px_${talent.glow}]`}>{talent.handle}</p>
                    <p className="text-white font-bold text-base md:text-lg mt-1">{talent.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
