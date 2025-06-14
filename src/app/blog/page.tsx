export default function Blog() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">📝 Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            最新の記事やニュースをお届けします
          </p>
        </div>
        
        <div className="grid gap-6">
          <article className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <h2 className="text-2xl font-semibold mb-3">ブログ機能開発中</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              現在、ブログ機能を開発中です。近日中に記事の投稿や閲覧機能を追加予定です。
            </p>
            <div className="text-sm text-gray-500">
              2025年6月14日
            </div>
          </article>
          
          <article className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <h2 className="text-2xl font-semibold mb-3">Gyakuoniサイトリニューアル</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              新しいメニューシステムを導入し、より使いやすいサイトに生まれ変わりました。
            </p>
            <div className="text-sm text-gray-500">
              2025年6月14日
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}