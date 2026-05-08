"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Workspace() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userRole = (session?.user as any)?.role;

  const [activeTab, setActiveTab] = useState<"editor" | "admin" | "contacts" | "recruitment">("editor");
  const [theme, setTheme] = useState("dark");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("blog");
  const [coverImage, setCoverImage] = useState("");
  const editorRef = useRef<HTMLDivElement>(null);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    document.body.classList.add("workspace-mode");
    const storedTheme = localStorage.getItem("helios_theme_mode") || "dark";
    if (storedTheme === "light") {
      setTheme("light");
      document.body.classList.add("light-theme");
    }
    fetchPosts();
    if (userRole === "admin") {
      fetchContacts();
      fetchJobs();
    }
    return () => {
      document.body.classList.remove("workspace-mode", "light-theme");
    };
  }, [status, userRole]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts?all=true");
      const json = await res.json();
      if (json.success) setBlogs(json.data);
    } catch (e) { console.error(e); }
  };

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contacts");
      const json = await res.json();
      if (json.success) setContacts(json.data);
    } catch (e) { console.error(e); }
  };

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const json = await res.json();
      if (json.success && json.list) setJobs(json.list);
    } catch (e) { console.error(e); }
  };

  const toggleJobStatus = async (jobId: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !currentStatus }),
      });
      const json = await res.json();
      if (json.success) {
        setJobs(prev => prev.map(j => j.jobId === jobId ? { ...j, isActive: !currentStatus } : j));
      }
    } catch (e) { console.error(e); }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("light-theme", newTheme === "light");
    localStorage.setItem("helios_theme_mode", newTheme);
  };

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleLink = () => {
    const url = prompt("Nhập đường dẫn liên kết:", "https://");
    if (url) handleFormat("createLink", url);
  };

  const submitDraft = async () => {
    const contentHTML = editorRef.current?.innerHTML;
    if (!title || !contentHTML?.trim() || contentHTML === "<br>") {
      return alert("Vui lòng nhập tiêu đề và nội dung bài viết!");
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title, category, content: contentHTML,
          coverImage: coverImage || "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800",
          author: session?.user?.name || "Editor",
          status: userRole === "admin" ? "published" : "draft",
        }),
      });
      const json = await res.json();
      if (json.success) {
        setTitle(""); setCoverImage(""); setCategory("blog");
        if (editorRef.current) editorRef.current.innerHTML = "";
        alert(userRole === "admin" ? "Bài viết đã đăng thành công!" : "Bản nháp đã gửi thành công!");
        fetchPosts();
        setActiveTab("admin");
      } else { alert("Lỗi: " + json.error); }
    } catch { alert("Đã xảy ra lỗi khi lưu bài viết."); }
    setIsLoading(false);
  };

  const deletePost = async (id: string) => {
    if (confirm("Chắc chắn xóa bài này?")) {
      await fetch(`/api/posts/${id}`, { method: "DELETE" });
      fetchPosts();
    }
  };

  const pushLive = async (id: string) => {
    await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "published" }),
    });
    fetchPosts();
  };

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center font-mono text-gray-500">
          <div className="w-8 h-8 border-2 border-pink-500/30 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
          Đang tải...
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col font-sans pt-20 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none transition-colors duration-500">
        <div className="absolute inset-0 bg-grid-dots bg-[length:24px_24px] bg-[image:radial-gradient(var(--glass-border)_1px,transparent_1px)] opacity-50"></div>
        <div className="absolute rounded-full blur-[120px] pointer-events-none animate-blob w-[600px] h-[600px] -top-[10%] -left-[10%] bg-[var(--blob-1)]"></div>
        <div className="absolute rounded-full blur-[120px] pointer-events-none animate-blob animation-delay-2000 w-[500px] h-[500px] bottom-[10%] -right-[5%] bg-[var(--blob-2)]"></div>
        <div className="absolute rounded-full blur-[120px] pointer-events-none animate-blob animation-delay-4000 w-[400px] h-[400px] top-[30%] right-[20%] bg-[var(--blob-3)]"></div>
      </div>

      <div className="p-4 md:p-8 max-w-6xl mx-auto w-full relative z-10 flex-grow flex flex-col">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <div className="flex items-end gap-4 mb-2">
              <h1 className="font-display text-4xl uppercase font-bold tracking-wide text-[var(--text-main)]">
                Helios <span className="text-[var(--accent-main)]">Portal</span>
              </h1>
              <span className="bg-[var(--input-bg)] border border-[var(--glass-border)] text-[var(--text-main)] font-mono text-[10px] px-2 py-1 rounded uppercase tracking-widest mb-1">
                Workspace
              </span>
            </div>
            <p className="text-sm font-light text-[var(--text-muted)]">
              Xin chào, <strong className="text-[var(--accent-main)]">{session?.user?.name}</strong>
              <span className="ml-2 text-xs bg-[var(--accent-main)]/10 border border-[var(--accent-main)]/30 text-[var(--accent-main)] font-mono px-2 py-0.5 rounded uppercase">
                {userRole === "admin" ? "Admin" : "Content"}
              </span>
            </p>
          </div>
          <div className="bg-[var(--glass-bg)] backdrop-blur-3xl saturate-150 border border-[var(--glass-border)] rounded-full shadow-[var(--glass-shadow)] px-4 py-2 flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              {theme === "light" ? "Sáng Ngọc" : "Tối Neon"}
            </span>
            <label className="relative inline-block w-[50px] h-[26px]">
              <input type="checkbox" className="opacity-0 w-0 h-0" checked={theme === "light"} onChange={toggleTheme} />
              <span className={`absolute cursor-pointer inset-0 rounded-full transition-colors duration-400 border border-[var(--glass-border)] ${theme === "light" ? "bg-[var(--accent-main)]" : "bg-gray-500/30"}`}>
                <span className={`absolute h-[18px] w-[18px] left-[4px] bottom-[3px] rounded-full transition-transform duration-400 ${theme === "light" ? "bg-white translate-x-[24px]" : "bg-[var(--text-main)]"}`}></span>
              </span>
            </label>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-[var(--glass-border)] mb-8 overflow-x-auto">
          <button onClick={() => setActiveTab("editor")} className={`pb-3 font-mono uppercase tracking-widest text-sm transition-all border-b-2 whitespace-nowrap ${activeTab === "editor" ? "border-[var(--accent-main)] text-[var(--accent-main)]" : "border-transparent text-[var(--text-muted)] hover:text-[var(--accent-main)]"}`}>
            Góc Biên Tập
          </button>
          {(userRole === "admin" || userRole === "content") && (
            <button onClick={() => { setActiveTab("admin"); fetchPosts(); }} className={`pb-3 font-mono uppercase tracking-widest text-sm transition-all border-b-2 whitespace-nowrap ${activeTab === "admin" ? "border-[var(--accent-main)] text-[var(--accent-main)]" : "border-transparent text-[var(--text-muted)] hover:text-[var(--accent-main)]"}`}>
              Quản Lý Bài Viết
            </button>
          )}
          {userRole === "admin" && (
            <button onClick={() => { setActiveTab("contacts"); fetchContacts(); }} className={`pb-3 font-mono uppercase tracking-widest text-sm transition-all border-b-2 whitespace-nowrap ${activeTab === "contacts" ? "border-[var(--accent-main)] text-[var(--accent-main)]" : "border-transparent text-[var(--text-muted)] hover:text-[var(--accent-main)]"}`}>
              Quản Lý Liên Hệ
            </button>
          )}
          {userRole === "admin" && (
            <button onClick={() => { setActiveTab("recruitment"); fetchJobs(); }} className={`pb-3 font-mono uppercase tracking-widest text-sm transition-all border-b-2 whitespace-nowrap ${activeTab === "recruitment" ? "border-[var(--accent-main)] text-[var(--accent-main)]" : "border-transparent text-[var(--text-muted)] hover:text-[var(--accent-main)]"}`}>
              Quản Lý Tuyển Dụng
            </button>
          )}
        </div>

        {/* EDITOR TAB */}
        {activeTab === "editor" && (
          <div className="flex-grow flex flex-col gap-8 animate-fade-in">
            <div className="bg-[var(--glass-bg)] backdrop-blur-3xl saturate-150 border border-[var(--glass-border)] rounded-3xl shadow-[var(--glass-shadow)] p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono mb-2 uppercase tracking-widest text-[var(--text-muted)]">Tiêu Đề Bài Viết Chính (H1)</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-[var(--input-bg)] border border-[var(--glass-border)] text-[var(--text-main)] rounded-lg p-3.5 font-display text-lg focus:border-[var(--accent-main)] focus:outline-none focus:ring-4 focus:ring-[var(--accent-glow)] transition-all mb-4" placeholder="Nhập tiêu đề ấn tượng..." />
                  <label className="block text-xs font-mono mb-2 uppercase tracking-widest text-[var(--text-muted)]">Chuyên Mục</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-[var(--input-bg)] border border-[var(--glass-border)] text-[var(--text-main)] rounded-lg p-3.5 focus:border-[var(--accent-main)] focus:outline-none focus:ring-4 focus:ring-[var(--accent-glow)] transition-all">
                    <option value="blog">Blog Chuyên Gia</option>
                    <option value="tin-tuc">Tin Tức Nội Bộ</option>
                    <option value="su-kien">Sự Kiện - Giải Thưởng</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono mb-2 uppercase tracking-widest text-[var(--text-muted)]">Ảnh Bìa (Đường dẫn URL)</label>
                  <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} className="w-full bg-[var(--input-bg)] border border-[var(--glass-border)] text-[var(--text-main)] rounded-lg p-3.5 text-sm font-mono focus:border-[var(--accent-main)] focus:outline-none focus:ring-4 focus:ring-[var(--accent-glow)] transition-all" placeholder="Đường dẫn ảnh..." />
                  {coverImage && (
                    <div className="mt-3 w-full h-32 rounded-lg overflow-hidden border border-[var(--glass-border)] relative">
                      <Image src={coverImage} alt="Cover Preview" fill className="object-cover" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-[var(--glass-bg)] backdrop-blur-3xl saturate-150 border border-[var(--glass-border)] rounded-3xl shadow-[var(--glass-shadow)] p-6 md:p-8 flex flex-col flex-grow">
              <label className="text-xs font-mono mb-3 uppercase tracking-widest text-[var(--text-muted)]">Nội Dung Bài Viết</label>
              <div className="bg-[var(--input-bg)] border border-[var(--glass-border)] rounded-2xl overflow-hidden focus-within:border-[var(--accent-main)] transition-all flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 p-3 bg-gray-500/5 border-b border-[var(--glass-border)]">
                  <button onClick={() => handleFormat("bold")} className="bg-transparent text-[var(--text-muted)] border border-transparent px-3 py-1.5 rounded-md text-sm hover:bg-[var(--accent-glow)] hover:text-[var(--text-main)] transition-all font-bold">B</button>
                  <button onClick={() => handleFormat("italic")} className="bg-transparent text-[var(--text-muted)] border border-transparent px-3 py-1.5 rounded-md text-sm hover:bg-[var(--accent-glow)] hover:text-[var(--text-main)] transition-all italic">I</button>
                  <button onClick={() => handleFormat("underline")} className="bg-transparent text-[var(--text-muted)] border border-transparent px-3 py-1.5 rounded-md text-sm hover:bg-[var(--accent-glow)] hover:text-[var(--text-main)] transition-all underline">U</button>
                  <div className="w-px bg-[var(--glass-border)] mx-1"></div>
                  <button onClick={() => handleFormat("formatBlock", "H2")} className="bg-transparent text-[var(--text-muted)] border border-transparent px-3 py-1.5 rounded-md text-sm hover:bg-[var(--accent-glow)] transition-all font-bold font-display">H2</button>
                  <button onClick={() => handleFormat("formatBlock", "H3")} className="bg-transparent text-[var(--text-muted)] border border-transparent px-3 py-1.5 rounded-md text-sm hover:bg-[var(--accent-glow)] transition-all font-bold font-display opacity-80">H3</button>
                  <button onClick={() => handleFormat("formatBlock", "P")} className="bg-transparent text-[var(--text-muted)] border border-transparent px-3 py-1.5 rounded-md text-sm hover:bg-[var(--accent-glow)] transition-all">Đoạn Văn</button>
                  <div className="w-px bg-[var(--glass-border)] mx-1"></div>
                  <button onClick={handleLink} className="bg-transparent text-[var(--text-muted)] border border-transparent px-3 py-1.5 rounded-md text-sm hover:bg-[var(--accent-glow)] transition-all">Liên Kết</button>
                  <button onClick={() => handleFormat("removeFormat")} className="bg-transparent text-[var(--text-muted)] border border-transparent px-3 py-1.5 rounded-md text-sm hover:bg-[var(--accent-glow)] transition-all">Xóa Định Dạng</button>
                </div>
                <div ref={editorRef} className="p-6 min-h-[400px] outline-none text-lg text-[var(--text-main)] leading-relaxed empty:before:content-[attr(data-placeholder)] empty:before:text-[var(--text-muted)] prose prose-invert prose-headings:font-display prose-headings:text-[var(--accent-main)] prose-headings:uppercase" contentEditable data-placeholder="Bắt đầu soạn thảo nội dung..."></div>
              </div>
              <div className="flex justify-end mt-8">
                <button onClick={submitDraft} disabled={isLoading} className="bg-[var(--accent-main)] text-black font-display uppercase tracking-widest py-3 px-10 rounded-full transition-all shadow-[0_0_15px_var(--accent-glow)] hover:scale-105 font-bold disabled:opacity-50">
                  {isLoading ? "Đang Lưu..." : userRole === "admin" ? "Đăng Bài Ngay" : "Lưu & Gửi Duyệt"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ADMIN TAB */}
        {activeTab === "admin" && (
          <div className="flex-grow animate-fade-in">
            <div className="bg-[var(--glass-bg)] backdrop-blur-3xl saturate-150 border border-[var(--glass-border)] rounded-3xl shadow-[var(--glass-shadow)] p-6 md:p-8">
              <div className="flex items-center justify-between mb-8 border-b border-[var(--glass-border)] pb-4">
                <h3 className="font-display text-2xl uppercase tracking-wide text-[var(--text-main)]">Danh Sách Quản Lý</h3>
                <span className="bg-[var(--input-bg)] border border-[var(--glass-border)] text-[var(--text-main)] text-xs font-mono px-3 py-1 rounded">{blogs.length} Bài Viết</span>
              </div>
              <div className="flex flex-col gap-4">
                {blogs.map(blog => {
                  const isDraft = blog.status === "draft";
                  const isPublished = blog.status === "published";
                  return (
                    <div key={blog._id} className="bg-[var(--input-bg)] border border-[var(--glass-border)] p-5 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="max-w-2xl">
                        <h4 className="font-display text-xl mb-1 text-[var(--text-main)]">{blog.title}</h4>
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] px-2 py-0.5 rounded font-mono uppercase border ${isDraft ? "bg-yellow-500/20 text-yellow-500 border-yellow-500/30" : "bg-green-500/20 text-green-500 border-green-500/30"}`}>
                            {isDraft ? "Bản Nháp" : "Đã Xuất Bản"}
                          </span>
                          <span className="text-xs font-mono text-[var(--text-muted)]">Tác giả: {blog.author}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 w-full md:w-auto shrink-0">
                        {userRole === "admin" && (
                          <button onClick={() => deletePost(blog._id)} className="text-gray-500 hover:text-red-500 px-3 transition-colors uppercase font-mono text-xs">Xóa</button>
                        )}
                        {isDraft && userRole === "admin" && (
                          <button onClick={() => pushLive(blog._id)} className="bg-green-600/20 text-green-500 border border-green-500/50 hover:bg-green-500 hover:text-white px-5 py-2 rounded-lg text-xs font-mono uppercase tracking-widest transition-all">Đăng Lên Web</button>
                        )}
                        {isPublished && (
                          <span className="text-gray-500 text-xs font-mono uppercase border border-gray-600 px-5 py-2 rounded-lg bg-[var(--input-bg)]">Đang Hiển Thị</span>
                        )}
                      </div>
                    </div>
                  );
                })}
                {blogs.length === 0 && <p className="text-center text-[var(--text-muted)] font-mono py-12">Chưa có bài viết nào trong Database.</p>}
              </div>
            </div>
          </div>
        )}

        {/* CONTACTS TAB (Admin only) */}
        {activeTab === "contacts" && userRole === "admin" && (
          <div className="flex-grow animate-fade-in">
            <div className="bg-[var(--glass-bg)] backdrop-blur-3xl saturate-150 border border-[var(--glass-border)] rounded-3xl shadow-[var(--glass-shadow)] p-6 md:p-8">
              <div className="flex items-center justify-between mb-8 border-b border-[var(--glass-border)] pb-4">
                <h3 className="font-display text-2xl uppercase tracking-wide text-[var(--text-main)]">Form Liên Hệ & Tuyển Dụng</h3>
                <span className="bg-[var(--input-bg)] border border-[var(--glass-border)] text-[var(--text-main)] text-xs font-mono px-3 py-1 rounded">{contacts.length} Đơn</span>
              </div>
              <div className="flex flex-col gap-4">
                {contacts.map(c => (
                  <div key={c._id} className="bg-[var(--input-bg)] border border-[var(--glass-border)] p-5 rounded-xl">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                      <div>
                        <h4 className="font-display text-lg text-[var(--text-main)]">{c.name}</h4>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded font-mono uppercase border ${c.source === "recruitment" ? "bg-pink-500/20 text-pink-400 border-pink-500/30" : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"}`}>
                            {c.source === "recruitment" ? "Tuyển Dụng" : "Liên Hệ"}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded font-mono uppercase border ${c.status === "new" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}>
                            {c.status === "new" ? "Mới" : c.status === "contacted" ? "Đã liên hệ" : "Lưu trữ"}
                          </span>
                        </div>
                        <div className="mt-3 text-sm text-[var(--text-muted)] space-y-1 font-mono">
                          <p>📞 {c.phone}</p>
                          {c.socialLink && <p>🔗 {c.socialLink}</p>}
                          {c.purpose && <p>Mục đích: {c.purpose}</p>}
                          {c.jobPosition && <p>Vị trí: {c.jobPosition}</p>}
                        </div>
                      </div>
                      <div className="text-xs font-mono text-[var(--text-muted)]">
                        {new Date(c.createdAt).toLocaleDateString("vi-VN")}
                      </div>
                    </div>
                  </div>
                ))}
                {contacts.length === 0 && <p className="text-center text-[var(--text-muted)] font-mono py-12">Chưa có đơn liên hệ nào.</p>}
              </div>
            </div>
          </div>
        )}

        {/* RECRUITMENT TAB (Admin only) */}
        {activeTab === "recruitment" && userRole === "admin" && (
          <div className="flex-grow animate-fade-in">
            <div className="bg-[var(--glass-bg)] backdrop-blur-3xl saturate-150 border border-[var(--glass-border)] rounded-3xl shadow-[var(--glass-shadow)] p-6 md:p-8">
              <div className="flex items-center justify-between mb-8 border-b border-[var(--glass-border)] pb-4">
                <h3 className="font-display text-2xl uppercase tracking-wide text-[var(--text-main)]">Trạng Thái Tuyển Dụng</h3>
                <span className="bg-[var(--input-bg)] border border-[var(--glass-border)] text-[var(--text-main)] text-xs font-mono px-3 py-1 rounded">{jobs.length} Vị Trí</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-6 font-light">Bật/tắt trạng thái tuyển dụng cho từng vị trí. Thay đổi sẽ được phản ánh ngay trên trang Tuyển Dụng công khai.</p>
              <div className="flex flex-col gap-4">
                {jobs.map((job: any) => (
                  <div key={job.jobId} className="bg-[var(--input-bg)] border border-[var(--glass-border)] p-5 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="font-display text-lg text-[var(--text-main)] uppercase tracking-wide">{job.title}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-mono uppercase border ${job.isActive ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'}`}>
                          {job.isActive ? 'Đang Tuyển' : 'Đã Đóng'}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--text-muted)]">
                          ID: {job.jobId}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleJobStatus(job.jobId, job.isActive)}
                      className={`shrink-0 px-6 py-2.5 rounded-lg text-xs font-mono uppercase tracking-widest transition-all border ${
                        job.isActive
                          ? 'bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500 hover:text-white'
                          : 'bg-green-500/10 text-green-400 border-green-500/30 hover:bg-green-500 hover:text-white'
                      }`}
                    >
                      {job.isActive ? 'Đóng Tuyển' : 'Mở Tuyển'}
                    </button>
                  </div>
                ))}
                {jobs.length === 0 && <p className="text-center text-[var(--text-muted)] font-mono py-12">Đang tải dữ liệu tuyển dụng...</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes floatBlob {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 30px) scale(1.1); }
          100% { transform: translate(-30px, 50px) scale(0.9); }
        }
        .animate-blob { animation: floatBlob 20s infinite alternate ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
