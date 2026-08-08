// 日本語の文章が、単語や活用の途中で改行されないようにする(BudouX)
// https://github.com/google/budoux
import { loadDefaultJapaneseParser } from "./index.js";

const parser = loadDefaultJapaneseParser();

// 見出し・リード文・本文など、日本語の文章が入る要素にまとめて適用する
const targets = document.querySelectorAll(
  ".hero__lead, .section__title, .section__lead, .profile__title, .profile__name, .profile__bio, .profile__note, " +
    ".empathy__card p, .empathy__bridge, .step h3, .step p, .feature h3, .feature p, " +
    ".price-card__note, .faq__q, .faq__a, .contact__lead, .contact__note, .footer p"
);

targets.forEach((el) => {
  try {
    parser.applyToElement(el);
  } catch (e) {
    // 万が一失敗しても、通常の改行のまま表示は継続する
    console.warn("budoux: skipped an element", e);
  }
});
