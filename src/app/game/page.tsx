export default function Game() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🎮 Game</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            楽しいゲームで遊んでみましょう
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="text-6xl text-center mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3 text-center">ターゲットゲーム</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              的を狙って高スコアを目指そう！
            </p>
            <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors">
              プレイする
            </button>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="text-6xl text-center mb-4">🧩</div>
            <h3 className="text-xl font-semibold mb-3 text-center">パズルゲーム</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              頭を使って謎を解こう！
            </p>
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              プレイする
            </button>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="text-6xl text-center mb-4">🏃</div>
            <h3 className="text-xl font-semibold mb-3 text-center">ランニングゲーム</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              障害物を避けて走り続けよう！
            </p>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
              プレイする
            </button>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="text-6xl text-center mb-4">🎲</div>
            <h3 className="text-xl font-semibold mb-3 text-center">サイコロゲーム</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              運試しのサイコロゲーム！
            </p>
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              プレイする
            </button>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="text-6xl text-center mb-4">🃏</div>
            <h3 className="text-xl font-semibold mb-3 text-center">カードゲーム</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              戦略的なカードバトル！
            </p>
            <button className="w-full bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
              プレイする
            </button>
          </div>
          
          <div className="bg-white dark:bg-black/20 p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
            <div className="text-6xl text-center mb-4">🎪</div>
            <h3 className="text-xl font-semibold mb-3 text-center">ミニゲーム集</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              様々なミニゲームを楽しもう！
            </p>
            <button className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 transition-colors">
              プレイする
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🏆 ランキング</h3>
            <p className="text-gray-600 dark:text-gray-300">
              現在開発中です。近日中にランキング機能を追加予定！
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}