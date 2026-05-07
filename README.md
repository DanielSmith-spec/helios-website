# Helios Talent Website

> Fullstack website chính thức của Helios Talent — Xây dựng trên Next.js 16 (App Router) + MongoDB + NextAuth.js

## Tech Stack

- **Framework**: Next.js 16.2.4 (Turbopack)
- **Database**: MongoDB (Mongoose)
- **Auth**: NextAuth.js (role-based)
- **Styling**: CSS + Tailwind-inspired utilities
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Truy cập [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Pages (App Router)
│   ├── api/          # API Routes
│   ├── blog/         # Blog pages
│   ├── gioi-thieu/   # Giới thiệu
│   ├── lien-he/      # Liên hệ
│   ├── linh-vuc-hoat-dong/
│   ├── tin-tuc-su-kien/
│   ├── tuyen-dung/   # Tuyển dụng
│   ├── login/        # Đăng nhập
│   └── workspace/    # Admin workspace
├── components/       # Shared components
├── lib/              # Utilities (auth, mongodb)
├── models/           # Mongoose models
└── legacy_html/      # Original HTML reference
```

## Environment Variables

Tạo file `.env.local`:

```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```
