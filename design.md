# ポートフォリオサイト機能拡張 設計案 (design.md)

このドキュメントは、ポートフォリオサイトに追加する機能の設計案をまとめたものです。

## 1. 自己紹介 (About Me) ページ

### 機能概要
訪問者に対して、自身のプロフィール、スキル、経歴などを紹介するページ。

### ファイル構成案
- `src/app/about/page.tsx` (新規作成)
- `public/profile-image.jpg` (プロフィール画像、`wild_riki.jpg` をリネームまたはコピーして使用)

### 実装ステップ
1.  `src/app/about/` ディレクトリを作成する。
2.  `src/app/about/page.tsx` を作成し、自己紹介コンテンツを記述する。
3.  Reactコンポーネントとして、見出し、段落、リストなどを使って情報を構造化する。
4.  Next.jsの `Image` コンポーネントを使ってプロフィール画像を表示する。
5.  `src/components/Menu.tsx` を編集し、Aboutページへのリンクを追加する。

### 画面イメージ案
```
+------------------------------------------------+
| Header (Menu: Home, Blog, About, Contact)      |
+------------------------------------------------+
|                                                |
|  +-----------------+   **[あなたの名前]**      |
|  |                 |                           |
|  | Profile Image   |   [役職/肩書き]           |
|  | (150x150)       |                           |
|  +-----------------+   [自己紹介文...]         |
|                                                |
|  **Skills**                                    |
|  - Frontend: React, Next.js, TypeScript...     |
|  - Backend: Node.js, Python...                 |
|  - Cloud: AWS, Vercel...                       |
|                                                |
|  **Experience**                                |
|  - [会社名A] (YYYY/MM - YYYY/MM)               |
|    - [担当業務や実績...]                       |
|  - [会社名B] (YYYY/MM - YYYY/MM)               |
|    - [担当業務や実績...]                       |
|                                                |
+------------------------------------------------+
```

---

## 2. お問い合わせ (Contact) フォーム

### 機能概要
訪問者が仕事の依頼やメッセージを送信できるフォーム。Next.js Server Actions を使用してバックエンドなしで実装する。

### ファイル構成案
- `src/app/contact/page.tsx` (新規作成)
- `src/actions/contact.ts` (新規作成)

### 実装ステップ
1.  `src/app/contact/page.tsx` に、`name`, `email`, `message` の入力フィールドと送信ボタンを持つフォームを作成する。
2.  `src/actions/contact.ts` を作成し、`"use server";` ディレクティブを先頭に記述する。
3.  フォームデータを受け取り、メール送信処理（例: `resend`, `nodemailer` などのライブラリを利用）や、データベースへの保存処理を実装する非同期関数を作成する。
4.  `contact/page.tsx` の `<form>` タグの `action` 属性に、作成したServer Action関数を渡す。
5.  入力バリデーションや、送信成功/失敗のフィードバックをUIに表示する処理を追加する。
6.  `src/components/Menu.tsx` を編集し、Contactページへのリンクを追加する。

### 画面イメージ案
```
+------------------------------------------------+
| Header (Menu: Home, Blog, About, Contact)      |
+------------------------------------------------+
|                                                |
|  **Contact Me**                                |
|                                                |
|  Name:                                         |
|  +-------------------------------------------+ |
|  | [_________________________________________] | |
|  +-------------------------------------------+ |
|                                                |
|  Email:                                        |
|  +-------------------------------------------+ |
|  | [_________________________________________] | |
|  +-------------------------------------------+ |
|                                                |
|  Message:                                      |
|  +-------------------------------------------+ |
|  | [                                         ] | |
|  | [                                         ] | |
|  | [_________________________________________] | |
|  +-------------------------------------------+ |
|                                                |
|  [ Submit ]                                    |
|                                                |
|  [送信成功メッセージ or エラーメッセージ]      |
|                                                |
+------------------------------------------------+
```

---

## 3. ブログ機能の拡充 (記事詳細ページ)

### 機能概要
ブログ記事の一覧だけでなく、個別の記事を閲覧できる詳細ページを作成する。記事はMarkdownファイルで管理する。

### ファイル構成案
- `src/app/blog/[slug]/page.tsx` (新規作成・動的ルート)
- `contents/blog/` (新規作成・記事データ格納ディレクトリ)
- `contents/blog/first-post.md` (サンプル記事)
- `lib/posts.ts` (Markdownファイルを読み込むためのヘルパー関数)

### 実装ステップ
1.  プロジェクトルートに `contents/blog` ディレクトリを作成する。
2.  記事のサンプルとして `first-post.md` を作成する。ファイル冒頭には `title`, `date` などのメタデータをYAML Front Matter形式で記述する。
3.  `gray-matter`, `remark`, `remark-html` などのライブラリをインストールする (`npm install gray-matter remark remark-html`)。
4.  `lib/posts.ts` を作成し、`contents/blog` ディレクトリからMarkdownファイルを読み込み、パースして記事データ（メタデータとHTMLコンテンツ）を返す関数を実装する。
5.  `src/app/blog/[slug]/page.tsx` を作成する。
    - `generateStaticParams` を使って、ビルド時に記事のパスを静的に生成する。
    - `params.slug` を元に `lib/posts.ts` の関数を呼び出し、該当する記事データを取得する。
    - 取得したデータを元に、記事のタイトルや本文をレンダリングする。
6.  `src/app/blog/page.tsx` (一覧ページ) を修正し、各記事へのリンク (`<Link href="/blog/...">`) を設置する。

### `first-post.md` の例
```markdown
---
title: '最初の投稿'
date: '2025-06-27'
---

これは最初のブログ投稿です。
**Markdown**で記述できます。
```

---

## 4. OGP (Open Graph Protocol) の設定

### 機能概要
SNSで共有された際に、ページのタイトル、説明、画像が適切に表示されるようにメタデータを設定する。

### 実装ステップ
1.  **サイト共通のOGP設定:**
    - `src/app/layout.tsx` の `metadata` オブジェクトを編集する。
    - `title.template` を設定し、各ページでタイトルが自動的に生成されるようにする (例: `%s | あなたのサイト名`)。
    - `description`, `openGraph` (og:title, og:description, og:imageなど) を設定する。og:imageにはサイトを代表する画像のURLを指定する (例: `/og-image.png`)。

2.  **ページ固有のOGP設定:**
    - 各ページ (例: `src/app/blog/[slug]/page.tsx`) で `generateMetadata` 関数を `export` する。
    - この関数内で、記事のタイトルや概要を動的に取得し、`title` や `description`, `openGraph` の値を上書きする。これにより、記事ごとに最適化されたOGP情報を提供できる。

### `src/app/layout.tsx` の `metadata` 例
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | 逆鬼.com',
    default: '逆鬼.com',
  },
  description: 'これは逆鬼のポートフォリオサイトです。',
  openGraph: {
    title: '逆鬼.com',
    description: 'これは逆鬼のポートフォリオサイトです。',
    url: 'https://gyakuoni.com', // あなたのサイトのURL
    siteName: '逆鬼.com',
    images: [
      {
        url: 'https://gyakuoni.com/og-image.png', // サイト共通のOGP画像
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
};
```

### `src/app/blog/[slug]/page.tsx` の `generateMetadata` 例
```typescript
import { getPostData } from '@/lib/posts'; // 仮の関数

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug); // 記事データを取得
  return {
    title: post.title,
    description: post.excerpt, // 記事の抜粋など
    openGraph: {
      title: post.title,
      description: post.excerpt,
      // images: [ ... ] // 記事固有の画像があれば設定
    },
  };
}
```
