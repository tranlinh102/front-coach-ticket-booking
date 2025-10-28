import React from 'react';

/**
 * Đây là Layout lồng nhau cho tất cả các route bên trong /blog
 * Nó sẽ bọc 'app/blog/page.tsx' và 'app/blog/[slug]/page.tsx'
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Thêm một container chung cho các trang blog
    <section className="container mx-auto px-4 py-8">
      {/* Yêu cầu 3: Tiêu đề chung "Trang Blog Cá Nhân"
        Tiêu đề này sẽ hiển thị trên cả trang danh sách và trang chi tiết
      */}
      <header className="mb-8 pb-4 border-b-2 border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Trang Blog Cá Nhân
        </h1>
      </header>

      {/* 'children' chính là nội dung của page.tsx hoặc [slug]/page.tsx */}
      <main>
        {children}
      </main>
    </section>
  );
}
