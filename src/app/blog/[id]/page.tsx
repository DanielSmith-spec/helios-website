"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const id = params.id as string;
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        const json = await res.json();
        if (json.success) {
          setPost(json.data);
        }
      } catch (e) {
        console.error("Failed to fetch post", e);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) {
      fetchPost();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex items-center justify-center">
        <p className="font-mono text-gray-500">Đang tải bài viết...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center">
        <h1 className="font-display text-4xl text-white mb-4">Không tìm thấy bài viết</h1>
        <Link href="/blog" className="text-pink-500 hover:text-pink-400 font-mono underline underline-offset-4">
          Quay lại Blog
        </Link>
      </div>
    );
  }

  const dateObj = new Date(post.createdAt);
  const formattedDate = `${dateObj.getDate()} Thg ${dateObj.getMonth() + 1}, ${dateObj.getFullYear()}`;

  const mapCategoryName = (category: string) => {
    switch (category) {
      case 'tin-tuc': return "Tin Tức Nội Bộ";
      case 'su-kien': return "Sự Kiện";
      case 'blog':
      default: return "Blog Chuyên Gia";
    }
  };

  return (
    <div className="relative z-10 pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white font-mono text-sm mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Quay lại Blog
        </Link>
        
        <div className="mb-10 text-center">
          <span className="inline-block bg-white/10 text-pink-400 border border-pink-500/30 px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-widest mb-6">
            {mapCategoryName(post.category)}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-wide leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-mono text-gray-400">
            <span>Bởi <strong className="text-white">{post.author}</strong></span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>

        <div className="aspect-[21/9] overflow-hidden rounded-2xl relative mb-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>

        <div 
          className="prose prose-invert prose-lg max-w-none 
          prose-headings:font-display prose-headings:uppercase prose-headings:text-white 
          prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed 
          prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline 
          prose-img:rounded-xl prose-img:border prose-img:border-white/10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
