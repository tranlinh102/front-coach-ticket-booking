import Link from 'next/link';
// Yêu cầu 4: Import CSS Module
import styles from './blog.module.css';

// Dữ liệu giả cho danh sách blog
const mockPosts = [
  { slug: 'gioi-thieu-nextjs', title: 'Bài viết 1: Giới thiệu Next.js 14' },
  { slug: 'routing-trong-nextjs', title: 'Bài viết 2: Tìm hiểu App Router' },
  { slug: 'css-modules-va-tailwind', title: 'Bài viết 3: Styling trong Next.js' }
];

/**
 * Yêu cầu 1: Route tĩnh /blog
 * Trang này hiển thị danh sách các bài blog
 */
export default function BlogListPage() {
  return (
    <div>
      {/* Yêu cầu 4: Áp dụng style từ CSS Module cho <h1> */}
      <h1 className={styles.listTitle}>
        Danh sách bài viết
      </h1>
      
      <ul className="mt-6 space-y-4">
        {mockPosts.map((post) => (
          <li key={post.slug}>
            <Link 
              href={`/blog/${post.slug}`} 
              className="text-xl text-blue-700 hover:text-blue-900 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
