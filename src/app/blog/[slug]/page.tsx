// import Link from 'next/link';

// Định nghĩa kiểu dữ liệu cho props, bao gồm 'params'
type BlogPostPageProps = {
  params: {
    slug: string; // 'slug' phải trùng tên với thư mục động [slug]
  };
};

/**
 * Yêu cầu 2: Route động /blog/[slug]
 * Trang này nhận 'slug' từ URL qua props.params
 */
export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Lấy slug từ params
  const { slug } = params;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">
        {/* Hiển thị slug nhận được từ URL */}
        Chi tiết bài viết: <span className="text-green-700">{slug}</span>
      </h1>
      
      <p className="text-gray-700 mb-6">
        Trong một ứng dụng thực tế, bạn sẽ dùng 'slug' này để query database
        và lấy nội dung bài viết tương ứng.
      </p>

      {/* <Link 
        href="/blog" 
        className="inline-block text-blue-600 hover:underline"
      >
        &larr; Quay lại danh sách blog
      </Link> */}
    </div>
  );
}

