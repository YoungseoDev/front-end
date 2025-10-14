
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 새로고침 방지

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  // 입력값 확인 (간단한 유효성 검사)
  if (!name || !email || !message) {
    status.textContent = "Please fill out all fields.";
    status.style.color = "tomato"; // 빨간색
    return;
  }

  // 성공 메시지 출력
  status.textContent = `Thanks, ${name}! Your message has been received.`;
  status.style.color = "var(--brand-2)"; // 녹색 계열 (이미 CSS에 정의되어 있음)

  // 폼 초기화
  this.reset();
});

// Footer year
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear().toString();
})();
