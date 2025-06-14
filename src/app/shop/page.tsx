export default function Shop() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🛒 Shop</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            オンラインショップでお買い物をお楽しみください
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-black/20 p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">👕</span>
            </div>
            <h3 className="font-semibold mb-2">Tシャツ</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              高品質なコットン100%のTシャツ
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">¥2,980</span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                カートに追加
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">☕</span>
            </div>
            <h3 className="font-semibold mb-2">マグカップ</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              オリジナルデザインのマグカップ
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">¥1,580</span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                カートに追加
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
            <h3 className="font-semibold mb-2">スマホケース</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              耐衝撃性に優れたスマホケース
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">¥3,480</span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                カートに追加
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">🎧</span>
            </div>
            <h3 className="font-semibold mb-2">ヘッドフォン</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              高音質ワイヤレスヘッドフォン
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">¥12,800</span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                カートに追加
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors">
            🛒 カートを見る (0)
          </button>
        </div>
      </main>
    </div>
  );
}