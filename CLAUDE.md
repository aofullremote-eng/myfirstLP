# KOTONOHA LP — プロジェクト仕様書

このファイルは、リポジトリ内での作業時に参照する仕様まとめです。
詳しい制作経緯・打ち合わせメモは [NOTES.md](./NOTES.md) を参照してください。

## このプロジェクトの目的

オーダーメイドLP制作サービス「**KOTONOHA**」のランディングページ(このリポジトリの `index.html` 自体)。

- **目的**: サービスの紹介と、お問い合わせ(`mailto:` リンク)への誘導
- **ターゲット**: ハンドメイド作品やアート活動をSNSで発信していて、そろそろ自分のページを持ちたい30代の個人クリエイター
- **提供者プロフィール**: aoi(LP制作パートナー)。実績はまだ無く、その点は正直に打ち出す方針
- **料金**: 現在調整中。LP上は "Coming Soon" 表示(`.price-card__amount--soon`)
- `works/` 配下には、KOTONOHAが実際に制作したサンプルLP(chocolat-aoi、forest-bakery、mori-no-panya、lumiere など)も同居している。これらは本体LPの「作品」として紹介される想定のデモ制作物。

## LPのデザイン

**構成(セクション順)**:
ヘッダー → ヒーロー(導入フレームアニメーション付き)→ こだわり(コンセプト)→ プロフィール → 共感 → 作品ギャラリー → 内容・強み+料金カード → よくある質問 → お問い合わせ → フッター

**世界観・トンマナ**:
- 手書き風の白いアジサイの線画モチーフ(`#hydrangea-motif`)をプロフィール・作品ギャラリー・お問い合わせセクションに散りばめる
- 共感セクションの4カードには、それぞれ違う葉っぱの線画モチーフ(`#leaf-motif`)を薄いグレージュ・繊細な線で配置
- 作品ギャラリーはアクリルブロック(クリスタル)風の厚みのあるフチ + ホバーで輝くエフェクト(`.works__item--crystal`)
- ヒーローは水彩テクスチャの背景(`assets/hero/water-texture.svg`)+ ループ動画 + Ken Burns風のズーム演出
- 初回訪問時、静止画フレームがパラパラ切り替わる導入アニメーション(`#frameAnimation`, `assets/hero/frames/`)からスクロールで本編へ

## 使用する画像

| 用途 | ファイル |
|---|---|
| ヒーロー動画のポスター/カバー | `assets/hero/hero-cover.jpg` |
| ヒーローのループ動画 | `assets/hero/hero-loop.mp4` |
| 導入フレームアニメーション(140枚) | `assets/hero/frames/frame_0001.jpg` 〜 `frame_0140.jpg` |
| ヒーロー背景の水彩テクスチャ(SVG) | `assets/hero/water-texture.svg` |
| プロフィール写真 | `assets/profile/profile-portrait.jpg` |
| 作品ギャラリー(9点) | `assets/works/work-01-eclat-chocolat.jpg` 〜 `work-09-gift.jpg`(`work-03-mirror.png` のみPNG) |

## 画像の保存場所

`assets/` 配下に用途別ディレクトリで格納する。

```
assets/
  hero/            … ヒーロー関連(カバー画像・動画・水彩テクスチャ)
    frames/        … 導入アニメーション用の連番静止画
  profile/         … プロフィール写真
  works/           … 作品ギャラリー画像
  vendor/          … サードパーティ製の静的アセット(BudouX 等、手動編集しない)
```

`works/<作品名>/assets/` には、それぞれのサンプルLP専用の画像が個別に格納されている(本体LPの `assets/` とは独立)。

## 画像サイズ

現状のアセットの実寸法(px)は以下の通り。新規追加時もおおむねこのサイズ感・比率に揃える。

| ファイル | 実寸法 | 表示上のアスペクト比 |
|---|---|---|
| `hero/hero-cover.jpg` | 1254×1254 | `.hero__cover` 内で幅100%表示(正方形) |
| `hero/frames/frame_*.jpg` | 可変(連番) | フルスクリーン `object-fit: cover` |
| `profile/profile-portrait.jpg` | 900×1200 | `aspect-ratio: 3 / 4` で `object-fit: cover` |
| `works/work-01-eclat-chocolat.jpg` | 1003×1254 | `aspect-ratio: 4 / 5` で `object-fit: cover`。サンプルLP `works/chocolat-aoi/` へのリンク付き |
| `works/work-02-lumiere.jpg` | 960×1200 | 同上。`works/lumiere/` のヒーローを撮影したスクリーンショット。サンプルLP `works/lumiere/` へのリンク付き |
| `works/work-03-mirror.png` | 1086×1448 | 同上。リンク無し(`.works__item--soon` で「Coming Soon」バッジ表示) |
| `works/work-04-glitter.jpg` | 900×900 | 同上 |
| `works/work-05-woodland.jpg` | 580×422 | 同上 |
| `works/work-06-goldfish.jpg` | 677×900 | 同上 |
| `works/work-07-cat.jpg` | 900×900 | 同上 |
| `works/work-08-crow.jpg` | 900×900 | 同上 |
| `works/work-09-gift.jpg` | 1254×1254 | 同上 |

現在、実際のサンプルLPへリンクしているのは `work-01`(Éclat Chocolat)と `work-02`(LUMIÈRE)の2点のみ。残り(`work-03`〜`work-09`)はまだ専用サンプルLPが無いイラスト作品例のため、`.works__item--soon` クラス+`.works__badge`(「Coming Soon」)で準備中であることを示している。

作品ギャラリー画像は `aspect-ratio: 4/5` でトリミング表示されるため、追加素材は正方形〜縦長(4:5前後)を目安にする。ファイル容量はJPEG品質を落としすぎない範囲で、おおよそ数十KB〜200KB程度に収めている(`work-02-mirror.png` は2MB超と重いため、追加でPNGを使う場合は圧縮を検討する)。

## フォント

Google Fonts依存は解消済み。CSS変数(`style.css` の `:root`)で定義:

```css
--font-display: "Zen Maru Gothic", "Hiragino Maru Gothic ProN", sans-serif;
--font-body:    "Zen Maru Gothic", "Hiragino Maru Gothic ProN", sans-serif;
--font-accent:  "Quicksand", sans-serif;
```

- **和文本文・見出し**: システム標準の丸ゴシック(Zen Maru Gothic / ヒラギノ丸ゴ)
- **英字アクセント**(ロゴ・eyebrow・ボタン内の一部・番号など): Quicksand系
- `index.html` の `<head>` には Google Fonts の `<link>` が残っているが、実運用のCSSはシステムフォントで完結している(フォールバックとして機能)
- **注意**: Quicksandは和文グリフを持たないため、和文テキストに `--font-accent` を指定しない(疑似イタリック化を避けるため、和文には常に `--font-display` / `--font-body` を使う。詳細は `style.css` 内 `.concept__stance` 付近のコメント参照)

## 色

`style.css` の `:root` で一元管理。

```css
--color-bg:        #eae6e2;  /* 背景(ウォームベージュ) */
--color-bg-deep:   #e3d7d3;  /* 背景(やや濃いめ) */
--color-rose:      #b98d85;  /* ローズアクセント */
--color-rose-deep: #9c716b;  /* ローズ(濃) */
--color-grey-deep: #6f6a66;  /* グレー(濃) */
--color-ivory:     #faf7f4;  /* アイボリー(カード背景等) */
--color-ink:       #6b5847;  /* 本文色。黒に見えすぎないモカブラウン */
--color-ink-light: #8f8783;  /* 本文色(淡) */
--color-line:      #cdc2bc;  /* ボーダー */
--color-greige:    #ded2c4;  /* デコレーション用グレージュ */
```

**方針**: 黒文字は使わない(`--color-ink` のモカブラウンで代替)。ivory / warm beige / rose アクセント + モカブラウンの配色でまとめる。

## レスポンシブ対応

- ビューポート基準の可変単位(`clamp()`)を見出し等に使用し、画面幅に応じて滑らかにサイズ変化させる(例: `.section__title { font-size: clamp(1.6rem, 3.5vw, 2.3rem); }`)
- グリッドは `repeat(auto-fit, minmax(...))` で列数を自動調整(共感カード・ステップ・特徴・作品ギャラリー)
- `.container` は `max-width: 1080px` + 左右パディング24pxで中央寄せ
- **ブレークポイント**: `@media (max-width: 600px)` のみ(モバイル用の上書き)
  - `.only-mobile` 要素を表示(改行位置の調整用)
  - 各セクションの上下パディングを縮小
  - プロフィールの2カラムグリッドを1カラムに変更、写真を中央寄せ・幅220px上限に
- `img { max-width: 100%; display: block; }` を基本ルールとして常に画面幅に収める
- `body { overflow-x: hidden; }` により、想定外の要素はみ出しでも横スクロールが発生しないよう安全策を入れている
- `prefers-reduced-motion: reduce` に対応し、アニメーション・トランジションを無効化する分岐を用意済み

## 変更してはいけない部分

- **配色方針**: 黒文字を使わない方針(`--color-ink` のモカブラウンを本文色として維持する)。既存のCSS変数(`--color-*`)の値を無断で変更しない
- **フォント方針**: 和文に `--font-accent`(Quicksand)を指定しない(疑似イタリック化するため)。この制約は `style.css` 内のコメントで明示されている
- **導入フレームアニメーションの仕組み**(`#frameAnimation` / `#mainContent` の表示制御ロジック、`script.js`)は、ページの初回体験の核となる演出のため、構造を変える場合は動作確認を必須とする
- **お問い合わせ導線**: `mailto:aofullremote@gmail.com` への問い合わせリンクを削除・変更しない(最終アクションの要)
- **料金表示**: 正式な料金が決まるまでは `Coming Soon` 表示のままにする(`NOTES.md` の「次回再開時のメモ」参照)
- **デプロイ運用**: このリポジトリは `master` に直接pushする運用(PRは使わない)。Vercel(`kotonoha-ai` プロジェクト)が `master` への自動デプロイに連携済みのため、`master` ブランチの扱いには注意する
- `assets/vendor/` 配下(BudouXなどのサードパーティ製アセット)は手動で編集しない
- `works/` 配下の各サンプルLP(`chocolat-aoi` 等)は、それぞれ独立した制作物として扱い、本体LP(`index.html` / `style.css` / `script.js`)の変更に巻き込んで一括変更しない

---

# works/lumiere/ — LUMIÈRE サンプルLP仕様

`works/lumiere/index.html` 1ファイル完結(インラインCSS/JS)の脱毛サロン向けサンプルLP。本体LP(KOTONOHA)の作品ギャラリーから紹介される想定のデモ制作物で、本体の `assets/` `style.css` `script.js` とは完全に独立している。

## このプロジェクトの目的

- **業種**: 脱毛サロン「LUMIÈRE」
- **目的**: 無料カウンセリングへの誘導(`mailto:aofullremote@gmail.com` リンク)
- **トンマナ**: ゴールド × クリーム × ローズの上品・華やかな女性向けサロン系デザイン(KOTONOHA本体とは配色・フォントとも別方針)

## LPのデザイン

**構成(セクション順)**:
ヘッダー → ヒーロー(`#top`、動画背景+シマーグラデーション見出し)→ こんなお悩みありませんか(`#worries`、玉ボケ背景)→ 当サロンが選ばれる3つの理由(`#reasons`)→ CTAバナー・無料カウンセリング予約(`#contact`)→ 安心して通っていただくために(`.assurance`)→ フッター

**世界観・トンマナ**:
- ヒーローは2本の動画(`hero-loop.mp4` / `hero-loop-2.mp4`)を交互にクロスフェード再生し、単体ループの繋ぎ目が目立たないようにしている(`#heroVideoA` / `#heroVideoB`、`ended` イベントで `.is-active` クラスをトグル)
- ヒーロー見出し(`h1`)はゴールド系グラデーションが流れる「シマー」アニメーション(`background-clip: text` + `@keyframes shimmer`)
- こんなお悩みありませんかセクションは、ヒーローと同系統の玉ボケ写真(`bokeh-texture.jpg`)を背景に使用
- CTAバナーは背景写真(`cta-portrait.jpg`)の上に半透明のガラス風カード(`backdrop-filter: blur()`)を重ねる構成
- 各セクション見出しは中央の左右に細い装飾ライン(`.section-head__inner`)を配置する共通デザイン

## 使用する画像

| 用途 | ファイル |
|---|---|
| ヒーロー動画のポスター | `assets/hero-portrait.jpg` |
| ヒーローのループ動画(2本、交互再生) | `assets/hero-loop.mp4`, `assets/hero-loop-2.mp4` |
| こんなお悩みありませんかの背景(玉ボケ) | `assets/bokeh-texture.jpg` |
| 当サロンが選ばれる3つの理由の写真 | `assets/treatment.jpg`, `assets/legs.jpg`, `assets/private-room.jpg` |
| CTAバナーの背景写真 | `assets/cta-portrait.jpg` |

## 画像の保存場所

`works/lumiere/assets/` 配下(本体LPの `assets/` とは独立。他のサンプルLPと同じ命名規則)。

## 画像サイズ

- ヒーロー動画: 1018×508(`hero-loop.mp4` が元動画のネイティブ解像度。`hero-loop-2.mp4` は元動画をクロップ後この解像度にスケールして揃えている)。H.264・音声トラック無し・CRF20で再エンコードし、各約900KB前後
- 静止画は用途に応じたサイズで、`aspect-ratio` で `object-fit: cover` トリミング表示するため、正方形〜縦長を目安に追加する

## フォント

Google Fonts に依存(本体LPと異なり、BudouX等での脱Google Fonts対応はしていない)。

```css
font-family: 'Zen Old Mincho', serif;   /* 和文見出し・本文 */
font-family: 'Cormorant Garamond', serif; /* 英字アクセント(ロゴ・番号・価格など。`.en` クラス */
```

## 色

`<style>` 内 `:root` で一元管理。

```css
--cream:      #faf5ec;  /* 背景 */
--cream-deep: #f2e9da;  /* 背景(やや濃いめ) */
--white:      #fffdfa;  /* カード背景等 */
--gold:       #c9a463;  /* ゴールドアクセント */
--gold-deep:  #a67f42;  /* ゴールド(濃) */
--rose:       #e3a3a0;  /* ローズアクセント */
--rose-deep:  #d1817d;  /* ローズ(濃) */
--peach:      #f0b9a0;  /* ピーチアクセント */
--ink:        #55483c;  /* 本文色 */
--ink-light:  #8d7d6c;  /* 本文色(淡) */
--line:       #e6d9c6;  /* ボーダー・装飾ライン */
--shadow:     0 20px 45px rgba(120, 95, 60, 0.14);
```

## レスポンシブ対応

- **ブレークポイント**: `@media (max-width: 860px)` のみ
- ヒーロー動画/画像: PCは `object-fit: cover`、モバイルは `object-fit: contain`(全身が見えるように)+ `.hero__content` を画像下に押し下げる `margin-top`
- `h1` はモバイル用改行(`.only-mobile` の `<br>`)で行間を調整。長すぎる語尾(句読点など)は1文字だけ折り返して浮かないよう、行に収まる文字数に調整する
- `.section-head__inner`(見出し両脇の装飾ライン)は `display:flex; justify-content:center` + `max-width:100%` で、幅が収まりきらない場合でも中央寄せが崩れないようにしている。モバイルではライン幅・gapを縮小してさらに折り返りにくくしている
- `.worries__icons` はPC3カラムグリッド → モバイルは1カラム(アイコン+テキスト横並び)に変更し、狭い列でのテキスト折り返しを防止

## 変更してはいけない部分

- **ヒーロー動画のクロスフェード再生の仕組み**(`#heroVideoA` / `#heroVideoB` の2要素プリロード + `ended` イベントでの `.is-active` トグル)は、ループの繋ぎ目を隠す核となる演出のため、構造を変える場合は動作確認を必須とする(単一 `<video>` の `src` 差し替え方式は、環境によって切り替え失敗することが確認済みのため不採用)
- **お問い合わせ導線**: `mailto:aofullremote@gmail.com` への問い合わせリンクを削除・変更しない
- 本体LP(KOTONOHA)の `index.html` / `style.css` / `script.js` の変更にこのサンプルLPを巻き込んで一括変更しない(独立した制作物として扱う)

---

# 「シャビーシック」系サンプルLPファミリー — 共通仕様

`works/ongle/`(nailsalon_aoi、ネイルサロン)、`works/esthe-aoi/`(esthe_aoi、エステサロン)の2つから始まった、**同じ世界観を共有するサンプルLPのシリーズ**。今後も同じ女性モデル・同じトンマナで美容系(サロン・スパ等)のサンプルLPを追加していく想定。新しいLPを作る際は、明示的に別指定が無い限りこの仕様を踏襲する。

## ブランド名の付け方

`<業種>_aoi` の小文字・アンダースコア区切り(Instagramのアカウント名のような見た目)。例: `nailsalon_aoi`、`esthe_aoi`。ロゴ・タイトル・footer・mailto件名まで一貫してこの表記(大文字化しない)。

## 世界観・トンマナ

- **「シャビーシック」**: 白ベースに、ベージュと優しいグレーを差し色にした、使い込まれた家具・ドライフラワー・レースカーテンのある空間
- **英字多め**: 「かっこよく見せるため」、見出し(h2)・メニュー項目名・価格・バッジなど、可能な限り英語表記を使う。和文は本文説明や短い補足に留める
- **余白を大事にする**: セクションの上下パディングは `padding: 9rem 0;` 目安。写真はブラウザ幅いっぱいに敷かず、`inset: clamp(12px, 2.4vw, 32px);` のように少し余白(マージン)を残してインセットする
- **モバイル優先**: 常にスマホ幅(320/360/390px)での横はみ出し(overflow)が無いことを確認してから完了とする

## 使用する画像(同じ女性モデル)

赤みがかった三つ編み・そばかす・レトロな鏡台やレースカーテンのある部屋で撮影された、AI生成のストック風参考写真群(特定の実在人物ではない)。业種を問わず使い回せるよう、同じ人物の複数カットが用意されている:

| カット | 用途 |
|---|---|
| 後ろ姿で鏡台に向かう(正方形) | ヒーロー背景(`hero-back.jpg` 等) |
| 鏡の前で口紅を塗る・正面(3:4) | 「about1」アーチ型セクションの写真 |
| ベッドで横たわる(3:4、上半分のみ使用) | メニューセクションなどの背景に薄く透過させる用 |
| 手元のネイル写真(正方形、複数色) | ネイルサロン固有(他業種では使わない) |

新しいカットが必要な場合はユーザーに送ってもらう。同じ画像を業種の異なるLPで使い回すこと自体は問題ない(世界観の統一が目的のため)。

## 色

```css
--white:      #ffffff;
--beige/cream:#f7f3ee;  /* 背景(やや濃いめ変種も可) */
--grey:       #b7b3ac;  /* アクセント(淡) */
--grey-deep:  #8b877f;  /* アクセント(濃)。ボタン・価格・バッジなどに使用 */
--taupe:      #ddd5c8;  /* ボーダー */
--ink:        #333333;  /* 本文色。濃いグレー(ブラウンではない) */
--ink-light:  #7d7d78;
```

nailsalon_aoiは当初オリーブ系(`--olive`)+ ゴールドで作ったが、「普通のグレー」「もう少し薄いグレー」というフィードバックを経て上記のグレー系に着地した。新規LPは最初からこのグレー系パレットで作ってよい。

## フォント

```css
font-family: 'Hina Mincho', serif;      /* 和文本文・見出し(繊細な明朝体) */
font-family: 'Bodoni Moda', serif;      /* 英字(.en クラス)。斜体(font-style:italic)で統一 */
font-family: 'Great Vibes', cursive;    /* ロゴ・大きめの英語見出し(h2)専用。小さい文字や詰まった箇所には使わない可読性の理由 */
```

- 和文は当初「Shippori Mincho」→「Kaisei Decol」(おしゃれ狙い)→ユーザーの指摘で「Shippori Mincho」に戻す→「Hina Mincho」(より繊細)、と変遷した経緯がある。現時点の到達点は **Hina Mincho**
- 英字(`.en`)は当初「Cormorant Garamond」だったが「Bodoni Moda」に変更し、さらに全体を斜体(`font-style:italic`)で統一した(一部だけ斜体で不揃いだったため)
- ロゴや大見出しに「Great Vibes」のような装飾フォントを使う場合、**ナビゲーションリンク・価格・メニュー項目名など小さく密度の高いテキストには適用しない**(可読性が落ちるため)

## 構造上のモチーフ

- **ヒーロー**: 写真を `inset: clamp(...)` で少し余白を残して配置、`hero__scrim` で薄い白グラデーションを重ねる。見出し文言・ボタンは付けず、`PRIVATE ○○ SALON` のような英字ラベル(divider付き)のみに留めるのが最終的に落ち着いた形(最初は見出し+ボタンもあったが、ユーザーの「余計なものはいらない」「予約ボタンは最後の方に」という指示で削ぎ落とした)
- **about1(アーチ型写真)**: `border-radius: 999px 999px 0 0;` を使うと、要素の横幅に応じて自動的にきれいな半円(ドア型アーチ)にクランプされる。`aspect-ratio: 3/4` の箱に人物ポートレートを `object-fit: cover` で収める
- **正方形フレーム**: 手描き風のSVGイラストの代わりに実写真を使う場合は、`aspect-ratio: 1/1` の正方形でシンプルに。白マット+枠で飾るより、枠無しの方が「すっきり」した印象になりやすい(ユーザーからのフィードバック)
- **メニュー内の写真配置**: 2通りの手法を使い分けた
  1. 写真をメニューの脇に「ランダムに」散らす場合: `transform: rotate(var(--rot,0deg)) translateY(var(--ty,0px));` を各カードのインラインスタイルで指定(本体LPの `works__item--crystal` と同じ手法)。背景は濃いめ〜普通のグレー(`#3a3a3a` → `#808080` → `#a3a3a3` と調整した経緯あり)
  2. 女性の写真を「透過させて背景に」入れる場合: `position:absolute` で敷き、`opacity` を0.5前後に、`mask-image: linear-gradient(...)` で端をフェードさせて自然に馴染ませる(chocolat-aoiのヒーロー背景で確立した手法)
- **word-break の注意**: `word-break: keep-all` は見出し・短いフレーズ(`h1, h2, .logo, .eyebrow, .subtitle, .divider p` など)だけに絞ること。`body` 全体にかけると、句読点の少ない長い日本語文でかえって改行できなくなり、スマホで文字が画面外に切れる不具合が実際に発生した

## 変更してはいけない部分 / 注意点

- お問い合わせ導線(`mailto:aofullremote@gmail.com`)は削除・変更しない
- 各LPは独立した制作物として扱い、本体LP(KOTONOHA)や他のサンプルLPの変更に巻き込まない
- このサンドボックス環境は `fonts.googleapis.com` への外部接続がブロックされているため、Google Fontsの見た目(特にGreat Vibesのような装飾フォント)をこの場でスクリーンショット確認することはできない。CSSの記述が正しければ実際のVercel上では問題なく表示される旨をユーザーに伝える
- 新規LP作成時も必ずスマホ幅(320/360/390px)で `document.documentElement.scrollWidth` に横はみ出しが無いことを確認してからコミットする
