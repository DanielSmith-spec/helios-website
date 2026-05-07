"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type JobId = 'livestream' | 'editor' | 'manager' | 'creator' | null;

export default function TuyenDung() {
  const [activeJob, setActiveJob] = useState<JobId>(null);
  const [modalOpacity, setModalOpacity] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".job-card", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const jobData = {
    'livestream': {
      title: 'Livestream Talent / Idol',
      status: (
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
          </span>
          <span className="text-xs font-mono text-green-400 uppercase tracking-widest border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded">Đang tuyển gấp</span>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">TikTok Live</span>
        </div>
      ),
      tags: (
        <>
          <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">TP. Hồ Chí Minh</span>
          <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">Full-time / Part-time</span>
        </>
      ),
      content: (
        <>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Mô Tả Công Việc</h4>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>Đại diện hình ảnh thương hiệu, thực hiện các phiên Mega Livestream bán hàng (E-commerce) và giải trí trên nền tảng TikTok.</li>
            <li>Tương tác liên tục, giải đáp thắc mắc và giữ chân người xem trong suốt phiên Live (thường kéo dài 2-4 tiếng/ca).</li>
            <li>Phối hợp cùng đội ngũ kỹ thuật và biên tập viên để tối ưu hóa kịch bản, minigame nhằm tăng tỷ lệ chuyển đổi.</li>
            <li>Tham gia các khóa đào tạo nâng cao kỹ năng diễn xuất, giao tiếp và bán hàng định kỳ của công ty.</li>
          </ul>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Yêu Cầu Ứng Viên</h4>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>Ngoại hình sáng, ưa nhìn, tự tin thể hiện bản thân trước ống kính.</li>
            <li>Khả năng giao tiếp lưu loát, hoạt ngôn, xử lý tình huống nhanh nhạy, không nói ngọng/lắp.</li>
            <li>Đam mê ngành sáng tạo nội dung, có tinh thần cầu tiến và chịu được áp lực cao.</li>
            <li><strong>Đặc biệt:</strong> Không yêu cầu kinh nghiệm (sẽ được đào tạo bài bản từ đầu bởi các chuyên gia Top đầu).</li>
          </ul>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Quyền Lợi & Đãi Ngộ</h4>
          <ul className="list-disc pl-5 space-y-2 text-pink-100">
            <li>Thu nhập đột phá: Lương cứng (thỏa thuận) + Hoa hồng (Commission) hấp dẫn không giới hạn theo doanh thu.</li>
            <li>Được hỗ trợ toàn bộ chi phí hình ảnh, makeup, trang phục và sử dụng hệ thống Studio thiết bị chuẩn quốc tế.</li>
            <li>Được định hướng xây dựng thương hiệu cá nhân dài hạn, tham gia các sự kiện lớn của TikTok Việt Nam.</li>
            <li>Môi trường làm việc năng động, Gen Z, chuyên nghiệp và đầy sáng tạo.</li>
          </ul>
        </>
      )
    },
    'editor': {
      title: 'Video Editor / Quay Dựng',
      status: (
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
          </span>
          <span className="text-xs font-mono text-green-400 uppercase tracking-widest border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded">Đang tuyển</span>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">Media Production</span>
        </div>
      ),
      tags: (
        <>
          <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">TP. Hồ Chí Minh</span>
          <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">Full-time</span>
        </>
      ),
      content: (
        <>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Mô Tả Công Việc</h4>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>Trực tiếp cầm máy quay và setup khung hình cho các video Short-form (TikTok, Reels, Shorts) của Talent.</li>
            <li>Dựng phim, cắt ghép, chỉnh màu, chèn effect/sound, làm phụ đề tối ưu theo thuật toán hiển thị của các nền tảng video ngắn.</li>
            <li>Cập nhật liên tục các trend biến hình, trend edit mới nhất trên mạng xã hội.</li>
            <li>Quản lý và sắp xếp kho dữ liệu source quay một cách khoa học.</li>
          </ul>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Yêu Cầu Ứng Viên</h4>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>Thành thạo CapCut PC, Premiere Pro, After Effects cơ bản.</li>
            <li>Có tư duy hình ảnh tốt, nhịp điệu cắt dựng (beat sync) hiện đại và bắt trend nhanh.</li>
            <li>Biết sử dụng cơ bản các thiết bị quay (Sony, Lumix, Gimbal, Đèn LED).</li>
            <li>Có trách nhiệm với deadline và tinh thần làm việc nhóm cao.</li>
          </ul>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Quyền Lợi & Đãi Ngộ</h4>
          <ul className="list-disc pl-5 space-y-2 text-pink-100">
            <li>Lương cứng cạnh tranh (từ 10.000.000 - 20.000.000 VNĐ tùy năng lực) + Thưởng KPI lượt xem/chuyển đổi.</li>
            <li>Làm việc với trang thiết bị cao cấp nhất (Mac Studio, PC render siêu tốc, máy quay Sony FX series).</li>
            <li>Cơ hội thăng tiến lên vị trí Art Director / Đạo diễn hình ảnh.</li>
          </ul>
        </>
      )
    },
    'manager': {
      title: 'Talent Manager',
      status: (
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{ animationDuration: '2s' }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
          </span>
          <span className="text-xs font-mono text-green-400 uppercase tracking-widest border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded">Đang tuyển</span>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">Management</span>
        </div>
      ),
      tags: (
        <>
          <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">TP. Hồ Chí Minh</span>
          <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">Full-time</span>
          <span className="text-xs border border-pink-500/50 text-pink-400 px-3 py-1 rounded-full font-medium">Kinh nghiệm 1+ năm</span>
        </>
      ),
      content: (
        <>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Mô Tả Công Việc</h4>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>Lên chiến lược định hướng và phát triển hình ảnh cá nhân cho các Creator/Idol thuộc mạng lưới.</li>
            <li>Sắp xếp lịch trình quay dựng, lịch Livestream, lịch tham gia sự kiện của Talent.</li>
            <li>Tìm kiếm, thương lượng và quản lý các hợp đồng Booking quảng cáo từ nhãn hàng.</li>
            <li>Theo sát, giải quyết các khủng hoảng truyền thông (nếu có) và chăm sóc sức khỏe tinh thần cho Talent.</li>
          </ul>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Yêu Cầu Ứng Viên</h4>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>Có ít nhất 1 năm kinh nghiệm ở vị trí tương đương (Quản lý Talent, Booking Agency, Account Manager).</li>
            <li>Kỹ năng giao tiếp, đàm phán và thuyết phục khách hàng xuất sắc.</li>
            <li>Am hiểu sâu sắc về thị trường Influencer Marketing, thuật toán TikTok và các nền tảng MXH.</li>
            <li>Sở hữu mạng lưới quan hệ (Networking) tốt với các Brands/Agencies là một lợi thế cực lớn.</li>
          </ul>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Quyền Lợi & Đãi Ngộ</h4>
          <ul className="list-disc pl-5 space-y-2 text-pink-100">
            <li>Lương cứng + % Commission tỷ lệ cao trên doanh thu hợp đồng mang về.</li>
            <li>Mở rộng mạng lưới quan hệ với các nhãn hàng lớn trong và ngoài nước.</li>
            <li>Chế độ bảo hiểm, nghỉ phép, du lịch company trip hạng sang hằng năm.</li>
          </ul>
        </>
      )
    },
    'creator': {
      title: 'Content Creator / Kịch bản',
      status: (
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
          </span>
          <span className="text-xs font-mono text-green-400 uppercase tracking-widest border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded">Đang tuyển</span>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">Creative</span>
        </div>
      ),
      tags: (
        <>
          <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">TP. Hồ Chí Minh</span>
          <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">Full-time / Freelance</span>
        </>
      ),
      content: (
        <>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Mô Tả Công Việc</h4>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>Nghiên cứu insight khán giả, phân tích trend để lên ý tưởng và kịch bản chi tiết cho các video ngắn (Short-form).</li>
            <li>Xây dựng cấu trúc kịch bản Livestream bán hàng (Mở bài - Giữ chân - Trình bày sản phẩm - Chốt sale - Minigame).</li>
            <li>Làm việc cùng Talent Manager và Video Editor để đảm bảo chất lượng video đầu ra đúng với định hướng.</li>
            <li>Theo dõi chỉ số kênh (Views, Engagement, Conversion) để điều chỉnh tuyến nội dung cho phù hợp.</li>
          </ul>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Yêu Cầu Ứng Viên</h4>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>Tư duy nội dung sắc bén, khả năng dùng từ và kể chuyện (Storytelling) lôi cuốn.</li>
            <li>Bắt trend "nhanh như chớp", hiểu rõ ngôn ngữ mạng và hành vi người dùng Gen Z.</li>
            <li>Đã từng xây dựng kênh TikTok cá nhân hoặc cho doanh nghiệp đạt được kết quả ấn tượng là điểm cộng lớn.</li>
            <li>Khả năng làm việc độc lập và tư duy giải quyết vấn đề tốt.</li>
          </ul>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider font-display text-xl">Quyền Lợi & Đãi Ngộ</h4>
          <ul className="list-disc pl-5 space-y-2 text-pink-100">
            <li>Lương cơ bản + Thưởng hiệu suất nội dung (KPI kênh) hấp dẫn.</li>
            <li>Thỏa sức sáng tạo không giới hạn, không gò bó khuôn mẫu.</li>
            <li>Môi trường "ngập tràn" trai xinh gái đẹp, thường xuyên tiếp xúc với các KOL/KOC nổi tiếng.</li>
          </ul>
        </>
      )
    }
  };

  const openModal = (id: JobId) => {
    setActiveJob(id);
    document.body.style.overflow = 'hidden';
    setTimeout(() => setModalOpacity(true), 10);
  };

  const closeModal = () => {
    setModalOpacity(false);
    setTimeout(() => {
      setActiveJob(null);
      document.body.style.overflow = '';
    }, 300);
  };

  const sendApplicationEmail = (jobTitle: string) => {
    const email = "hr@heliostalent.vn";
    const subject = encodeURIComponent(`[Helios Talent] - Ứng tuyển vị trí ${jobTitle}`);
    const body = encodeURIComponent(`Xin chào Phòng Nhân sự Helios Talent,\n\nTôi viết email này để ứng tuyển cho vị trí ${jobTitle}.\n\n[VUI LÒNG ĐÍNH KÈM CV VÀ LINK PORTFOLIO/TIKTOK CỦA BẠN TẠI ĐÂY]\n\nThông tin liên hệ của tôi:\n- Họ và tên: \n- Số điện thoại: \n\nTôi rất mong có cơ hội được tham gia phỏng vấn và đồng hành cùng đội ngũ Helios Talent.\n\nTrân trọng,`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div ref={containerRef}>
      <main className="relative z-10 pt-32 pb-20 min-h-screen">
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="text-xs font-mono text-pink-500 mb-4 tracking-[0.3em] uppercase">Life at Helios</div>
              <h1 className="flex flex-col font-display mb-6">
                <span className="text-gray-200 text-3xl md:text-5xl tracking-widest uppercase mb-1 font-bold">Khởi Tạo</span>
                <span className="text-brand-gradient text-[4rem] md:text-[6rem] leading-tight uppercase drop-shadow-[0_0_20px_rgba(255,20,147,0.3)] font-black">
                  SỰ NGHIỆP SỐ
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Gia nhập mạng lưới sáng tạo nội dung hàng đầu. Nơi văn hóa tự do, trang thiết bị tối tân và những khối óc sáng tạo hội tụ để định hình tương lai của Creator Economy.
              </p>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Đội ngũ Helios" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-2xl uppercase tracking-wider text-white">#BeAHeliosian</p>
                  <p className="text-sm font-mono text-gray-400">Trở thành phiên bản tốt nhất của chính bạn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CƠ HỘI NGHỀ NGHIỆP */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-4 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display uppercase tracking-wide text-white">
                Vị Trí <span className="text-brand-gradient">Tuyển Dụng</span>
              </h2>
            </div>
            <div className="font-mono text-sm text-gray-500">
              Cập nhật mới nhất: <span className="text-white">Tháng 05/2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 opacity-0 job-card-container">

            {/* JOB 1: Livestream Talent */}
            <div onClick={() => openModal('livestream')} className="job-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center opacity-100">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                  </span>
                  <span className="text-xs font-mono text-green-400 uppercase tracking-widest border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded">Đang tuyển gấp</span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">TikTok Live</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2 uppercase">Livestream Talent / Idol</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  Đại diện hình ảnh và thực hiện các phiên Livestream bán hàng, tương tác giải trí trên nền tảng TikTok. Không yêu cầu kinh nghiệm, được đào tạo bài bản từ A-Z bởi các chuyên gia Top đầu.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">TP. Hồ Chí Minh</span>
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">Full-time / Part-time</span>
                </div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); sendApplicationEmail('Livestream Talent / Idol'); }} className="shrink-0 w-full md:w-auto text-center bg-white text-black font-display uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all duration-300 text-sm">
                Ứng Tuyển Ngay
              </button>
            </div>

            {/* JOB 2: Video Editor */}
            <div onClick={() => openModal('editor')} className="job-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center opacity-100">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                  </span>
                  <span className="text-xs font-mono text-green-400 uppercase tracking-widest border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded">Đang tuyển</span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">Media Production</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2 uppercase">Video Editor / Quay Dựng</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  Thực hiện quay, dựng và biên tập các video Short-form (TikTok, Reels, Shorts) tối ưu thuật toán hiển thị. Chỉnh màu, chèn effect và làm việc trực tiếp với đội ngũ Talent.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">TP. Hồ Chí Minh</span>
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">Full-time</span>
                </div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); sendApplicationEmail('Video Editor / Quay Dựng'); }} className="shrink-0 w-full md:w-auto text-center bg-white text-black font-display uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all duration-300 text-sm">
                Ứng Tuyển Ngay
              </button>
            </div>

            {/* JOB 3: Talent Manager */}
            <div onClick={() => openModal('manager')} className="job-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center opacity-100">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{ animationDuration: '2s' }}></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                  </span>
                  <span className="text-xs font-mono text-green-400 uppercase tracking-widest border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded">Đang tuyển</span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">Management</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2 uppercase">Talent Manager</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  Chịu trách nhiệm quản lý, điều phối lịch trình, định hướng hình ảnh và chăm sóc đời sống tinh thần cho các Creators trực thuộc công ty. Cầu nối giữa nhãn hàng và Talent.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">TP. Hồ Chí Minh</span>
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">Full-time</span>
                  <span className="text-xs border border-pink-500/50 text-pink-400 px-3 py-1 rounded-full font-medium">Kinh nghiệm 1+ năm</span>
                </div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); sendApplicationEmail('Talent Manager'); }} className="shrink-0 w-full md:w-auto text-center bg-white text-black font-display uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all duration-300 text-sm">
                Ứng Tuyển Ngay
              </button>
            </div>

            {/* JOB 4: Setup Technician (Disabled) */}
            <div className="job-card disabled rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                  </span>
                  <span className="text-xs font-mono text-red-400 uppercase tracking-widest border border-red-500/30 bg-red-500/10 px-2 py-0.5 rounded">Đã đủ chỉ tiêu</span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">System Integrator</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2 uppercase">Chuyên Viên Setup Studio</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  Lắp đặt hệ thống đèn LED, máy quay, Audio interface và cấu hình phần mềm OBS/vMix cho các phòng Mega Livestream chuẩn quốc tế.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-500 px-3 py-1 rounded-full font-medium">TP. Hồ Chí Minh</span>
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-500 px-3 py-1 rounded-full font-medium">Full-time</span>
                </div>
              </div>
              <button disabled className="shrink-0 w-full md:w-auto text-center bg-white/5 text-gray-500 border border-white/10 font-display uppercase tracking-widest px-8 py-3.5 rounded-full cursor-not-allowed text-sm">
                Đã Đóng
              </button>
            </div>

            {/* JOB 5: Content Creator */}
            <div onClick={() => openModal('creator')} className="job-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center opacity-100">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                  </span>
                  <span className="text-xs font-mono text-green-400 uppercase tracking-widest border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded">Đang tuyển</span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">Creative</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2 uppercase">Content Creator / Kịch bản</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  Lên ý tưởng, viết kịch bản chi tiết cho các video ngắn, viral clips và kịch bản phân lớp cho các phiên Livestream bán hàng (E-commerce).
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">TP. Hồ Chí Minh</span>
                  <span className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">Full-time / Freelance</span>
                </div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); sendApplicationEmail('Content Creator / Kịch bản'); }} className="shrink-0 w-full md:w-auto text-center bg-white text-black font-display uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all duration-300 text-sm">
                Ứng Tuyển Ngay
              </button>
            </div>

            {/* KHỐI ỨNG TUYỂN MỞ */}
            <div onClick={() => sendApplicationEmail('Open Application - Gửi hồ sơ tự do')} className="job-card rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center border border-dashed border-white/20 bg-transparent hover:border-pink-500 hover:bg-pink-500/5 transition-all duration-300 group cursor-pointer h-full min-h-[220px] opacity-100">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white group-hover:text-pink-500 group-hover:scale-110 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-white mb-2 uppercase">Chưa tìm thấy vị trí phù hợp?</h3>
              <p className="text-sm text-gray-400 mb-4 max-w-sm">Đừng lo! Hãy gửi CV của bạn vào ngân hàng hồ sơ của chúng tôi. Helios luôn mở cửa chào đón những tài năng mới.</p>
              <span className="text-sm font-mono text-pink-400 uppercase tracking-widest underline underline-offset-4 group-hover:text-pink-300">Gửi Hồ Sơ Mở</span>
            </div>

          </div>
        </div>
      </main>

      {/* JOB DETAIL MODAL */}
      {activeJob && (
        <div 
          className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center transition-opacity duration-300 px-4 py-10 ${modalOpacity ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
        >
          <div 
            className={`bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-full overflow-hidden relative transform transition-transform duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col ${modalOpacity ? 'scale-100' : 'scale-95'}`}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-500 hover:text-white transition-colors focus:outline-none z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header Modal */}
            <div className="bg-gradient-to-r from-gray-900 to-black p-8 md:p-10 border-b border-white/10">
              <div className="flex items-center gap-3 mb-4">
                {jobData[activeJob].status}
              </div>
              <h3 className="text-3xl md:text-5xl font-display uppercase tracking-wide text-white mb-4">{jobData[activeJob].title}</h3>
              <div className="flex flex-wrap gap-2">
                {jobData[activeJob].tags}
              </div>
            </div>

            {/* Nội dung cuộn được */}
            <div className="p-8 md:p-10 overflow-y-auto modal-scroll text-gray-300 leading-relaxed font-light text-sm md:text-base">
              {jobData[activeJob].content}
            </div>

            {/* Footer Modal */}
            <div className="p-6 border-t border-white/10 bg-black flex justify-end">
              <button onClick={() => sendApplicationEmail(jobData[activeJob].title)} className="w-full md:w-auto text-center bg-brand-gradient text-white font-display uppercase tracking-widest px-10 py-4 rounded-full hover:opacity-90 transition-opacity duration-300 text-base shadow-[0_0_20px_rgba(255,20,147,0.3)]">
                Gửi Hồ Sơ Ứng Tuyển Ngay
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .job-card {
          background: rgba(17, 17, 17, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
          cursor: pointer;
        }
        .job-card.disabled {
          cursor: not-allowed;
        }
        .job-card:hover:not(.disabled) {
          border-color: rgba(255, 20, 147, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 20, 147, 0.1);
        }
        .modal-scroll::-webkit-scrollbar { width: 6px; }
        .modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        .modal-scroll::-webkit-scrollbar-thumb:hover { background: #ff1493; }
      `}</style>
    </div>
  );
}
