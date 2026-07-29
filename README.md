# Introductionから見るMIRU新タスクの明快さ

MIRU若手プログラムの新タスク提案を、Introductionの明快さという観点から整理した公開資料サイトです。
共有されたGoogleドキュメントの全文を、内容を省略せず掲載しています。

## ファイル構成

- `index.html` — `content.md`を直接表示するページ
- `style.css` — デザインとレスポンシブ対応
- `content.md` — 掲載する本文（通常はこのファイルを編集します）

## GitHub Pagesで公開する方法

1. GitHubで新しいリポジトリを作成します。
2. `index.html`、`style.css`、`content.md`、READMEをリポジトリ直下へアップロードします。
3. GitHubの `Settings` → `Pages` を開きます。
4. `Build and deployment` の Source を `Deploy from a branch` にします。
5. Branchを `main`、フォルダを `/ (root)` にして保存します。
6. 数分後に表示されるURLから公開ページへアクセスできます。

## 編集ポイント

- タイトルや説明文は `index.html` で変更できます。
- 色や余白は `style.css` の冒頭にあるCSS変数で調整できます。
- 掲載本文は `content.md` を直接編集します。
- `## 見出し` は大見出し、`- 項目` は箇条書きとして記述します。
- GitHub上で `content.md` を編集してコミットすると、数分後に公開ページへ反映されます。
