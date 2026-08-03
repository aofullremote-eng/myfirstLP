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
// (アニメーション低減設定のユーザーには、動きを付けずそのまま表示する)
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  const revealTargets = document.querySelectorAll(
    ".empathy__card, .step, .feature, .profile__inner, .price-card, .faq__item, .section__title, .section__lead, .divider, .empathy__bridge, .contact__inner"
  );
  // 作品ギャラリーは傾きを保つため、専用のフェード演出にする
  const revealFadeTargets = document.querySelectorAll(".works__item");

  revealTargets.forEach((el) => el.classList.add("reveal"));
  revealFadeTargets.forEach((el) => el.classList.add("reveal-fade"));

  // グリッド内の要素は少しずつ遅れて表示する(カスケード演出)
  const staggerGroups = document.querySelectorAll(
    ".empathy__grid, .steps, .features, .works__grid, .faq__list"
  );
  staggerGroups.forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.transitionDelay = `${Math.min(i, 6) * 0.08}s`;
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
  revealFadeTargets.forEach((el) => observer.observe(el));
}
