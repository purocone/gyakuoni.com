export default function Products() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">📦 Products</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            革新的な製品とサービスをご紹介
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">製品A</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              次世代のソリューションを提供する革新的な製品です。
            </p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              詳細を見る
            </button>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">製品B</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              高性能で使いやすい、プロフェッショナル向けツールです。
            </p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              詳細を見る
            </button>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">製品C</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ターゲットを絞った効率的なソリューションを提供します。
            </p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              詳細を見る
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}