export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black py-8 px-6 relative z-20 text-center font-mono text-xs text-gray-600">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-4">
        <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
        <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
      </div>
      <p>© {new Date().getFullYear()} HELIOS TALENT TCN. All rights reserved.</p>
      <p className="mt-2 opacity-50">Đồng hành - Hỗ trợ - Tỏa sáng</p>
    </footer>
  );
}
