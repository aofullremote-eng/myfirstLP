// セクションが画面に入ったら、ふわっと表示する
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const revealTargets = document.querySelectorAll(
  ".story__text, .story__basket, .menu__item, .access__card, .access__lead, .btn--large, .section__title, .section__lead, .divider"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const staggerGroups = document.querySelectorAll(".menu__grid, .access__grid");
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
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
