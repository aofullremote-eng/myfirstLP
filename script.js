// スクロールしたらヘッダーに影をつける（境目をわかりやすくするため）
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 16px rgba(90, 74, 63, 0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});

// セクションが画面に入ったら、ふわっと表示する
const revealTargets = document.querySelectorAll(
  ".empathy__card, .step, .feature"
);

revealTargets.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));
