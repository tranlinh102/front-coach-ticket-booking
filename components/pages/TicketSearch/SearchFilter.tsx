export default function SearchFilter() {
  return (
    <aside className="bg-white rounded-xl shadow-sm border p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">BỘ LỌC TÌM KIẾM</h3>
        <button className="text-red-500 text-sm hover:underline flex items-center gap-1">
          Bỏ lọc 🗑️
        </button>
      </div>

      <div className="space-y-4 text-sm">
        {/* Giờ đi */}
        <div>
          <h4 className="font-medium mb-2">Giờ đi</h4>
          <div className="space-y-1">
            {[
              "Sáng sớm 00:00 - 06:00 (13)",
              "Buổi sáng 06:00 - 12:00 (17)",
              "Buổi chiều 12:00 - 18:00 (18)",
              "Buổi tối 18:00 - 24:00 (36)",
            ].map((label, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#7FD858]" />
                {label}
              </label>
            ))}
          </div>
        </div>

        <hr />

        {/* Loại xe */}
        <div>
          <h4 className="font-medium mb-2">Loại xe</h4>
          <div className="flex flex-wrap gap-2">
            {["Ghế", "Giường", "Limousine"].map((type) => (
              <button
                key={type}
                className="px-3 py-1 border rounded-lg hover:bg-gray-50"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <hr />

        {/* Hàng ghế */}
        <div>
          <h4 className="font-medium mb-2">Hàng ghế</h4>
          <div className="flex flex-wrap gap-2">
            {["Hàng đầu", "Hàng giữa", "Hàng cuối"].map((r) => (
              <button
                key={r}
                className="px-3 py-1 border rounded-lg hover:bg-gray-50"
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <hr />

        {/* Tầng */}
        <div>
          <h4 className="font-medium mb-2">Tầng</h4>
          <div className="flex gap-2">
            {["Tầng trên", "Tầng dưới"].map((floor) => (
              <button
                key={floor}
                className="px-3 py-1 border rounded-lg hover:bg-gray-50"
              >
                {floor}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
