// ===== 導入フレームアニメーション =====
// スクロール量に応じて静止画をパラパラ切り替え、最後にLP本体を表示する
const TOTAL_FRAMES = 140;
const FRAMES_DIR = "assets/hero/frames/";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const frameAnimation = document.getElementById("frameAnimation");
const frameImg = document.getElementById("frameImg");
const scrollHint = document.getElementById("scrollHint");
const mainContent = document.getElementById("mainContent");

// アニメーション低減設定、または ?preview=1 のときは導入演出をスキップしてLPを即表示
const skipIntro =
  prefersReducedMotion ||
  new URLSearchParams(location.search).get("preview") === "1";

let hasFrames = false;
let preloaded = [];
let frameAnimDone = false;
let jumping = false;

if (skipIntro) {
  frameAnimation.classList.add("hidden");
  frameAnimation.style.display = "none";
  mainContent.classList.add("visible");
  frameAnimDone = true;
  initReveal();
} else {
  // フレームが実際に存在するか確認してから開始する
  const testImg = new Image();
  testImg.onload = function () {
    hasFrames = true;
    frameImg.style.display = "block";
    preloadFrames();
  };
  testImg.onerror = function () {
    // フレーム画像が見つからない場合は、通常のスクロールだけで導入を終える
    initScroll();
  };
  testImg.src = FRAMES_DIR + "frame_0001.jpg";
}

function preloadFrames() {
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = FRAMES_DIR + "frame_" + String(i).padStart(4, "0") + ".jpg";
    preloaded.push(img);
  }
  initScroll();
}

function initScroll() {
  // 導入中は、本編の長さに関わらず一定量のスクロールで完了するようにする
  document.body.style.height = hasFrames
    ? window.innerHeight + TOTAL_FRAMES * 60 + "px"
    : "300vh";

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function onScroll() {
  if (frameAnimDone || jumping) return;

  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const docH = document.body.scrollHeight - window.innerHeight;

  // ヒントはスクロール開始で素早くフェードアウト
  if (scrollHint) {
    const hintOpacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.3));
    scrollHint.style.opacity = hintOpacity;
  }

  if (hasFrames) {
    const progress = Math.min(scrollY / (docH * 0.85), 1);
    const frameIdx = Math.min(
      Math.floor(progress * TOTAL_FRAMES),
      TOTAL_FRAMES - 1
    );
    if (preloaded[frameIdx] && preloaded[frameIdx].complete) {
      frameImg.src = preloaded[frameIdx].src;
    }
    if (progress >= 1) finishAnimation();
  } else {
    const progress = Math.min(scrollY / (window.innerHeight * 1.5), 1);
    if (progress >= 1) finishAnimation();
  }
}

function finishAnimation() {
  frameAnimDone = true;
  jumping = true;
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
  requestAnimationFrame(function () {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    requestAnimationFrame(function () {
      frameAnimation.classList.add("hidden");
      document.body.style.height = "";
      mainContent.classList.add("visible");
      setTimeout(function () {
        jumping = false;
      }, 900);
      // ここで初めてLP内のスクロール演出を有効化する
      initReveal();
    });
  });
}

// ===== ヘッダーに影をつける(境目をわかりやすくするため) =====
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 16px rgba(90, 74, 63, 0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});

// アニメーション低減設定のユーザーには、ヒーローの動画も静止画のまま止めておく
const heroVideo = document.querySelector(".hero__cover video");
if (heroVideo && prefersReducedMotion) {
  heroVideo.removeAttribute("autoplay");
  heroVideo.pause();
}

// セクションが画面に入ったら、ふわっと表示する
// (アニメーション低減設定のユーザーには、動きを付けずそのまま表示する)
function initReveal() {
  if (prefersReducedMotion) return;

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

// ===== 「ご依頼はnoteから」ボタンを21時に表示 =====
// note記事の公開時刻(当日21:00、閲覧者の端末時刻基準)まではボタンを隠しておき、
// 21:00を過ぎたら表示する。ページを開いたまま21:00をまたいだ場合も
// リロード無しで自動的に表示されるようにする。
(function () {
  const noteLink = document.getElementById("noteLink");
  if (!noteLink) return;

  function getTodayAt21() {
    const target = new Date();
    target.setHours(21, 0, 0, 0);
    return target;
  }

  if (new Date() >= getTodayAt21()) {
    noteLink.classList.add("is-visible");
  } else {
    const msUntil21 = getTodayAt21() - new Date();
    setTimeout(() => {
      noteLink.classList.add("is-visible");
    }, msUntil21);
  }
})();
