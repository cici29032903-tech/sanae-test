# 石の紬 / stone_andyou — ライフパス守護石診断

生年月日からライフパスナンバーを計算し、守護石と今日のメッセージを表示するWebページです。  
GitHub Pagesで公開し、InstagramのプロフィールリンクやLINEリッチメニューからアクセスできます。

## ファイル構成

- `index.html` — メインページ（TOP・ローディング・結果の3画面）
- `style.css` — スタイル（スマホ最適化・和モダンデザイン）
- `lifepath.js` — ライフパス計算ロジック＋9パターンのデータ

## 公開前にやること

`lifepath.js` の以下の行を、実際のLINE公式アカウントURLに変更してください：

```js
const LINE_URL = "https://lin.ee/XXXXXXXX";
```

## GitHub Pagesでの公開手順

1. GitHubリポジトリの Settings → Pages を開く
2. Source を「Deploy from a branch」に設定
3. Branch を `main`、フォルダを `/ (root)` に設定して Save
4. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

