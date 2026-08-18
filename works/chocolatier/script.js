// セクションが画面に入ったら、ふわっと表示する
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const revealTargets = document.querySelectorAll(
  ".concept__lead, .concept__statement, .origin__card, .collection__item, .atelier__quote, .atelier__name, .atelier__bio, .boutique__card, .boutique__lead, .btn--large, .section__title, .section__lead, .divider"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const staggerGroups = document.querySelectorAll(".origin__grid, .collection__grid, .boutique__grid");
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
