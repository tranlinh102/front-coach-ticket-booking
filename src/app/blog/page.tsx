import Link from 'next/link';

import styles from './blog.module.css';


const mockPosts = [
  { slug: 'gioi-thieu-nextjs', title: 'Bài viết 1: Giới thiệu Next.js 14' },
  { slug: 'routing-trong-nextjs', title: 'Bài viết 2: Tìm hiểu App Router' },
  { slug: 'css-modules-va-tailwind', title: 'Bài viết 3: Styling trong Next.js' }
];

// Export đối tượng metadata tĩnh
export const metadata = {
  title: 'Danh sách bài viết | Blog của tôi',
  description: 'Xem tất cả bài viết mới nhất.',
};

export default function BlogListPage() {
  return (
    <div>
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
