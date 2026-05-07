"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Blog() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        const json = await res.json();
        if (json.success) {
          setBlogPosts(json.data);
        }
      } catch (e) {
        console.error("Failed to fetch posts", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.fromTo(".blog-card", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [filter, search, isLoading]);

  const mapCategoryStyles = (category: string) => {
    switch (category) {
      case 'tin-tuc':
        return { name: "Tin Tức Nội Bộ", color: "bg-[#00e5ff]", textColor: "text-[#00e5ff]" };
      case 'su-kien':
        return { name: "Sự Kiện", color: "bg-[#ffcc00]", textColor: "text-[#ffcc00]" };
      case 'blog':
      default:
        return { name: "Blog Chuyên Gia", color: "bg-pink-500", textColor: "text-pink-500" };
    }
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = filter === "all" || post.category === filter;
    const searchLower = search.toLowerCase();
    const cleanContent = stripHtml(post.content).toLowerCase();
    const matchesSearch = search === "" || 
                          post.title.toLowerCase().includes(searchLower) ||
                          cleanContent.includes(searchLower) ||
                          (post.author && post.author.toLowerCase().includes(searchLower));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative z-10 pt-32 pb-20 min-h-screen">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono text-pink-500 mb-4 tracking-[0.3em] uppercase">Kho Tri Thức & Phân Tích</div>
          <h1 className="flex flex-col items-center justify-center font-display mb-6">
            <span className="text-gray-200 text-3xl md:text-5xl tracking-widest uppercase mb-1 font-bold">Helios</span>
            <span className="text-brand-gradient text-[4rem] md:text-[7rem] leading-tight uppercase drop-shadow-[0_0_20px_rgba(255,20,147,0.3)] mt-2 font-black text-center">
              INSIGHTS
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Cập nhật các phân tích sâu sắc, xu hướng thị trường và bí quyết chuyên môn từ đội ngũ chuyên gia của Helios Talent.
          </p>
        </div>
      </div>

      {/* SMART FILTER DOCK & SEARCH */}
      <div className="max-w-7xl mx-auto px-6 mb-12 sticky top-24 z-40">
        <div className="bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col xl:flex-row gap-4 items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="relative w-full xl:w-80 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Tìm kiếm bài viết, tác giả..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors font-mono"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full hide-scrollbar items-center">
            {[
              { id: "all", label: "Tất cả" },
              { id: "blog", label: "Blog Chuyên Gia" },
              { id: "tin-tuc", label: "Tin Tức Nội Bộ" },
              { id: "su-kien", label: "Sự Kiện - Giải Thưởng" }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition-all ${
                  filter === tab.id 
                    ? "border-pink-500 bg-pink-500/10 text-pink-500" 
                    : "border-white/10 bg-transparent text-gray-400 hover:text-white hover:border-white/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6">
        {isLoading ? (
          <div className="text-center py-20 font-mono text-gray-500">Đang tải bài viết...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const styles = mapCategoryStyles(post.category);
              const dateObj = new Date(post.createdAt);
              const formattedDate = `${dateObj.getDate()} Thg ${dateObj.getMonth() + 1}, ${dateObj.getFullYear()}`;
              const descriptionSnippet = stripHtml(post.content).substring(0, 120) + '...';

              return (
                <Link href={`/blog/${post._id}`} key={post._id} className="blog-card block bg-[#111] border border-white/5 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-400 relative">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-80"></div>
                    <div className={`absolute top-4 left-4 text-black text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${styles.color}`}>
                      {styles.name}
                    </div>
                  </div>
                  <div className="p-6 relative">
                    <h3 className={`font-display text-2xl text-white group-hover:${styles.textColor} transition-colors mb-3 line-clamp-2`}>{post.title}</h3>
                    <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed">{descriptionSnippet}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border border-white/20 bg-gray-800 shrink-0"></div>
                        <div className="text-xs">
                          <p className="text-white font-medium">{post.author}</p>
                          <p className="text-gray-500 font-mono">{formattedDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            {filteredPosts.length === 0 && (
              <div className="col-span-full text-center py-20 font-mono text-gray-500">
                Không tìm thấy bài viết nào phù hợp.
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
