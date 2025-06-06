function showAlert() {
  alert("ขอบคุณที่คลิกปุ่มนี้!");
}

function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav a, .menu-wrapper a, a.page-link"); // กำหนดลิงก์ที่ต้องการทำ transition

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // หยุดโหลดหน้าใหม่ทันที
      const href = this.getAttribute("href");

      // เพิ่มคลาส fade-out ให้ body
      document.body.classList.add("fade-out");

      // รอ transition จบก่อนค่อยเปลี่ยนหน้า
      setTimeout(() => {
        window.location.href = href;
      }, 500); // 500ms = ตาม duration ของ CSS transition
    });
  });
});
