// Đánh dấu đây là một Client Component
"use client";

// Import các hooks cần thiết từ React
import { useState, useEffect } from 'react';

/**
 * Component Counter
 * Đây là một Client Component để quản lý và hiển thị một bộ đếm.
 */
export default function Counter() {
  // 3. Sử dụng useState để tạo một biến count (khởi tạo bằng 0)
  const [count, setCount] = useState(0);

  // 6. Nâng cao: Sử dụng useEffect để log khi component được mount
  useEffect(() => {
    // Mảng phụ thuộc rỗng [] đảm bảo effect này chỉ chạy 1 lần khi component mount
    console.log("Component Counter đã được mount!");
  }, []);

  // Hàm xử lý sự kiện click cho nút
  const handleIncrement = () => {
    // 4. Gọi hàm setCount để cập nhật state
    setCount(count + 1);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white w-full max-w-xs text-center">
      <h2 className="text-2xl font-bold mb-4">Bộ đếm Tương tác</h2>
      
      {/* 5. Hiển thị giá trị count ra giao diện */}
      <p className="text-5xl font-mono font-bold text-blue-600 mb-6">{count}</p>
      
      {/* 4. Tạo một nút <button> sử dụng sự kiện onClick */}
      <button
        onClick={handleIncrement}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Tăng lên 1
      </button>
    </div>
  );
}

