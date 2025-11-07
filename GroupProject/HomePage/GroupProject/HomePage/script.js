// Đợi cho toàn bộ nội dung HTML được tải xong
document.addEventListener("DOMContentLoaded", function() {

  // --- 1. XỬ LÝ LỌC KHÓA HỌC ---
  const filterChips = document.querySelectorAll("#course-filters .chip");
  const courseCards = document.querySelectorAll(".courses-grid .course");

  // Kiểm tra xem có phần tử nào không
  if (filterChips.length > 0 && courseCards.length > 0) {
    
    filterChips.forEach(chip => {
      chip.addEventListener("click", function() {
        // Lấy giá trị filter từ thuộc tính data-filter
        const filterValue = chip.getAttribute("data-filter");

        // Bỏ qua nếu không có data-filter (ví dụ nút "Giáo viên")
        if (!filterValue) return; 

        // 1. Cập nhật trạng thái "active" cho chip
        filterChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");

        // 2. Lọc các thẻ khóa học
        courseCards.forEach(card => {
          const cardCategory = card.getAttribute("data-category");

          if (filterValue === "all" || cardCategory === filterValue) {
            card.style.display = "flex"; // Hiện thẻ
          } else {
            card.style.display = "none"; // Ẩn thẻ
          }
        });
      });
    });
  } // Kết thúc If

  // --- 2. TỰ ĐỘNG CẬP NHẬT NĂM Ở FOOTER ---
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});