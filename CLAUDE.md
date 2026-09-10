# KOTONOHA LP — プロジェクト仕様書

このファイルは、リポジトリ内での作業時に参照する仕様まとめです。
詳しい制作経緯・打ち合わせメモは [NOTES.md](./NOTES.md) を参照してください。

## このプロジェクトの目的

オーダーメイドLP制作サービス「**KOTONOHA**」のランディングページ(このリポジトリの `index.html` 自体)。

- **目的**: サービスの紹介と、お問い合わせ(ThreadsのDM誘導)への誘導
- **ターゲット**: ハンドメイド作品やアート活動をSNSで発信していて、そろそろ自分のページを持ちたい30代の個人クリエイター。ヒーローセクションのコピーは「自宅サロンを始めた方、個人事業主様」への呼びかけに変更済み(LPが予約・お問い合わせまで1ページで完結する導線であることを訴求)
- **提供者プロフィール**: aoi(LP制作パートナー)。実績はまだ無く、その点は正直に打ち出す方針
- **料金**: 先着3名様限定 19,800円(税込)(通常価格29,800円)。`.price-card__amount--soon` クラスは現在未使用
- `works/` 配下には、KOTONOHAが実際に制作したサンプルLP(chocolat-aoi、forest-bakery、mori-no-panya、lumiere など)も同居している。これらは本体LPの「作品」として紹介される想定のデモ制作物。
- `note-lp/` は、KOTONOHAの「作品」ではなく、aoi個人のnote記事(有料記事)を告知するための単独LP。`works/` の各サンプルLPとは目的が異なるため別ディレクトリに配置している。詳細は本ファイル末尾の「note-lp/ — noteの記事告知LP仕様」を参照。

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
| `works/work-03-mirror.png` | 1086×1448 | 同上。`works/ongle/` のabout1写真と同一。サンプルLP「nailsalon_aoi」(`works/ongle/`)へのリンク付き |
| `works/work-04-esthe.jpg` | 1003×1254 | 同上。`works/esthe-aoi/` のヒーロー写真(`hero-back.jpg`)を4:5にトリミング。サンプルLP「esthe_aoi」(`works/esthe-aoi/`)へのリンク付き |
| `works/work-05-nailatelier.jpg` | 1003×1254 | 同上。`works/nailatelier_aoi/` のネイル写真(`gallery-01.jpg`、シャビーシック系ネイルLP共通素材)を4:5にトリミング。サンプルLP「nailatelier_aoi」(`works/nailatelier_aoi/`)へのリンク付き |
| `works/work-06-goldfish.jpg` | 677×900 | 現在ギャラリーには非表示(下記work-10に差し替え済み)。ファイルは残置 |
| `works/work-07-cat.jpg` | 900×900 | 同上(Coming Soon枠) |
| `works/work-08-crow.jpg` | 900×900 | 同上(Coming Soon枠) |
| `works/work-09-gift.jpg` | 1254×1254 | 同上(Coming Soon枠) |
| `works/work-10-wellness.jpg` | 1003×1254 | `aspect-ratio: 4 / 5` で `object-fit: cover`。`works/wellness_aoi/` のヒーロー写真(`hero.jpg`)を4:5にトリミング。サンプルLP「wellness_aoi」(`works/wellness_aoi/`)へのリンク付き |

現在、実際のサンプルLPへリンクしているのは `work-01`(Éclat Chocolat)・`work-02`(LUMIÈRE)・`work-03`(nailsalon_aoi)・`work-04`(esthe_aoi)・`work-05`(nailatelier_aoi)・`work-10`(wellness_aoi)の6点。残り(`work-07`〜`work-09`)はまだ専用サンプルLPが無いイラスト作品例のため、`.works__item--soon` クラス+`.works__badge`(「Coming Soon」)で準備中であることを示している。

作品ギャラリー画像は `aspect-ratio: 4/5` でトリミング表示されるため、追加素材は正方形〜縦長(4:5前後)を目安にする。ファイル容量はJPEG品質を落としすぎない範囲で、おおよそ数十KB〜200KB程度に収めている(`work-02-mirror.png` は2MB超と重いため、追加でPNGを使う場合は圧縮を検討する)。

## フォント

シャビーシック系サンプルLP(nailsalon_aoi・esthe_aoi・nailatelier_aoi)と同じフォントに統一済み。CSS変数(`style.css` の `:root`)で定義:

```css
--font-display: "Hina Mincho", "Hiragino Mincho ProN", serif;
--font-body:    "Hina Mincho", "Hiragino Mincho ProN", serif;
--font-accent:  "Bodoni Moda", serif;
```

- **和文本文・見出し**: Hina Mincho(繊細な明朝体)
- **英字アクセント**(ロゴ・作品ギャラリーのキャプション・価格・番号・フッターなど): 斜体(`font-style: italic`)のBodoni Moda
- `index.html` の `<head>` で Google Fonts から読み込む(`family=Hina+Mincho&family=Bodoni+Moda:ital,wght@...`)。以前はZen Maru Gothic + Quicksandをシステムフォントで完結させていたが、シャビーシック系ファミリーとの統一を優先してGoogle Fonts依存に戻した
- **注意**: Bodoni Modaは和文グリフを持たないため、和文テキストに `--font-accent` を指定しない(疑似イタリック化を避けるため、和文には常に `--font-display` / `--font-body` を使う。詳細は `style.css` 内 `.concept__stance` 付近のコメント参照)。ヒーローの `.eyebrow` は元々英字前提で `--font-accent` を使っていたが、テキストを和文(「自宅サロン・個人事業主様へ」)に変更した際に `--font-display` へ切り替え済み

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
- **フォント方針**: 和文に `--font-accent`(Bodoni Moda)を指定しない(疑似イタリック化するため)。この制約は `style.css` 内のコメントで明示されている
- **導入フレームアニメーションの仕組み**(`#frameAnimation` / `#mainContent` の表示制御ロジック、`script.js`)は、ページの初回体験の核となる演出のため、構造を変える場合は動作確認を必須とする
- **お問い合わせ導線**: メインの「お問い合わせはこちら」ボタンは、メール(mailto)からThreadsのDM誘導(`https://www.threads.com/@aoi_lp213`)に変更済み。このThreadsリンクを削除・変更しない(最終アクションの要)。フッターのThreadsリンクと合わせて導線が二重にならないよう注意する
- **料金表示**: 正式な料金が決定し、`Coming Soon` から実際の金額に差し替え済み。「先着3名様」ラベル+通常価格29,800円(税込)→19,800円(税込)のキャンペーン表示(`.price-card__old` で取り消し線)
- **デプロイ運用**: このリポジトリは `master` に直接pushする運用(PRは使わない)。Vercel(`kotonoha-ai` プロジェクト)が `master` への自動デプロイに連携済みのため、`master` ブランチの扱いには注意する
- `assets/vendor/` 配下(BudouXなどのサードパーティ製アセット)は手動で編集しない
- `works/` 配下の各サンプルLP(`chocolat-aoi` 等)は、それぞれ独立した制作物として扱い、本体LP(`index.html` / `style.css` / `script.js`)の変更に巻き込んで一括変更しない

---

# works/ サロン系サンプルLP制作時に意識するポイント

ネイルサロン・エステ・脱毛サロンなど、`works/` 配下に美容・サロン系のサンプルLPを新規に作る際は、既存ファミリー(シャビーシック系・LUMIÈREなど)のデザイン仕様に加えて、以下の5点を必ず満たす。「行きたい」と思わせるだけでなく、実際に予約させるLPかどうかを最後にこの5点でチェックする。

1. **予約への導線がわかりやすい**
   「このサロンに行きたい」と思った瞬間に、どこをクリックすればいいか迷わないこと。ホットペッパーなのか、ネイルブックなのか、LINEなのか——リンク先が何であるかが明確で、その先まで迷わずスムーズに進めるようにする。ヘッダーの `.header-cta` とCTAバナーのボタンで、予約導線を一貫させる(本ファミリーでは `mailto:` リンクがそれに当たる)。

2. **料金が明確に書かれている**
   「いくらかかるんだろう」という不安を先に潰しておく。ぼやっとした「お問い合わせください」だけで終わらせず、「ジェルネイル ¥5,000〜」のように具体的な金額を必ず提示する(MENUセクションの `price-card` / `menu-table` で徹底する)。

3. **コンセプトが説明されている**
   「このサロンはどんなサロンなのか」が一目でわかること。大人っぽい雰囲気なのか、かわいい系なのか、ナチュラル志向なのか——世界観を言葉で説明する(ABOUTセクションの eyebrow・subtitle・h2・本文で明示する)。

4. **想いが見える**
   「なぜ、このサロンをやっているのか」という想いを言葉にする。技術・スキルの説明だけで終わらせず、その人がどんな人で、何を大事にしているかが伝わる文章にする(about1セクションの本文で担当者の想いを語る)。

5. **顔や雰囲気が見える**
   プロフィール写真を必ず入れ、ネイリスト/セラピストがどんな人かを視覚的に伝える。「この人から受けたい」という感情は、顔と言葉が揃って初めて生まれる(about1__arch のポートレート写真は省略しない必須要素として扱う)。

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

`works/nailatelier_aoi/`(nailatelier_aoi、ネイルサロン)は、このファミリーのアクセントカラーを深緑(`--green-deep: #21301f` 等)に変更した派生LP。nailsalon_aoi(ongle、グレー系)とは別ブランドとして共存させており、MENUセクションの背景を深緑(`--charcoal-green: #172015`)にすることでテーマカラーを前面に出している。ネイル写真(`gallery-*.jpg`)はnailsalon_aoiと共通素材を使い回している(ファミリー共通の方針どおり)。

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
--ink:        #333333〜#5a5a5a;  /* 本文色。濃いグレー(ブラウンではない)。「黒は強すぎる」というフィードバックで#5a5a5a程度まで薄めた例もあり、新規LPはこのくらいのトーンから始めてよい */
--ink-light:  #7d7d78;
```

nailsalon_aoiは当初オリーブ系(`--olive`)+ ゴールドで作ったが、「普通のグレー」「もう少し薄いグレー」というフィードバックを経て上記のグレー系に着地した。新規LPは最初からこのグレー系パレットで作ってよい。

## フォント

```css
font-family: 'Hina Mincho', serif;      /* 和文本文・見出し(繊細な明朝体) */
font-family: 'Bodoni Moda', serif;      /* 英字全般。ロゴ・見出し・ナビ・価格・メニュー名まで含め、斜体(font-style:italic)で統一 */
```

- 和文は当初「Shippori Mincho」→「Kaisei Decol」(おしゃれ狙い)→ユーザーの指摘で「Shippori Mincho」に戻す→「Hina Mincho」(より繊細)、と変遷した経緯がある。現時点の到達点は **Hina Mincho**
- 英字(`.en`)は当初「Cormorant Garamond」だったが「Bodoni Moda」に変更し、さらに全体を斜体(`font-style:italic`)で統一した(一部だけ斜体で不揃いだったため)
- **装飾フォント(Great Vibes等)は不採用と確定**: esthe_aoiでロゴ・大見出しにGoogle Fontsの「Great Vibes」(筆記体)を試したが、「やはりヒーローにあるフォント(斜体Bodoni Moda)で全部統一したい」というフィードバックで元に戻した。**新規LPでもロゴ・見出しを含む英字はすべて斜体Bodoni Modaに統一し、Great Vibesのような装飾フォントは使わない**

## 構造上のモチーフ

- **ヒーロー**: 写真を `inset: clamp(...)` で少し余白を残して配置、`hero__scrim` で薄い白グラデーションを重ねる。見出し文言・ボタンは付けず、`PRIVATE ○○ SALON` のような英字ラベル(divider付き)のみに留めるのが最終的に落ち着いた形(最初は見出し+ボタンもあったが、ユーザーの「余計なものはいらない」「予約ボタンは最後の方に」という指示で削ぎ落とした)
- **about1(アーチ型写真)**: `border-radius: 999px 999px 0 0;` を使うと、要素の横幅に応じて自動的にきれいな半円(ドア型アーチ)にクランプされる。`aspect-ratio: 3/4` の箱に人物ポートレートを `object-fit: cover` で収める。「もう少しふわっとさせて」と言われた場合は、`img` に `opacity:0.85` 程度 + `filter: saturate(0.92) brightness(1.04);` + 疑似要素`::after`で薄い白グラデーション(`linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 35%, rgba(255,255,255,0.3) 100%)`)を重ねると柔らかい印象になる(esthe_aoiで確立)。**`filter` に `blur()` を含めない**こと — `overflow:hidden` + `border-radius` のクリップと`blur`の組み合わせはモバイルSafariでアーチの外に画像がはみ出すバグを実際に起こした
- **ABOUT/conceptセクションに手描き風SVGモチーフを入れない**: nailsalon_aoi・esthe_aoiでネイルポリッシュの瓶や水滴のような線画アイコンを試したが、esthe_aoiで「ABOUTの前の手書きの絵は今後作成しないでください」と明確に不要判定が出た。**今後の新規LPでも、ABOUT/conceptセクションに手描き風SVGモチーフは追加しない**。写真素材があれば正方形フレームで、無ければテキストを中央寄せ1カラムにするだけで十分
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

---

# note-lp/ — noteの記事告知LP仕様

`note-lp/index.html` 1ファイル完結(インラインCSS/JS)。aoi個人が書いたnote記事(有料記事)への誘導のみを目的とした単独LPで、KOTONOHAの「作品」ではないため `works/` には含めない。本体LP(KOTONOHA)の `assets/` `style.css` `script.js` とは完全に独立している。

## このページの目的

- **紹介する記事**: 「自宅サロンで『予約が来ない』を抜け出した。月商5桁から6桁へ変わるまでにやったこと」(note有料記事)。`<title>`・meta description・ヒーロー見出し・WHYセクション冒頭・CTAバナーの見出し画像まで、すべてこのタイトルで統一済み(以前の「月3〜4件しか予約が入らなかった私が、集客を変えた方法」という旧タイトルの表記はページ内に残っていない)
- **導線**: ページ内の「記事を読む →」ボタン(ヒーロー・CTAバナーの2箇所)からnoteの記事ページへ
- **公開時刻ゲート**: 記事は2026年9月18日(金)21:00に公開予定。それまでCTAボタン(`.note-cta` 内、ヒーロー・CTAバナーの2箇所)は「Coming Soon」の押せないボタン(`.note-cta__pending`、`<button disabled>`)+公開予定日時の案内を表示し、公開時刻を過ぎたら自動的に本来のリンク付きボタン(`.note-cta__live`)に切り替わるよう `<script>` 内でハードコードした日時(`new Date(2026, 8, 18, 21, 0, 0, 0)`)と比較して `.note-cta` に `.is-published` クラスを付与している。ページを開いたまま公開時刻をまたいだ場合もリロード無しで切り替わる。**以前は公開までボタンごと非表示にしていたが、「日付は公開しつつボタンは押せないようにしたい」という要望を受けてComing Soon方式に変更した**。リンク先は `https://note.com/preview/n50b71d4197ac?prev_access_key=1498209ad74e993c982816ca4fb90708`(note側のプレビュー用URLのため、正式公開後に本URLが変わる場合は差し替えが必要)
- **価格**: 初回5部限定 ¥780(`.price-badge`、CTAバナーのボタン上部に常時表示。公開前後どちらの状態でも表示される)
- **フッターのThreads導線**: ページ最後のフッターに、「noteを楽しみにしてくれる方は、Threadsをフォローしてaoiを応援してくださいね。」という小さな案内文(`.footer__threads-note`)と、Threadsアイコン付きの丸いボタン(`.threads-btn`、KOTONOHA本体と同じ`@aoi_lp213`アカウントへのリンク)を設置。本編CTAの「記事を読む」導線とは別の、ゆるい応援目的のリンクなので控えめなサイズに留めている

## 構成(セクション順)

ヘッダー(ロゴのみ)→ 導入フレームアニメーション → ヒーロー(画像スライドショー+見出し+CTA)→ ギャラリー(スクラップブック風ランダム配置)→ なぜこの記事を書いたか → 作り手の想い(手元写真付き)→ この記事のポイント → CTAバナー → フッター

## 世界観・トンマナ

- シャビーシック系ファミリー(nailsalon_aoi・esthe_aoi・nailatelier_aoi・nailmaison_aoi・wellness_aoiと同じ)のフォント(Hina Mincho + 斜体Bodoni Moda)を踏襲
- 配色は「薄いピンクなど画像に合う優しいアンティークな」指定に合わせ、このLP専用の淡いローズ×アンティークベージュ配色を新規に定義(既存ファミリーの色とは別)
- 「作り手の想い」セクションにのみ、シャビーシック系ファミリーと同じアーチ型(`border-radius: 999px 999px 0 0`)の写真フレームを使用。「もう少しふわっと柔らかいイメージにしてほしい」という指示を受け、ファミリー共通の「ふわっと」技法(`opacity:0.86` + `filter: saturate(0.9) brightness(1.05)` + `::after`の白グラデーション重ね)を適用済み(`blur()`は使わない。理由は本ファイル「シャビーシック系サンプルLPファミリー」節を参照)
- **導入フレームアニメーション**: 本体LP(KOTONOHA)の `#frameAnimation`/`#mainContent` の仕組みをそのまま移植したもの。スクロール量に応じて静止画がパラパラ切り替わり、最後にLP本体(`#mainContent`)がフェード表示される。フレーム画像はユーザー提供の5秒動画(720×720, 24fps)から`ffmpeg`で全121コマを書き出したもの(`assets/frames/frame_0001.jpg`〜`frame_0121.jpg`)。ロジックは本体LPの`script.js`がベースだが、note-lpは1ファイル完結のためHTML内の`<script>`にインライン化しており、かつ下記の「スクロール終了後に本編の下の方まで飛んでしまう」不具合修正が本体LPには無い形で追加されている。`TOTAL_FRAMES`(121)・`FRAMES_DIR`(`assets/frames/`)は本体LPと値が異なるので、コピー移植する際は書き換えを忘れないこと
  - **「下にスクロール」の案内(`#scrollHint`)**: 導入アニメーション開始直後から表示される案内テキスト。以前はスクロール量`innerHeight × 0.3`でほぼフェードアウトしていたため一瞬しか見えなかったが、`innerHeight × 0.6`に緩めて、導入の最初にきちんと視認できるようにした
  - **スクロール終了後に本編の下の方まで飛んでしまう不具合の修正**: スマホでのフリック(慣性)スクロールが原因で、導入アニメーションが終わった瞬間もスクロールの勢いが残ったまま本編に引き継がれ、ヒーローを飛び越えてLPの下の方まで一気に移動してしまう不具合が実際に発生した。`finishAnimation()`内で、演出の切り替え中(`jumping`フラグがtrueの間)は`html`/`body`に`overflow:hidden`を一時的にかけてスクロール自体をロックし、`requestAnimationFrame`を挟みながら`scrollTop`を繰り返し0にリセットし、レイアウトが完全に落ち着いてから(合計約1.3秒後)ロックを解除する方式にした。これにより、スクロール終了後は必ずヒーロー(noteのタイトルスライド)から見える状態になる
- **ヒーローの構成(重要な仕様変更あり)**: 当初は`.hero__bg`をほぼ画面いっぱいの高さ(`min-height:82vh`)にして`object-fit:cover`で画像を敷き、その上に見出し・リード文を白文字+スクリムで重ねる構成だった。しかし①タイトル文字入りのバナー画像をスマホの縦長画面で`cover`すると左右の文字が大きく切れてしまう、②画像と文字が重なって読みにくい、という2つの指摘を受けて全面的に作り直した。現在の構成:
  - `.hero__bg`は`height: clamp(260px, 48vw, 520px)`の**独立した帯**とし、中の画像・動画は`object-fit:contain`(=画像は縮小されても必ず全体が見える。左右や上下が余っても`--cream-deep`色でレターボックスになるだけで、内容が切れることはない)
  - 見出し(`.eyebrow`/`h1`)・リード文・CTAは`.hero__inner`として画像帯の**外側(下)**に配置し、`--cream`背景の上に通常の文字色(`--ink`系)で表示する。画像に文字を重ねる設計はやめた
  - この変更に伴い、`.hero__scrim`・`.hero.is-title-slide`(タイトルスライド表示中だけ見出しを隠す仕組み)は不要になり削除済み。新たに同じ問題(画像とテキストの重なり)を作り込まないよう、今後もヒーロー画像の上に本文用の文字を重ねる設計は避けること
- **ヒーローのスライドショー(`.hero__slide`)**: `.hero__bg` 内に3枚(①タイトル文字入りバナー画像 ②動画(`hero-video.mp4`、muted/loop/playsinline、音声トラックは`ffmpeg`で除去済み) ③ベッドで横たわる女性の写真)を重ねて配置し、4.5秒ごとに`.is-active`クラスをJSで付け替えてopacityのtransition(1.8s)でクロスフェードする。`prefers-reduced-motion`時は自動切り替えを行わず1枚目で静止させる。**以前は店先の写真・悩む女性の写真も含めた5枚構成だったが**、「タイトル、瞬きしている女の子(動画)、ベッドで寝ている女の子の順にしてほしい」「掃除している画像(店先)はほかで使用するので抜く」という指示を受けて3枚に絞った(店先の写真はギャラリーコラージュ側に残し、悩む女性の写真はヒーローから削除)
- **ギャラリー(gallery-scatter → 1枚のコラージュ)**: ヒーロー直後に、店先の写真・悩む女性の写真・ネイルカラーチャートの3枚を配置。**以前は3枚を横に並べて個別に回転・上下オフセットさせる「散らし」レイアウト(`.gallery-scatter__item`)だったが**、「3枚が不自然なので、一つのコラージュのように、画像の大きさをあえてバラバラにして一つの枠の中に3枚を収めてほしい」という指示を受けて全面的に作り直した。現在は`.gallery-collage__frame`(`position:relative`、`aspect-ratio:5/4`の1つの箱)の中に、3枚の`.gallery-collage__item`(`position:absolute`、白フチ+`box-shadow`)をサイズ違い(54%/36%/28%幅)で角度を変えて重ねて配置する、スクラップブック風の単一コラージュ構成。すべて`aspect-ratio`をitemごとに指定(4/5・1/1・1/1)して`object-fit:cover`でトリミング
- **この記事のポイント(`.point`)**: 「作り手の想い」とCTAバナーの間に追加した短いセクション。「書いてあることは既に知っているかもしれないが、戦略を理解してやるかどうかで効果が2〜3倍変わる」という趣旨の後押し文。CSSは`.why`/`.thoughts`と共通のテキストスタイルを流用(`.why, .point`のようにセレクタをまとめている)

## 使用する画像

| 用途 | ファイル |
|---|---|
| ヒーロー背景・旧フラットレイ(現在は未使用、参照なし) | `assets/hero-flatlay.jpg` |
| ヒーロースライドショー(3枚) | `assets/hero-slide-title.jpg`(タイトルバナー。CTAバナーの見出し画像としても兼用)/ `hero-video.mp4`(動画)/ `hero-slide-bed.jpg`(ベッドで横たわる女性) |
| ヒーロー用に撮ったが現在は未使用(店先・悩む女性の各ワイド版) | `assets/hero-slide-storefront.jpg` / `assets/hero-slide-worry.jpg`(ヒーローからは削除済み。ギャラリー用の正方形版`gallery-01.jpg`/`gallery-02.jpg`とは別ファイルなので、再利用時は正方形版と混同しないこと) |
| CTAバナーの旧見出し画像(現在は未使用、`hero-slide-title.jpg`に統一) | `assets/cta-banner-graphic.jpg` |
| 「作り手の想い」セクションの手元写真(アーチ型) | `assets/profile-hand.jpg` |
| ギャラリー(スクラップブック風、3枚) | `assets/gallery-01.jpg`(店先を掃除する女性)/ `gallery-02.jpg`(悩む女性)/ `gallery-03.jpg`(レッド系カラーチャート) |
| 導入フレームアニメーション(121枚) | `assets/frames/frame_0001.jpg` 〜 `frame_0121.jpg` |

`hero-slide-storefront.jpg`/`hero-slide-worry.jpg` は、ギャラリーの`gallery-01.jpg`/`gallery-02.jpg`と同じ元写真だが、ギャラリー側は正方形にトリミング済みなのに対し、ヒーロー側は元のワイドな比率のまま(`object-fit:contain`で全体を見せるため)別ファイルとして保存している。

**注意**: いただいた元画像(`hero-flatlay.jpg` の元データ)は上下に白い余白(レターボックス)が入っていたため、そのまま `object-fit: cover` で表示すると白帯が写り込んでしまう。素材化する際は余白部分を事前にトリミングしてから保存すること(このページでは実際にその不具合が起きたため、白でない部分の上下端を検出してクロップし直して解決した)。なお`hero-flatlay.jpg`自体は現在ヒーローのスライドショーには使われていない。

## 変更してはいけない部分 / 注意点

- 本体LP(KOTONOHA)や `works/` 配下の各サンプルLPの変更にこのページを巻き込まない(独立した制作物として扱う)
- CTAボタンの公開時刻ゲート(`<script>` 内の `new Date(2026, 8, 18, 21, 0, 0, 0)`)とnoteのリンク先URLは、記事の公開状況が変わった場合は必ず更新する
- ヒーロー画像の上に本文用の文字を重ねる設計は避ける(「世界観・トンマナ」の「ヒーローの構成」参照。過去に文字が読みにくくなる・スマホでバナー内の文字が切れる、という2つの問題が実際に起きて作り直した経緯がある)
